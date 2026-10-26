
import type { MetadataRoute } from "next";
import { getAllProgrammeSlugs } from "@/app/data/programmes";
import { getPublishedArticles } from "@/app/data/articles";
import { SITE_URL } from "@/app/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixedRoutes = [
    "",
    "/about",
    "/partners",
    "/contact",
    "/programs",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const programmeRoutes = getAllProgrammeSlugs().map(
    (slug) => `/programs/${slug}`
  );

  // Draft articles are never listed; the /learn hub appears once one is published.
  const published = getPublishedArticles();
  const articleRoutes = published.length
    ? ["/learn", ...published.map((article) => `/learn/${article.slug}`)]
    : [];

  const uniqueRoutes = [
    ...new Set([...fixedRoutes, ...programmeRoutes, ...articleRoutes]),
  ];

  return uniqueRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));
}
