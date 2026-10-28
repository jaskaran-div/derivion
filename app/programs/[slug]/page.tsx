
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import {
  PROGRAMMES,
  getProgrammeBySlug,
  getAllProgrammeSlugs,
  hasDetailPage,
  programmeHref,
} from "@/app/data/programmes";
import { PROGRAMME_SEO } from "@/app/data/programme-seo";
import { PROGRAMME_ASSESSMENT } from "@/app/data/programme-assessment";
import { getVisibleArticles } from "@/app/data/articles";
import ProgramDetailClient from "./ProgramDetailClient";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/app/components/JsonLd";
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

  const seo = PROGRAMME_SEO[programme.slug];

  return {
    ...createPageMetadata(
      seo?.title ?? programme.title,
      seo?.description ?? programme.description,
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
    // Programmes without a page here: premium ones go to their isftglobal.com
    // page, coming-soon ones to the catalogue, rather than a 404.
    const unlisted = PROGRAMMES.find((p) => p.slug === slug);
    if (unlisted) {
      redirect(unlisted.comingSoon ? "/programs" : programmeHref(unlisted));
    }
    notFound();
  }

  // Literacy programmes link to each other; ISFT awards and ISFT premium
  // programmes each link within their own category.
  // Take the next programmes in catalogue order (wrapping) so links spread
  // evenly instead of every page pointing at the same three.
  const groupOf = (category: string) =>
    category === "ISFT Awards" || category === "ISFT Premium" ? category : "Literacy";
  const group = PROGRAMMES.filter(
    (other) =>
      hasDetailPage(other) && groupOf(other.category) === groupOf(programme.category),
  );
  const position = group.findIndex((other) => other.slug === programme.slug);
  // Pass only what the cards render so other programmes' full curricula are
  // not serialised into this page.
  const relatedProgrammes = [
    ...group.slice(position + 1),
    ...group.slice(0, position),
  ]
    .slice(0, 3)
    .map(({ slug, title, category, targetAge, description }) => ({
      slug,
      title,
      category,
      targetAge,
      description,
    }));

  // Guides that support this programme (published ones only on production).
  const relatedGuides = getVisibleArticles()
    .filter((article) => article.relatedProgrammes.includes(programme.slug))
    .map(({ slug, title }) => ({ slug, title }));

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
      <CourseJsonLd programme={programme} />
      <ProgramDetailClient
        programme={programme}
        relatedProgrammes={relatedProgrammes}
        assessment={PROGRAMME_ASSESSMENT[programme.slug]}
        relatedGuides={relatedGuides}
      />
    </>
  );
}
