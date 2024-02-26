import useSWR from "swr";
import {
  Image,
  List,
  ListItem,
  Text,
  Radio,
  RadioGroup,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Grid,
  Stack,
  Flex,
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
        <h1 size="md" marginTop="20px">
          Math Test
        </h1>
      </Box>
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
      <Grid>
        <Flex spacing={4} flex="1" gap="4" alignItems="left" flexWrap="wrap">
          {data.map(({ proposition, answers, image, correctAnswer, _id }) => (
            <Card
              key={_id}
              flex="1"
              gap="4"
              alignItems="left"
              direction={{ base: "column", sm: "column" }}
              overflow="hidden"
              variant="outline"
              margin="5px"
              bg="lightgray"
            >
              <CardHeader>
                {/* <Heading size="md"> {proposition}</Heading> */}
              </CardHeader>

              <CardBody flex="1" gap="4" alignItems="left">
                <Box flex="1" gap="4" alignItems="left">
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "350px" }}
                    src={image}
                    alt="Display Question Image"
                  />
                </Box>
                <Text margin="2px">
                  What is the correct answer for the following proposition?
                </Text>
                <Box>
                  <h2 size="lx">{proposition}</h2>
                </Box>
                <List
                  direction={{ base: "column", sm: "column" }}
                  gap="5px"
                  overflow="hidden"
                  variant="outline"
                >
                  <ListItem gap="2px" borderRadius="md">
                    <RadioGroup>
                      <Stack bg="gray" margin="2px" borderRadius="md">
                        <Box>
                          {answers.map((answer, index) => (
                            <Box
                              key={index}
                              margin="2px"
                              bg="lightgray"
                              mborder="1px"
                              borderColor="black"
                              borderRadius="md"
                            >
                              <Radio
                                margin="5px"
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
                  </ListItem>
                </List>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Grid>
    </>
  );
}
