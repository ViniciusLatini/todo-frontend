"use client";

import { useTodo } from "@/context/todoContext";
import AddTodoSchema, { AddTodoSchemaType } from "@/data/schema/AddTodoSchema";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
} from "@chakra-ui/react";
import { FormikConfig, useFormik } from "formik";
import { useEffect, useState } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";

interface AddTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UsersInfo {
  id: string;
  name: string;
}

export default function AddTodoModal({ isOpen, onClose }: AddTodoModalProps) {
  const [users, setUsers] = useState<UsersInfo[]>([]);
  const { addTodo } = useTodo();

  async function getAllUsers() {
    try {
      const res = await fetch("/api/user", {
        method: "GET",
      });
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isOpen) {
      getAllUsers();
    }
  }, [isOpen]);

  const opts: FormikConfig<AddTodoSchemaType> = {
    initialValues: {
      title: "",
      userId: "",
    },
    validationSchema: toFormikValidationSchema(AddTodoSchema),
    onSubmit: async ({ userId, title }) => {
      try {
        addTodo({ userId, title });
        onClose();
      } catch (error) {}
    },
  };
  const { handleSubmit, errors, touched, values, handleChange } =
    useFormik(opts);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicionar Todo</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <Stack spacing={4}>
              <FormControl isInvalid={!!errors.title && touched.title}>
                <FormLabel>Título</FormLabel>
                <Input
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  placeholder="Digite seu title"
                  type="title"
                />
                <FormErrorMessage>{errors.title}</FormErrorMessage>
              </FormControl>

              <Select
                variant="outline"
                placeholder="Selecione um usuário"
                name="userId"
                value={values.userId}
                onChange={handleChange}
              >
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </Select>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" colorScheme="blue">
              Enviar
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
