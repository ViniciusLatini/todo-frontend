"use client";

import { Wrap, WrapItem } from "@chakra-ui/react";
import { Suspense, useEffect } from "react";
import TodoCard from "./TodoCard";
import { Todo } from "@/data/types/todo";
import { useTodo } from "@/context/todoContext";

interface TodosContainerProps {
  todosArr: Todo[];
}

export default function TodosContainer({ todosArr }: TodosContainerProps) {
  const { getTodos, todos } = useTodo();

  useEffect(() => {
    if (todosArr) getTodos(todosArr);
  }, [todosArr]);

  const arr = todos ? Object.values(todos) : [];

  return (
    <Wrap marginTop="20px" spacing="20px" justify={"center"}>
      <Suspense fallback={<h1 className="mt-10 text-2xl font-semibold">Carregando...</h1>}>
        {arr.length > 0 ? (
          arr.map((todo) => (
            <WrapItem key={todo.id}>
              <TodoCard {...todo} />
            </WrapItem>
          ))
        ) : (
          <h1 className="mt-10 text-2xl font-semibold">
            Nenhum todo encontrado, adicione uma tarefa no botão de + acima
          </h1>
        )}
      </Suspense>
    </Wrap>
  );
}
