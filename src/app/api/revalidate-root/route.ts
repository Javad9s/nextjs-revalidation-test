import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET() {
  revalidatePath("/", "layout");
  return new NextResponse("Revalidated!", { status: 200 });
}
