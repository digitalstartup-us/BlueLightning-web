import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    openai: !!process.env.OPENAI_API_KEY ? "SET" : "MISSING",
    gmail_user: process.env.GMAIL_USER ? `SET (${process.env.GMAIL_USER})` : "MISSING",
    gmail_pass: process.env.GMAIL_PASS
      ? `SET (${process.env.GMAIL_PASS.length} chars)`
      : "MISSING",
  });
}
