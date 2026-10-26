
import type { MetadataRoute } from "next";
import { getAllProgrammeSlugs } from "@/app/data/programmes";
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

  const uniqueRoutes = [...new Set([...fixedRoutes, ...programmeRoutes])];

  return uniqueRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));
}
