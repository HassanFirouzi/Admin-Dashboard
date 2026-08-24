import { NextResponse } from "next/server";
import store from "@/lib/mockDb";
import { Product } from "@/types";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const product = store.products.find((p) => p.id === id);
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;
  const body = (await request.json()) as Omit<Product, "id">;
  const index = store.products.findIndex((p) => p.id === id);
  if (index === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  store.products[index] = { ...body, id };
  return NextResponse.json(store.products[index]);
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params;
  const index = store.products.findIndex((p) => p.id === id);
  if (index === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const [removed] = store.products.splice(index, 1);
  return NextResponse.json(removed);
}
