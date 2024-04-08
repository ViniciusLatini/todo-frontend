import { Button } from "@chakra-ui/react";
import { FiLogIn } from "react-icons/fi";

export default function Header() {
  return (
    <header className="flex justify-center items-center w-full bg-white drop-shadow p-2">
      <h1 className="absolute text-3xl text-center">Todo</h1>
      <Button className="ml-auto" colorScheme="gray" variant="ghost">
        <FiLogIn fontSize={20} />
      </Button>
    </header>
  );
}
