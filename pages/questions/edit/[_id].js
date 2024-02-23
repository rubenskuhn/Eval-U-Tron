import { useRouter } from "next/router";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { Link, Button, Card } from "@chakra-ui/react";
import React from "react";
import StandardButton from "../../../components/StandardButton";

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { _id } = router.query;

  const { data: formData, isLoading, error } = useSWR(`/api/questions/${_id}`);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log("=== SHOW ID: ", _id);
  console.log("=== SHOW DATA: ", formData);
  // if (!formData) return null;

  // const answers = [formData.answer];
  // console.log("======answer? ", answers);

  // answers.map((item) => console.log(item));
  // for (let i = 0; i < answers.length; i++) {
  //   console.log(answers[i]);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
    console.log(data);
  }

  async function editQuestion() {
    const response = await fetch(`/api/questions/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    router.push(`/questions/${_id}`);
    return;
  }

  // if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  // console.log(formData);

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
            // onChange={(e) =>
            //   setFormData({ ...formData, proposition: e.target.value })
            // }
          />
          <br />
          <label htmlFor="image">Insert the url of your image here:</label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={formData.image}
            // onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          />
          <br />
          <label htmlFor="firstAnswer">first answer:</label>
          <input
            type="text"
            id="firstAnswer"
            name="firstAnswer"
            defaultValuee={formData.answer}
            // onChange={(e) =>
            // setFormData({ ...formData, firstAnswer: e.target.value })
            // }
          />
          <br />
          <label htmlFor="secondAnswer">second answer:</label>
          <input
            type="text"
            id="secondAnswer"
            name="secondAnswer"
            defaultValuee={formData.secondAnswer}
            // onChange={(e) =>
            //   setFormData({ ...formData, secondAnswer: e.target.value })
            // }
          />
          <br />
          <label htmlFor="thirdAnswer">third answer:</label>
          <input
            type="text"
            id="thirdAnswer"
            name="thirdAnswer"
            defaultValue={formData.thirdAnswer}
            // onChange={(e) =>
            //   setFormData({ ...formData, thirdAnswer: e.target.value })
            // }
          />
          <br />
          <label htmlFor="correctAnswer">the correct answer:</label>
          <input
            type="text"
            id="correctAnswer"
            name="correctAnswer"
            defaultValue={formData.correctAnswer}
            // onChange={(e) =>
            //   setFormData({ ...formData, correctAnswer: e.target.value })
            // }
          />
          <br />
          <StandardButton type="submit" label="Submit"></StandardButton>
        </form>
      </Card>
    </>
  );
}
