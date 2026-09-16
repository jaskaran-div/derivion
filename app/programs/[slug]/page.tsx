import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgrammeBySlug, getAllProgrammeSlugs } from "@/app/data/programmes";
import ProgramDetailClient from "./ProgramDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProgrammeSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const programme = getProgrammeBySlug(resolvedParams.slug);

  if (!programme) {
    return {
      title: "Programme Not Found — Derivion",
    };
  }

  return {
    title: `${programme.title} — Derivion`,
    description: programme.description,
  };
}

export default async function ProgramPage({ params }: Props) {
  const resolvedParams = await params;
  const programme = getProgrammeBySlug(resolvedParams.slug);

  if (!programme) {
    notFound();
  }

  return <ProgramDetailClient programme={programme} />;
}
