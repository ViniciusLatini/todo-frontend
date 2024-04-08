import { Button, IconButton } from "@chakra-ui/react";
import { FiLogIn } from "react-icons/fi";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <header className="flex justify-center items-center w-full bg-white drop-shadow p-2">
      <h1 className="absolute text-3xl text-center">Todo</h1>
      <Link className="ml-auto" as={NextLink} href="/signin">
        <IconButton aria-label="Login" icon={<FiLogIn fontSize={20} />} />
      </Link>
    </header>
  );
}
