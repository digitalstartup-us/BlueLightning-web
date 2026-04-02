/**
 * Universal email utility — uses Gmail SMTP via nodemailer.
 * Works on any hosting (Vercel, Railway, Render, DigitalOcean, etc.)
 * Does NOT require domain verification.
 *
 * Required env vars:
 *   GMAIL_USER  — e.g. caballeromauricio766@gmail.com
 *   GMAIL_PASS  — Gmail App Password (16 chars, no spaces)
 *                 Get it: Google Account → Security → 2-Step Verification → App Passwords
 */
import nodemailer from "nodemailer";

const TEAM_EMAILS = ["mc@bluelightning.us", "gary@bluelightning.us"];

function createTransport() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;
  if (!user || !pass) throw new Error("GMAIL_USER or GMAIL_PASS not configured");
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
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
  const transport = createTransport();
  await transport.sendMail({
    from: `"Blue Lightning Leads" <${process.env.GMAIL_USER}>`,
    to: TEAM_EMAILS,
    subject,
    html,
    replyTo,
  });
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
  const transport = createTransport();
  await transport.sendMail({
    from: `"Blue Lightning Decks & Patios" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
  });
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
  const transport = createTransport();

  const jobs = [
    transport.sendMail({
      from: `"Blue Lightning Leads" <${process.env.GMAIL_USER}>`,
      to: TEAM_EMAILS,
      subject: leadSubject,
      html: leadHtml,
      replyTo,
    }),
  ];

  if (clientEmail && clientSubject && clientHtml) {
    jobs.push(
      transport.sendMail({
        from: `"Blue Lightning Decks & Patios" <${process.env.GMAIL_USER}>`,
        to: clientEmail,
        subject: clientSubject,
        html: clientHtml,
      })
    );
  }

  const results = await Promise.allSettled(jobs);
  results.forEach((r, i) => {
    if (r.status === "rejected") {
      console.error(`[mailer] Email job ${i} failed:`, r.reason);
    } else {
      console.log(`[mailer] Email job ${i} sent: ${(r.value as { messageId: string }).messageId}`);
    }
  });

  return results;
}
