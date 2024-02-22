import Link from "next/link.js";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import React from "react";

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
      router.push("/");
    }
  }

  return (
    <>
      <h1>Eval-U-Tron</h1>
      <Link href="/questions" passHref legacyBehavior>
        <Button
          margin="2px"
          bg="limegreen"
          mborder="1px"
          borderColor="black"
          borderRadius="md"
        >
          Back to Questions
        </Button>
      </Link>
      <h2 id="add-question">Add Question</h2>
      <form onSubmit={addQuestion}>
        <label htmlFor="test">Name of your Test:</label>
        <input type="text" id="test" name="test" />
        <br />
        <label htmlFor="proposition">Write your question:</label>
        <input type="text" id="proposition" name="proposition" />
        <br />
        <label htmlFor="image">Insert the url of your image here:</label>
        <input type="text" id="image" name="image" />
        <br />
        <label htmlFor="firstAnswer">first answer:</label>
        <input type="text" id="firstAnswer" name="firstAnswer" />
        <br />
        <label htmlFor="secondAnswer">second answer:</label>
        <input type="text" id="secondAnswer" name="secondAnswer" />
        <br />
        <label htmlFor="thirdAnswer">third answer:</label>
        <input type="text" id="thirdAnswer" name="thirdAnswer" />
        <br />
        <label htmlFor="correctAnswer">the correct answer:</label>
        <input type="text" id="correctAnswer" name="correctAnswer" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
