import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  ButtonGroup,
  Box,
  Stack,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";

export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
        Create User
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="linear-gradient(to top right, #333333, #000000)"
          opacity="90%"
        >
          <DrawerCloseButton color="white" />
          <DrawerHeader borderBottomWidth="1px" color="white">
            Create a new account
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="userName" color="white">
                  Name
                </FormLabel>
                <Input
                  ref={firstField}
                  id="userName"
                  placeholder="Please enter user name"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="email" color="white">
                  Email
                </FormLabel>
                <InputGroup>
                  <Input
                    ref={firstField}
                    type="email"
                    id="email"
                    placeholder="Please enter your email"
                  />
                  <InputRightAddon>.com</InputRightAddon>
                </InputGroup>
              </Box>
              <Box>
                <FormLabel htmlFor="password" color="white">
                  Password
                </FormLabel>
                <Input
                  ref={firstField}
                  id="password"
                  placeholder="Please enter your new password"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="userType" color="white">
                  Are you a Test Taker or Admin?
                </FormLabel>
                <Select
                  placeholder="Select option"
                  id="userType"
                  defaultValue="userTypeTaker"
                  color="gray"
                >
                  <option value="userTypeTaker" ref={firstField} color="white">
                    Test Taker or Student
                  </option>
                  <option value="userTypeAdmin" color="white">
                    Administrator or Teacher
                  </option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="code" color="white">
                  Code for the test
                </FormLabel>
                <Input
                  ref={firstField}
                  id="code"
                  placeholder="Please enter the code of your test"
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose} bg="gray">
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
