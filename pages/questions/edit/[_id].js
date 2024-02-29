import { useRouter } from "next/router";
import useSWR from "swr";
import { Link, Button, Card, Box } from "@chakra-ui/react";
import React from "react";
import PageLayout from "../../../components/PageLayout";

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
    //============ Setting the Data ============

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
      <PageLayout>
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

        <Card
          key={_id}
          flex="1"
          gap="4"
          alignItems="left"
          direction={{ base: "column", sm: "column" }}
          margin="5px"
        >
          <form
            onSubmit={editQuestion}
            formName={"edit-question"}
            defaultData={formData}
          >
            <br />
            <Box borderColor="black" borderRadius="md">
              <label htmlFor="proposition">Write your question: </label>
              <input
                borderColor="black"
                borderRadius="md"
                type="text"
                id="proposition"
                name="proposition"
                defaultValue={formData.proposition}
              />
            </Box>
            <br />
            <label htmlFor="image">Edit the url of your image here: </label>
            <input
              type="text"
              id="image"
              name="image"
              defaultValue={formData.image}
            />
            <br />
            <label htmlFor="firstAnswer">The first answer: </label>
            <input
              type="text"
              id="answers[0]"
              name="firstAnswer"
              defaultValue={formData.answers[0]}
            />
            <br />
            <label htmlFor="secondAnswer">The second answer: </label>
            <input
              type="text"
              id="secondAnswer"
              name="secondAnswer"
              defaultValue={formData.answers[1]}
            />
            <br />
            <label htmlFor="thirdAnswer">The third answer: </label>
            <input
              type="text"
              id="thirdAnswer"
              name="thirdAnswer"
              defaultValue={formData.answers[2]}
            />
            <br />
            <label htmlFor="correctAnswer">The correct answer is: </label>
            <input
              type="text"
              id="correctAnswer"
              name="correctAnswer"
              defaultValue={formData.correctAnswer}
            />
            <br />
            <Button ColorScheme="blue" boxShadow="md" p="6" rounded="md">
              <button bg="">Submit </button>
            </Button>
            {/* <StandardButton type="submit" label="Submit" /> */}
          </form>
        </Card>
      </PageLayout>
    </>
  );
}
