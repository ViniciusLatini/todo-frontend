import { api } from "@/data/axios";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const { data } = await api.post("/user/auth", {
      email,
      password,
    });
    if (!data) {
      return Response.json({ message: "Credenciais inválidas" }, { status: 401 });
    }
    return Response.json(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
