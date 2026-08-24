import { NextResponse } from "next/server";
import store from "@/lib/mockDb";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const user = store.users.find((u) => u.id === id);
  if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(user);
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params;
  const index = store.users.findIndex((u) => u.id === id);
  if (index === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const [removed] = store.users.splice(index, 1);
  return NextResponse.json(removed);
}
