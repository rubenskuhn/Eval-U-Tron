// import {
//   Radio,
//   RadioGroup,
//   Stack,
//   Card,
//   CardHeader,
//   Heading,
//   Text,
//   CardBody,
//   CardFooter,
// } from "@chakra-ui/react";
// import React from "react";

// export default function QuestionCard(proposition) {
//   const [value, setValue] = React.useState("");

//   return (
//     <>
//       <Card maxW="sm">
//         <CardBody>
//           {/* <Image></Image> */}
//           <Stack mt="6" spacing="3">
//             <Heading size="md">Proposition:{proposition}</Heading>
//             <Text>What is the right answer (only one possible)</Text>
//           </Stack>
//           <RadioGroup onChange={setValue} value={value}>
//             <Stack direction="row">
//               <Radio value="1">First</Radio>
//               <Radio value="2">Second</Radio>
//               <Radio value="3">Third</Radio>
//             </Stack>
//           </RadioGroup>
//         </CardBody>
//       </Card>
//     </>
//   );
// }
