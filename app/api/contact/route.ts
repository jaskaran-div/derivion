import { NextResponse } from "next/server";
import { escapeHtml } from "@/app/lib/email";
import { createMailTransporter } from "@/app/lib/mail-transport";
import { checkRateLimit } from "@/app/lib/rate-limit";
import { PROGRAMMES } from "@/app/data/programmes";

export async function POST(request: Request) {
  const rateLimit = checkRateLimit(request, "contact");
  if (rateLimit.limited) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      }
    );
  }

  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      programme: programmeSlug,
      background,
      counselingMode,
      message,
    } = body;

    // The form sends a slug; email the readable title and category instead.
    const selected = PROGRAMMES.find((p) => p.slug === programmeSlug);
    const programme = selected
      ? `${selected.title} (${selected.category})`
      : programmeSlug;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Full name, email, and phone are required." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_TO || "admissions@derivion.in";
    const fromAddress =
      process.env.SMTP_FROM ||
      `Derivion Admissions <${process.env.SMTP_USER || "admissions@derivion.in"}>`;
    const transporter = createMailTransporter();

    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#111827;">
        <h2 style="margin-bottom: 12px;">New Derivion Admission Inquiry</h2>
        <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Programme:</strong> ${escapeHtml(programme || "Not specified")}</p>
        <p><strong>Background:</strong> ${escapeHtml(background || "Not specified")}</p>
        <p><strong>Preferred Orientation Mode:</strong> ${escapeHtml(counselingMode || "Not specified")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "No additional message").replace(/\n/g, "<br />")}</p>
      </div>
    `;

    await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: email,
      subject: `Derivion Admission Inquiry - ${fullName}`,
      text: [
        `Full Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Programme: ${programme || "Not specified"}`,
        `Background: ${background || "Not specified"}`,
        `Preferred Orientation Mode: ${counselingMode || "Not specified"}`,
        "",
        `Message: ${message || "No additional message"}`,
      ].join("\n"),
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      {
        error:
          "The email could not be sent. Please verify your SMTP settings or contact the team directly.",
      },
      { status: 500 }
    );
  }
}
