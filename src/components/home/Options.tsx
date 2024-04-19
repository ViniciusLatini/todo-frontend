"use client";
import { Button, IconButton } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import AddTodoModal from "./AddTodoModal";
import { useState } from "react";

export default function Options() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <div className="flex w-full border-b border-b-gray-300 px-5 py-2">
      <div className="flex gap-2">
        <Button
          colorScheme="blackAlpha"
          className="!text-black"
          size="sm"
          variant="outline"
        >
          Data
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
