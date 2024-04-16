import { api } from "@/data/axios";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    const { data } = await api.post("/user", {
      name,
      email,
      password,
    });
    return Response.json(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
