import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Derivion" },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111111]">
      <Navbar />
      <main
        id="main-content"
        className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-[#C20F42]">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#525252] sm:text-base">
          The page you requested may have moved or is no longer available.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-full bg-[#D6124B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B50F40]"
        >
          Return to the homepage
        </Link>
      </main>
      <Footer />
    </div>
  );
}
