import { Html, Head, Main, NextScript } from "next/document";
import { SimpleGrid, Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import TitleBar from "../components/TitleBar";

export default function Document() {
  return (
    <Html>
      <ChakraProvider>
        <SimpleGrid columns={1} spacingX="10px" spacingY="10px">
          <Head>
            <TitleBar />
          </Head>
          <body>
            <Box
              padding="5px"
              margin="10px"
              borderRadius="xl"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              w="95%"
              h="mg"
            >
              <Main></Main>
            </Box>
          </body>

          <NextScript />
        </SimpleGrid>
      </ChakraProvider>
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
