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

  useEffect(() => {
    todos && console.log(Object.values(todos));
  }, [todos]);

  return (
    <Wrap marginTop="20px" spacing="20px">
      <Suspense fallback={<h1>loading</h1>}>
        {todos &&
          Object.values(todos)?.map((todo) => (
            <WrapItem key={todo.id}>
              <TodoCard
                {...todo}
              />
            </WrapItem>
          ))}
      </Suspense>
    </Wrap>
  );
}
