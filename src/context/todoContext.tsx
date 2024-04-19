"use client";

import { Todo } from "@/data/types/todo";
import { createContext, ReactNode, useContext, useState } from "react";

interface TodoObj {
  [key: string]: Todo;
}

interface TodoContextProps {
  todos: TodoObj | undefined;
  getTodos: (arrTodos: Todo[]) => void;
  deleteTodo: (id: string) => void;
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

  async function deleteTodo(id: string) {
    const newTodos = { ...todos };
    delete newTodos[id];
    setTodos(newTodos);
    await fetch(`/api/todo/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <TodoContext.Provider value={{ todos, getTodos, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodo = () => useContext(TodoContext);
