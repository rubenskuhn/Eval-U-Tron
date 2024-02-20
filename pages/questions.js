import useSWR from "swr";
import { Radio, RadioGroup } from "@chakra-ui/react";
import React from "react";

export default function questions() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // line 4 should be eventually in the root to make it available globally

  const { data, error, isLoading } = useSWR("/api/questions", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  // console.log("======= data: ", data);
  // function chooseAnswer() {
  //   const [value, setValue] = React.useState("1");
  //   return (
  //     <RadioGroup onChange={setValue} value={value}>
  //       <Stack direction="row">
  //         <Radio value="1">First</Radio>
  //         <Radio value="2">Second</Radio>
  //         <Radio value="3">Third</Radio>
  //       </Stack>
  //     </RadioGroup>
  //   );
  // }

  return (
    <>
      <h1 />
      Math Test
      <h1 />
      <section>
        <ul>
          {data.map(({ proposition, answers, correctAnswer, id, image }) => {
            return (
              <li key={id}>
                <h2>{proposition}</h2>
                <p>{image}</p>
                {/* <RadioGroup onChange={setValue} value={value}> */}
                {/* <Stack direction="row"> */}
                {answers.map((answer) => (
                  <li>{answer}</li>
                ))}
                {/* </Stack> */}
                {/* </RadioGroup> */}
                <p>{correctAnswer}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
