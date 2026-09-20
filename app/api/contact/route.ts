import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      programme,
      background,
      counselingMode,
      message,
    } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Full name, email, and phone are required." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipient = process.env.CONTACT_TO || "admissions@derivion.in";
    const fromAddress =
      process.env.SMTP_FROM ||
      (smtpUser ? `Derivion Admissions <${smtpUser}>` : "Derivion Admissions <admissions@derivion.in>");

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error:
            "Email configuration is not set. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and optionally CONTACT_TO in your environment variables.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#111827;">
        <h2 style="margin-bottom: 12px;">New Derivion Admission Inquiry</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Programme:</strong> ${programme || "Not specified"}</p>
        <p><strong>Background:</strong> ${background || "Not specified"}</p>
        <p><strong>Preferred Orientation Mode:</strong> ${counselingMode || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "No additional message").replace(/\n/g, "<br />")}</p>
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
