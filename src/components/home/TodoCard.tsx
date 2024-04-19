import { Todo } from "@/data/types/todo";
import {
  Card,
  CardBody,
  IconButton,
  Checkbox,
  CardFooter,
} from "@chakra-ui/react";
import { FiUser, FiCalendar, FiEdit, FiTrash } from "react-icons/fi";
import { formatDate } from "@/utils/formatDate";

export default function TodoCard({
  id,
  title,
  created_at,
  updated_at,
  completed,
  user,
}: Todo) {
  return (
    <Card className="w-80 h-48 mx-auto">
      <CardBody
        className="flex items-center justify-between gap-3"
        paddingY={0}
      >
        <div className="flex items-start">
          <Checkbox colorScheme="gray" className="mt-1 mr-2" />
          <span className="text-ellipsis text-justify line-clamp-3">
            {title}
          </span>
        </div>
      </CardBody>

      <CardFooter className="flex justify-between" paddingTop={0}>
        <div className="flex flex-col gap-1">
          <span className="flex gap-2 items-center">
            <FiUser fontSize={17} /> {user.name}
          </span>
          <span className="flex gap-2 items-center">
            <FiCalendar fontSize={17} /> {formatDate(created_at)}
          </span>
        </div>

        <div className="flex items-end h-full gap-1">
          <IconButton
            variant="ghost"
            aria-label="Editar"
            colorScheme="red"
            icon={<FiTrash fontSize={17} />}
            size="sm"
          />
        </div>
      </CardFooter>
    </Card>
  );
}
