import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import React from "react";
import NavDrawer from "./NavDrawer";
import StandardButton from "./StandardButton";
// import LoginButton from "./Login";

export default function TitleBar() {
  return (
    <>
      <Flex
        bg="linear-gradient(to top right, #a50053, #4c1a7a)"
        padding="5px"
        borderRadius="xl"
        maxHeighth="60px"
        spacing={3}
        alignItems="center"
        w="95%"
        margin="10px"
        align="center"
        h="mg"
        // display="flex"
        // justifyContent="center"
        // alignItems="center"
      >
        <Spacer />
        <Text
          color="white"
          fontSize="30px"
          fontWeight="lightbold"
          letterSpacing="wide"
        >
          Eval-U-Tron
        </Text>
        <Spacer />
        <Box bg="teal">
          <Text color="white" fontSize="20px" letterSpacing="wide">
            Place holder for login buttons
          </Text>
        </Box>
        <Spacer />
        {/* <LoginButton></LoginButton> */}
      </Flex>
    </>
  );
}
