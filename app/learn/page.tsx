import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { BreadcrumbJsonLd } from "@/app/components/JsonLd";
import { getPublishedArticles, getVisibleArticles } from "@/app/data/articles";
import { createPageMetadata } from "@/app/lib/seo";

const baseMetadata = createPageMetadata(
  "Guides to Financial Markets, Money and Digital Safety",
  "Practical, source-backed guides from Derivion on trading risk, government securities, market analysis, payment scams and deepfake fraud.",
  "/learn",
);

// The hub is only indexable once at least one article is published.
export const metadata: Metadata =
  getPublishedArticles().length > 0
    ? baseMetadata
    : { ...baseMetadata, robots: { index: false, follow: false } };

export default function LearnPage() {
  const articles = getVisibleArticles();
  if (articles.length === 0) notFound();

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", pathname: "/" },
          { name: "Learn", pathname: "/learn" },
        ]}
      />
      <Navbar />
      <main id="main-content" className="flex-1 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto space-y-10">
          <header className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C20F42]">Learn</p>
            <h1
              className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.15]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Guides to markets, money and <span className="italic font-normal text-[#C20F42]">digital safety</span>
            </h1>
            <p className="text-base sm:text-lg text-[#525252] leading-relaxed">
              Short, source-backed explanations of the topics our programmes teach. Each guide links to the
              official sources it relies on.
            </p>
          </header>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/learn/${article.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-[#E6E6E6] bg-white p-6 shadow-sm transition-colors hover:border-[#ED1654]"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C20F42]">
                    {article.cluster}
                    {article.status === "draft" && " · Draft"}
                  </span>
                  <h2 className="text-lg font-bold text-[#111111] group-hover:text-[#C20F42] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-[#525252] leading-relaxed">{article.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
