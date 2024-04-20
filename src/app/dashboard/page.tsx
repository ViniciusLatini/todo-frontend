import Chart from "@/components/dashboard/Chart";
import SelectUser from "@/components/dashboard/SelectUser";
import Header from "@/components/global/Header";
import { api } from "@/data/axios";
import { TodosStats } from "@/data/types/todo";
import { User } from "@/data/types/user";
import { Card } from "@chakra-ui/react";

async function getTodosStats() {
  const { data } = await api.get("/todo/stats");
  return data as TodosStats[];
}

async function getAllUsers() {
  const { data } = await api.get("/users");
  return data as User[];
}

export default async function Dashboard() {
  const todosStats = await getTodosStats();
  const users = await getAllUsers();

  return (
    <>
      <Header />

      <main className="py-5 px-2 md:px-10 ">
        <Card className="flex w-full items-center py-4">
          <div className="max-w-[300px]">
            <SelectUser users={users} />
          </div>
          <Chart data={todosStats} />
        </Card>
      </main>
    </>
  );
}
