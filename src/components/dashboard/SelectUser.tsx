"use client";

import { useTodo } from "@/context/todoContext";
import { User } from "@/data/types/user";
import { Select } from "@chakra-ui/react";
import { useState } from "react";

export default function SelectUser({ users }: { users: User[] }) {
  const [selectedUser, setSelectedUser] = useState("");
  const { getTodosStats } = useTodo();

  function handleFilterUser(e: React.ChangeEvent<HTMLSelectElement>) {
    const id = e.target.value === "" ? "all" : e.target.value;
    setSelectedUser(id);
    getTodosStats(id);
    setSelectedUser(id);
  }

  return (
    <Select
      variant="outline"
      placeholder="Todos usuários"
      name="userId"
      size="sm"
      value={selectedUser}
      onChange={handleFilterUser}
    >
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </Select>
  );
}
