import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import React from "react";
import NavDrawer from "./NavDrawer";
import StandardButton from "./StandardButton";
import HomeButton from "./HomeButton";
import LoginButton from "./Login";

export default function TitleBar() {
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        bg="linear-gradient(to top right, #a50053, #4c1a7a)"
        padding="5px"
        borderRadius="xl"
        maxHeighth="60px"
        spacing={3}
        w="95%"
        h="60px"
        margin="10px"
        // display="flex"
        // justifyContent="center"
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
        <LoginButton></LoginButton>
        <HomeButton></HomeButton>
      </Flex>
    </>
  );
}
