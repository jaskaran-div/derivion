"use client";

import Link from "next/link";
import { CONSENT_OPTIONS, type ConsentRole } from "@/app/lib/consent";

type Props = {
  idPrefix: string;
  value: ConsentRole | "";
  onChange: (role: ConsentRole) => void;
};

/** Required "who is submitting" step; see app/lib/consent.ts. */
export default function AgeConsent({ idPrefix, value, onChange }: Props) {
  return (
    <fieldset className="space-y-2 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 sm:p-4">
      <legend className="px-1 text-xs font-semibold text-[#374151]">
        Who is submitting this form? <span aria-hidden="true" className="text-[#C20F42]">*</span>
      </legend>
      {(Object.keys(CONSENT_OPTIONS) as ConsentRole[]).map((role) => (
        <label
          key={role}
          htmlFor={`${idPrefix}-consent-${role}`}
          className="flex items-start gap-2.5 text-xs leading-relaxed text-[#374151] cursor-pointer"
        >
          <input
            id={`${idPrefix}-consent-${role}`}
            type="radio"
            name={`${idPrefix}-consent`}
            value={role}
            required
            checked={value === role}
            onChange={() => onChange(role)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[#D6124B]"
          />
          <span>{CONSENT_OPTIONS[role]}</span>
        </label>
      ))}
      <p className="text-[11px] leading-relaxed text-[#6B7280]">
        If you are under 18, please ask a parent or guardian to complete this form. Read our{" "}
        <Link href="/privacy-policy" className="text-[#C20F42] font-medium hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </fieldset>
  );
}
