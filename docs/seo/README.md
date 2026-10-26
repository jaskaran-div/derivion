# Derivion SEO — audit, strategy and maintenance

Last updated: 2026-10-26 (phase 3).

| Document | Purpose |
| --- | --- |
| [trust-audit.md](trust-audit.md) | Register of public claims, evidence and status (26 items) |
| [brochure-corrections.md](brochure-corrections.md) | Inconsistencies in the course PDFs and draft corrections |
| [keyword-map.csv](keyword-map.csv) | 38 keyword rows mapped to existing, drafted and proposed URLs |
| [content-plan.md](content-plan.md) | Competitor gaps, clusters, 90-day roadmap, authority and local SEO |
| [content-governance.md](content-governance.md) | How guides are drafted, reviewed, published and maintained |
| [measurement.md](measurement.md) | GA4 events, Search Console setup and the monitoring plan |
| [release-checklist.md](release-checklist.md) | Preview checks and production validation commands |

## 1. Stack

- Next.js 16.3.4 App Router, React 19, Tailwind 4, Vercel. npm (`package-lock.json`). Scripts: `dev`, `build`, `start`, `lint`, `seo:check`. There is no unit or integration test suite in the repo.
- Canonical host: `https://www.derivion.in`. `derivion.in` and `http://` redirect (301) to it, trailing slashes redirect (308) to the slash-less URL, and unknown slugs return 404. Verified live.
- Content is TypeScript data, with no CMS:
  - `app/data/programmes.ts`
  - `programme-seo.ts` (titles and descriptions)
  - `programme-assessment.ts` (from the brochures)
  - `articles.ts` (guides)
- Metadata: `createPageMetadata` in `app/lib/seo.ts`. Structured data: `app/components/JsonLd.tsx`.
- Fonts: system Arial stack, so there's no web-font loading. Analytics: GA4 via `next/script`, plus the events in `app/lib/analytics.ts`.

## 2. Route inventory and indexing policy

| Route | Type | Indexable | Structured data | Notes |
| --- | --- | --- | --- | --- |
| `/` | Home | Yes | Organization, WebSite | Title: brand + topic + tagline |
| `/programs` | Catalogue | Yes | Breadcrumb, ItemList | Filters are client state only (no URL variants) |
| `/programs/[slug]` ×11 | Programme | Yes | Breadcrumb, Course | All modules in HTML. ISFT pages add assessment and risk notice. Related programmes and guides |
| `/about` | About | Yes | Breadcrumb | Includes `#qualifications` (OCN London explanation) |
| `/partners` | Institutional | Yes | Breadcrumb | |
| `/contact` | Contact | Yes | Breadcrumb | `?programme=` canonicalises to `/contact` |
| `/privacy-policy`, `/terms-of-service` | Legal | Yes | — | |
| `/learn`, `/learn/[slug]` | Guides | Only once published | Breadcrumb, Article | Drafts build only with `ARTICLES_PREVIEW=true`. On production: 404, noindex, not in sitemap |
| `/api/*` | API | No (robots) | — | Rate-limited; robots.txt is not used as access control |
| 404 | Error | No (noindex) | — | Real 404 status |

Every indexable page self-canonicalises to the www host. The sitemap lists exactly the indexable pages: 18 today, plus guides when published. `lastModified` is omitted on purpose because no reliable change date exists.

## 3. Work completed, by phase

**Phase 1 (technical and on-page).**
- Intent-led titles and descriptions; no doubled brand in titles.
- All curriculum modules in the HTML.
- Course, Breadcrumb, ItemList and Organization structured data.
- Related-programme links; skip-link fix; alt text; footer converted to a server component.

**Phase 2 (trust).** Details are in trust-audit.md items 1–21.
- "UK-regulated" claims removed: the ISFT awards are OCN London bespoke (non-regulated) qualifications.
- OCN London and course codes named in FAQs.
- Press-release outcomes attributed to ZISHI.
- Employer logos hidden; AI-generated portraits replaced; footer count and X link fixed.
- SEBI-cited risk notice added; `/about#qualifications` section added.

**Phase 3 (this release).**
- **Performance:** `AnimateOnScroll` now renders content visible on the server and only hides and animates elements that start below the fold. Previously every hero was `opacity:0` until JavaScript ran. Also: the floating footer image is optimised (it had optimisation switched off), and the browser connects to Google Tag Manager early.
- **Accessibility:** breadcrumb and filter-button contrast fixed; heading order on programme pages fixed (h4 → h3); non-descriptive "Learn More" link renamed "About Derivion"; anchored sections keep their headings clear of the sticky navigation.
- **Content:** an assessment section on all 8 ISFT pages, taken from the brochures; a `/learn` article system with 5 reviewed-ready **drafts** (UPI scams, deepfakes, position sizing, government securities, fundamental vs technical analysis); related-guides links on programme pages.
- **Trust:** the hero's "12+ programmes" now uses the real count (11); brochure correction list written.
- **Analytics:** `generate_lead` on the contact, partner and brochure forms, and `contact_click` on phone and email links. No personal data is sent.
- **SEO check:** Article schema required on guides; drafts must 404 outside preview; draft pages must never be in the sitemap; `--preview` mode added.

## 4. Performance measurements

All local, against a production build (`next start`), on this workstation. These are lab numbers, not field data; Core Web Vitals field data will come from Search Console and CrUX after deployment.

**Time until the page's `<h1>` is actually visible.** Mobile emulation, 4× CPU throttle, ~150 ms RTT, 1.6 Mbps; median of 5 runs. The production `AnimateOnScroll` was temporarily restored for the "before" build.

| Page | Before | After (= first paint) |
| --- | --- | --- |
| `/` | 8.8 s | 2.5 s |
| `/programs` | 7.3 s | 2.4 s |
| `/programs/isft-award-in-introduction-to-futures-trading` | 7.9 s | 3.3 s |
| `/about` | 8.2 s | 3.4 s |

**Lighthouse 12.8.2** (mobile, simulated throttling). Performance scores stayed in the 39–55 range between runs, because Lighthouse's simulated LCP still charges for JavaScript execution: the Next.js runtime plus GA's gtag.js, which blocked the main thread for 470–690 ms. Accessibility rose from 94–96 to **100** on all five pages audited, and SEO from 92 (home) to **100**.

**Remaining bottlenecks (not changed; design or business decisions):**
- Homepage hero video: 2.2 MB `mp4`, autoplaying on mobile.
- gtag.js main-thread cost. It could load with `lazyOnload`, at the cost of missing very short visits.
- Several large AI-illustration PNGs, served through `next/image` (so already resized).

## 5. Keyword strategy

See keyword-map.csv and content-plan.md. **No measured search volume, difficulty, CPC or ranking data was available** (no Search Console, Keyword Planner or authorised Ahrefs). All such fields are `unknown`. Clusters are based on the real catalogue and manual searches; those searches were not localised to Google India.

## 6. Validation

```
npm run build && npm run start           # serves on :3000
npm run seo:check                         # local production build
npm run seo:check -- <url> --external     # also requests outbound social links
npm run seo:check -- <preview-url> --preview   # preview builds with ARTICLES_PREVIEW=true
```

Checks:
- **Robots and sitemap:** robots.txt; sitemap host, duplicates and query strings; robots conflicts.
- **Status:** status codes.
- **Metadata:** title and description presence, uniqueness, length and topic.
- **Canonicals:** canonical = sitemap URL, on the www host, and agrees with og:url.
- **Indexing:** noindex in meta tags or the header.
- **Content:** H1 count; thin (<150 words) or near-duplicate (>80% similar) content.
- **JSON-LD:**
  - parses, with no duplicate types
  - Organization on every page, Course on programme pages, Article on guides
  - breadcrumb ends at the page
  - no `offers`, `review` or `aggregateRating`
  - URLs on the production host
- **Trust:** blocked claims; drafts listed in the sitemap; drafts reachable outside preview.
- **Links and images:** `<img>` alt text; broken internal links; orphaned pages; placeholder social links.
- **Leaks:** preview-domain and localhost leaks; 404 behaviour.

A pass means the automated checks passed. It does not prove Google has indexed or ranked anything.
