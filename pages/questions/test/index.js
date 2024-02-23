import { Box, Card, List, Link, ListItem, Button } from "@chakra-ui/react";
import useSWR from "swr";
import React from "react";
import { useState } from "react";

export default function Test() {
  const { data: formData, isLoading, error } = useSWR(`/api/questions`);
  const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of current index

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % formData.length); // Move to the next item
  };

  if (error) return <div>Failed to load</div>;
  if (!formData) return <div>Loading...</div>;

  const currentItem = formData[currentIndex];

  return (
    <>
      <Card key={currentItem._id}>
        <form>
          <br />
          <label htmlFor="proposition">Proposition:</label>
          <input
            id={`proposition-${currentItem._id}`}
            name={`proposition-${currentItem._id}`}
            defaultValue={currentItem.proposition}
          />
          <br />
          {/* <label htmlFor="image">Insert the url of your image here:</label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={formData.image}
          />
          <br /> */}
          {/* <label htmlFor="firstAnswer">first answer:</label>
          <input
            type="text"
            id="firstAnswer"
            name="firstAnswer"
            defaultValue={formData.answers[0]}
          />
          <br />
          <label htmlFor="secondAnswer">second answer:</label>
          <input
            type="text"
            id="secondAnswer"
            name="secondAnswer"
            defaultValue={formData.answers[1]}
          />
          <br />
          <label htmlFor="thirdAnswer">third answer:</label>
          <input
            type="text"
            id="thirdAnswer"
            name="thirdAnswer"
            defaultValue={formData.answers[2]}
          /> */}
          {/* <br />
          <label htmlFor="correctAnswer">the correct answer:</label>
          <input
            type="text"
            id="correctAnswer"
            name="correctAnswer"
            defaultValue={formData.correctAnswer}
          />
          <br /> */}
          <button
            onClick={handleNext}
            disabled={currentIndex === formData.length - 1}
          >
            Next
          </button>
        </form>
      </Card>
    </>
  );
}
