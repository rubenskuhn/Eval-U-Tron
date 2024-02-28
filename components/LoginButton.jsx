import { VscAccount } from "react-icons/vsc";
import { useSession, signIn, signOut } from "next-auth/react";
import { Image, Button, Flex, Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function LoginButton() {
  const { data: session } = useSession();

  useEffect(() => {
    const messageEventListener = (event) => {
      if (event.origin !== window.location.origin) {
        return;
      }
      if (event.data && event.data.type === "AUTH_RESULT") {
        window.location.href = event.data.callbackUrl;
      }
    };

    window.addEventListener("message", messageEventListener);

    return () => {
      window.removeEventListener("message", messageEventListener);
    };
  }, []);

  if (session) {
    return (
      <>
        <Flex alignItems="center" flexDirection="row">
          <Box maxH="80px" rounded="md" padding="20px">
            <Image
              src={session.user.image}
              rounded="md"
              objectFit="contain"
              maxH="41px"
              alt=""
            />
          </Box>
          <Button minW="80px" onClick={() => signOut()}>
            Sign out
          </Button>
        </Flex>
      </>
    );
  } else {
    return (
      <>
        <Flex alignItems="center" flexDirection="row">
          <VscAccount size="30px" color="white" />
          <Button minW="80px" onClick={() => signIn()}>
            Sign in
          </Button>
        </Flex>
      </>
    );
  }
}
