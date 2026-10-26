# Trust claim audit

Audit date: 2026-10-26. Scope: public claims on www.derivion.in about qualifications, educators, outcomes and affiliations.
`npm run seo:check` blocks the removed claims ("UK-regulated", "Ofqual-regulated", outcome guarantees, `ChatGPT-Image` assets) so they cannot quietly return.

Classification: **Verified** (independent primary source) · **Partially verified** (business's own documents or a partner's statement only) · **Unverified** (no evidence found) · **Contradicted** (evidence says otherwise) · **Requires owner confirmation** (a business fact only the owner can supply).

Last updated: 2026-10-26 (phase 3: items 22–26 added).

## Qualification terms

| Term | What it is | Evidence |
| --- | --- | --- |
| Awarding organisation | **OCN London** | All 8 ISFT award brochures in `public/course-pdf/` ("Awarding organisation: OCN London") |
| Qualification type | **Bespoke qualification** (brochure header on all 8) | Brochures. OCN London defines bespoke qualifications as "non-regulated qualifications designed by your organisation and accredited by us"; learners receive a "record of achievement" ([OCN London](https://ocnlondon.org.uk/our-services/bespoke-qualifications/)) |
| Training provider / centre | Derivion International Private Limited (trading as ISFT), "an OCN London approved centre" | Brochures |
| Programme branding | "ISFT Awards", "ISFT by Derivion", "International School of Financial Trading/Training" | Brochures, LinkedIn ("ISFT by Derivion"), YouTube channel title |
| Regulation | **Not Ofqual-regulated** (bespoke) | As above |
| Course codes | 1131234 Applied FMT · 1131235 Intro Financial Markets · 1131236 Futures · 1131237 Risk Management · 1131238 Behavioural Psychology · 1131239 Government Bonds · 1131240 Technical Analysis · **Intro to Financial Trading: no code in brochure** | Brochures. Accredited 13/08/2026, review 13/08/2027 |

## Claim register

| # | Claim (rendered text) | Where | Status | Action taken | Owner must provide |
| --- | --- | --- | --- | --- | --- |
| 1 | "UK-regulated ISFT awards" / "UK-regulated ISFT qualifications" | `app/Pages/Partners/partners.tsx` stats and hero | **Contradicted**: own brochures say bespoke, which OCN London defines as non-regulated | Changed to "OCN London-accredited ISFT awards/qualifications" | OCN London centre approval letter and accreditation certificates for each course code |
| 2 | "validate UK-regulated delivery model in India" | `app/Pages/Home/Placement.tsx` | **Contradicted** for the ISFT awards; the release is about a different programme (see #6) | Replaced with an attributed, factual summary of the ZISHI release | — |
| 3 | "Is this qualification accredited? Yes. It is delivered under ISFT Awards…" (7 programmes) | `app/data/programmes.ts` FAQs | **Partially verified**: "ISFT Awards" is a brand, not an awarding body | Now: "a bespoke qualification accredited by OCN London (course code …) … not regulated by Ofqual" | As #1 |
| 4 | "Delivered under ISFT Awards with … external quality assurance" (8 highlights) and "recognised Level 3 qualification" (2) | `programmes.ts` | Partially verified / **Unverified** ("recognised") | Now names OCN London as accreditor; "recognised" removed | As #1 |
| 5 | Introduction to Financial Trading = "Level 3" | `programmes.ts` description | **Contradicted**: its brochure states no level, and other brochures call it the "Level 2 Award in Introduction to Financial Trading" | Level removed from its description; other programmes now refer to it by name, not level | The accredited level on the OCN London certificate |
| 6 | "100% of Participants Report Improved Financial Career Prospects", "5★", "100% would recommend" | `Placement.tsx` | **Partially verified**: published by partner ZISHI ([release, 23 Apr 2026](https://thezishi.com/news/2026/04/all-participants-report-improved-financial-career-prospects-f112hei/)) about the **ZISHI Level 5 Advanced Diploma in Financial Trading**, not the ISFT awards. No cohort size or survey method. Headline says "prospects"; the body measured "confidence and aspiration" | Headline now reflects what was measured; outcomes attributed to ZISHI with "cohort size and survey method not stated"; quote attribution adds "ZISHI"; "Explore Trading Diploma" CTA (no such programme on the site) renamed "Explore Programmes" | Cohort size, survey instrument and date; whether Derivion offers the Level 5 diploma (if so, it needs its own page) |
| 7 | "Where Our Graduates Work": J.P. Morgan, Barclays, Bank of England, Bank of America, eToro, Macquarie, JB Drax Honoré, Future First, Paragon, Rathbones logos | `app/Pages/Home/StudentSuccess.tsx` | **Unverified**: alumni data names only HSBC and "ZWC", neither in the logo list | Section no longer rendered (`app/page.tsx`); component kept | Per logo: named alumnus, role and consent. Note that third-party logos also need permission |
| 8 | Educator portraits for Robert Russel, David Michael, Jon Harman, Alex Wilson | `app/Pages/Home/Masters.tsx` (+ `public/Home/alex.png`) | **Contradicted as photographs**: each file carries an OpenAI C2PA manifest with `digitalSourceType: trainedAlgorithmicMedia` and no source-photo ingredient, i.e. generated, not an edited photo. Whether the people exist is **unverified** | Replaced with initials tiles. Names kept | Real photos with consent, short verifiable bios, or removal if the person is not a real educator |
| 9 | "Ex-Vice President at JP Morgan" (Jon Harman), "Senior Manager at cmegroup" (Alex Wilson) | `Masters.tsx` | **Unverified** | Neutralised to "Trainer" | LinkedIn or employer evidence and consent to state it |
| 10 | "Robert Russel, Trainer, payments and fraud awareness" | `Masters.tsx` | **Needs confirmation**: a Robert Russell is ZISHI's Global Head of Professional Trader Qualifications ([FOW](https://www.fow.com/insights/3700874-zishi-seeks-new-partners-to-replicate-ice-trading-diploma)) | Not changed beyond #8 | Confirm whether this is the same person and that he agrees to be listed as a Derivion trainer |
| 11 | Neil Crammond, Head Educator, "more than 40 years of professional trading experience" | `Masters.tsx`, `programmes.ts` | **Partially verified**: brochures name him as author and Head Educator with "over four decades" and LIFFE/CBOT/CME experience. Photo has no AI provenance data | Kept | Public profile or CV link to cite |
| 12 | Footer "3 Targeted Programmes" | `app/components/Footer.tsx` | **Contradicted** (11 programmes) | Now "3 Literacy Programmes" (accurate: Sprout, Bloom, Harvest) | — |
| 13 | Footer X link `https://x.com` | `Footer.tsx` | **Contradicted** (platform homepage, not a profile) | Removed; the check now fails on homepage-only social links | Real X handle if one exists |
| 14 | Instagram `isftglobal` | `Footer.tsx` | **Partially verified**: ISFT is the brochure trading name; the profile is behind a login wall | Kept | Confirm the account is Derivion's |
| 15 | LinkedIn, YouTube | `Footer.tsx`, Organization schema | **Verified**: pages resolve, titled "ISFT by Derivion" and "International School of Financial Training" | Kept; schema `alternateName` "ISFT by Derivion" added | — |
| 16 | Home "Explore All N Programmes & OCN Qualifications" | `app/Pages/Home/OurProgrammes.tsx` | Imprecise: the literacy programmes are not OCN qualifications | Now "& ISFT Awards" | — |
| 17 | "ISFT-certified market modules" | `partners.tsx` | **Unverified** term | Now "ISFT market modules" | — |
| 18 | Academic partners: Chandigarh University, Jaipuria Institute of Management, DOLA, Zenithwave Capital, ZISHI | `partners.tsx` | ZISHI **partially verified** (its own release names ISFT by Derivion); others **unverified** | Not changed (deliberate recent addition) | MoU, partner page or press release per institution, and logo permission |
| 19 | Alumni: Sudhanshu Dhankar (Analyst, HSBC), Nishant Dagar (Funded Trader), Aaryan Chakraborty and Sonia Poria (ZWC) | `app/Pages/Home/OurAlumni.tsx` | **Unverified**. Photos have no AI provenance data | Not changed | Written consent and role confirmation for each person |
| 20 | "Merit-based fee assistance available…", "Cohort sizes are intentionally limited", "Next cohort starts in Upcoming Month" | `programmes.ts`, programme CTA | **Unverified** (and "Upcoming Month" is not a date) | Not changed | Real policy and dates, or remove |
| 21 | Hidden mentor bios (e.g. "Derivion Regulatory & Cyber Council") | `programmes.ts` (section commented out, data still in page payload) | **Unverified** | ISFT mentor bios now say "aligned with ISFT programme standards" | Remove the unused data or verify it |
| 22 | Homepage hero "12+ Core Programmes" | `app/Pages/Home/hero.tsx` | **Contradicted** (11 programmes) | Now rendered from the programme data (`PROGRAMMES.length`), so it can't drift | — |
| 23 | Homepage hero "100% Practitioner Focus" | `hero.tsx` | **Requires owner confirmation**: a positioning slogan, not a measurable statistic | Not changed | Keep as a slogan, or replace with a factual line (e.g. "Programmes authored by a practising Head Educator", if confirmed) |
| 24 | Brochure wording: Level 2 references, "Standardised and accredited", no Ofqual statement, "recognisable certificate" (Sprout/Bloom) | `public/course-pdf/*.pdf` | **Contradicted / unverified** (see list) | Correction list and draft text in [brochure-corrections.md](brochure-corrections.md); PDFs not edited | OCN London confirmation before reissuing |
| 25 | Assessment format on ISFT pages (25-question MCQs, word counts, marking brief) | `app/data/programme-assessment.ts` (new) | **Partially verified**: taken verbatim from each brochure's "How you're assessed" section | Published on programme pages | Re-check if brochures are reissued |
| 26 | Floating "Hedge Front" blog button overlaps form fields and submit buttons near the bottom of the screen on mobile | `app/components/Footer.tsx` | UX issue, not a claim (pre-existing) | Not changed (design decision) | Decide whether to hide it on form pages or make it smaller on mobile |

The other images with OpenAI C2PA credentials (`about-1..4.png`, `about-us-pic.png`, `sprout.png`, `bloom.png`, `harvest.png`) are scene or programme illustrations and don't depict named people. They're fine as illustrations; don't caption them as real classes or learners.

## Public wording to use until certificates are on file

> ISFT awards are bespoke qualifications accredited by OCN London and delivered by Derivion International Private Limited (trading as ISFT), an OCN London approved centre. Bespoke qualifications are not regulated by Ofqual; learners receive an OCN London record of achievement.

Before restoring any removed claim, add the evidence link to this file and update `BLOCKED_CLAIMS` in `scripts/seo-check.mjs` if the wording changes.
