import { useState } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { Box, Image, Flex } from "@chakra-ui/react";

export default function Account() {
  const { data: session, status } = useSession();
  console.log("What is de Login Data and Status?", session, status);

  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (session === "authenticated") {
    return (
      <>
        <Flex>
          <Box>
            Welcome {session.user.email}
            <Image src={session.user.image} alt="" />
            <button onClick={() => signOut()}>Sign out</button>
          </Box>
        </Flex>
      </>
    );
  } else {
    return (
      <>
        <Flex>
          <div>
            <p>You are not signed in.</p>
            <button onClick={() => signIn()}>Sign in</button>
          </div>
        </Flex>
      </>
    );
  }
}
