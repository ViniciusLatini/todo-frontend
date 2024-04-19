import { api } from "@/data/axios";

export async function GET(req: Request) {
  try {
    const { data } = await api.get("/users");
    return Response.json(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
