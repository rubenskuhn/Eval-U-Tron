import useSWR from "swr";
import {
  AspectRatio,
  Image,
  List,
  ListItem,
  Text,
  Radio,
  RadioGroup,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Grid,
  Stack,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ResultsPage() {
  // const { data, error, isLoading } = useSWR("/api/tests");
  // if (error) return <div>Failed to load</div>;
  // if (isLoading) return <div>Loading...</div>;

  return (
    <>
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
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // allowfullscreen
              ></iframe>
            </AspectRatio>
          </Box>
          <br />
        </Box>
      </Flex>
    </>
  );
}
