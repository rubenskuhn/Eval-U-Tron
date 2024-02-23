import { Html, Head, Main, NextScript } from "next/document";
import { SimpleGrid, Box } from "@chakra-ui/react";
import TitleBar from "../components/TitleBar";

export default function Document() {
  return (
    <Html>
      <SimpleGrid columns={1} spacingX="20px" spacingY="20px">
        <Box>
          <Head>
            <TitleBar />
          </Head>
        </Box>
        <Box
          padding="5px"
          margin="10px"
          marginTop="10px"
          borderRadius="lx"
          bg="lightgray"
          w="95%"
          h="mg"
          align="center"
        >
          <body>
            <Main></Main>
          </body>
        </Box>
        <NextScript />
      </SimpleGrid>
    </Html>
  );
}

// return (
//   <Html>
//     <Grid gap="1">
//       <GridItem>
//         <TitleBar />
//       </GridItem>
//       <GridItem
//         padding="5px"
//         margin="10px"
//         marginTop="10px"
//         borderRadius="md"
//         bg="lightgray"
//         w="95%"
//         h="mg"
//         align="center"
//       >
//         <body>
//           <Main></Main>
//         </body>
//       </GridItem>
//       <NextScript />
//     </Grid>
//   </Html>
// );
// }
