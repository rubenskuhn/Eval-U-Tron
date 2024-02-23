import { Flex, Box } from "@chakra-ui/react";
import StandardButton from "../components/StandardButton";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function StartPage() {
  return (
    <>
      <Flex>
        <Box>
          <Link href={{ pathname: "/test" }} passHref>
            <StandardButton label="Start Test" />
          </Link>
        </Box>
        <Box>
          <Link href={{ pathname: "/questions" }} passHref>
            <StandardButton label="To Admin" />
          </Link>
        </Box>
      </Flex>
    </>
  );
}
