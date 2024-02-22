import { Form, FormContainer } from "@chakra-ui/react";
import StandardButton from "./StandardButton";

export default function Form({ onSubmit, formName, defaultData }) {
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
        //value={formData.proposition}
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
      <Label htmlFor="firstAnswer">First Answer</Label>
      <Input
        id="firstAnswer"
        name="firstAnswer"
        type="text"
        defaultValue={defaultData?.firstAnswer}
      />
      <Label htmlFor="secondAnswer">Second Answer</Label>
      <Input
        id="secondAnswer"
        name="secondAnswer"
        type="text"
        defaultValue={defaultData?.secondAnswer}
      />
      <Label htmlFor="thirdAnswer">Third Answer</Label>
      <Input
        id="thirdAnswer"
        name="thirdAnswer"
        type="text"
        defaultValue={defaultData?.thirdAnswer}
      />
      <StandardButton type="submit">
        {defaultData ? "Update place" : "Add place"}
      </StandardButton>
    </FormContainer>
  );
}
