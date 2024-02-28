import useSWR from "swr";
import {
  Image,
  Text,
  Radio,
  RadioGroup,
  Card,
  CardBody,
  CardHeader,
  Grid,
  Stack,
  Box,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import DeleteButton from "../../components/DeleteButton";
// import PageLayout from "../../components/PageLayout";
import FilterQuestion from "../../components/FilterQuestion";

export default function Questions() {
  const { data, error, isLoading } = useSWR("/api/questions");
  const router = useRouter();

  if (error) return <div>Failed to load</div>;
  if (isLoading || !data) return <div>Loading...</div>; // Handle loading state or data being undefined

  const handleFilterChange = (testName) => {
    // Handle filter change here
    console.log("Selected test name:", testName);
  };

  //================ DELETE QUESTION ====================

  console.log("----------", router.query);

  async function deleteQuestion(_id) {
    if (confirm("Are you sure?")) {
      await fetch(`/api/questions/${_id}`, {
        method: "DELETE",
      });
      router.push("/questions");
      return;
    }
  }

  //================

  return (
    <>
      <Box>
        <FilterQuestion onChange={handleFilterChange} />
      </Box>
      <br />
      <Link href="/createquestion" passHref legacyBehavior>
        <Button
          margin="2px"
          bg="limegreen"
          mborder="1px"
          borderColor="black"
          borderRadius="md"
        >
          Add Question
        </Button>
      </Link>
      <br />
      <Grid templateColumns={`repeat(auto-fit, minmax(200px, 1fr))`} gap={2}>
        {data.map(({ proposition, answers, image, correctAnswer, _id }) => (
          <Card key={_id}>
            <Box
              key={_id}
              flex="1"
              gap="2"
              alignItems="left"
              direction={{ base: "column", sm: "column" }}
              variant="outline"
              margin="5px"
              bg="lightpink"
            >
              <CardHeader>
                <Image
                  // objectFit="auto-fit"
                  // maxW={{ base: "100%", sm: "250px" }}
                  src={image}
                  alt="Display Question Image"
                />
                <br />
                <Text margin="2px">
                  What is the correct answer for the following proposition?
                </Text>
                <br />
                <Text fontSize="20px" fontWeight="bold">
                  {proposition}
                </Text>
              </CardHeader>
              <CardBody flex="1" alignItems="left">
                <RadioGroup>
                  <Stack>
                    <Box>
                      {answers.map((answer, index) => (
                        <Box
                          marginBottom="10px"
                          key={index}
                          bg="orange"
                          mborder="3px"
                          borderColor="white"
                          borderRadius="md"
                        >
                          <Radio
                            marginLeft="20px"
                            value={answer}
                            name={`question_${_id}`}
                          >
                            <Box margin="10px">{answer}</Box>
                          </Radio>
                        </Box>
                      ))}
                    </Box>
                  </Stack>
                </RadioGroup>
                <Text>Correct answer: {correctAnswer}</Text>
                <Box>
                  <Link
                    href={{
                      pathname: "/questions/edit/[_id]",
                      query: { _id },
                    }}
                    passHref
                  >
                    <Button
                      margin="2px"
                      bg="limegreen"
                      mborder="1px"
                      borderColor="black"
                      borderRadius="md"
                    >
                      Edit
                    </Button>
                  </Link>
                  <DeleteButton
                    onClick={() => {
                      deleteQuestion(_id);
                    }}
                    type="button"
                    variant="delete"
                    label="Delete"
                  />
                </Box>
              </CardBody>
            </Box>
          </Card>
        ))}
      </Grid>
    </>
  );
}
