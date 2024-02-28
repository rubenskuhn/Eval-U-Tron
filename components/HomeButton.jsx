import { GoHome } from "react-icons/go";
import Link from "next/link";
import { Button } from "@chakra-ui/react"; // Import Box from Chakra UI

export default function HomeButton() {
  return (
    <Link href="/">
      <Button colorSchema="teal">
        <GoHome size="30px" />
      </Button>
    </Link>
  );
}
