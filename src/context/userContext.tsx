"use client";

import { User } from "@/data/types/user";
import { ReactNode, createContext, useContext, useState } from "react";

interface UserContextProps {
  user: User | undefined;
  signin: (user: User) => void;
}

const UserContext = createContext({} as UserContextProps);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | undefined>();

  function signin(user: User) {
    setUser(user);
  }

  return (
    <UserContext.Provider value={{ user, signin }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
