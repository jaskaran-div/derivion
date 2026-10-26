import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Partners from "@/app/Pages/Partners/partners";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata = createPageMetadata(
  "Partner With Derivion",
  "Institutional partnerships with Derivion for universities, trading desks, and corporate sponsors — ISFT-certified market training and financial literacy programmes.",
  "/partners",
);

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main>
        <Partners />
      </main>
      <Footer />
    </>
  );
}
