// import {
//   List,
//   ListItem,
//   Text,
//   Radio,
//   RadioGroup,
//   Card,
//   CardBody,
//   CardHeader,
//   Heading,
//   Stack,
//   Box,
//   Button,
// } from "@chakra-ui/react";
// import React from "react";

// export default function QuestionsCard({ formData }) {
//   <Card key={currentItem._id} margin="25px" padding="20px" bg="pink">
//           <CardBody style={{ overflow: "hidden" }}>
//             <Image
//               marginX="auto"
//               marginY="10px"
//               id={`image-${currentItem.image}`}
//               name={`image-${currentItem.image}`}
//               src={`${currentItem.image}`}
//               defaultValue={currentItem.image}
//               maxW="100%"
//               maxH="100%"
//             />
//           </CardBody>
//           <Heading marginLeft="25px" marginBottom="20px">
//             <Text fontSize="xl">{currentItem.proposition}</Text>
//           </Heading>
//           <CardBody>
//             <RadioGroup>
//               <Box>
//                 {currentItem.answers.map((answer, index) => (
//                   <Box
//                     key={index}
//                     marginBottom="10px"
//                     bg={selectedAnswer === answer ? "lightgray" : "inherit"}
//                     border="1px solid black"
//                     borderRadius="md"
//                   >
//                     <Radio
//                       borderColor="black"
//                       padding="20px"
//                       value={answer}
//                       name={currentItem._id}
//                       checked={selectedAnswer === answer}
//                       onChange={handleAnswerSelection}
//                       objectFit="cover"
//                     >
//                       <Box marginLeft="20px">{answer}</Box>
//                     </Radio>
//                   </Box>
//                 ))}
//               </Box>
//             </RadioGroup>
//             <br />
