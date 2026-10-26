import type { Metadata } from "next";

export const SITE_URL = "https://www.derivion.in";
export const SITE_NAME = "Derivion";
export const HOME_TITLE =
  "Derivion — Financial Literacy & Trading Education | Enabling Trained Risk";
export const DEFAULT_DESCRIPTION =
  "Derivion runs financial literacy programmes for children, teenagers and adults, plus online ISFT trading qualifications in financial markets, technical analysis, futures, bonds and risk management.";
export const DEFAULT_SOCIAL_IMAGE = "/Home/hero-section.jpg";

// Business details shown publicly in the site footer. Keep these in sync with
// the footer and any external business profiles.
export const ORGANIZATION = {
  legalName: "Derivion International Private Limited",
  // Trading name used on the course brochures, LinkedIn and YouTube.
  alternateName: "ISFT by Derivion",
  email: "info@derivion.in",
  telephone: "+91-70560-57913",
  logo: "/Home/derivion-logo.png",
  address: {
    streetAddress: "Plot No 42, Phase IV, Sector 18, Sarhol",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122015",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/derivion-international/",
    "https://www.youtube.com/@DerivionInternational",
  ],
};

export function absoluteUrl(pathname: string) {
  return new URL(pathname, SITE_URL).toString();
}

export function createPageMetadata(
  title: string,
  description: string,
  pathname: string,
  image = DEFAULT_SOCIAL_IMAGE,
): Metadata {
  const completeTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(pathname),
      siteName: SITE_NAME,
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
