import nodemailer from "nodemailer";

export function createMailTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secureSetting = process.env.SMTP_SECURE;

  if (!host || !user || !pass) {
    throw new Error(
      "Email configuration is not set. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and optionally SMTP_SECURE, SMTP_FROM, and CONTACT_TO."
    );
  }

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("SMTP_PORT must be a valid port number.");
  }

  if (secureSetting && secureSetting !== "true" && secureSetting !== "false") {
    throw new Error("SMTP_SECURE must be either true or false.");
  }

  const secure = secureSetting ? secureSetting === "true" : port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    ...(port === 587 && !secure ? { requireTLS: true } : {}),
    auth: { user, pass },
  });
}
