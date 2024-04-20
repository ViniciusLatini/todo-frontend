"use client";
import { Button, IconButton, Select } from "@chakra-ui/react";
import { FiPlus, FiChevronUp, FiChevronDown } from "react-icons/fi";
import AddTodoModal from "./AddTodoModal";
import { useState } from "react";
import { useTodo } from "@/context/todoContext";
import { User } from "../../data/types/user";

export default function Options({ users }: { users: User[] | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const [sortDate, setSortDate] = useState("asc");
  const [filterStatus, setFilterStatus] = useState({
    label: "Todos",
    value: "",
  });
  const [filterUser, setFilterUser] = useState("");
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const { filterTodos, filters } = useTodo();

  function handleSortDate() {
    const sort = sortDate === "asc" ? "desc" : "asc";
    setSortDate(sort);
    const newFilters = { ...filters, date: sort };
    filterTodos(newFilters);
  }

  function handleFilterStatus() {
    let status = "";
    switch (filterStatus.value) {
      case "true":
        setFilterStatus({ label: "Pendentes", value: "false" });
        status = "false";
        break;
      case "false":
        setFilterStatus({ label: "Todos", value: "" });
        status = "";
        break;
      default:
        setFilterStatus({ label: "Finalizados", value: "true" });
        status = "true";
        break;
    }

    filterTodos({ ...filters, completed: status });
  }

  function handleFilterUser(e: React.ChangeEvent<HTMLSelectElement>) {
    const newFilters = { ...filters, user: e.target.value };
    filterTodos(newFilters);
    setFilterUser(e.target.value);
  }

  return (
    <div className="flex w-full border-b border-b-gray-300 px-5 py-2">
      <div className="flex items-center gap-2">
        <Button
          colorScheme="blackAlpha"
          className="!text-black flex items-center gap-1"
          size="sm"
          variant="outline"
          onClick={handleSortDate}
        >
          Data{" "}
          {sortDate === "asc" ? (
            <FiChevronUp color="#000" size={50} />
          ) : (
            <FiChevronDown color="#000" size={50} />
          )}
        </Button>
        <Button
          colorScheme="blackAlpha"
          className="!text-black"
          width={150}
          size="sm"
          variant="outline"
          onClick={handleFilterStatus}
        >
          {filterStatus.label}
        </Button>
        <Select
          variant="outline"
          placeholder="Filtre por usuário"
          name="userId"
          size="sm"
          colorScheme="blackAlpha"
          value={filterUser}
          onChange={handleFilterUser}
        >
          {users?.map((user: User) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </Select>
      </div>

      <div className="ml-auto">
        <IconButton
          aria-label="Adicionar Todo"
          icon={<FiPlus color="#000" size={15} />}
          colorScheme="whiteAlpha"
          onClick={onOpen}
        />
      </div>
      <AddTodoModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}
