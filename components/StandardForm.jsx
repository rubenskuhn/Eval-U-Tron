import { Form, FormContainer, Label, Input } from "@chakra-ui/react";
import StandardButton from "./StandardButton";

export default function StandardForm({ onSubmit, formName, defaultData }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
    console.log("==== Data from Form Component: ", data);
  }

  return (
    <FormContainer formName={formName} onSubmit={handleSubmit}>
      <Label htmlFor="test">Test Name</Label>
      <Input
        type="test"
        id="test"
        name="test"
        defaultValue={defaultData?.test}
      />
      <Label htmlFor="image-url">Image Url</Label>
      <Input
        id="image-url"
        name="image"
        type="text"
        defaultValue={defaultData?.image}
      />
      <Label htmlFor="proposition">Proposition</Label>
      <Input
        id="proposition"
        name="proposition"
        type="text"
        defaultValue={defaultData?.proposition}
      />
      <Label htmlFor="answers[0]">First Answer</Label>
      <Input
        id="answers[0]"
        name="answers[0]"
        type="text"
        defaultValue={defaultData?.answers[0]}
      />
      <Label htmlFor="answers[1]">Second Answer</Label>
      <Input
        id="answers[1]"
        name="answers[1]"
        type="text"
        defaultValue={defaultData?.answers[1]}
      />
      <Label htmlFor="answers[2]">Third Answer</Label>
      <Input
        id="answers[2]"
        name="answers[2]"
        type="text"
        defaultValue={defaultData?.answers[2]}
      />
      <br />
      <label htmlFor="correctAnswer">the correct answer:</label>
      <input
        type="text"
        id="correctAnswer"
        name="correctAnswer"
        defaultValue={defaultData?.correctAnswer}
      />
      <br />
      <StandardButton type="submit" label="Submit">
        {defaultData ? "Update question" : "Add question"}
      </StandardButton>
    </FormContainer>
  );
}
