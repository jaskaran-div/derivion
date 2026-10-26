# Release checklist (SEO release candidate)

Nothing has been committed, pushed or deployed. Deploy through the normal Vercel workflow after review.

## Before merging

- [ ] Review the diff (`git diff`, plus the new files under `app/learn`, `app/data`, `app/lib`, `app/components`, `docs/seo`, `scripts`).
- [ ] Owner decisions in [trust-audit.md](trust-audit.md), in particular whether to keep the employer-logo section hidden and the educator initials tiles.
- [ ] In Vercel → Settings → Environment Variables: add `ARTICLES_PREVIEW=true` for **Preview only**. Never set it for Production.

## Preview deployment checks (Vercel preview URL)

| Area | Check |
| --- | --- |
| Homepage | Hero heading visible immediately; programme count reads 11; employer-logo strip absent; mentor cards show initials for cards 2–5; sections below the fold still animate in on scroll |
| About | New "Qualifications & Accreditation" section (`/about#qualifications`); breadcrumb readable |
| Catalogue `/programs` | Two-track intro sentence; filters and search work |
| ISFT programme pages (8) | Assessment section and "Assessment" sub-nav link; curriculum tabs switch; FAQ opens; risk notice with SEBI and About links; related programmes; brochure form downloads the PDF |
| Literacy pages (3) | No assessment section or risk notice (expected); related programmes link to each other |
| Partners | Stats say "OCN London-accredited"; form submits |
| Contact | `?programme=` pre-selects; form submits; phone/email links work |
| Guides (preview only) | `/learn` lists 5 drafts; each shows the draft banner; tables scroll sideways on mobile; source links open |
| Mobile | Menu opens and closes; no horizontal page scroll; floating blog button doesn't block form submit buttons (known pre-existing overlap; see trust-audit) |
| Social links | Footer shows LinkedIn, Instagram, YouTube only |
| SEO check | `node scripts/seo-check.mjs <preview-url> --preview --external` (Vercel preview protection may need to be disabled or bypassed for the script) |

Note: preview URLs are `*.vercel.app` and carry the production canonical (`https://www.derivion.in/...`), which is correct. Vercel adds an `X-Robots-Tag: noindex` header to preview deployments by default; `--preview` makes the checker ignore that header.

## After production deployment

```bash
# 1. Automated SEO checks against production (should exit 0)
node scripts/seo-check.mjs https://www.derivion.in --external

# 2. Drafts must not be reachable on production (expect 404 for each)
for s in upi-and-digital-payment-scams deepfake-and-voice-clone-scams position-sizing-and-leverage government-securities-india fundamental-vs-technical-analysis; do curl -s -o /dev/null -w "%{http_code} /learn/$s\n" https://www.derivion.in/learn/$s; done

# 3. Hostname and redirect behaviour (expect 301 → https://www.derivion.in/, 308 for the trailing slash)
curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\n" https://derivion.in/
curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\n" https://www.derivion.in/about/

# 4. Sitemap and robots
curl -s https://www.derivion.in/sitemap.xml | grep -c "<loc>"       # expect 18
curl -s https://www.derivion.in/robots.txt
```

Then:
- Google Rich Results Test on `/`, one `/programs/<slug>` page and `/about`: no errors.
- Search Console: steps in [measurement.md](measurement.md) §2.
- GA4 DebugView: one `generate_lead` per test submission.
