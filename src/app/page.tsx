import Header from "@/components/global/Header";
import Options from "@/components/home/Options";
import { api } from "@/data/axios";
import { Todo } from "@/data/types/todo";
import TodosContainer from "@/components/home/TodosContainer";

async function getUserTodos() {
  try {
    const { data } = await api.get(`/todos`);
    return data as Todo[];
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
        <TodosContainer todosArr={todos as Todo[]} />
      </main>
    </>
  );
}
