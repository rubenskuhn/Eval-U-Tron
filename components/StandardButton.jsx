import { Button } from "@chakra-ui/react";
import React from "react";

export default function StandardButton(props) {
  const { onClick, label } = props;
  return (
    <Button
      onClick={onClick}
      colorScheme="blue"
      boxShadow="md"
      p="6"
      rounded="md"
    >
      {label}
    </Button>
  );
}
