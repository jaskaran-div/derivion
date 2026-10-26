import type { Metadata } from "next";

export const SITE_URL = "https://www.derivion.in";
export const HOME_TITLE = "Derivion — Enabling trained risk";
export const DEFAULT_DESCRIPTION =
  "Explore Derivion's education in financial literacy, financial markets and trading, digital payment safety, AI awareness, and risk management.";
export const DEFAULT_SOCIAL_IMAGE = "/Home/hero-section.jpg";

export function createPageMetadata(
  title: string,
  description: string,
  pathname: string,
  image = DEFAULT_SOCIAL_IMAGE,
): Metadata {
  const completeTitle = `${title} | Derivion`;
  const absoluteUrl = new URL(pathname, SITE_URL).toString();

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: "website",
      url: absoluteUrl,
      siteName: "Derivion",
      locale: "en_IN",
      title: completeTitle,
      description,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: completeTitle,
      description,
      images: [image],
    },
  };
}
