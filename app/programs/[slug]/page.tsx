
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProgrammeBySlug,
  getAllProgrammeSlugs,
} from "@/app/data/programmes";
import ProgramDetailClient from "./ProgramDetailClient";
import { BreadcrumbJsonLd } from "@/app/components/JsonLd";
import { createPageMetadata } from "@/app/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

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
      title: { absolute: "Programme Not Found | Derivion" },
      robots: {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      },
    };
  }

  return {
    ...createPageMetadata(
      programme.title,
      programme.description,
      `/programs/${programme.slug}`,
      programme.heroImage,
    ),
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const programme = getProgrammeBySlug(slug);

  if (!programme) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", pathname: "/" },
          { name: "Programmes", pathname: "/programs" },
          {
            name: programme.title,
            pathname: `/programs/${programme.slug}`,
          },
        ]}
      />
      <ProgramDetailClient programme={programme} />
    </>
  );
}
