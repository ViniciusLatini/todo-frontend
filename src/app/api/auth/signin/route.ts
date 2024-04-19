import { api } from "@/data/axios";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const { data } = await api.post("/user/auth", {
      email,
      password,
    });
    if (!data) {
      return Response.json(
        { message: "Credenciais inválidas" },
        { status: 401 }
      );
    }

    cookies().set("id", data.id);
    return Response.json({ ...data });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
