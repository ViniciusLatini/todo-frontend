import Header from "@/components/global/Header";
import Options from "@/components/home/Options";
import { cookies } from "next/headers";
import { api } from "@/data/axios";
import { Todo } from "@/data/types/todo";
import TodosContainer from "@/components/home/TodosContainer";

async function getUserTodos() {
  try {
    const id = cookies().get("id")?.value;
    const { data } = await api.get(`/todo/${id}`);
    return data.todos as Todo[];
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const todos = await getUserTodos();
  return (
    <>
      <Header />
      <main className="py-5 px-10 ">
        <Options />
        <TodosContainer todos={todos as Todo[]} />
      </main>
    </>
  );
}
