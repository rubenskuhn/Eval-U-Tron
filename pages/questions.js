import useSWR from "swr";
import {
  List,
  ListItem,
  Text,
  Radio,
  RadioGroup,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Stack,
  Flex,
  Box,
} from "@chakra-ui/react";
import React from "react";
import ButtonEditQuestion from "../components/ButtonEditQuestion";
// import Image from "../public/favicon.ico";

export default function Questions() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/questions", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <Box>
          <h1 size="md">Math Test</h1>
        </Box>
        <Box>
          {data.map(({ proposition, answers, correctAnswer, _id }) => (
            <Card
              key={_id}
              direction={{ base: "column", sm: "column" }}
              gap="5px"
              overflow="hidden"
              variant="outline"
              margin="5px"
              bg="lightgray"
            >
              <CardHeader>
                <Heading size="md"> {proposition}</Heading>
              </CardHeader>
              {/* <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="../public/favicon.ico"
          alt="Display Question Image"
        /> */}
              <CardBody>
                <Text margin="2px">
                  What is the correct answer for the proposition above?
                </Text>
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
                              margin="2px"
                              bg="lightgray"
                              mborder="1px"
                              borderColor="black"
                              borderRadius="md"
                            >
                              <Radio
                                margin="5px"
                                key={index}
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
                  </ListItem>
                </List>
              </CardBody>
            </Card>
          ))}
        </Box>
      </SimpleGrid>
    </>
  );
}
