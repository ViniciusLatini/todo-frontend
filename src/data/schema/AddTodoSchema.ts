import { z } from "zod";

const AddTodoSchema = z.object({
  title: z.string({ required_error: "Título é um campo obrigatório" }),
  userId: z.string({ required_error: "Usuário é um campo obrigatório" }),
});

export type AddTodoSchemaType = z.infer<typeof AddTodoSchema>;

export default AddTodoSchema;