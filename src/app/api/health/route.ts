import { NextResponse } from "next/server";
import { checkLeadsConnection } from "@/lib/leads";

export async function GET() {
  return NextResponse.json({
    openai: process.env.OPENAI_API_KEY ? "SET" : "MISSING",
    resend_key: process.env.RESEND_API_KEY
      ? `SET (${process.env.RESEND_API_KEY.length} chars)`
      : "MISSING",
    resend_from: process.env.RESEND_FROM || "noreply@bluelightning.us (default)",
    // This endpoint is public, so it reports only whether a value exists.
    // Printing the project URL or key would hand an attacker a free target.
    supabase_url: process.env.SUPABASE_URL ? "SET" : "MISSING",
    supabase_service_key: process.env.SUPABASE_SERVICE_ROLE_KEY ? "SET" : "MISSING",
    supabase_leads_table: await checkLeadsConnection(),
  });
}
