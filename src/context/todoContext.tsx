"use client";

import { Todo } from "@/data/types/todo";
import { createContext, ReactNode, useContext, useState } from "react";

interface TodoObj {
  id: string;
  title: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}
[];

interface TodoContextProps {
  todos: TodoObj | undefined;
  getTodos: (arrTodos: Todo[]) => void;
}

const TodoContext = createContext({} as TodoContextProps);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<TodoObj | undefined>();

  function getTodos(arrTodos: Todo[]) {
    setTodos(
      arrTodos.reduce((acc: any, todo: Todo) => {
        acc[todo.id] = todo;
        return acc;
      })
    );
  }

  return (
    <TodoContext.Provider value={{ todos, getTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodo = () => useContext(TodoContext);
