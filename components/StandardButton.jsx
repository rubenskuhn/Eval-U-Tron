import { Button } from "@chakra-ui/react";
import React from "react";

export default function StandardButton(props) {
  const { label } = props;

  return (
    <Button
      w="150px"
      h="60px"
      border="1px"
      borderColor="white"
      colorScheme="blue"
      p="6"
      rounded="md"
      boxShadow="dark-lg"
    >
      {label}
    </Button>
  );
}
