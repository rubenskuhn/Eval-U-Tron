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
  const _id = session?.user.id;
  const router = useRouter();

  const {
    data: userData,
    isLoading: userDataLoading,
    error: userDataError,
  } = useSWR(`/api/tests/${_id}`);

  if (userDataError) return <div>Failed to load</div>;
  if (userDataLoading) return <div>Loading...</div>;

  const setImprovement = () => {
    let improvement = "";
    const perCent = userData.score / 4;

    if (perCent <= 0.25) {
      improvement =
        "Don't worry! You are special no matter what! We love you, Sunshine!";
    } else if (perCent <= 0.5) {
      improvement =
        "Wow... you got just a little above randomly choosing answers! Impressive!";
    } else if (perCent <= 0.75) {
      improvement =
        "Some room for improvement... Room that normal people stuff knowledge, thoughts and other nonsense but you have vacant!";
    } else if (perCent === 1) {
      improvement =
        "You've made it, Sunshine! And all that with an extra chromosome!! Mima is proud!";
    }

    return improvement;
  };

  return (
    <>
      <PageLayout>
        <Card margin="25px" padding="20px" bg="pink">
          <CardBody style={{ overflow: "hidden" }}>
            <Image
              src="https://static.klipy.co/5f4490a4db1fdf9c4afcf2de5b693c31/paf5e5EO.gif"
              title="YouTube video player"
              frameborder="0"
              marginX="auto"
              marginY="10px"
              maxW="100%"
              maxH="100%"
            ></Image>
          </CardBody>
          <Heading marginLeft="25px" marginBottom="20px">
            <Text fontSize="xl">Your results, {userData.name}!</Text>
          </Heading>
          <CardBody>
            <List>
              <ListItem>
                <Text as="h3">You've got {userData.score} out of 4 right!</Text>
              </ListItem>
              <br />
              <ListItem>
                <Text as="h3" fontSize="xl">
                  {(userData.score / 4) * 100} %
                </Text>
              </ListItem>
              <br />
              <ListItem>
                <Text as="i">{setImprovement()}</Text>
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </PageLayout>
    </>
  );
}
