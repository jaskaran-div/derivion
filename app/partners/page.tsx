import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Partners from "@/app/Pages/Partners/partners";
import { BreadcrumbJsonLd } from "@/app/components/JsonLd";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata = createPageMetadata(
  "Institutional Partnerships for Universities, Schools & Companies",
  "Partner with Derivion to bring ISFT financial markets qualifications and financial literacy programmes to universities, schools, trading desks and corporate teams.",
  "/partners",
);

export default function PartnersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", pathname: "/" },
          { name: "Partner With Derivion", pathname: "/partners" },
        ]}
      />
      <Navbar />
      <main id="main-content">
        <Partners />
      </main>
      <Footer />
    </>
  );
}
