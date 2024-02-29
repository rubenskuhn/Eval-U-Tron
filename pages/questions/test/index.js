import {
  Box,
  Text,
  Radio,
  Card,
  CardBody,
  Stack,
  RadioGroup,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import useSWR from "swr";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import PageLayoutDuringTest from "../../../components/PageLayoutDuringTest";
import StandardButton from "../../../components/StandardButton";

export default function Test() {
  const router = useRouter();
  const {
    data: formData,
    isLoading: formDataLoading,
    error: formDataError,
  } = useSWR(`/api/questions?testtype=${router.query.testtype}`);

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
      router.push(`/results/`);
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
      <PageLayoutDuringTest>
        <Card key={currentItem._id} margin="25px" padding="20px" bg="pink">
          <CardBody style={{ overflow: "hidden" }}>
            <Image
              marginX="auto"
              marginY="10px"
              id={`image-${currentItem.image}`}
              name={`image-${currentItem.image}`}
              src={`${currentItem.image}`}
              defaultValue={currentItem.image}
              maxW="100%"
              maxH="100%"
            />
          </CardBody>
          <Heading marginLeft="25px" marginBottom="20px">
            <Text fontSize="xl">{currentItem.proposition}</Text>
          </Heading>
          <CardBody>
            <RadioGroup>
              <Box>
                {currentItem.answers.map((answer, index) => (
                  <Box
                    key={index}
                    marginBottom="10px"
                    bg={selectedAnswer === answer ? "lightgray" : "inherit"}
                    border="1px solid black"
                    borderRadius="md"
                  >
                    <Radio
                      borderColor="black"
                      padding="20px"
                      value={answer}
                      name={currentItem._id}
                      checked={selectedAnswer === answer}
                      onChange={handleAnswerSelection}
                      objectFit="cover"
                    >
                      <Box marginLeft="20px">{answer}</Box>
                    </Radio>
                  </Box>
                ))}
              </Box>
            </RadioGroup>
            <br />
            <Button
              w="150px"
              h="50px"
              border="1px"
              borderColor="white"
              colorScheme="blue"
              p="6"
              rounded="md"
              boxShadow="md"
              marginBottom="25px"
              onClick={handleSubmit}
              disabled={!selectedAnswer}
            >
              Submit and Next
            </Button>
          </CardBody>
        </Card>
      </PageLayoutDuringTest>
    </>
  );
}
