"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "@/context/userContext";
import { TodoProvider } from "@/context/todoContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <UserProvider>
        <TodoProvider>{children}</TodoProvider>
      </UserProvider>
    </ChakraProvider>
  );
}
