import { NextResponse } from "next/server";
import store, { nextId } from "@/lib/mockDb";
import { readOnlyResponse } from "@/lib/demoGuard";
import { Product } from "@/types";

export async function GET() {
  return NextResponse.json(store.products);
}

export async function POST(request: Request) {
  const blocked = readOnlyResponse();
  if (blocked) return blocked;

  const body = (await request.json()) as Omit<Product, "id">;
  const product: Product = { ...body, id: nextId(store.products) };
  store.products.push(product);
  return NextResponse.json(product);
}
