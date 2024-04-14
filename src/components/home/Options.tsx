import { Button, IconButton } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

export default function Options() {
  return (
    <div className="flex w-full border-b border-b-gray-300 px-5 py-2">
      <div className="flex gap-2">
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
          Status
        </Button>
        <Button
          colorScheme="blackAlpha"
          className="!text-black"
          size="sm"
          variant="outline"
        >
          Status
        </Button>
      </div>

      <div className="ml-auto">
        <IconButton
          aria-label="Adicionar Todo"
          icon={<FiPlus color="#000" size={15} />}
          colorScheme="whiteAlpha"
        />
      </div>
    </div>
  );
}
