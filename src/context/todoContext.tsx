"use client";

import { Todo } from "@/data/types/todo";
import { createContext, ReactNode, useContext, useState } from "react";

interface TodoObj {
  [key: string]: Todo;
}

interface TodoContextProps {
  todos: TodoObj | undefined;
  getTodos: (arrTodos: Todo[]) => void;
}

const TodoContext = createContext({} as TodoContextProps);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<TodoObj | undefined>();

  function getTodos(arrTodos: Todo[]) {
    const todoObj: TodoObj = {};
    arrTodos.forEach((todo) => {
      todoObj[todo.id] = todo;
    });
    setTodos(todoObj);
  }

  return (
    <TodoContext.Provider value={{ todos, getTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodo = () => useContext(TodoContext);
