import { useRouter } from "next/router";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { Link, Button, Card } from "@chakra-ui/react";
import React from "react";

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { _id } = router.query;
  const { formData, isLoading, error } = useSWR(`/api/questions/${_id}`);

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

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

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

      {formData.map(({ proposition, answers, correctAnswer, _id }) => (
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
              value={formData.proposition}
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
              value={formData.image}
              // onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
            <br />
            <label htmlFor="firstAnswer">first answer:</label>
            <input
              type="text"
              id="firstAnswer"
              name="firstAnswer"
              value={formData.firstAnswer}
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
              value={formData.secondAnswer}
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
              value={formData.thirdAnswer}
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
              value={formData.correctAnswer}
              // onChange={(e) =>
              //   setFormData({ ...formData, correctAnswer: e.target.value })
              // }
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </Card>
      ))}
    </>
  );
}

//================== Previous version ===========

// async function editQuestion(e) {
//   e.preventDefault();
//   // Your editQuestion function logic here
// }

// if (!isReady) return <div>Loading...</div>;
// if (error) return <div>Error: {error.message}</div>;

//   return (
//     <>
//       <h1>Eval-U-Tron</h1>
//       <Link href="/questions" passHref>
//         <Button
//           margin="2px"
//           bg="limegreen"
//           mborder="1px"
//           borderColor="black"
//           borderRadius="md"
//         >
//           Back to Questions
//         </Button>
//       </Link>
//       <h2 id="editQuestion">Edit Question</h2>
//       <form onSubmit={editQuestion}>{/* Your form fields here */}</form>
//     </>
//   );
// }

// import { useRouter } from "next/router";
// import useSWR from "swr";
// import { useState, useEffect } from "react";
// import { Link, Button } from "@chakra-ui/react";

// export default function EditPage() {
//   const router = useRouter();
//   const { isReady } = router;
//   const { _id } = router.query;
//   const { data, isLoading, error } = useSWR(
//     _id ? `/api/questions/${_id}` : null
//   );

//   const [formData, setFormData] = useState({
//     test: "",
//     proposition: "",
//     image: "",
//     firstAnswer: "",
//     secondAnswer: "",
//     thirdAnswer: "",
//     correctAnswer: "",
//   });

//   // Update formData when data changes
//   useEffect(() => {
//     if (data) {
//       setFormData({
//         test: data.test || "",
//         proposition: data.proposition || "",
//         image: data.image || "",
//         firstAnswer: data.answers[0] || "",
//         secondAnswer: data.answers[1] || "",
//         thirdAnswer: data.answers[2] || "",
//         correctAnswer: data.correctAnswer || "",
//       });
//     }
//   }, [data]);

//   async function editQuestion(e) {
//     e.preventDefault();

//     const fixedDataToEdit = {
//       proposition: formData.proposition,
//       image: formData.image,
//       test: formData.test,
//       answers: [
//         formData.firstAnswer,
//         formData.secondAnswer,
//         formData.thirdAnswer,
//       ],
//       correctAnswer: formData.correctAnswer,
//     };

//     const response = await fetch(`/api/question/edit/${_id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(fixedDataToEdit),
//     });

//     if (response.ok) {
//       router.push(`/question/edit/${_id}`);
//     }
//   }

//   if (!isReady || isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
