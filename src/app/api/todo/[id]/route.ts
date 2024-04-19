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
