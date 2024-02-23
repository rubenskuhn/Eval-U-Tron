import {
  List,
  ListItem,
  Text,
  Radio,
  RadioGroup,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Box,
  Button,
} from "@chakra-ui/react";
import React from "react";

export default function QuestionsCard(formData) {
  return (
    <>
      <Box>
        <h1 size="md" marginTop="20px">
          Math Test
        </h1>
      </Box>

      <Card
        key={_id}
        direction={{ base: "column", sm: "column" }}
        gap="5px"
        overflow="hidden"
        variant="outline"
        margin="5px"
        bg="lightgray"
      >
        <CardHeader>
          <Heading size="md"> {formData.proposition}</Heading>
        </CardHeader>
        {/* <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="../public/favicon.ico"
          alt="Display Question Image"
        /> */}
        <CardBody>
          <Text margin="2px">
            What is the correct answer for the proposition above?
          </Text>
          <List
            direction={{ base: "column", sm: "column" }}
            gap="5px"
            overflow="hidden"
            variant="outline"
          >
            <ListItem gap="2px" borderRadius="md">
              <RadioGroup>
                <Stack bg="gray" margin="2px" borderRadius="md">
                  <Box
                    key={index}
                    margin="2px"
                    bg="lightgray"
                    mborder="1px"
                    borderColor="black"
                    borderRadius="md"
                  >
                    <Radio margin="5px" value={answer} name={formData.answers}>
                      <Box margin="10px">{answer}</Box>
                    </Radio>
                  </Box>
                </Stack>
              </RadioGroup>
            </ListItem>
          </List>
        </CardBody>
      </Card>
    </>
  );
}
