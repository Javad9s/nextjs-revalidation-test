import { GetRandomNumber } from "@/utils/getNumber";
import { renderLog } from "@/utils/utils";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET() {
  const randomNumber = GetRandomNumber();
  renderLog(`### --- Called get-number api ${randomNumber}`);
  return NextResponse.json({ randomNumber });
}
