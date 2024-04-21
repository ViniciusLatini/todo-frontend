"use client";
import { useState } from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  Stack,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputRightElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FormikConfig, useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import SigninSchema, { SigninSchemaType } from "@/data/schema/SigninSchema";
import { useRouter } from "next/navigation";
import { User } from "@/data/types/user";
import { useUser } from "@/context/userContext";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { signin } = useUser();

  const opts: FormikConfig<SigninSchemaType> = {
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: toFormikValidationSchema(SigninSchema),
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/auth/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (res?.status === 401) {
          alert("Credenciais inválidas");
          setIsLoading(false);
          return;
        }
        const data: User = await res.json();
        signin(data);
        setIsLoading(false);
        router.push("/");
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    },
  };
  const { handleSubmit, errors, touched, values, handleChange } =
    useFormik(opts);

  return (
    <main className="flex items-center justify-center h-svh px-2">
      <Card width="500px" className="drop-shadow-xl">
        <CardBody>
          <h1 className="font-bold text-center text-3xl mb-3">Todo List</h1>
          <h3 className="mb-7">
            Insira suas credenciais para acessar sua lista de tarefas!
          </h3>

          <form onSubmit={handleSubmit}>
            <Stack spacing={4} className="mb-3">
              <FormControl isInvalid={!!errors.email && touched.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Digite seu email"
                  type="email"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.password && touched.password}>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input
                    pr="4.5rem"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      variant="ghost"
                      h="1.75rem"
                      size="sm"
                      onClick={handleClick}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>

              <Button isLoading={isLoading} type="submit" colorScheme="blue">
                Entrar
              </Button>
            </Stack>
          </form>

          <div className="flex justify-center gap-1">
            Não possui uma conta?{" "}
            <Link className="font-bold" as={NextLink} href="/signup">
              Cadastre-se
            </Link>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
