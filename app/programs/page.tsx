import { createPageMetadata } from "@/app/lib/seo";
import ProgrammeDirectoryClient from "./ProgrammeDirectoryClient";

export const metadata = createPageMetadata(
  "Financial Literacy and Trading Programmes",
  "Browse Derivion programmes covering financial literacy, financial markets and trading, digital safety, AI awareness, and risk management.",
  "/programs",
);

export default function ProgrammesDirectoryPage() {
  return <ProgrammeDirectoryClient />;
}
