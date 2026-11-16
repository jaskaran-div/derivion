
import type { MetadataRoute } from "next";
import { getAllProgrammeSlugs } from "@/app/data/programmes";
import { getPublishedArticles } from "@/app/data/articles";
import { SITE_URL } from "@/app/lib/seo";

// Last meaningful content change per page (YYYY-MM-DD). Update the date when
// you change a page's content, so search engines know to recrawl it.
const PAGE_UPDATED: Record<string, string> = {
  "": "2026-11-05",
  "/about": "2026-10-31",
  "/partners": "2026-10-28",
  "/gallery": "2026-11-14",
  "/contact": "2026-11-05",
  "/programs": "2026-10-28",
  "/privacy-policy": "2026-11-05",
  "/terms-of-service": "2026-11-05",
};
// Programme pages share one data file, so they share one date.
const PROGRAMMES_UPDATED = "2026-11-05";

export default function sitemap(): MetadataRoute.Sitemap {
  const programmeRoutes = getAllProgrammeSlugs().map(
    (slug) => `/programs/${slug}`
  );

  // Draft articles are never listed; the /learn hub appears once one is published.
  const published = getPublishedArticles();
  const articleDates = Object.fromEntries(
    published.map((article) => [
      `/learn/${article.slug}`,
      article.updatedAt || article.publishedAt || PROGRAMMES_UPDATED,
    ]),
  );
  const latestArticle = Object.values(articleDates).sort().at(-1);

  const lastModified: Record<string, string> = {
    ...PAGE_UPDATED,
    ...Object.fromEntries(programmeRoutes.map((route) => [route, PROGRAMMES_UPDATED])),
    ...(latestArticle ? { "/learn": latestArticle } : {}),
    ...articleDates,
  };

  return Object.entries(lastModified).map(([route, date]) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(date),
  }));
}
