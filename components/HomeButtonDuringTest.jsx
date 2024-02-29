import { GoHome } from "react-icons/go";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function HomeButtonDuringTest() {
  const router = useRouter();
  const handleClick = () => {
    if (confirm("Are you sure?")) {
      router.push("/");
      return;
    }
  };
  return (
    <Button onClick={handleClick} colorSchema="teal">
      <GoHome size="30px" />
    </Button>
  );
}
