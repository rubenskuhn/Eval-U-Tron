import { Flex, Box, Image, Select } from "@chakra-ui/react";
import StandardButton from "../components/StandardButton";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function StartPage() {
  const { data, error, isLoading } = useSWR("/api/questions");
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const tests = [data.test];

  return (
    <>
      <Flex
        margin="5px"
        alignContent="center"
        justifyContent="center"
        padding="5px"
      >
        <Box
          margin="5px"
          alignContent="center"
          justifyContent="center"
          padding="10px"
        >
          <Box>
            <Image
              value="image"
              name="image"
              type="image"
              src="https://www.azquotes.com/picture-quotes/quote-trying-is-the-first-step-toward-failure-homer-65-30-88.jpg"
            />
          </Box>
          <br />
          <Box>
            <Link href={{ pathname: "questions/test" }} passHref>
              <StandardButton label="Start Test" />
            </Link>
          </Box>
          <br />
          <Box>
            {data.map(({ test, _id }) => (
              <Select selecttest="select test">
                <option value="test">{test}</option>
              </Select>
            ))}
          </Box>

          <Box>
            <Link href={{ pathname: "/questions" }} passHref>
              <StandardButton label="To Admin" />
            </Link>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
