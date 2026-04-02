import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, email, phone, city, projectType, budget, referral, description, callTime } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
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
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone</div>
        <div class="value"><a href="tel:${phone}">${phone}</a></div>
      </div>
      <div class="field">
        <div class="label">City / Location</div>
        <div class="value">${city || "Not provided"}</div>
      </div>
      <div class="field">
        <div class="label">Project Type</div>
        <div class="value">${projectType || "Not specified"}</div>
      </div>
      <div class="field">
        <div class="label">Budget Range</div>
        <div class="value">${budget || "Not specified"}</div>
      </div>
      ${description ? `
      <div class="field">
        <div class="label">Project Description</div>
        <div class="value">${description}</div>
      </div>
      ` : ""}
      ${callTime ? `
      <div class="field">
        <div class="label">Best Time to Call</div>
        <div class="value">${callTime}</div>
      </div>
      ` : ""}
      ${referral ? `
      <div class="field">
        <div class="label">How they found you</div>
        <div class="value">${referral}</div>
      </div>
      ` : ""}
      <a href="mailto:${email}" class="cta">Reply to ${name}</a>
    </div>
    <div class="footer">
      Sent automatically from bluelightning.us · Blue Lightning Decks &amp; Patios
    </div>
  </div>
</body>
</html>
    `;

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
    .body strong { color: #0D0D0D; }
    .next-steps { background: #f9f7f0; border-left: 3px solid #C9A84C; padding: 16px 20px; border-radius: 0 6px 6px 0; margin: 24px 0; }
    .next-steps p { margin: 0 0 8px; }
    .next-steps p:last-child { margin: 0; }
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
      <p>📞 <a href="tel:+17034239965" style="color: #C9A84C;">(703) 423-9965</a><br />
      ✉ <a href="mailto:mc@bluelightning.us" style="color: #C9A84C;">mc@bluelightning.us</a></p>
    </div>
    <div class="footer">
      <p>Blue Lightning Decks &amp; Patios · Herndon, VA · <a href="https://bluelightning.us">bluelightning.us</a></p>
    </div>
  </div>
</body>
</html>
    `;

    const [leadEmail, confirmEmail] = await Promise.all([
      resend.emails.send({
        from: "Blue Lightning Website <noreply@bluelightning.us>",
        to: ["mc@bluelightning.us", "info@bluelightning.us"],
        subject: `🔔 New Lead: ${name} — ${projectType || "Consultation Request"}`,
        html: leadEmailHtml,
        replyTo: email,
      }),
      resend.emails.send({
        from: "Blue Lightning Decks & Patios <noreply@bluelightning.us>",
        to: [email],
        subject: "We received your request — Blue Lightning Decks & Patios",
        html: confirmationEmailHtml,
      }),
    ]);

    if (leadEmail.error || confirmEmail.error) {
      console.error("Resend error:", leadEmail.error || confirmEmail.error);
      return NextResponse.json({ error: "Email delivery failed." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error. Please call (703) 423-9965 directly." }, { status: 500 });
  }
}
