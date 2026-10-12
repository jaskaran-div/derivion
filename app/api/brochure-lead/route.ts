import { NextResponse } from "next/server";
import { getProgrammeBySlug } from "@/app/data/programmes";
import { escapeHtml } from "@/app/lib/email";
import { createMailTransporter } from "@/app/lib/mail-transport";
import { checkRateLimit } from "@/app/lib/rate-limit";

export async function POST(request: Request) {
  const rateLimit = checkRateLimit(request, "brochure-lead");
  if (rateLimit.limited) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const fullName = typeof payload.fullName === "string" ? payload.fullName.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const programmeSlug =
    typeof payload.programmeSlug === "string" ? payload.programmeSlug : "";

  if (
    !fullName ||
    fullName.length > 120 ||
    !email ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !phone ||
    phone.length > 30
  ) {
    return NextResponse.json(
      { error: "Enter a valid name, phone number, and email address." },
      { status: 400 }
    );
  }

  const programme = getProgrammeBySlug(programmeSlug);
  if (!programme) {
    return NextResponse.json({ error: "The selected programme was not found." }, { status: 400 });
  }

  const recipient = process.env.CONTACT_TO || "admissions@derivion.in";
  const fromAddress = process.env.SMTP_FROM || `Derivion Admissions <${process.env.SMTP_USER}>`;

  try {
    const transporter = createMailTransporter();
    await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: email,
      subject: `Brochure Download Lead - ${programme.title}`,
      text: [
        "New Derivion brochure download lead",
        `Name: ${fullName}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Programme: ${programme.title}`,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2>New Derivion Brochure Download Lead</h2>
          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Programme:</strong> ${escapeHtml(programme.title)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Brochure lead email error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error && error.message.startsWith("Email configuration")
            ? error.message
            : "We could not submit your details. Check your SMTP settings and try again.",
      },
      { status: 500 }
    );
  }
}
