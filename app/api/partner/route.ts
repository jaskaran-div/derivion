import { NextResponse } from "next/server";
import { escapeHtml } from "@/app/lib/email";
import { createMailTransporter } from "@/app/lib/mail-transport";
import { checkRateLimit } from "@/app/lib/rate-limit";

const FIELDS = [
  ["fullName", "Full Name"],
  ["email", "Work Email"],
  ["phone", "Phone"],
  ["organisation", "Organisation"],
  ["designation", "Designation"],
  ["partnershipModel", "Partnership Model"],
  ["cohortSize", "Expected Cohort Size"],
  ["message", "Objectives"],
] as const;

export async function POST(request: Request) {
  const rateLimit = checkRateLimit(request, "partner");
  if (rateLimit.limited) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      }
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const data = Object.fromEntries(
    FIELDS.map(([key]) => {
      const value = payload?.[key];
      return [key, typeof value === "string" ? value.trim().slice(0, 2000) : ""];
    })
  ) as Record<(typeof FIELDS)[number][0], string>;

  if (
    !data.fullName ||
    !data.organisation ||
    !data.phone ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    return NextResponse.json(
      { error: "Name, organisation, phone, and a valid work email are required." },
      { status: 400 }
    );
  }

  const recipient = process.env.CONTACT_TO || "admissions@derivion.in";
  const fromAddress =
    process.env.SMTP_FROM ||
    `Derivion Partnerships <${process.env.SMTP_USER || "admissions@derivion.in"}>`;

  try {
    const transporter = createMailTransporter();
    await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: data.email,
      subject: `Partnership Inquiry - ${data.organisation}`,
      text: FIELDS.map(([key, label]) => `${label}: ${data[key] || "Not specified"}`).join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; color:#111827;">
          <h2 style="margin-bottom: 12px;">New Derivion Partnership Inquiry</h2>
          ${FIELDS.map(
            ([key, label]) =>
              `<p><strong>${label}:</strong> ${escapeHtml(data[key] || "Not specified").replace(/\n/g, "<br />")}</p>`
          ).join("")}
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Partner inquiry email error:", error);
    return NextResponse.json(
      {
        error:
          "The inquiry could not be sent. Please verify your SMTP settings or contact the team directly.",
      },
      { status: 500 }
    );
  }
}
