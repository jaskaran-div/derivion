// SEO validation for a running build of the site.
//
//   npm run build && npm run start      (in one terminal)
//   npm run seo:check                   (in another)
//   npm run seo:check -- https://www.derivion.in --external
//   npm run seo:check -- <preview-url> --preview   (build with ARTICLES_PREVIEW=true)
//
// Crawls every URL in /sitemap.xml on BASE_URL (default http://localhost:3000)
// and checks metadata, canonicals, indexability, structured data, content,
// internal linking and public-facing claims. `--external` also requests
// outbound social/profile links. Exits with code 1 when any error is found.
//
// This verifies what the site serves. It does not verify rankings, indexing
// in Google, or rich-result eligibility.

const PRODUCTION_ORIGIN = "https://www.derivion.in";
const args = process.argv.slice(2);
const CHECK_EXTERNAL = args.includes("--external");
const PREVIEW = args.includes("--preview");
const BASE_URL = (args.find((a) => !a.startsWith("--")) || process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");

// Public claims that were removed after the trust audit (docs/seo/trust-audit.md).
// Re-adding any of them needs documented evidence first. Text patterns are
// matched against visible text and skipped when negated ("never promise
// guaranteed returns" is a fraud warning, not a claim).
const BLOCKED_CLAIMS = [
  { pattern: /UK[- ]regulated/i, reason: "ISFT awards are OCN London bespoke (non-regulated) qualifications" },
  { pattern: /Ofqual[- ]regulated/i, reason: "no Ofqual-regulated qualification is offered" },
  { pattern: /guaranteed? (returns?|profits?|placements?|jobs?|income)/i, reason: "outcome guarantee" },
  { pattern: /100% placement/i, reason: "unsubstantiated placement claim" },
];
const BLOCKED_ASSETS = [{ pattern: /ChatGPT-Image/i, reason: "AI-generated portrait presented as a person" }];
const NEGATION = /\b(no|not|never|don't|doesn't|won't|nobody|without|avoid|beware)\b[^.!?]{0,40}$/i;
// Structured data must not advertise things the site does not publish.
const BLOCKED_SCHEMA_KEYS = ["aggregateRating", "review", "offers"];
const MIN_WORDS = 150;

const errors = [];
const warnings = [];
const error = (where, message) => errors.push(`${where}: ${message}`);
const warn = (where, message) => warnings.push(`${where}: ${message}`);

function parseAttributes(tag) {
  const attributes = {};
  for (const match of tag.matchAll(/([\w:-]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) {
    attributes[match[1].toLowerCase()] = match[3] ?? match[4];
  }
  return attributes;
}

function findTags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((m) => parseAttributes(m[0]));
}

function decode(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

function visibleText(html) {
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? html;
  return decode(
    body
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<(nav|footer|header)\b[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

function shingles(text, size = 5) {
  const words = text.toLowerCase().split(" ");
  const set = new Set();
  for (let i = 0; i + size <= words.length; i++) set.add(words.slice(i, i + size).join(" "));
  return set;
}

function similarity(a, b) {
  let shared = 0;
  for (const item of a) if (b.has(item)) shared++;
  return shared / (a.size + b.size - shared || 1);
}

function walkJson(value, visit, path = []) {
  if (Array.isArray(value)) value.forEach((item, i) => walkJson(item, visit, [...path, i]));
  else if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      visit(key, child, path);
      walkJson(child, visit, [...path, key]);
    }
  }
}

// Draft article slugs, read from the article data so the check stays in sync.
async function readDraftSlugs() {
  const { readFile } = await import("node:fs/promises");
  const source = await readFile(new URL("../app/data/articles.ts", import.meta.url), "utf8");
  return [...source.matchAll(/slug: "([^"]+)",\s*status: "draft"/g)].map((m) => m[1]);
}

const toLocal = (url) => url.replace(PRODUCTION_ORIGIN, BASE_URL);
const normalise = (url) => url.replace(/\/$/, "");

async function get(url, options = {}) {
  const response = await fetch(url, { redirect: "manual", ...options });
  return {
    status: response.status,
    location: response.headers.get("location"),
    robotsHeader: response.headers.get("x-robots-tag") ?? "",
    body: await response.text(),
  };
}

async function checkRobots() {
  const { status, body } = await get(`${BASE_URL}/robots.txt`);
  if (status !== 200) {
    error("/robots.txt", `returned ${status}`);
    return [];
  }
  if (!body.includes(`Sitemap: ${PRODUCTION_ORIGIN}/sitemap.xml`)) {
    error("/robots.txt", `missing "Sitemap: ${PRODUCTION_ORIGIN}/sitemap.xml"`);
  }
  return [...body.matchAll(/^Disallow:\s*(\S+)/gim)].map((m) => m[1]);
}

async function readSitemap(disallowed) {
  const { status, body } = await get(`${BASE_URL}/sitemap.xml`);
  if (status !== 200) {
    error("/sitemap.xml", `returned ${status}`);
    return [];
  }
  const locations = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1].trim()));
  if (!locations.length) error("/sitemap.xml", "contains no URLs");
  for (const location of locations) {
    if (!location.startsWith(PRODUCTION_ORIGIN)) error("/sitemap.xml", `non-production URL ${location}`);
    if (/[?#]/.test(location)) error("/sitemap.xml", `URL with query or fragment ${location}`);
    const path = new URL(location).pathname;
    if (disallowed.some((rule) => path.startsWith(rule))) error("/sitemap.xml", `${path} is blocked by robots.txt`);
  }
  if (new Set(locations).size !== locations.length) error("/sitemap.xml", "contains duplicate URLs");
  return locations;
}

async function checkPage(location, site) {
  const path = new URL(location).pathname;
  const { status, location: redirect, robotsHeader, body: html } = await get(toLocal(location));
  if (status !== 200) {
    return error(path, `returned ${status}${redirect ? ` -> ${redirect}` : ""} (sitemap URLs must return 200)`);
  }

  // Metadata
  const title = decode(html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim() ?? "");
  const metas = findTags(html, "meta");
  const links = findTags(html, "link");
  const description = decode(metas.find((m) => m.name === "description")?.content ?? "");
  const robots = metas.find((m) => m.name === "robots")?.content ?? "";
  const canonical = links.find((l) => l.rel === "canonical")?.href;
  const ogUrl = metas.find((m) => m.property === "og:url")?.content;
  const ogImage = metas.find((m) => m.property === "og:image")?.content;

  if (!title) error(path, "missing <title>");
  else {
    if (title.length > 75) warn(path, `title is ${title.length} chars (may be truncated): "${title}"`);
    if (title.replace(/\W*Derivion\W*/gi, "").length < 10) error(path, `title has no topic beyond the brand: "${title}"`);
  }
  if (!description) error(path, "missing meta description");
  else if (description.length < 70 || description.length > 200) warn(path, `meta description is ${description.length} chars`);

  // Canonical and indexability
  // Vercel adds `X-Robots-Tag: noindex` to preview deployments, so the header is ignored with --preview.
  if (/noindex/i.test(robots) || (!PREVIEW && /noindex/i.test(robotsHeader))) error(path, "sitemap page is noindex");
  if (!canonical) error(path, "missing canonical");
  else {
    if (normalise(canonical) !== normalise(location)) error(path, `canonical ${canonical} does not match sitemap URL ${location}`);
    if (!canonical.startsWith(PRODUCTION_ORIGIN)) error(path, `canonical uses wrong host: ${canonical}`);
    if (ogUrl && normalise(ogUrl) !== normalise(canonical)) error(path, `og:url ${ogUrl} differs from canonical`);
  }
  if (!ogImage) warn(path, "missing og:image");
  if (/\.vercel\.app/i.test(html)) error(path, "references a *.vercel.app preview domain");
  if (/https?:\/\/derivion\.in/i.test(html)) warn(path, "references non-www derivion.in (redirects to www)");
  if (/localhost:\d+/i.test(html.replaceAll(BASE_URL, ""))) error(path, "references localhost");

  // Headings and content
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) warn(path, `has ${h1Count} <h1> elements`);
  const text = visibleText(html);
  const words = text.split(" ").length;
  if (words < MIN_WORDS) warn(path, `only ${words} words of main content`);

  if (/data-article-status="draft"/.test(html)) error(path, "draft article is listed in the sitemap");

  // Public claims
  for (const { pattern, reason } of BLOCKED_CLAIMS) {
    for (const match of text.matchAll(new RegExp(pattern, "gi"))) {
      if (NEGATION.test(text.slice(Math.max(0, match.index - 60), match.index))) continue;
      error(path, `blocked claim "${match[0]}" (${reason})`);
    }
  }
  for (const { pattern, reason } of BLOCKED_ASSETS) {
    const match = html.match(pattern);
    if (match) error(path, `blocked asset "${match[0]}" (${reason})`);
  }

  // Structured data
  const types = [];
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    let data;
    try {
      data = JSON.parse(match[1]);
    } catch {
      error(path, "invalid JSON-LD");
      continue;
    }
    if (!data["@context"] || !data["@type"]) error(path, "JSON-LD block missing @context or @type");
    types.push(data["@type"]);
    walkJson(data, (key, value) => {
      if (BLOCKED_SCHEMA_KEYS.includes(key)) error(path, `JSON-LD uses "${key}", which the page does not publish`);
      if ((key === "url" || key === "item" || key === "@id") && typeof value === "string" && /^https?:/.test(value)) {
        if (!value.startsWith(PRODUCTION_ORIGIN) && key !== "@id") error(path, `JSON-LD ${key} on wrong host: ${value}`);
      }
    });
    if (data["@type"] === "BreadcrumbList") {
      const last = data.itemListElement?.at(-1)?.item;
      if (last && normalise(last) !== normalise(location)) error(path, `breadcrumb ends at ${last}, not this page`);
    }
    if (data["@type"] === "Course" && normalise(data.url ?? "") !== normalise(location)) {
      error(path, `Course url ${data.url} is not this page`);
    }
  }
  for (const type of new Set(types)) {
    if (types.filter((t) => t === type).length > 1) error(path, `duplicate ${type} JSON-LD blocks`);
  }
  if (!types.includes("EducationalOrganization")) error(path, "missing Organization JSON-LD");
  if (path.startsWith("/programs/") && !types.includes("Course")) error(path, "programme page missing Course JSON-LD");
  if (path.startsWith("/learn/") && !types.includes("Article")) error(path, "article page missing Article JSON-LD");
  if (path !== "/" && !types.includes("BreadcrumbList")) warn(path, "no BreadcrumbList JSON-LD");

  // Images
  for (const image of findTags(html, "img")) {
    if (!("alt" in image)) error(path, `<img> without alt: ${image.src ?? "(no src)"}`);
  }

  // Links
  for (const anchor of findTags(html, "a")) {
    const href = anchor.href;
    if (!href) continue;
    if (href.startsWith("/") && !href.startsWith("//")) {
      const target = href.split("#")[0].split("?")[0] || "/";
      if (!site.internalLinks.has(target)) site.internalLinks.set(target, path);
      if (target !== path) {
        if (!site.inbound.has(target)) site.inbound.set(target, new Set());
        site.inbound.get(target).add(path);
      }
    } else if (/^https?:\/\//.test(href) && !href.startsWith(PRODUCTION_ORIGIN)) {
      if (!site.externalLinks.has(href)) site.externalLinks.set(href, path);
    }
  }

  site.titles.set(title, [...(site.titles.get(title) ?? []), path]);
  site.descriptions.set(description, [...(site.descriptions.get(description) ?? []), path]);
  site.texts.set(path, shingles(text));
}

async function checkInternalLinks(site) {
  for (const [target, foundOn] of site.internalLinks) {
    if (/\.(pdf|png|jpe?g|webp|svg|mp4)$/i.test(target)) continue;
    const { status, location } = await get(`${BASE_URL}${encodeURI(decodeURI(target))}`);
    if (status >= 400) error(foundOn, `broken internal link ${target} (${status})`);
    else if (status >= 300) warn(foundOn, `internal link ${target} redirects to ${location}`);
  }
}

function checkInboundLinks(locations, site) {
  for (const location of locations) {
    const path = new URL(location).pathname || "/";
    const sources = site.inbound.get(path)?.size ?? 0;
    if (sources === 0) error(path, "no internal links from other sitemap pages (orphaned)");
    else if (sources < 2 && path !== "/") warn(path, `linked from only ${sources} other page`);
  }
}

function checkDuplicateContent(site) {
  const entries = [...site.texts];
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      const score = similarity(entries[i][1], entries[j][1]);
      if (score > 0.8) warn(`${entries[i][0]} ~ ${entries[j][0]}`, `main content is ${Math.round(score * 100)}% similar`);
    }
  }
}

async function checkExternalLinks(site) {
  for (const [href, foundOn] of site.externalLinks) {
    const url = new URL(href);
    if (url.pathname === "/" && !url.search && /(x|twitter|instagram|facebook|linkedin|youtube)\.com$/.test(url.hostname)) {
      error(foundOn, `social link ${href} points at the platform homepage, not a profile`);
      continue;
    }
    if (!CHECK_EXTERNAL) continue;
    try {
      const response = await fetch(href, {
        redirect: "follow",
        headers: { "user-agent": "Mozilla/5.0 (compatible; derivion-seo-check)" },
        signal: AbortSignal.timeout(15000),
      });
      // Social platforms often answer bots with 4xx/999; report rather than fail.
      if (response.status >= 400) warn(foundOn, `external link ${href} returned ${response.status}`);
    } catch (cause) {
      warn(foundOn, `external link ${href} failed (${cause.name})`);
    }
  }
}

async function checkDraftsHidden() {
  if (PREVIEW) return;
  for (const slug of await readDraftSlugs()) {
    const { status } = await get(`${BASE_URL}/learn/${slug}`);
    if (status !== 404) error(`/learn/${slug}`, `draft article returned ${status}; drafts must 404 outside preview`);
  }
}

async function checkNotFound() {
  const { status, body } = await get(`${BASE_URL}/programs/this-page-should-not-exist`);
  if (status !== 404) error("404 handling", `unknown programme returned ${status}, expected 404`);
  if (!/<meta[^>]*name="robots"[^>]*noindex/i.test(body)) warn("404 handling", "404 page is not noindex");
}

async function main() {
  console.log(`SEO check against ${BASE_URL}${CHECK_EXTERNAL ? " (with external links)" : ""}\n`);
  try {
    await fetch(BASE_URL);
  } catch {
    console.error(`Could not reach ${BASE_URL}. Start the site first (npm run build && npm run start).`);
    process.exit(1);
  }

  const disallowed = await checkRobots();
  const locations = await readSitemap(disallowed);
  const site = {
    titles: new Map(),
    descriptions: new Map(),
    texts: new Map(),
    internalLinks: new Map(),
    externalLinks: new Map(),
    inbound: new Map(),
  };

  for (const location of locations) await checkPage(location, site);
  for (const [title, paths] of site.titles) {
    if (title && paths.length > 1) error("duplicate title", `"${title}" on ${paths.join(", ")}`);
  }
  for (const [description, paths] of site.descriptions) {
    if (description && paths.length > 1) error("duplicate description", paths.join(", "));
  }
  await checkInternalLinks(site);
  checkInboundLinks(locations, site);
  checkDuplicateContent(site);
  await checkExternalLinks(site);
  await checkDraftsHidden();
  await checkNotFound();

  console.log(
    `Checked ${locations.length} sitemap URLs, ${site.internalLinks.size} internal and ${site.externalLinks.size} external link targets.\n`,
  );
  for (const message of warnings) console.log(`WARN  ${message}`);
  for (const message of errors) console.log(`ERROR ${message}`);
  console.log(`\n${errors.length} error(s), ${warnings.length} warning(s)`);
  process.exit(errors.length ? 1 : 0);
}

main();
