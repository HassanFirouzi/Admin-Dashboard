import { NextResponse } from "next/server";
import store from "@/lib/mockDb";

export async function GET() {
  return NextResponse.json(store.users);
}
