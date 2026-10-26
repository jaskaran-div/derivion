# Competitive content gaps and 90-day roadmap

Research date: 2026-10-26. Companion files: [keyword-map.csv](keyword-map.csv) (36 keyword rows) and [trust-audit.md](trust-audit.md).

## Research method and limits

- **No measured demand data.** There was no Google Search Console, Keyword Planner or GA4 access, and the Ahrefs connector wasn't authorised. Every search volume, keyword difficulty, CPC and ranking position is `unknown`. Nothing below is a traffic forecast.
- **What ranks** comes from manual web searches. The search tool is not localised to Google India, so treat these as samples of ranking page types, not rank positions.
- Competitor pages were used to understand intent and format only. No content was copied.

## Gap analysis by cluster

Priority score: Business relevance × Opportunity × Confidence ÷ Effort, each rated H/M/L.

| Cluster | Pages that rank (sample) | Dominant intent / format | Derivion page today | Gaps found | Priority |
| --- | --- | --- | --- | --- | --- |
| **Government bonds / G-secs** | NISM–FIMMDA *Overview of Indian Debt Markets* (~3 hrs, ₹2,000); RBI G-sec primer (Q&A) | Short certificate or official primer | `/programs/isft-award-in-introduction-to-trading-government-bonds`: 6 units, 12 credits, RBI Retail Direct unit | Few in-depth courses exist; Derivion's is much deeper but doesn't say so plainly. No fee. No worked yield example | **High**: least competition, real depth |
| **Beginner trading** | Careers360 course listings, "best course in India" listicles (ICFM, Invesmate), NSE Academy, Udemy | Comparison listicles with fee, syllabus and duration tables | `/programs/isft-award-in-introduction-to-financial-trading` | No fee. No "is this course right for me". Level unresolved. No risk statement (now added) | **High**: biggest commercial intent, but crowded |
| **Technical analysis** | NSE Academy, NCFM module (60 Qs, 60% pass), IFMC, ICAI | Exam-style certification pages with assessment detail | `/programs/isft-certificate-…technical-analysis…` | Competitors publish fees, hours and assessment format; Derivion lists credits only | **High** |
| **Risk management / position sizing** | Teachable/Udemy short courses, Upstox webinars, Quantpedia, CMT Association | Short completion-certificate courses and calculators | `/programs/isft-award-in-introduction-to-risk-management` | Accredited, assessed courses are rare in the results, a real differentiator that isn't stated. No India-specific worked example | **High** |
| **Futures / F&O** | NSE derivatives courses, Vskills (₹3,499), Invesmate, 5paisa | Commercial F&O courses | `/programs/isft-award-in-introduction-to-futures-trading` | Missing SEBI loss-rate context (now added). Hedging angle under-explained | Medium (YMYL risk; profit-seeking audience) |
| **Trading psychology** | International Trading Institute (€2,600), UChicago ($2,800), NISM (₹500), Udemy, FxPro (free) | Course pages with price and duration | `/programs/isft-award-in-introduction-to-behavioural-psychology-in-trading` | No fee; no sample exercise | Medium |
| **Fundamental vs technical (info)** | Broker blogs: Groww, share.market, ATFX, Winvesta | Comparison table explainer | None | Broker pages are product-led and rarely say when each method fails | Medium: supports two programmes |
| **Kids' financial literacy** | BrightChamps FinChamps, Countingwell, Zerodha Rupee Tales, RBI booklets, Upstox parent course | Edtech product pages plus free bank/exchange resources | `/programs/sprout-literacy`, `/programs/bloom-literacy` | No delivery logistics (online? venue? group size?), no safeguarding statement, no price, unclear certificate | **High**: unique money + screen-safety angle |
| **Deepfake / voice-clone scams (info)** | Vikaspedia citizen guide, Moneylife, QuickHeal, CyberPeace | Government and vendor safety guides | None (curriculum in Bloom/Harvest) | Few guides give a family verification protocol for teens and parents | **High**: matches Bloom/Harvest content |
| **UPI / payment fraud (info)** | Bank blogs (Canara, Ujjivan, L&T Finance), QuickHeal, The Quint | Tip lists | None (curriculum in Harvest) | Tip lists rarely give a first-hour response checklist | **High** |
| **Adult financial literacy** | NCFE free e-learning (5 hrs, 20 modules), BharatSkills free programme, PW, Udemy | Free government courses | `/programs/harvest-literacy` | Free NCFE course is a strong alternative; Harvest doesn't say what it adds (case studies, legal recourse, live delivery) | Medium |
| **Schools** | CBSE notifications (teacher and parent sessions by SEBI resource persons), school news posts | Circulars and event posts | None | Few providers publish a student programme with curriculum detail | **Blocked** until school delivery is confirmed |
| **University partnerships** | ZISHI/OSTC partnership news (Sheffield Hallam, SERC, Durham) | Partnership announcements and case studies | `/partners` | No documented case study; partner logos unverified | Medium (needs partner permission) |
| **Qualification recognition** | OCN London service pages, Ofqual | Awarding-body pages | `/about#qualifications` (new) | Was misleading ("UK-regulated"); now accurate | Done |

### Cannibalisation check
- **Intro to Financial Trading vs Intro to Financial Markets** both attract "beginner" queries. Their titles now separate *placing and managing trades* from *how asset classes fit together*; keep the copy aligned with that split.
- **Home vs /programs:** home targets brand plus category, /programs targets the catalogue. No conflict.
- **Harvest vs Bloom on fraud:** separated by audience (adults vs 11–14) in titles and descriptions. Future scam guides should link to both and target the informational query.
- **ISFT awards vs the ZISHI Level 5 diploma:** the homepage once linked "Trading Diploma" to the catalogue, which has no diploma. Fixed. A diploma page needs owner confirmation first.

## 90-day roadmap

Each new page needs a named author and a reviewer (Head Educator for market topics), visible dates and primary-source citations. Nothing goes live without that review.

| # | Days | Page / change | URL | Target cluster | Intent | Audience | Evidence required | Internal links | Conversion purpose | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0–14 | Publish fees (or "from ₹…") on all programme pages | existing programme URLs | trading course fees; all commercial | commercial | all | Owner-approved fee table | — | Removes the main gap vs competitors | Owner decision |
| 2 | 0–14 | Resolve Intro to Financial Trading level; add it to title and description | `/programs/isft-award-in-introduction-to-financial-trading` | beginner trading | commercial | beginners | OCN London certificate | Related block | Clarity for "level" queries | Owner decision |
| 3 | 0–21 | Add "How sessions run" (format, location or online, group size, safeguarding, what parents receive) to Sprout, Bloom, Harvest | literacy programme URLs | kids'/teen/adult literacy | commercial | parents, adults | Delivery facts, safeguarding policy | /contact | Parent enquiries | Needs facts |
| 4 | 0–21 | Add assessment format and GLH/TQT to each ISFT page (from brochures) | ISFT programme URLs | TA, risk, futures, bonds | commercial | traders | Brochure data (in repo) | /about#qualifications | Credibility vs certification competitors | **Done**: Assessment section on all 8 ISFT pages |
| 5 | 14–35 | **How UPI and payment scams work, and what to do in the first hour** | `/learn/upi-and-digital-payment-scams` | UPI fraud awareness | informational | adults, parents | RBI/NPCI guidance, 1930 helpline, cybercrime.gov.in; Harvest Unit 2 | Harvest, Bloom, /contact | Harvest enquiries | **Drafted**, awaiting reviewer |
| 6 | 21–42 | **Deepfake and voice-clone scams: a family verification plan** | `/learn/deepfake-and-voice-clone-scams` | deepfake scam guide | informational | parents, teens | Government guides (Vikaspedia/I4C), Bloom AI module, Harvest AI module | Bloom, Harvest | Parent and adult enquiries | **Drafted**, awaiting reviewer |
| 7 | 28–49 | **Position sizing and leverage, with worked ₹ examples** | `/learn/position-sizing-and-leverage` | position sizing; risk course | informational → commercial | traders | Head Educator-reviewed formulas, SEBI margin rules | Risk Management, Futures | Risk award enrolments | **Drafted**, awaiting Head Educator review |
| 8 | 35–56 | **How government securities work in India (and how to access them)** | `/learn/government-securities-india` | G-sec guide | informational | investors, students | RBI primer, RBI Retail Direct; Bonds Unit 5 | Bonds award | Bonds enrolments | **Drafted**, awaiting Head Educator review |
| 9 | 42–63 | **Fundamental vs technical analysis: what each can and can't tell you** | `/learn/fundamental-vs-technical-analysis` | FA vs TA | informational | beginners | Head Educator worked example (e.g. a CPI release vs a chart) | Applied FMT, Technical Analysis | Two programme pages | **Drafted**, awaiting Head Educator review |
| 10 | 49–70 | `/learn` index page (only once ≥3 reviewed guides exist), with `Article` and `Person` schema for real authors | `/learn` | — | navigational | all | Real author bios | Footer, home | Hub for guides | **Built**; goes live automatically when the first guide is published |
| 11 | 56–77 | **What should children learn about money at 9–11? A parent's guide** | `/learn/money-lessons-for-children-9-11` | kids' money skills | informational | parents | Sprout curriculum, RBI booklets | Sprout | Sprout enquiries | Needs author |
| 12 | 63–84 | Documented partner case study (one institution) | `/partners` section | university partnerships | commercial | universities | Partner approval, real numbers | /partners, about | Partnership leads | Needs partner permission |
| 13 | 70–90 | `/schools` landing page, **only if** school delivery is confirmed | `/schools` | financial literacy for schools | commercial | schools | Delivery model, pricing, safeguarding, a school reference | Sprout, Bloom, /partners | School enquiries | Blocked |
| 14 | 70–90 | ZISHI Level 5 diploma page, **only if** Derivion offers it | TBD | level 5 diploma | commercial | students | ZISHI-approved facts | /programs | Diploma enquiries | Blocked |

Deliberately excluded: city pages, glossary spam (e.g. one page per candlestick pattern), "best trading course" listicles that rank Derivion first, and any article without a reviewer.

### Brief: `/learn/upi-and-digital-payment-scams` (roadmap #5)
- **Title:** How UPI and Digital Payment Scams Work, and What to Do in the First Hour
- **Primary query:** UPI fraud awareness. **Secondary queries:** QR code scam, fake KYC call, SIM swap fraud, "what to do after UPI fraud".
- **Outline (H2s):**
  1. The five patterns behind most payment scams (impersonation, fake apps and links, QR collect requests, SIM swap, mule accounts)
  2. The one rule: a UPI PIN is only for paying, never for receiving
  3. Red flags checklist
  4. **First-hour response:** call 1930, report on cybercrime.gov.in, call your bank, preserve evidence
  5. Teaching this to family members
  6. Where to learn more: Harvest Literacy
- **Sources to cite:** RBI consumer awareness pages, NPCI UPI safety guidance, National Cyber Crime Reporting Portal (cybercrime.gov.in, helpline 1930). Check each against the live official page at writing time.
- **Must not:** quote bank transaction limits as fixed figures, or promise recovery of funds.
- **Reviewer:** the Harvest curriculum owner. **Links:** Harvest (primary), Bloom, /contact.

## Topic clusters and internal linking

| Cluster | Main landing page | Supporting pages | Linking rule |
| --- | --- | --- | --- |
| Financial markets and trading | `/programs` → ISFT award pages | FA vs TA guide | Guides link to 2–3 awards; awards link to 3 related awards (rotating) and to related guides once published |
| Trading risk management | Risk Management award | Position sizing guide; SEBI-cited risk notice on all ISFT pages | Risk notice links to `/about#qualifications` |
| Indian government securities | Government Bonds award | G-sec guide | Guide links to the Bonds and Financial Markets awards |
| Payment fraud and digital safety | Harvest Literacy | UPI scams guide | Guide links to Harvest and Bloom |
| Deepfakes and AI awareness | Bloom Literacy | Deepfake guide | Guide links to Bloom and Harvest |
| Youth literacy | Sprout, Bloom | Parent guide (#11, not drafted) | Literacy pages link to each other |
| Institutional | `/partners` | Case study (#12) | — |

Internal-linking changes made in this release:
- Related-programme blocks on all 11 programme pages
- "Related guides" on programme pages, shown only for visible (published) guides
- Risk notice link to `/about#qualifications`
- `/about#qualifications` linking to `/programs`
- Article CTAs and related-programme lists linking to programme pages
- "Learn More" link renamed "About Derivion" (descriptive anchor)

`npm run seo:check` fails on orphaned sitemap pages.

## Programmatic SEO assessment

Evaluated and **not** implemented beyond the programme template:
- **Glossary pages** (one per term): thin, saturated by broker glossaries; no unique data. Rejected.
- **City pages:** no evidence of in-person delivery outside Gurugram; the ISFT awards are online. Rejected as doorway pages.
- **Qualification comparison pages** (award vs award): useful only once fees and levels are confirmed. Revisit then, as one page, not a matrix.
- **Position-size calculator:** a genuinely useful tool, but needs the Head Educator to approve the formula and copy. Candidate for days 61–90.

The existing programme template (11 pages from `programmes.ts`) is the right level of programmatic generation: each page has distinct curriculum, assessment and audience.

## Local and international SEO

- **Locations:** the footer lists a Gurugram office and a Croydon (UK) office. The Organization schema includes the Gurugram address only, as the registered Indian entity. A Google Business Profile for the Gurugram office is an owner action (verify the address receives post and is staffed).
- **LocalBusiness schema:** not added. The site's main purpose is online programmes, and LocalBusiness markup should accompany a verified Business Profile with real opening hours (the footer says Mon–Fri 10:30–18:30; confirm before marking up).
- **hreflang:** not applicable. There is one English-language site with no regional variants.
- **UK intent:** the ISFT awards are online and OCN London-accredited, so UK learners are plausible. Don't create UK pages until UK enrolment is confirmed and pricing in GBP exists.

## Ethical authority building (business participation required)

| Opportunity | What's needed | Website work (can be done now) |
| --- | --- | --- |
| Partner acknowledgement pages | Each academic partner (Chandigarh University, Jaipuria, DOLA, ZISHI, Zenithwave) publishes a programme page or news item linking to Derivion | Replace unverified partner logos with linked case studies once permission is given |
| ZISHI collaboration | The ZISHI press release already exists; agree a short joint page on the Level 5 diploma, if Derivion offers it | Diploma page (#14) |
| Original research | An anonymised, opt-in survey of learners' payment-fraud experiences or financial-literacy baseline, with method published | A "Research" page and a press release |
| Expert contributions | The Head Educator writes for finance or education publications under his own name | Link from his educator profile once one exists |
| School and community workshops | Real sessions with consent to publish photos and a summary | Event/case-study page |
| Free resources | The UPI first-hour checklist and family deepfake plan as printable PDFs, once published | Downloadable assets on the guide pages |

No paid links, link exchanges, fabricated reviews or press releases presenting unverified claims.

## Measurement (once Search Console is connected)

| Window | Check |
| --- | --- |
| Weekly | `npm run seo:check -- https://www.derivion.in --external` after each deploy |
| Day 30 | Indexed pages = 18 sitemap URLs. Record baseline impressions, clicks and CTR per page, split brand / non-brand |
| Day 60 | Queries per programme page compared with the keyword map. Replace `unknown` volumes with Search Console impressions (label the source "GSC") |
| Day 90 | CTR on pages with ≥100 impressions; GA4 `generate_lead` by landing page; decide on #13 and #14 |
