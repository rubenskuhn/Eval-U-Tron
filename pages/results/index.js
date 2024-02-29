import {
  Image,
  List,
  ListItem,
  Card,
  CardBody,
  Heading,
  Text,
} from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import useSWR from "swr";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import PageLayout from "../../components/PageLayout";
import { useRouter } from "next/router";

export default function Results() {
  const { data: session } = useSession();
  console.log("What are the User Data?", session);
  const _id = session?.user.id;
  const router = useRouter();
  console.log("++++++++ Session data:", session);

  const {
    data: userData,
    isLoading: userDataLoading,
    error: userDataError,
  } = useSWR(`/api/tests/${_id}`);
  console.log("++++++++ User data:", userData);

  const {
    data: formData,
    isLoading: formDataLoading,
    error: formDataError,
  } = useSWR(`/api/questions?testtype=${router.query.testtype}`);
  console.log("+++++++++ Test data:", router.query.testtype);

  if (userDataError) return <div>Failed to load</div>;
  if (userDataLoading) return <div>Loading...</div>;

  return (
    <>
      <PageLayout>
        <Card margin="25px" padding="20px" bg="pink">
          <CardBody style={{ overflow: "hidden" }}>
            <Image
              src="https://www.youtube.com/embed/kav7tifmyTg?si=4FlCeNsxwb-DB69P"
              title="YouTube video player"
              frameborder="0"
              marginX="auto"
              marginY="10px"
              maxW="100%"
              maxH="100%"
            ></Image>
          </CardBody>
          <Heading marginLeft="25px" marginBottom="20px">
            <Text fontSize="xl">Your Resuts {userData.name}</Text>
          </Heading>
          <CardBody>
            <List>
              <ListItem>{userData.score}</ListItem>
            </List>
          </CardBody>
        </Card>
      </PageLayout>
    </>
  );
}
