# Measurement: GA4 events, Search Console and monitoring

No GA4 admin or Search Console access was available while this was prepared. Everything below that happens outside the codebase is a manual step for the account owner.

## 1. What the site now sends to GA4

Property `G-S92D0LHS76` (loaded in `app/layout.tsx`, `afterInteractive`). Events are sent through `app/lib/analytics.ts`, which never includes names, emails, phone numbers or message text.

| Event | When | Parameters | Source |
| --- | --- | --- | --- |
| `generate_lead` | Contact form submitted successfully (API returned 2xx) | `form_name: "contact"`, `programme` (slug) | `app/contact/ContactPageClient.tsx` |
| `generate_lead` | Partner form submitted successfully | `form_name: "partner"`, `partnership_model` | `app/Pages/Partners/partners.tsx` |
| `generate_lead` | Brochure form submitted successfully | `form_name: "brochure"`, `programme` (slug) | `app/programs/[slug]/ProgramDetailClient.tsx` |
| `contact_click` | Any `tel:` or `mailto:` link clicked | `method: "phone" \| "email"`, `page_path` | `app/components/ContactClickTracking.tsx` |
| `file_download` | Brochure PDF downloaded | GA4 automatic | GA4 enhanced measurement (no code) |

Each event fires once per successful submission: failed or invalid submissions send nothing. The events were verified in headless Chrome against stubbed APIs with GA network calls blocked, by reading `window.dataLayer`. They have **not** been seen in the GA4 property itself.

### Manual GA4 setup
1. **Admin → Events:** after deployment, wait for `generate_lead` to appear (or submit a real test enquiry), then mark it as a **Key event**. Optionally mark `contact_click` too.
2. **Admin → Custom definitions:** create event-scoped dimensions for `form_name`, `programme` and `partnership_model`, so you can report leads by form and programme.
3. **Admin → Data streams → Enhanced measurement:** confirm "File downloads" is on.
4. **Verify:** open the live site with GA4 **DebugView** (Tag Assistant), submit each form once, and confirm one event per submission.
5. **Link Search Console** to GA4 (Admin → Product links) for landing-page query data.

### Consent (business/legal decision)
GA loads on every page without a consent prompt; the new events don't change that. India's Digital Personal Data Protection Act, 2023 and visitors from the UK and EU (Derivion has a UK office) may require consent before analytics cookies are set. Decide with legal advice whether to add a consent banner and Google Consent Mode. If one is added, GA must wait for consent, and `trackEvent` will keep queuing to `dataLayer` as it does now.

## 2. Google Search Console checklist

1. **Add a property.** Prefer a *Domain* property (`derivion.in`, verified by a DNS TXT record at the registrar). Otherwise use a URL-prefix property for `https://www.derivion.in/`. DNS changes are an owner action.
2. **Submit the sitemap:** `https://www.derivion.in/sitemap.xml` (18 URLs today; `/learn` URLs are added automatically once guides are published).
3. **URL inspection** → "Request indexing" for `/`, `/programs`, `/about`, `/partners` and each `/programs/<slug>` page changed in this release.
4. **Page indexing report:** expect all 18 sitemap URLs to become "Indexed" over the following weeks. Investigate "Duplicate, Google chose different canonical" (none is expected: every page self-canonicalises to `https://www.derivion.in/...`).
5. **Enhancements:** check Breadcrumbs and any structured-data errors. Course markup is valid schema.org, but Google's Course rich results need price and schedule data the site doesn't publish, so don't expect them.
6. **Core Web Vitals report:** needs real Chrome users; may say "not enough data" for a small site.
7. **Security & Manual actions:** confirm both are empty.
8. **Performance report:** after about 4 weeks, filter queries containing "derivion" or "isft" (brand) against everything else (non-brand), and record the baseline below.

## 3. Monitoring plan

| When | What to record or do |
| --- | --- |
| After every deploy | `node scripts/seo-check.mjs https://www.derivion.in --external` must pass |
| Day 7 | Sitemap read successfully; key URLs inspected; GA4 key events firing |
| Day 30 (baseline) | Indexed pages / 18; impressions, clicks, CTR, brand vs non-brand; top 20 queries; `generate_lead` count by `form_name` and landing page |
| Day 60 | Pages with impressions but CTR below the site average → rewrite titles and descriptions (from facts only). Replace `unknown` volumes in `keyword-map.csv` with GSC impressions (source "GSC") |
| Day 90 | Compare with the baseline; decide which guide clusters to expand; review leads per programme |

Record actual numbers in a dated table here. Don't treat rankings or traffic as targets or promises.

## Baseline (fill in)

| Metric | Day 30 | Day 60 | Day 90 |
| --- | --- | --- | --- |
| Indexed sitemap URLs | | | |
| Non-brand impressions (28 days) | | | |
| Non-brand clicks (28 days) | | | |
| Organic `generate_lead` (28 days) | | | |
