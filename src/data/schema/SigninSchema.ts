import { z } from "zod";

const SigninSchema = z.object({
  email: z
    .string({ required_error: "Email é obrigatório" })
    .email("E-mail inválido"),
  password: z
    .string({ required_error: "Senha é obrigatória" })
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export type SigninSchemaType = z.infer<typeof SigninSchema>;

export default SigninSchema;
