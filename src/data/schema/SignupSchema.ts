import { z } from "zod";

const SignupSchema = z.object({
  name: z.string({ required_error: "Nome é obrigatório" }),
  email: z
    .string({ required_error: "Email é obrigatório" })
    .email("E-mail inválido"),
  password: z
    .string({ required_error: "Senha é obrigatória" })
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
})

export type SignupSchemaType = z.infer<typeof SignupSchema>

export default SignupSchema;