import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function TitleBar() {
  return (
    <Box
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
      <Text fontSize="30px" fontWeight="bold" letterSpacing="wide">
        Eval-U-Tron
      </Text>
    </Box>
  );
}
