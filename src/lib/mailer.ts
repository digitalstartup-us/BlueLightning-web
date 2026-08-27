/**
 * Email utility — Resend API.
 *
 * Required env vars:
 *   RESEND_API_KEY — API key from resend.com/api-keys
 *   RESEND_FROM    — sender address on a domain verified at resend.com/domains
 *                    Defaults to noreply@bluelightning.us
 *                    Until the domain is verified, Resend only accepts
 *                    recipients equal to the account owner's own address.
 */
import { Resend } from "resend";

const TEAM_EMAILS = ["mc@bluelightning.us", "info@bluelightning.us"];

const SENDER = process.env.RESEND_FROM || "noreply@bluelightning.us";
const LEAD_FROM = `Blue Lightning Leads <${SENDER}>`;
const CLIENT_FROM = `Blue Lightning Decks & Patios <${SENDER}>`;

function createClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY not configured");
  return new Resend(key);
}

/* ─── Send lead notification to the team ──────────────────── */
export async function sendLeadToTeam({
  subject,
  html,
  replyTo,
}: {
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const { data, error } = await createClient().emails.send({
    from: LEAD_FROM,
    to: TEAM_EMAILS,
    subject,
    html,
    replyTo,
  });
  if (error) throw new Error(`Resend rejected the lead email: ${error.message}`);
  console.log(`[mailer] Lead email sent: ${data?.id}`);
  return data;
}

/* ─── Send confirmation to homeowner ──────────────────────── */
export async function sendConfirmationToClient({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  const { data, error } = await createClient().emails.send({
    from: CLIENT_FROM,
    to,
    subject,
    html,
  });
  if (error) throw new Error(`Resend rejected the client email: ${error.message}`);
  console.log(`[mailer] Client confirmation sent: ${data?.id}`);
  return data;
}

/* ─── Send both at once ────────────────────────────────────── */
export async function sendBothEmails({
  leadSubject,
  leadHtml,
  replyTo,
  clientEmail,
  clientSubject,
  clientHtml,
}: {
  leadSubject: string;
  leadHtml: string;
  replyTo?: string;
  clientEmail?: string;
  clientSubject?: string;
  clientHtml?: string;
}) {
  const sendClient =
    clientEmail && clientSubject && clientHtml
      ? sendConfirmationToClient({ to: clientEmail, subject: clientSubject, html: clientHtml })
      : Promise.resolve(null);

  const [lead, client] = await Promise.allSettled([
    sendLeadToTeam({ subject: leadSubject, html: leadHtml, replyTo }),
    sendClient,
  ]);

  // Losing the courtesy email is tolerable, losing the lead itself is not.
  if (client.status === "rejected") {
    console.error("[mailer] Client confirmation failed:", client.reason);
  }
  if (lead.status === "rejected") throw lead.reason;

  return {
    lead: lead.value,
    client: client.status === "fulfilled" ? client.value : null,
  };
}
