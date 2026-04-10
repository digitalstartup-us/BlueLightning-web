/**
 * Email utility — Gmail SMTP via nodemailer.
 *
 * Required env vars:
 *   GMAIL_USER  — Gmail address used as SMTP sender
 *                 e.g. caballeromauricio766@gmail.com
 *   GMAIL_PASS  — Gmail App Password (16 chars, no spaces)
 *                 How to get it:
 *                 1. Go to myaccount.google.com with GMAIL_USER
 *                 2. Security → 2-Step Verification (enable if needed)
 *                 3. Security → App Passwords → Create → copy 16-char password
 *                 4. Paste here WITHOUT spaces (e.g. abcdabcdabcdabcd)
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
  const info = await transport.sendMail({
    from: `"Blue Lightning Leads" <${process.env.GMAIL_USER}>`,
    to: TEAM_EMAILS,
    subject,
    html,
    replyTo,
  });
  console.log(`[mailer] Lead email sent: ${info.messageId}`);
  return info;
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
  const info = await transport.sendMail({
    from: `"Blue Lightning Decks & Patios" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
  });
  console.log(`[mailer] Client confirmation sent: ${info.messageId}`);
  return info;
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
      console.log(`[mailer] Email job ${i} sent OK`);
    }
  });

  return results;
}
