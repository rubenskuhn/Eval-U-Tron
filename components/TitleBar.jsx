import { Badge, Box } from "@chakra-ui/react";
import React from "react";

export default function TitleBar() {
  return (
    <Box
      padding="5px"
      borderRadius="md"
      bg="aquamarine"
      w="100%"
      h="mg"
      zIndex={5}
      align="center"
      fontWeight="semibold"
      letterSpacing="wide"
      fontSize="xxs"
      alignItems="center"
    >
      Eval-U-Tron
    </Box>
  );
}
