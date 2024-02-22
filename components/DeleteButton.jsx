import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";
//import { DeleteIcon } from "@chakra-ui/icons";

//console.log("==== Delete Icon: ", DeleteIcon);
// For some reason bloody Icon not loading

export default function DeleteButton(props) {
  const { onClick, label } = props;

  return (
    <>
      <Box boxShadow="ig">
        <Button
          onClick={onClick}
          aria-label="Delete"
          colorScheme="red"
          p="6"
          rounded="md"
        >
          {label}
        </Button>
      </Box>
    </>
  );
}
