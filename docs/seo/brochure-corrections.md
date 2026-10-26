# Brochure correction list

Source files: `public/course-pdf/*.pdf` (text extracted 2026-10-26). These PDFs are linked from every programme page through the brochure form, so their claims are public.

**Important:** wording about qualification level, course codes and accreditation must match OCN London's records. Agree any change with OCN London (and keep their confirmation on file) **before** reissuing a PDF. The draft text below is a proposal, not approved wording. Do not edit certificate or accreditation details yourself.

## 1. Level of the Introduction to Financial Trading award (all ISFT brochures)

| Brochure | Current text | Problem |
| --- | --- | --- |
| ISFT-Award in Introduction to Financial Trading | No level stated anywhere; no OCN London course code | Every other ISFT award shows a level and a course code |
| ISFT-Award in Applied Financial Markets Trading | "Level 2 completers"; "learners who have completed a Level 2 introduction to financial trading"; "Completion of the Level 2 Award in Introduction to Financial Trading" | Names a Level 2 award that its own brochure doesn't confirm |
| ISFT-Award in Introduction to Financial Markets | "Level 2 completers"; "The Level 2 Award in Introduction to Financial Trading, or equivalent" | Same |
| ISFT-Award in Introduction to Behavioural Psychology in Trading | "Level 2 completers"; "The Level 2 Award in Introduction to Financial Trading, or…" | Same |
| ISFT-Award in Introduction to Futures Trading | "Level 2 completers"; "The Level 2 Award in Introduction to Financial Trading, or…" | Same |
| ISFT-Award in Introduction to Risk Management | "Level 2 completers"; "The Level 2 Award in Introduction to Financial Trading, or equivalent" | Same |

The website previously called this award "Level 3"; that has been removed pending confirmation.

**Action:** confirm the accredited level and course code with OCN London. Then either:
- **(a) if it is Level 2:** add "Level 2" and the course code to its own brochure (cover, "programme at a glance" and back page), and keep the other brochures as they are; or
- **(b) if it is another level:** replace "Level 2 completers" with "Introduction to Financial Trading completers" and "the Level 2 Award in Introduction to Financial Trading" with "the ISFT Award in Introduction to Financial Trading" in the five brochures above.

## 2. Regulation status (all eight ISFT brochures)

Each brochure is headed "BESPOKE QUALIFICATION" and names OCN London, but never says what that means for learners. Several also carry the badge "Standardised and accredited". OCN London describes bespoke qualifications as non-regulated, with learners receiving a record of achievement.

**Draft text** (for the "Awarding organisation" panel, subject to OCN London's approval):

> This is a bespoke qualification accredited by OCN London (course code ______). Bespoke qualifications are not regulated by Ofqual. On successful completion, learners receive an OCN London record of achievement.

**Draft replacement for the "Standardised and accredited" badge:** "Accredited by OCN London".

## 3. Certificates for the literacy programmes (Sprout, Bloom)

| Brochure | Current text | Problem |
| --- | --- | --- |
| ISFT sprout | "comparable outcomes, and a recognisable certificate at every stage" | Doesn't say who issues the certificate or what it certifies; "recognisable" is unsubstantiated |
| ISFT bloom | Same sentence | Same |

**Draft text:** "Learners who complete the programme receive a Derivion certificate of completion." Use this only if that is what's issued; otherwise describe the actual document.

## 4. Brand naming

The organisation appears under several names:
- "ISFT" and "ISFT by Derivion" (brochures, LinkedIn)
- "International School of Financial Training" (YouTube channel)
- "International School of Financial Trading" (ZISHI press release)

**Action:** choose one expansion of "ISFT" and use it everywhere (brochures, YouTube, LinkedIn, partner releases). The website's structured data uses `alternateName: "ISFT by Derivion"`.

## 5. After reissuing

1. Replace the PDFs in `public/course-pdf/`, keeping the same filenames (`programmes.ts` references them).
2. If the level or wording of an ISFT award changes, update `app/data/programmes.ts`, `app/data/programme-seo.ts` and `app/data/programme-assessment.ts` to match.
3. Update [trust-audit.md](trust-audit.md) items 1–5 with the evidence.
