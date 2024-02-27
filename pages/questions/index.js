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

export default function Questions() {
  const { data, error, isLoading } = useSWR("/api/questions");
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  //================ DELETE QUESTION ====================

  const router = useRouter();

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
        <Text fontSize="30px" color="white">
          Math Test
        </Text>
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
              gap="4"
              alignItems="left"
              direction={{ base: "column", sm: "column" }}
              // overflow="hidden"
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
