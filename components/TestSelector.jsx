import { Select, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function SelectTest({ SelectedTest }) {
  const { data, error, isLoading } = useSWR("/api/testTypes");
  const [selectedTest, setSelectedTest] = useState(""); // Define selectedTest state

  const router = useRouter();

  if (error) return <div>Failed to load</div>;
  if (isLoading || !data) return <div>Loading...</div>; // Handle data being undefined

  const handleSelectChange = (event) => {
    const testName = event.target.value;
    setSelectedTest(testName);
    router.push(`/questions/test?testtype=${testName}`);
  };

  return (
    <>
      <Box>
        <Select
          value={SelectedTest}
          onChange={handleSelectChange}
          placeholder="Select Test"
        >
          {data.map((testName) => (
            <option value={testName} key={testName}>
              {testName}
            </option>
          ))}
        </Select>
      </Box>
    </>
  );
}
