import {
  Box,
  Text,
  Radio,
  Card,
  CardBody,
  Stack,
  RadioGroup,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";
import useSWR from "swr";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

export default function Test() {
  const {
    data: formData,
    isLoading: formDataLoading,
    error: formDataError,
  } = useSWR(`/api/questions`);
  const { data: session } = useSession();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [markedCorrect, setMarkedCorrect] = useState(false);

  const handleAnswerSelection = (e) => {
    setSelectedAnswer(e.target.value);
  };

  // const { _id, ...rest } = userData;
  // console.log("Who am I?", userData);
  console.log("Where am I going?", session);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentQuestion = formData[currentIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setMarkedCorrect(true);
      updateScoreInDatabase();
    } else {
      setMarkedCorrect(false);
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % formData.length);
    setSelectedAnswer("");
    setMarkedCorrect(false);
    console.log("score:", score);
  };

  const updateScoreInDatabase = async () => {
    if (session) {
      const response = await fetch(`/api/tests/${session.user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ score }),
      });
      console.log("New Score in Database: ", response);
      console.log("Score in Database: ", score);
      return;
    }
  };

  if (formDataError) return <div>Failed to load</div>;
  if (formDataLoading) return <div>Loading...</div>;

  const currentItem = formData[currentIndex];

  return (
    <>
      <Card key={currentItem._id}>
        <CardBody flex="1" gap="4" alignItems="left">
          <List
            direction={{ base: "column", sm: "column" }}
            gap="5px"
            overflow="hidden"
            variant="outline"
          >
            <br />
            <Box>
              <label htmlFor="image"></label>
              <input
                type="image"
                id={`image-${currentItem.image}`}
                name={`image-${currentItem.image}`}
                src={`${currentItem.image}`}
                defaultValue={currentItem.image}
              />
            </Box>
            <br />
            <Box>
              <Text fontSize="xl">
                What is the right answer to the following:{" "}
                {currentItem.proposition}
              </Text>
            </Box>
            <br />
            <ListItem gap="2px" borderRadius="md">
              <RadioGroup>
                <Stack opacity="90%" margin="2px" borderRadius="md">
                  <Box>
                    {currentItem.answers.map((answer, index) => (
                      <Box
                        key={index}
                        margin="2px"
                        bg={
                          markedCorrect && selectedAnswer === answer
                            ? "lightgreen"
                            : "lightgray"
                        }
                        border="1px solid black"
                        borderRadius="md"
                      >
                        <Radio
                          margin="5px"
                          value={answer}
                          name={currentItem._id}
                          checked={selectedAnswer === answer}
                          onChange={handleAnswerSelection}
                        >
                          <Box margin="10px">{answer}</Box>
                        </Radio>
                      </Box>
                    ))}
                  </Box>
                </Stack>
              </RadioGroup>
            </ListItem>
          </List>
          <br />
          <Button onClick={handleSubmit} disabled={!selectedAnswer}>
            Submit and Next
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

// import {
//   Box,
//   Text,
//   Radio,
//   Card,
//   CardBody,
//   Stack,
//   RadioGroup,
//   List,
//   Link,
//   ListItem,
//   Button,
// } from "@chakra-ui/react";
// import useSWR from "swr";
// import React, { useState } from "react";

// export default function Test() {
//   const { data: formData, isLoading, error } = useSWR(`/api/questions`);
//   const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of current index
//   const [selectedAnswer, setSelectedAnswer] = useState("");
//   const [score, setScore] = useState(0);
//   const [markedCorrect, setMarkedCorrect] = useState(false); // State to track whether answer is marked correct

//   const handleAnswerSelection = (e) => {
//     setSelectedAnswer(e.target.value);
//   };
//   async function markScore(e) {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData);

//     const setNewScore = {
//       test: data.test,
//       testTaker: testTaker,
//       question: data._id,
//       markedCorrect: markedCorrect,
//       score: score,
//     };
//     const response = await fetch(`/api/tests/${_id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(setNewScore),
//     });
//     console.log("New Score in Database: ", setNewScore);
//   }

//   // ==== Adding Resulst to Test Collection ====

//   const handleSubmit = () => {
//     const currentQuestion = formData[currentIndex];
//     if (selectedAnswer === currentQuestion.correctAnswer) {
//       setScore(score + 1);
//       setMarkedCorrect(true); // Set markedCorrect to true if the answer is correct
//     } else {
//       setMarkedCorrect(false); // Set markedCorrect to false if the answer is incorrect
//     }
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % formData.length); // Move to the next item
//     setSelectedAnswer(""); // Reset selected answer
//     setMarkedCorrect(false); // Reset markedCorrect
//   };

//   console.log("new Score is: ", score);

//   if (error) return <div>Failed to load</div>;
//   if (!formData) return <div>Loading...</div>;

//   const currentItem = formData[currentIndex];

//   return (
//     <>
//       <Card key={currentItem._id}>
//         <CardBody flex="1" gap="4" alignItems="left">
//           <List
//             direction={{ base: "column", sm: "column" }}
//             gap="5px"
//             overflow="hidden"
//             variant="outline"
//           >
//             <br />
//             <Box>
//               <label htmlFor="image"></label>
//               <input
//                 type="image"
//                 id={`image-${currentItem.image}`}
//                 name={`image-${currentItem.image}`}
//                 src={`${currentItem.image}`}
//                 defaultValue={currentItem.image}
//               />
//             </Box>
//             <br />
//             <Box>
//               <Text fontSize="xl">
//                 What is the right answer to the following:{" "}
//                 {currentItem.proposition}
//               </Text>
//             </Box>
//             <br />
//             <ListItem gap="2px" borderRadius="md">
//               <RadioGroup>
//                 <Stack opacity="90%" margin="2px" borderRadius="md">
//                   <Box>
//                     {currentItem.answers.map((answer, index) => (
//                       <Box
//                         key={index}
//                         margin="2px"
//                         bg={
//                           markedCorrect && selectedAnswer === answer
//                             ? "lightgreen"
//                             : "lightgray"
//                         } // Change background color if answer is marked correct
//                         border="1px solid black"
//                         borderRadius="md"
//                       >
//                         <Radio
//                           margin="5px"
//                           value={answer}
//                           name={currentItem._id}
//                           checked={selectedAnswer === answer}
//                           onChange={handleAnswerSelection}
//                         >
//                           <Box margin="10px">{answer}</Box>
//                         </Radio>
//                       </Box>
//                     ))}
//                   </Box>
//                 </Stack>
//               </RadioGroup>
//             </ListItem>
//           </List>
//           <br />
//           <Button onClick={handleSubmit} disabled={!selectedAnswer}>
//             Submit and Next
//           </Button>
//         </CardBody>
//       </Card>
//     </>
//   );
// }
