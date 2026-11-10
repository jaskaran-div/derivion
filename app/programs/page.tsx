import {
  BreadcrumbJsonLd,
  ProgrammeListJsonLd,
} from "@/app/components/JsonLd";
import { PROGRAMMES, hasDetailPage } from "@/app/data/programmes";
import { createPageMetadata } from "@/app/lib/seo";
import ProgrammeDirectoryClient from "./ProgrammeDirectoryClient";

export const metadata = createPageMetadata(
  "Financial Literacy & Trading Courses and Qualifications",
  "Browse Derivion's financial literacy programmes for ages 9–14 and adults, online ISFT awards, and job-ready ISFT Series certificates in financial markets, technical analysis, derivatives, fixed income and trader risk.",
  "/programs",
);

export default function ProgrammesDirectoryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", pathname: "/" },
          { name: "Programmes", pathname: "/programs" },
        ]}
      />
      <ProgrammeListJsonLd programmes={PROGRAMMES.filter(hasDetailPage)} />
      <ProgrammeDirectoryClient />
    </>
  );
}
