import { Button } from "@chakra-ui/react";
import React from "react";

export default function StandardButton(props) {
  const { label } = props;

  return (
    <Button
      w="100px"
      h="50px"
      border="1px"
      borderColor="white"
      colorScheme="blue"
      p="6"
      rounded="md"
      boxShadow="md"
    >
      {label}
    </Button>
  );
}
