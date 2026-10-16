
import type { MetadataRoute } from "next";
import { getAllProgrammeSlugs } from "@/app/data/programmes";

const siteUrl = "https://www.derivion.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixedRoutes = [
    "",
    "/about",
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
    url: `${siteUrl}${route}`,
  }));
}
