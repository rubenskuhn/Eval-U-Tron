import {
  Box,
  Text,
  Radio,
  Card,
  CardBody,
  Stack,
  RadioGroup,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";
import useSWR from "swr";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useRouter } from "next/router";

export default function Test() {
  const router = useRouter();
  const {
    data: formData,
    isLoading: formDataLoading,
    error: formDataError,
  } = useSWR(`/api/questions?testtype=${router.query.testtype}`);

  // //============= Filter Question by Test =======
  // const test = "Math Test";

  // Question.find({ test: test })
  //   .then((questions) => {
  //     console.log("Selected Questions:", questions); // Output the questions with the specified test name
  //   })
  //   .catch((error) => {
  //     console.error("Error retrieving questions:", error);
  //   });

  const { data: session } = useSession();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [markedCorrect, setMarkedCorrect] = useState(false);
  const handleAnswerSelection = (e) => {
    setSelectedAnswer(e.target.value);
  };

  console.log("User Session Data", session);
  console.log("----------", router.query);

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentQuestion = formData[currentIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      setMarkedCorrect(true);
    } else {
      setMarkedCorrect(false);
    }
    // Check if currentIndex is already at the last index and go to results
    if (currentIndex === formData.length - 1) {
      Router.push(`/results/`);
      return;
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    updateScoreInDatabase();
  }, [score]);

  async function updateScoreInDatabase() {
    if (session) {
      const response = await fetch(`/api/tests/${session.user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ score }),
      });
      console.log("Score in Database: ", score);
      return;
    }
  }

  if (formDataError) return <div>Failed to load</div>;
  if (formDataLoading) return <div>Loading...</div>;

  const currentItem = formData[currentIndex];

  return (
    <>
      <Card key={currentItem._id}>
        <CardBody flex="1" gap="4" alignItems="left">
          <List
            direction={{ base: "column", sm: "column" }}
            gap="5px"
            overflow="hidden"
            variant="outline"
          >
            <br />
            <Box>
              <label htmlFor="image"></label>
              <input
                type="image"
                id={`image-${currentItem.image}`}
                name={`image-${currentItem.image}`}
                src={`${currentItem.image}`}
                defaultValue={currentItem.image}
              />
            </Box>
            <br />
            <Box>
              <Text fontSize="xl">
                What is the right answer to the following:{" "}
                {currentItem.proposition}
              </Text>
            </Box>
            <br />
            <ListItem gap="2px" borderRadius="md">
              <RadioGroup>
                <Stack opacity="90%" margin="2px" borderRadius="md">
                  <Box>
                    {currentItem.answers.map((answer, index) => (
                      <Box
                        key={index}
                        margin="2px"
                        bg={
                          markedCorrect && selectedAnswer === answer
                            ? "lightgreen"
                            : "lightgray"
                        }
                        border="1px solid black"
                        borderRadius="md"
                      >
                        <Radio
                          margin="5px"
                          value={answer}
                          name={currentItem._id}
                          checked={selectedAnswer === answer}
                          onChange={handleAnswerSelection}
                        >
                          <Box margin="10px">{answer}</Box>
                        </Radio>
                      </Box>
                    ))}
                  </Box>
                </Stack>
              </RadioGroup>
            </ListItem>
          </List>
          <br />
          <Button onClick={handleSubmit} disabled={!selectedAnswer}>
            Submit and Next
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
