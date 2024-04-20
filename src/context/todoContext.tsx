"use client";

import { Todo } from "@/data/types/todo";
import { createContext, ReactNode, useContext, useState } from "react";

interface TodoObj {
  [key: string]: Todo;
}

interface TodoContextProps {
  todos: TodoObj | undefined;
  filters: Filters;
  getTodos: (arrTodos: Todo[]) => void;
  deleteTodo: (id: string) => void;
  addTodo: (data: { title: string; userId: string }) => void;
  changeTodoStatus: (todoId: string, completed: boolean) => void;
  filterTodos: (data: Filters) => void;
}

interface Filters {
  user: string;
  completed: string;
  date: string;
}

const TodoContext = createContext({} as TodoContextProps);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<TodoObj | undefined>();
  const [filters, setFilters] = useState<Filters>({
    user: "",
    completed: "",
    date: "asc",
  });

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

  async function addTodo({ title, userId }: { title: string; userId: string }) {
    const res = await fetch(`/api/todo/${userId}`, {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const data = await res.json();
    const newTodos = { ...todos };
    newTodos[data.id] = data;
    setTodos(newTodos);
  }

  async function changeTodoStatus(todoId: string, completed: boolean) {
    const newTodos = { ...todos };
    newTodos[todoId].completed = completed;
    setTodos(newTodos);
    await fetch(`/api/todo/${todoId}`, {
      method: "PUT",
      body: JSON.stringify({ title: newTodos[todoId].title, completed }),
    });
  }

  async function filterTodos(newFilters: Filters) {
    const res = await fetch("/api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFilters),
    });
    const data = await res.json();
    getTodos(data);
    setFilters(newFilters);
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        filters,
        getTodos,
        deleteTodo,
        addTodo,
        changeTodoStatus,
        filterTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodo = () => useContext(TodoContext);
