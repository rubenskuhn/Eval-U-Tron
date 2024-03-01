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
  Heading,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import DeleteButton from "../../components/DeleteButton";
import PageLayout from "../../components/PageLayout";
// import FilterQuestion from "../../components/FilterQuestion";

export default function Questions() {
  const { data, error, isLoading } = useSWR("/api/editquestions");
  const router = useRouter();

  console.log("--------Front End Data?", data);

  if (error) return <div>Failed to load</div>;
  if (isLoading || !data) return <div>Loading...</div>;

  // const handleFilterChange = (testName) => {
  //   // Handle filter change here
  //   console.log("Selected test name:", testName);
  // };

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
      <PageLayout>
        {/* <Box>
        <FilterQuestion onChange={handleFilterChange} />
      </Box> */}
        <br />
        <Box>
          <Heading as="h2" size="lg" marginLeft="5px">
            Create and Manage Tests & Questions
          </Heading>
        </Box>
        <br />
        <Link href="/createquestion" passHref legacyBehavior>
          <Button
            margin="2px"
            bg="limegreen"
            border="1px solid gray"
            borderRadius="md"
          >
            Add Question
          </Button>
        </Link>
        <br />
        <br />
        <Grid
          templateColumns={`repeat(auto-fit, minmax(300px, 1fr))`}
          gap={4}
          bg="transparent"
        >
          {data.map(({ proposition, answers, image, correctAnswer, _id }) => (
            <Card key={_id} bg="pink">
              <Box
                key={_id}
                flex="1"
                gap="2"
                alignItems="left"
                direction={{ base: "column", sm: "column" }}
                variant="outline"
                margin="5px"
                bg="transparent"
              >
                <CardHeader>
                  <Image
                    // objectFit="auto-fit"
                    // maxW={{ base: "100%", sm: "250px" }}
                    src={image}
                    alt="Display Question Image"
                  />
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
                            bg="lightpink"
                            // mborder="3px"
                            border="1px solid gray"
                            borderRadius="md"
                          >
                            <Radio
                              marginLeft="20px"
                              value={answer}
                              name={`question_${_id}`}
                              color="black"
                            >
                              <Box margin="10px">{answer}</Box>
                            </Radio>
                          </Box>
                        ))}
                      </Box>
                    </Stack>
                  </RadioGroup>
                  <Text>Correct answer: {correctAnswer}</Text>
                  <br />
                  <Flex>
                    <Box boxShadow="lg" mborder="1px" borderColor="white">
                      <Link
                        href={{
                          pathname: "/questions/edit/[_id]",
                          query: { _id },
                        }}
                        passHref
                      >
                        <Button bg="limegreen" p="6">
                          Edit
                        </Button>
                      </Link>
                    </Box>
                    <Spacer />
                    <DeleteButton
                      onClick={() => {
                        deleteQuestion(_id);
                      }}
                      type="button"
                      variant="delete"
                      label="Delete"
                    />
                  </Flex>
                </CardBody>
              </Box>
            </Card>
          ))}
        </Grid>
      </PageLayout>
    </>
  );
}
