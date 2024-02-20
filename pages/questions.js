import useSWR from "swr";
import { List, ListItem, Text, Radio, RadioGroup } from "@chakra-ui/react";
import React from "react";

export default function Questions() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/questions", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h1>Math Test</h1>
      <List>
        {data.map(({ proposition, answers, _id }) => (
          <ListItem key={_id}>
            <Text>{proposition}</Text>
            <RadioGroup>
              {answers.map((answer, index) => (
                <Radio key={index} value={answer} name={`question_${_id}`}>
                  {answer}
                </Radio>
              ))}
            </RadioGroup>
          </ListItem>
        ))}
      </List>
    </>
  );
}
