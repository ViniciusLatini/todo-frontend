import { Button, SimpleGrid } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import Header from "./components/global/Header";
import Options from "./components/home/Options";
import TodoCard from "./components/home/TodoCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="py-5 px-10 ">
        <Options />

        <SimpleGrid marginTop="20px" minChildWidth="320px" spacing="40px">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </SimpleGrid>
      </main>
    </>
  );
}
