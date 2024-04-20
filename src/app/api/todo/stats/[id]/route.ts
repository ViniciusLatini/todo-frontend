import { api } from "@/data/axios";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (id === "all") {
      const { data } = await api.get(`/todo/stats`);
      return Response.json(data);
    }

    const { data } = await api.get(`/todo/stats?userId=${id}`);
    return Response.json(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
