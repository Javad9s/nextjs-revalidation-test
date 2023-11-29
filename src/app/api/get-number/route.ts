import { renderLog } from "@/utils/utils";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET() {
  const randomNumber = Math.random();
  renderLog(`### --- Called get-number api ${randomNumber}`);
  return NextResponse.json({ randomNumber });
}
