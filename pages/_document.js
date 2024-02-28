import Document, { Html, Head, Main, NextScript } from "next/document";
import { SimpleGrid, Box, ChakraProvider } from "@chakra-ui/react";
import TitleBar from "../components/TitleBar";
import { SessionProvider } from "next-auth/react";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>{/* Any additional head elements can be added here */}</Head>
        <body>
          <SessionProvider session={this.props.session}>
            {/* Body content */}
            <ChakraProvider>
              <SimpleGrid columns={1} spacingX="10px" spacingY="10px">
                {/* <TitleBar /> */}
                <Box
                  padding="5px"
                  margin="10px"
                  borderRadius="xl"
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  w="95%"
                  h="mg"
                >
                  <Main />
                </Box>
              </SimpleGrid>
            </ChakraProvider>
          </SessionProvider>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
