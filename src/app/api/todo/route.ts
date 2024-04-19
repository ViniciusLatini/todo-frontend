import { api } from "@/data/axios";

export async function POST(req: Request) {
  try {
    const { user, completed, date } = await req.json();
    const { data } = await api.get(
      `/todos?completed=${completed}&user=${user}&date=${date}`
    );

    return Response.json(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
