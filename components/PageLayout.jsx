import { Box, Flex, Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import TitleBar from "./TitleBar";

export default function PageLayout({ children }) {
  return (
    <>
      <SimpleGrid columns={1} spacingX="20px" spacingY="20px">
        <Flex gap={4} flexDirection="column" minH="100vh" padding="20px">
          <Box as="header">
            <TitleBar></TitleBar>
          </Box>
          <Box
            borderRadius="xl"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            w="100%"
            minH="100vh"
          >
            <Container flex="1" maxW="container.lg" py="4">
              {children}
            </Container>
          </Box>
        </Flex>
      </SimpleGrid>
    </>
  );
}
