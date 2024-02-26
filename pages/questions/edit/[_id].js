import { useRouter } from "next/router";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { Link, Button, Card, Box } from "@chakra-ui/react";
import React from "react";
import StandardButton from "../../../components/StandardButton";
import StandardForm from "../../../components/StandardForm";

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { _id } = router.query;

  const { data: formData, isLoading, error } = useSWR(`/api/questions/${_id}`);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  // console.log("=== SHOW ID: ", _id);
  // console.log("=== SHOW DATA: ", formData);

  async function editQuestion(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    for (var key in data) {
      // Check if the key ends with 'answer'
      if (key.endsWith("answer")) {
        // Access the value corresponding to the key
        console.log("=== Show Answers: ", key + ": " + data[key]);
      }
    }
    const answers = [data.firstAnswer, data.secondAnswer, data.thirdAnswer];
    const setNewData = {
      image: data.image,
      proposition: data.proposition,
      answers: answers,
      correctAnswer: data.correctAnswer,
    };

    console.log("=== What is Target?", e.target);
    console.log("NEW DATA?:", setNewData);
    console.log(data);
    const response = await fetch(`/api/questions/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(setNewData),
    });
    router.push(`/questions/`);
    return;
  }

  return (
    <>
      <h1>Eval-U-Tron</h1>
      <Link href="/questions" passHref>
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

      <h2 id="editQuestion">Edit Question</h2>

      <Card key={_id}>
        <form
          onSubmit={editQuestion}
          formName={"edit-question"}
          defaultData={formData}
        >
          <br />
          <label htmlFor="proposition">Write your question:</label>
          <input
            type="text"
            id="proposition"
            name="proposition"
            defaultValue={formData.proposition}
          />
          <br />
          <label htmlFor="image">Insert the url of your image here:</label>
          <input
            type="image"
            id="image"
            name="image"
            defaultValue={formData.image}
          />
          <br />
          <label htmlFor="firstAnswer">first answer:</label>
          <input
            type="text"
            id="answers[0]"
            name="firstAnswer"
            defaultValue={formData.answers[0]}
          />
          <br />
          <label htmlFor="secondAnswer">second answer:</label>
          <input
            type="text"
            id="secondAnswer"
            name="secondAnswer"
            defaultValue={formData.answers[1]}
          />
          <br />
          <label htmlFor="thirdAnswer">third answer:</label>
          <input
            type="text"
            id="thirdAnswer"
            name="thirdAnswer"
            defaultValue={formData.answers[2]}
          />
          <br />
          <label htmlFor="correctAnswer">the correct answer:</label>
          <input
            type="text"
            id="correctAnswer"
            name="correctAnswer"
            defaultValue={formData.correctAnswer}
          />
          <br />
          <button>Submit</button>
          {/* <StandardButton type="submit" label="Submit" /> */}
        </form>
        {/* <StandardForm
          onSubmit={editQuestion}
          formName={"edit-question"}
          defaultData={formData}
        ></StandardForm> */}
      </Card>
    </>
  );
}
