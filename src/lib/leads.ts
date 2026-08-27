/**
 * Lead persistence — Supabase.
 *
 * Required env vars (server-only, never expose these to the browser):
 *   SUPABASE_URL              — Project URL from supabase.com/dashboard > Settings > API
 *   SUPABASE_SERVICE_ROLE_KEY — service_role key from the same page. It bypasses
 *                               RLS, which is why the `leads` table can stay
 *                               locked down with no public policies.
 *
 * Run supabase/schema.sql in the Supabase SQL Editor before using this.
 */
import { createClient, SupabaseClient } from "@supabase/supabase-js";

export type Lead = {
  name: string;
  phone: string;
  email?: string | null;
  city?: string | null;
  projectType?: string | null;
  budget?: string | null;
  referral?: string | null;
  description?: string | null;
  callTime?: string | null;
  formSource?: string | null;
  transcript?: string | null;
};

let cached: SupabaseClient | null = null;

function getClient(): SupabaseClient | null {
  if (cached) return cached;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;

  cached = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}

/**
 * Writes a lead to the database. Never throws and never rejects: a storage
 * outage must not stop the notification email, which is the channel the team
 * actually watches. Returns the new row id, or null if the write did not happen.
 */
export async function saveLead(lead: Lead): Promise<string | null> {
  const client = getClient();
  if (!client) {
    console.warn("[leads] Supabase not configured — lead not persisted");
    return null;
  }

  try {
    const { data, error } = await client
      .from("leads")
      .insert({
        name: lead.name,
        phone: lead.phone,
        email: lead.email || null,
        city: lead.city || null,
        project_type: lead.projectType || null,
        budget: lead.budget || null,
        referral: lead.referral || null,
        description: lead.description || null,
        call_time: lead.callTime || null,
        form_source: lead.formSource || null,
        transcript: lead.transcript || null,
      })
      .select("id")
      .single();

    if (error) {
      console.error("[leads] Insert failed:", error.message);
      return null;
    }

    console.log(`[leads] Saved lead ${data.id}`);
    return data.id as string;
  } catch (err) {
    console.error("[leads] Unexpected error:", err);
    return null;
  }
}

/**
 * Diagnostic for /api/health: confirms the credentials work and the table
 * exists, without inserting anything.
 */
export async function checkLeadsConnection(): Promise<string> {
  const client = getClient();
  if (!client) return "NOT CONFIGURED";

  try {
    const { count, error } = await client
      .from("leads")
      .select("*", { count: "exact", head: true });

    if (error) return `ERROR: ${error.message}`;
    return `OK (${count ?? 0} leads stored)`;
  } catch (err) {
    return `ERROR: ${err instanceof Error ? err.message : "unknown"}`;
  }
}

/** Flags whether the notification email actually went out, for later auditing. */
export async function markEmailStatus(id: string, sent: boolean): Promise<void> {
  const client = getClient();
  if (!client) return;

  try {
    const { error } = await client.from("leads").update({ email_sent: sent }).eq("id", id);
    if (error) console.error("[leads] Could not update email_sent:", error.message);
  } catch (err) {
    console.error("[leads] Unexpected error updating email_sent:", err);
  }
}
