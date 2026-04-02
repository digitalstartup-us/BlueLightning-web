import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, transcript } = await req.json();

    const now = new Date().toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "full", timeStyle: "short" });

    // ── Email to the team ──────────────────────────────────────────
    const teamHtml = `
<!DOCTYPE html><html>
<head><meta charset="utf-8"><style>
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0A0A0A;color:#F5F0E8;margin:0;padding:0}
.container{max-width:620px;margin:0 auto;padding:32px 24px}
.header{background:linear-gradient(135deg,#C9A84C,#A8873C);border-radius:12px;padding:24px;margin-bottom:24px;text-align:center}
.header h1{color:#0D0D0D;font-size:1.4rem;margin:0;font-weight:700}
.header p{color:rgba(13,13,13,0.7);margin:4px 0 0;font-size:0.85rem}
.card{background:#141414;border:1px solid rgba(201,168,76,0.2);border-radius:12px;padding:20px;margin-bottom:16px}
.label{color:#C9A84C;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:4px}
.value{color:#F5F0E8;font-size:1rem}
.transcript{background:#0D0D0D;border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:16px;font-size:12px;line-height:1.7;color:#8A8A8A;white-space:pre-wrap;max-height:400px;overflow-y:auto}
.cta{background:#C9A84C;color:#0D0D0D;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:700;font-size:13px;display:inline-block;margin-top:8px}
.footer{text-align:center;margin-top:24px;color:#555;font-size:11px}
</style></head>
<body><div class="container">
<div class="header">
  <h1>🔥 New AI Chat Lead</h1>
  <p>${now}</p>
</div>

<div class="card">
  <div class="label">Contact Info</div>
  <div class="value" style="font-size:1.2rem;font-weight:600">${name}</div>
  <div style="margin-top:8px"><a href="mailto:${email}" style="color:#C9A84C">${email}</a></div>
  ${phone ? `<div style="margin-top:4px"><a href="tel:${phone.replace(/\D/g,'')}" style="color:#C9A84C">${phone}</a></div>` : ""}
  <a href="mailto:${email}?subject=Following up from Blue Lightning AI Chat&body=Hi ${name}, thank you for chatting with our AI consultant today. I'd love to schedule a free consultation..." class="cta">Reply to ${name}</a>
</div>

<div class="card">
  <div class="label">Full AI Conversation Transcript</div>
  <div class="transcript">${transcript.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
</div>

<div class="footer">Blue Lightning Decks &amp; Patios · (703) 423-9965 · mc@bluelightning.us</div>
</div></body></html>`;

    // ── Email to the homeowner ─────────────────────────────────────
    const clientHtml = `
<!DOCTYPE html><html>
<head><meta charset="utf-8"><style>
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0A0A0A;color:#F5F0E8;margin:0;padding:0}
.container{max-width:600px;margin:0 auto;padding:32px 24px}
.header{text-align:center;margin-bottom:32px}
.header h1{font-size:1.6rem;font-weight:300;color:#F5F0E8;margin-bottom:8px}
.gold{color:#C9A84C}
.card{background:#141414;border:1px solid rgba(201,168,76,0.15);border-radius:12px;padding:24px;margin-bottom:16px}
.team{display:flex;gap:16px;margin-top:16px}
.person{flex:1;text-align:center}
.person .name{color:#F5F0E8;font-size:0.9rem;font-weight:500}
.person .role{color:#8A8A8A;font-size:11px;margin-top:2px}
.person a{color:#C9A84C;font-size:11px}
.cta-btn{background:#C9A84C;color:#0D0D0D;text-decoration:none;padding:14px 28px;border-radius:10px;font-weight:700;font-size:13px;display:inline-block;text-align:center}
.footer{text-align:center;margin-top:32px;color:#555;font-size:11px}
</style></head>
<body><div class="container">
<div class="header">
  <img src="https://luxury-decks.vercel.app/blue-lightning-logo.png" alt="Blue Lightning" style="height:40px;margin-bottom:16px" onerror="this.style.display='none'">
  <h1>We received your request, <span class="gold">${name}.</span></h1>
  <p style="color:#8A8A8A;font-size:0.95rem;line-height:1.7">
    Thank you for chatting with our AI design consultant. Our team has reviewed your conversation and will be in touch within 24 hours to discuss your project.
  </p>
</div>

<div class="card" style="text-align:center">
  <div style="color:#C9A84C;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:12px">Your Next Step</div>
  <p style="color:#F5F0E8;font-size:1rem;margin-bottom:16px;line-height:1.6">
    Call Gary or Mauricio directly for the fastest response — or reply to this email and we'll schedule your free consultation.
  </p>
  <a href="tel:+17034239965" class="cta-btn">📞 Call (703) 423-9965</a>
</div>

<div class="card">
  <div style="color:#C9A84C;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:12px">Your Team</div>
  <div class="team">
    <div class="person">
      <div class="name">Gary Anderson</div>
      <div class="role">Senior Sales Consultant</div>
      <a href="mailto:gary@bluelightning.us">gary@bluelightning.us</a>
    </div>
    <div class="person">
      <div class="name">Mauricio Caballero</div>
      <div class="role">CEO & Design Consultant</div>
      <a href="mailto:mc@bluelightning.us">mc@bluelightning.us</a>
    </div>
  </div>
</div>

<div class="footer">
  Blue Lightning Decks &amp; Patios · Northern Virginia's Premier Outdoor Living Firm<br>
  850+ Projects Completed · Class A Licensed · Fully Insured
</div>
</div></body></html>`;

    // Send both emails in parallel
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await Promise.allSettled([
        resend.emails.send({
          from: "Blue Lightning AI <noreply@bluelightning.us>",
          to: ["mc@bluelightning.us", "gary@bluelightning.us"],
          subject: `🔥 AI Chat Lead: ${name} — Ready to Talk`,
          html: teamHtml,
          replyTo: email,
        }),
        resend.emails.send({
          from: "Blue Lightning Decks & Patios <noreply@bluelightning.us>",
          to: [email],
          subject: `We received your request — Blue Lightning Decks & Patios`,
          html: clientHtml,
        }),
      ]);
    } else {
      // Log to console if Resend not configured (dev mode)
      console.log("=== CHAT LEAD (Resend not configured) ===");
      console.log("Name:", name, "| Email:", email, "| Phone:", phone);
      console.log("Transcript preview:", transcript.slice(0, 200));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Chat summary error:", err);
    return NextResponse.json({ error: "Summary failed" }, { status: 500 });
  }
}
