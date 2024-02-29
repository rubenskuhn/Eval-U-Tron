import NavDrawer from "../components/NavDrawer";
import {
  Flex,
  Box,
  Image,
  Text,
  Center,
  VStack,
  Heading,
  Card,
  CardBody,
} from "@chakra-ui/react";
import StandardButton from "../components/StandardButton";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import TestSelector from "../components/TestSelector";
import PageLayout from "../components/PageLayout";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  const { data, error, isLoading } = useSWR("/api/questions");
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <PageLayout>
      <Flex align="center" minHeight="100vh" direction="column" padding="25px">
        <Box>
          <Image
            margin="10px"
            value="image"
            name="image"
            type="image"
            src="https://www.azquotes.com/picture-quotes/quote-trying-is-the-first-step-toward-failure-homer-65-30-88.jpg"
          />
        </Box>
        <VStack spacing="2" alignItems="center">
          <Heading as="h1" fontSize="3xl" margin="25px">
            <Text color="white">
              Welcome {session?.user?.name || "to Your Quiz Platform"}!
            </Text>
          </Heading>
          <Box margin="10px">
            <Text fontSize="lg" color="white">
              Confront your stupidity and lose your mind with our quizzes!
            </Text>
          </Box>
          {/* <Box display="flex" alignItems="center" gap={6}>
            <NavDrawer />
          </Box> */}
          {!session ? (
            <Link href="/api/auth/signin" passHref>
              <StandardButton label="Sign In" />
            </Link>
          ) : (
            <>
              <TestSelector tests={data.test} />
              <Link href="/questions/test" passHref>
                <StandardButton label="Start A Quiz" fontColor="white" />
              </Link>
              {/* {session.user.role === "admin" && ( */}
              <Link href="/questions" passHref>
                <StandardButton label="Admin" />
              </Link>
              {/* )} */}
            </>
          )}
        </VStack>
      </Flex>
    </PageLayout>
  );
}

// import NavDrawer from "../components/NavDrawer";
// import { Flex, Box, Image, Select, Text, Center } from "@chakra-ui/react";
// import StandardButton from "../components/StandardButton";
// import Link from "next/link";
// import React from "react";
// import useSWR from "swr";
// import TestSelector from "../components/TestSelector";
// import PageLayout from "../components/PageLayout";
// import { useSession } from "next-auth/react";

// export default function HomePage() {
//   const { data: session } = useSession();

//   const { data, error, isLoading } = useSWR("/api/questions");
//   if (error) return <div>Failed to load</div>;
//   if (isLoading) return <div>Loading...</div>;

//   const tests = [data.test];

//   if (session) {
//     return (
//       <>
//         <PageLayout>
//           <Flex
//             margin="5px"
//             alignContent="center"
//             justifyContent="center"
//             padding="5px"
//           >
//             <Box>
//               <Image
//                 value="image"
//                 name="image"
//                 type="image"
//                 src="https://www.azquotes.com/picture-quotes/quote-trying-is-the-first-step-toward-failure-homer-65-30-88.jpg"
//               />
//             </Box>
//             <br />
//             <Box display="flex" alignItems="center" gap={6}>
//               <NavDrawer />
//             </Box>
//             <br />
//             <Box>
//               <Link href={{ pathname: "questions/test" }} passHref>
//                 <StandardButton label="Start A Quiz" />
//               </Link>
//             </Box>
//             <Box>
//               <Text>Select a Test</Text>
//               <TestSelector />
//             </Box>
//             <br />
//             <Box>
//               <Link href={{ pathname: "/questions" }} passHref>
//                 <StandardButton label="To Admin" />
//               </Link>
//             </Box>
//           </Flex>
//         </PageLayout>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <PageLayout>
//           <Flex
//             margin="5px"
//             alignContent="center"
//             justifyContent="center"
//             padding="5px"
//           >
//             <Box>
//               <Image
//                 value="image"
//                 name="image"
//                 type="image"
//                 src="https://www.azquotes.com/picture-quotes/quote-trying-is-the-first-step-toward-failure-homer-65-30-88.jpg"
//               />
//             </Box>
//             <br />
//             <Box display="flex" alignItems="center" gap={6}>
//               <NavDrawer />
//               <Text as="i" fontWeight="semibold" color="white">
//                 {" "}
//                 Sing o Log In To Start Failing!
//               </Text>
//             </Box>
//             <br />
//           </Flex>
//         </PageLayout>
//       </>
//     );
//   }
// }
