import Header from "@/components/global/Header";
import Options from "@/components/home/Options";
import { api } from "@/data/axios";
import { Todo } from "@/data/types/todo";
import TodosContainer from "@/components/home/TodosContainer";
import { User } from "@/data/types/user";

async function getUserTodos() {
  try {
    const { data } = await api.get(`/todos`);
    return data as Todo[];
  } catch (error) {
    console.log(error);
  }
}

async function getAllUsers() {
  const { data } = await api.get('/users');
  return data as User[]
}

export default async function Home() {
  const todos = await getUserTodos();
  const users = await getAllUsers();
  return (
    <>
      <Header />
      <main className="py-5 px-10 ">
        <Options users={users} />
        <TodosContainer todosArr={todos as Todo[]} />
      </main>
    </>
  );
}
