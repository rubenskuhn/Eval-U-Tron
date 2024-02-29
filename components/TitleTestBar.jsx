import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import React from "react";
import LoginButton from "./LoginButton";
import HomeButtonDuringTest from "./HomeButtonDuringTest";

export default function TitleTestBar() {
  return (
    <>
      <Flex
        p="4"
        // minWidth="max-content"
        alignItems="center"
        gap="5"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        padding="20px"
        borderRadius="xl"
        maxH="70px"
        spacing={3}
        w="100%"
        minH="40px"
        // margin="px"
        // display="flex"
        // justifyContent="center"
      >
        <Box>
          <Text
            color="white"
            fontSize="30px"
            fontWeight="lightbold"
            letterSpacing="wide"
          >
            Eval-U-Tron
          </Text>
        </Box>
        <Spacer />
        <Box>
          <LoginButton></LoginButton>
        </Box>
        <Box>
          <HomeButtonDuringTest></HomeButtonDuringTest>
        </Box>
      </Flex>
    </>
  );
}
