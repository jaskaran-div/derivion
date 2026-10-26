# Content governance: guides, authors and reviews

Applies to everything under `/learn` and to factual claims on programme pages. Financial and safety topics are "your money or your life" content: mistakes can cost readers money, so these rules are deliberately strict.

## How the article system works

- Articles are structured data in `app/data/articles.ts`, rendered by `app/learn/[slug]/page.tsx` and indexed at `/learn`.
- `status: "draft"` articles are **only built when `ARTICLES_PREVIEW=true`**. Set that variable in Vercel for the **Preview** environment only. On production, drafts return 404, are noindexed, are not linked and are not in the sitemap. `npm run seo:check` fails if a draft is reachable on a non-preview build.
- In preview, each draft shows a banner listing its `pendingApprovals`.
- `/learn` and published articles join the sitemap automatically once at least one article is published.
- Programme pages list "Related guides" automatically for visible articles whose `relatedProgrammes` include them.

## Publishing checklist (per article)

1. **Reviewer named and real.** Set `reviewer: { name, role }` only for a real person who has agreed to be named and who reviewed the final text. Never invent a reviewer, and never attribute authorship to someone who did not write or review it. Until then, the byline is "By Derivion".
2. **Every fact checked against its source.** Re-open each URL in `sources` on the day of publication. Regulatory details (RBI, SEBI, NPCI, MeitY, DoT) change; quote what the official page says now.
3. **Clear every item in `pendingApprovals`,** then delete the list.
4. **Worked examples labelled as illustrative,** and arithmetic re-checked.
5. **No profit, income or job promises.** Market articles keep `financialDisclaimer: true`.
6. **Dates:** set `publishedAt` to the actual publication date (ISO, e.g. `2026-11-15`). Set `updatedAt` only after a substantive revision. Never backdate.
7. Change `status` to `"published"`, run `npm run build` and `npm run seo:check`, deploy, and request indexing in Search Console.

## Review cycle

| Content | Review |
| --- | --- |
| Fraud and safety guides (UPI, deepfakes) | Every 6 months, and whenever the official reporting routes change |
| Market and regulation guides (G-secs, F&O risk) | Every 6 months, and after relevant RBI/SEBI changes |
| Concept guides (FA vs TA, position sizing) | Every 12 months |
| Programme pages | Whenever fees, cohorts, brochures or accreditation change |

When a review changes substance, update the text and `updatedAt`. If it finds an error, also add a one-line correction note at the end of the article saying what changed and when.

## Authors and credentials

- List only real educators, with their consent, real photographs and verifiable credentials. See [trust-audit.md](trust-audit.md) items 8–11.
- `Person` structured data for an author is added only once a real, consenting, named reviewer exists.

## Corrections policy (proposed public wording for the About page)

> We aim to keep our guides accurate and up to date. If you spot an error, email info@derivion.in. We correct factual errors promptly and note significant corrections on the page.

This policy is not published yet. Publish it only when someone is responsible for answering correction emails.
