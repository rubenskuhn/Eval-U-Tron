import { useState } from "react";
import { useRouter } from "next/router";
import { VscAccount } from "react-icons/vsc";
import { useSession, signIn, signOut } from "next-auth/react";
import { Box, Image, Button, Flex, Text } from "@chakra-ui/react";
import StandardButton from "./StandardButton";

export default function LoginButton(data) {
  const { data: session } = useSession();
  console.log(session);

  //   const router = useRouter();
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  if (session) {
    return (
      <>
        <Text>Welcome {session.user.name}</Text>
        <Flex alignItems="center" flexDirection="row" gap={3}>
          <Image rounded="md" src={session.user.image} alt="" />
          <Button minW="80px" onClick={() => signOut()}>
            Sign out
          </Button>
        </Flex>
      </>
    );
  } else {
    return (
      <>
        <Flex alignItems="center" flexDirection="row" gap={3}>
          <VscAccount size="30px" color="white" />
          <Button minW="80px" onClick={() => signIn()}>
            Sign in
          </Button>
        </Flex>
      </>
    );
  }
}
