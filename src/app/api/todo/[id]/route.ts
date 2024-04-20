import { api } from "@/data/axios";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await api.delete(`/todo/${id}`);
    return Response.json({ message: "Todo deletado" });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { title } = await req.json();
    const { data } = await api.post(`/todo/${id}`, {
      title,
    });
    return Response.json(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { completed, title } = await req.json();
  await api.put(`/todo/${id}`, {
    title,
    completed,
  });
  return Response.json({ message: "ok" });
}
