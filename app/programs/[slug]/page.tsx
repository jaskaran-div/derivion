
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProgrammeBySlug,
  getAllProgrammeSlugs,
} from "@/app/data/programmes";
import ProgramDetailClient from "./ProgramDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

const siteUrl = "https://www.derivion.in";

export async function generateStaticParams() {
  const slugs = getAllProgrammeSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const programme = getProgrammeBySlug(slug);

  if (!programme) {
    return {
      title: "Programme Not Found | Derivion",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${programme.title} | Derivion`;
  const description = programme.description;
  const canonicalUrl = `${siteUrl}/programs/${slug}`;

  return {
    title,
    description,

    alternates: {
      canonical: `/programs/${slug}`,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: "Derivion",
      locale: "en_IN",
      title,
      description,
    },

    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const programme = getProgrammeBySlug(slug);

  if (!programme) {
    notFound();
  }

  return <ProgramDetailClient programme={programme} />;
}
