"use client";
import { Button, IconButton } from "@chakra-ui/react";
import { FiPlus, FiChevronUp, FiChevronDown } from "react-icons/fi";
import AddTodoModal from "./AddTodoModal";
import { useState } from "react";
import { useTodo } from "@/context/todoContext";

export default function Options() {
  const [isOpen, setIsOpen] = useState(false);
  const [sortDate, setSortDate] = useState("asc");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterUser, setFilterUser] = useState("");
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const { filterTodos } = useTodo();

  function handleSortDate() {
    if (sortDate === "asc") {
      setSortDate("desc");
    } else {
      setSortDate("asc");
    }
    filterTodos({filterId: 1, value: sortDate});
  }

  return (
    <div className="flex w-full border-b border-b-gray-300 px-5 py-2">
      <div className="flex gap-2">
        <Button
          colorScheme="blackAlpha"
          className="!text-black flex items-center gap-1"
          size="sm"
          variant="outline"
          onClick={handleSortDate}
        >
          Data {sortDate === "asc" ? <FiChevronUp /> : <FiChevronDown />}
        </Button>
        <Button
          colorScheme="blackAlpha"
          className="!text-black"
          size="sm"
          variant="outline"
        >
          Status
        </Button>
        <Button
          colorScheme="blackAlpha"
          className="!text-black"
          size="sm"
          variant="outline"
        >
          Pessoa
        </Button>
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
