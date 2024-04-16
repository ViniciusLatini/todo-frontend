"use client";
import NextLink from "next/link";
import { FormErrorMessage, Link } from "@chakra-ui/react";
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
import { FormikConfig, useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import SignupSchema, { SignupSchemaType } from "@/data/schema/SignupSchema";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  const router = useRouter();
  const opts: FormikConfig<SignupSchemaType> = {
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: toFormikValidationSchema(SignupSchema),
    onSubmit: async (values) => {
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        router.push("/");
      } catch (error) {
        console.log(error);
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
          <h3 className="mb-7 text-center">
            Insira suas credenciais para criar sua conta!
          </h3>

          <form onSubmit={handleSubmit}>
            <Stack spacing={4} className="mb-3">
              <FormControl isInvalid={!!errors.name && touched.name}>
                <FormLabel>Nome</FormLabel>
                <Input
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  type="text"
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

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

              <Button type="submit" colorScheme="blue">
                Cadastre-se
              </Button>
            </Stack>
          </form>

          <div className="flex justify-center gap-1">
            Já possui uma conta?{" "}
            <Link className="font-bold" as={NextLink} href="/signin">
              Faça login
            </Link>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
