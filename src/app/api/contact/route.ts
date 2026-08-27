import { NextRequest, NextResponse } from "next/server";
import { sendBothEmails } from "@/lib/mailer";
import { saveLead, markEmailStatus } from "@/lib/leads";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, city, projectType, budget, referral, description, callTime, formSource } = body;

    // The quick form on the homepage only asks for name and phone, so email is
    // optional: without it we notify the team but skip the client confirmation.
    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    const leadEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 30px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.1); }
    .header { background: #0D0D0D; padding: 28px 32px; }
    .header h1 { color: #C9A84C; font-size: 22px; margin: 0; font-weight: 400; }
    .header p { color: #8A8A8A; font-size: 13px; margin: 6px 0 0; }
    .body { padding: 28px 32px; }
    .field { margin-bottom: 16px; border-bottom: 1px solid #f0f0f0; padding-bottom: 16px; }
    .field:last-child { border-bottom: none; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #999; margin-bottom: 4px; }
    .value { font-size: 15px; color: #222; font-weight: 500; }
    .footer { background: #f9f9f9; padding: 16px 32px; font-size: 12px; color: #999; border-top: 1px solid #eee; }
    .cta { display: inline-block; margin-top: 20px; padding: 12px 24px; background: #C9A84C; color: #0D0D0D; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 13px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 New Lead — Blue Lightning Decks & Patios</h1>
      <p>A potential client just submitted a consultation request from your website.</p>
    </div>
    <div class="body">
      <div class="field"><div class="label">Full Name</div><div class="value">${name}</div></div>
      <div class="field"><div class="label">Email</div><div class="value">${email ? `<a href="mailto:${email}">${email}</a>` : "Not provided"}</div></div>
      <div class="field"><div class="label">Phone</div><div class="value"><a href="tel:${phone}">${phone}</a></div></div>
      <div class="field"><div class="label">City / Location</div><div class="value">${city || "Not provided"}</div></div>
      <div class="field"><div class="label">Project Type</div><div class="value">${projectType || "Not specified"}</div></div>
      <div class="field"><div class="label">Budget Range</div><div class="value">${budget || "Not specified"}</div></div>
      ${description ? `<div class="field"><div class="label">Project Description</div><div class="value">${description}</div></div>` : ""}
      ${callTime ? `<div class="field"><div class="label">Best Time to Call</div><div class="value">${callTime}</div></div>` : ""}
      ${referral ? `<div class="field"><div class="label">How they found you</div><div class="value">${referral}</div></div>` : ""}
      <div class="field"><div class="label">Submitted from</div><div class="value">${formSource || "Contact page"}</div></div>
      <a href="${email ? `mailto:${email}` : `tel:${phone}`}" class="cta">${email ? `Reply to ${name}` : `Call ${name}`}</a>
    </div>
    <div class="footer">Sent automatically from bluelightning.us · Blue Lightning Decks &amp; Patios</div>
  </div>
</body>
</html>`;

    const confirmationEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 30px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.1); }
    .header { background: #0D0D0D; padding: 32px; text-align: center; }
    .header h1 { color: #C9A84C; font-size: 24px; margin: 0 0 8px; font-weight: 400; }
    .header p { color: #8A8A8A; font-size: 13px; margin: 0; }
    .body { padding: 32px; }
    .body p { color: #444; font-size: 15px; line-height: 1.7; }
    .next-steps { background: #f9f7f0; border-left: 3px solid #C9A84C; padding: 16px 20px; border-radius: 0 6px 6px 0; margin: 24px 0; }
    .footer { background: #0D0D0D; padding: 20px 32px; text-align: center; }
    .footer p { color: #666; font-size: 12px; margin: 0; }
    .footer a { color: #C9A84C; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank you, ${name.split(" ")[0]}.</h1>
      <p>Blue Lightning Decks &amp; Patios · Northern Virginia</p>
    </div>
    <div class="body">
      <p>We received your consultation request and Mauricio will personally review your project details.</p>
      <p>You can expect a call or email within <strong>24 hours</strong> — usually much sooner.</p>
      <div class="next-steps">
        <p><strong>What happens next:</strong></p>
        <p>✦ Mauricio reviews your project details personally</p>
        <p>✦ A brief discovery call to understand your vision</p>
        <p>✦ We confirm if your project qualifies for a free 3D design</p>
        <p>✦ Detailed proposal with timeline and scope</p>
      </div>
      <p>In the meantime, you can reach us directly:</p>
      <p>📞 <a href="tel:+17034239965" style="color:#C9A84C">(703) 423-9965</a><br />
      ✉ <a href="mailto:mc@bluelightning.us" style="color:#C9A84C">mc@bluelightning.us</a></p>
    </div>
    <div class="footer">
      <p>Blue Lightning Decks &amp; Patios · Herndon, VA · <a href="https://bluelightning.us">bluelightning.us</a></p>
    </div>
  </div>
</body>
</html>`;

    // Store before sending: if Resend is down, the lead still survives.
    const leadId = await saveLead({
      name,
      phone,
      email,
      city,
      projectType,
      budget,
      referral,
      description,
      callTime,
      formSource,
    });

    let emailSent = false;
    try {
      await sendBothEmails({
        leadSubject: `🔔 New Lead: ${name} — ${projectType || "Consultation Request"}`,
        leadHtml: leadEmailHtml,
        replyTo: email,
        clientEmail: email,
        clientSubject: "We received your request — Blue Lightning Decks & Patios",
        clientHtml: confirmationEmailHtml,
      });
      emailSent = true;
    } catch (err) {
      console.error("Contact API — email delivery failed:", err);
      // A stored lead is not a lost lead. Only show the visitor an error when
      // both the database and the email failed, otherwise we would push them to
      // resubmit a request we already have.
      if (!leadId) {
        return NextResponse.json(
          { error: "Server error. Please call (703) 423-9965 directly." },
          { status: 500 }
        );
      }
    }

    if (leadId) await markEmailStatus(leadId, emailSent);

    return NextResponse.json({
      success: true,
      confirmationSent: emailSent && Boolean(email),
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error. Please call (703) 423-9965 directly." }, { status: 500 });
  }
}
