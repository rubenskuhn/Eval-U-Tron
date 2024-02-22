import { IconButton } from "@chakra-ui/react";
import React from "react";
import { DeleteIcon } from "@chakra-ui/icons";

console.log("==== Delete Icon: ", DeleteIcon);

export default function DeleteButton(props) {
  const { onClick, label } = props;
  return;
  <IconButton
    onClick={onClick}
    aria-label="Delete"
    colorScheme="red"
    boxShadow="md"
    p="6"
    rounded="md"
    icon={<DeleteIcon />}
  />;
  {
    {
      label;
    }
  }
}
