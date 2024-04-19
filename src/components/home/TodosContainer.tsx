"use client";

import { Wrap, WrapItem } from "@chakra-ui/react";
import { Suspense, useEffect } from "react";
import TodoCard from "./TodoCard";
import { Todo } from "@/data/types/todo";
import { useTodo } from "@/context/todoContext";

interface TodosContainerProps {
  todos: Todo[];
}

export default function TodosContainer({ todos }: TodosContainerProps) {
  const { getTodos } = useTodo();

  useEffect(() => {
    if(todos)
      getTodos(todos);
  },[todos])

  return (
    <Wrap marginTop="20px" spacing="20px">
      <Suspense fallback={<h1>loading</h1>}>
        {todos?.map((todo) => (
          <WrapItem key={todo.id}>
            <TodoCard />
          </WrapItem>
        ))}
      </Suspense>
    </Wrap>
  );
}
