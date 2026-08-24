import "server-only";
import { NextResponse } from "next/server";

// Defense in depth alongside the client-side check in src/utils/demo.ts —
// that one only hides the UI affordance, so a request sent straight to
// these routes (bypassing the buttons entirely) still needs blocking here.
export function readOnlyResponse(): NextResponse | null {
  if (process.env.VERCEL_ENV !== "production") return null;
  return NextResponse.json(
    { error: "demoda bu işlem devre dışı bırakıldı." },
    { status: 403 },
  );
}
