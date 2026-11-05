// Age and consent declaration for sign-up forms. Under India's DPDP Act 2023,
// personal data of anyone under 18 may only be processed with the verifiable
// consent of a parent or lawful guardian, so every form that collects a
// learner's details asks who is submitting it. See app/privacy-policy.

export const CONSENT_OPTIONS = {
  adult: "I am 18 or older and I am submitting my own details.",
  guardian:
    "I am the parent or lawful guardian of a learner under 18, and I consent to Derivion processing their details as described in the Privacy Policy.",
} as const;

export type ConsentRole = keyof typeof CONSENT_OPTIONS;

export function parseConsentRole(value: unknown): ConsentRole | null {
  return value === "adult" || value === "guardian" ? value : null;
}

/** One line for the lead email, so the declaration is kept on record. */
export function consentRecord(role: ConsentRole): string {
  return `${role === "adult" ? "Adult (18+)" : "Parent or guardian of a learner under 18"}: "${CONSENT_OPTIONS[role]}" (declared ${new Date().toISOString()})`;
}
