import { SimpleGrid } from "@chakra-ui/react";
import Header from "@/components/global/Header";
import Options from "@/components/home/Options";
import TodoCard from "@/components/home/TodoCard";
import { api } from "@/data/axios";
import { Suspense } from "react";

export default async function Home() {
  async function getUserTodos() {
    const { data } = await api.get("/todo/6611b32bd999e9040c7c95f3");
    return data.todos as Array<any>;
  }

  const todos = await getUserTodos();
  console.log(todos, "tododo");
  return (
    <>
      <Header />
      <main className="py-5 px-10 ">
        <Options />

        <SimpleGrid marginTop="20px" minChildWidth="320px" spacing="40px">
          <Suspense fallback={<h1>loading</h1>}>
            {todos.map((todo) => (
              <>
                <TodoCard key={todo.id} />
              </>
            ))}
          </Suspense>
        </SimpleGrid>
      </main>
    </>
  );
}
