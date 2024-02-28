import { useState } from "react";
import { Box, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function FilterQuestion({ onChange }) {
  const { data, error, isLoading } = useSWR("/api/testTypes");
  const [filterQuestion, setFilterQuestion] = useState("");
  const router = useRouter();

  if (error) return <div>Failed to load</div>;
  if (isLoading || !data) return <div>Loading...</div>;

  const handleSelectChange = (event) => {
    const testName = event.target.value;
    setFilterQuestion(testName);
    onChange(testName); // Call the onChange function with the selected test name
  };

  return (
    <Box>
      <Select
        value={filterQuestion}
        onChange={handleSelectChange}
        placeholder="Select Test"
      >
        {data.map((testName) => (
          <option value={testName} key={testName}>
            {testName}
          </option>
        ))}
        <option value="">All Questions</option>
      </Select>
    </Box>
  );
}
