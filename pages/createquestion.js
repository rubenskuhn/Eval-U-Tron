import Link from "next/link.js";
import { useRouter } from "next/router";
import {
  Button,
  FormControl,
  Heading,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import React from "react";
import PageLayout from "../components/PageLayout";

export default function createQuestion() {
  const router = useRouter();

  async function addQuestion(e) {
    e.preventDefault();
    // Before sending the data of a Form, we first need to access the data of the form. Hence the next two lines are essential
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const fixedDataToSend = {
      proposition: data.proposition,
      image: data.image,
      test: data.test,
      answers: [data.firstAnswer, data.secondAnswer, data.thirdAnswer],
      correctAnswer: data.correctAnswer,
    };

    const response = await fetch("/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fixedDataToSend),
    });
    if (response.ok) {
      console.log("==== Question ceated successfuly!");
      router.push("/questions");
    }
  }

  return (
    <>
      <PageLayout>
        <br />
        <Link href="/questions" passHref legacyBehavior>
          <Button
            marginLeft="5px"
            bg="limegreen"
            border="1px solid gray"
            borderRadius="md"
          >
            Back to Questions
          </Button>
        </Link>
        <br />
        <br />
        <Heading as="h2" size="lg" marginLeft="5px">
          Add Question
        </Heading>
        <br />
        <Box marginLeft="5px">
          <form onSubmit={addQuestion}>
            <FormControl id="test" marginBottom="4">
              <FormLabel>Name of your Test</FormLabel>
              <Input type="text" name="test" />
            </FormControl>
            <FormControl id="proposition" marginBottom="4">
              <FormLabel>Write your question</FormLabel>
              <Input type="text" name="proposition" />
            </FormControl>
            <FormControl id="image" marginBottom="4">
              <FormLabel>Insert the url of your image here</FormLabel>
              <Input type="text" name="image" />
            </FormControl>
            <FormControl id="firstAnswer" marginBottom="4">
              <FormLabel>First answer</FormLabel>
              <Input type="text" name="firstAnswer" />
            </FormControl>
            <FormControl id="secondAnswer" marginBottom="4">
              <FormLabel>Second answer</FormLabel>
              <Input type="text" name="secondAnswer" />
            </FormControl>
            <FormControl id="thirdAnswer" marginBottom="4">
              <FormLabel>Third answer</FormLabel>
              <Input type="text" name="thirdAnswer" />
            </FormControl>
            <FormControl id="correctAnswer" marginBottom="4">
              <FormLabel>The correct answer</FormLabel>
              <Input type="text" name="correctAnswer" />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </form>
        </Box>
      </PageLayout>
    </>
  );
}
