import { Box } from "@chakra-ui/react";
import React from "react";
import TitleBar from "./TitleBar";
import { Main } from "next/document";

export default function PageLayout({ children }) {
  return (
    <>
      <TitleBar />

      <main bg="gray">{children}</main>
    </>
  );
}
