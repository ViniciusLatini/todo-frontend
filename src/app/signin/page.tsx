import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  Stack,
  Input,
  FormControl,
  FormLabel,
  InputRightElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <main className="flex items-center justify-center h-svh px-2">
      <Card width="500px" className="drop-shadow-xl">
        <CardBody>
          <h1 className="font-bold text-center text-3xl mb-3">Todo List</h1>
          <h3 className="mb-7">
            Insira suas credenciais para acessar sua lista de tarefas!
          </h3>

          <Stack spacing={4} className="mb-3">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Digite seu email" type="email" />
            </FormControl>

            <FormControl>
              <FormLabel>Senha</FormLabel>
              <InputGroup>
                <Input
                  pr="4.5rem"
                  // type={show ? "text" : "password"}
                  placeholder="Digite sua senha"
                />
                <InputRightElement width="4.5rem">
                  {/* onClick={handleClick} */}
                  <Button h="1.75rem" size="sm">
                    {/* {show ? "Hide" : "Show"} */}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button colorScheme="blue">Entrar</Button>
          </Stack>

          <div className="flex justify-center gap-1">
            Não possui uma conta?{" "}
            <Link as={NextLink} href="/signup">
              Cadastre-se
            </Link>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}