import { Button, IconButton } from "@chakra-ui/react";
import { FiBarChart, FiHome, FiLogIn } from "react-icons/fi";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <header className="flex justify-center items-center w-full bg-white drop-shadow py-2 px-2 md:px-10">
      <Link as={NextLink} href="/" className="cursor-pointer !no-underline">
        <h1 className="text-3xl">Todo</h1>
      </Link>
      <div className="ml-auto flex gap-4">
        <Link as={NextLink} href="/">
          <IconButton aria-label="Login" icon={<FiHome fontSize={20} />} />
        </Link>
        <Link as={NextLink} href="/dashboard">
          <IconButton aria-label="Login" icon={<FiBarChart fontSize={20} />} />
        </Link>
        <Link as={NextLink} href="/signin">
          <IconButton aria-label="Login" icon={<FiLogIn fontSize={20} />} />
        </Link>
      </div>
    </header>
  );
}
