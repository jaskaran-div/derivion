import { BreadcrumbJsonLd } from "@/app/components/JsonLd";
import { createPageMetadata } from "@/app/lib/seo";
import ContactPageClient from "./ContactPageClient";

export const metadata = createPageMetadata(
  "Contact Derivion",
  "Contact Derivion's admissions team with questions about financial literacy, trading education, programme schedules, or institutional enquiries.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", pathname: "/" },
          { name: "Contact Derivion", pathname: "/contact" },
        ]}
      />
      <ContactPageClient />
    </>
  );
}
