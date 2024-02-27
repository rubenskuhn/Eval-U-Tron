import { handleClientScriptLoad } from "next/script";
import StandardButton from "./StandardButton";
import React from "react";

export default function FinishButton(props) {
  const { label } = props;
  return (
    <StandardButton
      onClick={handleClick}
      label="Finish Test"
      colorScheme="WhatsApp"
    >
      {label}
    </StandardButton>
  );
}
