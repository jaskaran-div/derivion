import { BreadcrumbJsonLd } from "@/app/components/JsonLd";
import { createPageMetadata } from "@/app/lib/seo";
import ContactPageClient from "./ContactPageClient";

export const metadata = createPageMetadata(
  "Contact Admissions",
  "Contact Derivion admissions in Gurugram or the UK about financial literacy programmes, ISFT trading qualifications, cohort schedules, fees or school and institutional enquiries.",
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
