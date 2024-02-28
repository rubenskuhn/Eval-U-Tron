import { Box, Flex, List, ListItem, Button } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import useSWR from "swr";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import PageLayout from "../../components/PageLayout";

export default function Results() {
  const { data: session } = useSession();
  console.log("What are the User Data?", session);
  const _id = session?.user.id;

  const {
    data: userData,
    isLoading: userDataLoading,
    error: userDataError,
  } = useSWR(`/api/tests/${_id}`);

  if (userDataError) return <div>Failed to load</div>;
  if (userDataLoading) return <div>Loading...</div>;

  console.log("User data:", userData);
  console.log("Session data:", session);

  return (
    <>
      <PageLayout>
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
              <AspectRatio maxW="560px" ratio={1}>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/kav7tifmyTg?si=4FlCeNsxwb-DB69P"
                  title="YouTube video player"
                  frameborder="0"
                ></iframe>
              </AspectRatio>
            </Box>
            <br />
          </Box>
          <List>
            <ListItem>{userData.name}</ListItem>
            <ListItem>{userData.score}</ListItem>
          </List>
        </Flex>
      </PageLayout>
    </>
  );
}
