import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { BreadcrumbJsonLd } from "@/app/components/JsonLd";
import { createPageMetadata } from "@/app/lib/seo";
import { GALLERY_ITEMS } from "@/app/data/gallery";
import GalleryGrid from "./GalleryGrid";

export const metadata = createPageMetadata(
  "Our Gallery — Moments from Derivion Programmes",
  "Photos and videos from Derivion's financial literacy sessions, ISFT trading programmes, workshops and events.",
  "/gallery",
);

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", pathname: "/" },
          { name: "Our Gallery", pathname: "/gallery" },
        ]}
      />
      <Navbar />
      <main id="main-content" className="px-4 sm:px-8 pt-14 sm:pt-20 pb-20 sm:pb-28">
        <header className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#000000]">
            Our Gallery
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#737373]">
            Moments from our classrooms, workshops and events.
          </p>
        </header>

        <GalleryGrid items={GALLERY_ITEMS} />
      </main>
      <Footer />
    </>
  );
}
