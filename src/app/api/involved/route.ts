import { NextResponse } from "next/server";
import { saveGetInvolved } from "@/lib/involve";

export async function POST(request: Request) {
  const formData = await request.formData();
  const result = await saveGetInvolved(formData);
  const dest = new URL("/get-involved", request.url);
  dest.searchParams.set(result.ok ? "sent" : "error", "1");
  return NextResponse.redirect(dest, 303);
}
