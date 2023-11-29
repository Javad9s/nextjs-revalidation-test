import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET() {
  const randomNumber = Math.random();
  console.log(`### --- Called get-number api ${randomNumber}`);
  return NextResponse.json({ randomNumber });
}
