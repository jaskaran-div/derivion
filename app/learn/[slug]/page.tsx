import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ArticleContent from "@/app/components/ArticleContent";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/app/components/JsonLd";
import { getVisibleArticle, getVisibleArticles } from "@/app/data/articles";
import { getProgrammeBySlug } from "@/app/data/programmes";
import { createPageMetadata } from "@/app/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

// Draft articles are only generated when ARTICLES_PREVIEW=true; any other
// slug (including drafts on production) returns 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getVisibleArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getVisibleArticle(slug);
  if (!article) return {};

  const metadata = createPageMetadata(article.seoTitle, article.description, `/learn/${article.slug}`);
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      ...(article.publishedAt ? { publishedTime: article.publishedAt } : {}),
      ...(article.updatedAt ? { modifiedTime: article.updatedAt } : {}),
    },
    ...(article.status === "draft" ? { robots: { index: false, follow: false } } : {}),
  };
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getVisibleArticle(slug);
  if (!article) notFound();

  const programmes = article.relatedProgrammes
    .map((programmeSlug) => getProgrammeBySlug(programmeSlug))
    .filter((programme) => programme !== undefined);

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", pathname: "/" },
          { name: "Learn", pathname: "/learn" },
          { name: article.title, pathname: `/learn/${article.slug}` },
        ]}
      />
      <ArticleJsonLd article={article} />
      <Navbar />

      <div className="w-full bg-[#D9D9D9]/20 border-b border-[#D9D9D9]/60 py-3 px-4 sm:px-8">
        <nav
          aria-label="Breadcrumb"
          className="max-w-3xl mx-auto flex items-center gap-2 text-xs text-[#595959] overflow-x-auto no-scrollbar"
        >
          <Link href="/" className="hover:text-[#000000] transition-colors shrink-0">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <Link href="/learn" className="hover:text-[#000000] transition-colors shrink-0">
            Learn
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span className="text-[#000000] font-medium truncate">{article.title}</span>
        </nav>
      </div>

      <main id="main-content" className="flex-1 px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <article className="max-w-3xl mx-auto space-y-10" data-article-status={article.status}>
          {article.status === "draft" && (
            <aside className="rounded-2xl border border-[#ED1654]/40 bg-[#D6124B]/5 p-5 text-sm text-[#111111] space-y-2">
              <p className="font-bold uppercase tracking-wider text-xs text-[#C20F42]">
                Draft preview — not published, not indexed
              </p>
              <p>Approvals still needed before publication:</p>
              <ul className="list-disc pl-5 space-y-1">
                {article.pendingApprovals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          )}

          <header className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C20F42]">{article.cluster}</p>
            <h1
              className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.15] text-[#000000]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {article.title}
            </h1>
            <p className="text-base sm:text-lg text-[#525252] leading-relaxed">{article.description}</p>
            <p className="text-xs text-[#595959]">
              By Derivion
              {article.reviewer && ` · Reviewed by ${article.reviewer.name}, ${article.reviewer.role}`}
              {article.publishedAt && ` · Published ${formatDate(article.publishedAt)}`}
              {article.updatedAt && ` · Updated ${formatDate(article.updatedAt)}`}
            </p>
          </header>

          <section aria-labelledby="key-points" className="rounded-2xl border border-[#E6E6E6] bg-[#F7F7F5] p-6 space-y-3">
            <h2 id="key-points" className="text-xs font-bold uppercase tracking-wider text-[#C20F42]">
              Key points
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#111111] leading-relaxed">
              {article.keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <ArticleContent sections={article.sections} />

          {article.financialDisclaimer && (
            <p className="rounded-2xl border border-[#E6E6E6] p-5 text-xs sm:text-sm text-[#525252] leading-relaxed">
              This guide is general education, not investment advice or a recommendation to buy or sell any
              instrument. Figures in worked examples are illustrative. Trading and investing involve risk,
              including the loss of capital.
            </p>
          )}

          <aside className="rounded-3xl border border-[#E6E6E6] bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <p className="text-sm sm:text-base text-[#111111]">{article.cta.text}</p>
            <Link
              href={article.cta.href}
              className="inline-flex items-center gap-2 rounded-full bg-[#D6124B] px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#B50F40]"
            >
              {article.cta.label}
            </Link>
          </aside>

          {programmes.length > 0 && (
            <section aria-labelledby="related-programmes" className="space-y-3">
              <h2 id="related-programmes" className="text-xs font-bold uppercase tracking-wider text-[#C20F42]">
                Related programmes
              </h2>
              <ul className="space-y-2">
                {programmes.map((programme) => (
                  <li key={programme.slug}>
                    <Link
                      href={`/programs/${programme.slug}`}
                      className="text-sm sm:text-base font-medium text-[#111111] underline underline-offset-2 hover:text-[#C20F42]"
                    >
                      {programme.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {article.sources.length > 0 && (
            <section aria-labelledby="sources" className="space-y-3 border-t border-[#E6E6E6] pt-8">
              <h2 id="sources" className="text-xs font-bold uppercase tracking-wider text-[#C20F42]">
                Sources
              </h2>
              <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-[#525252]">
                {article.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#111111] underline underline-offset-2 hover:text-[#C20F42]"
                    >
                      {source.title}
                    </a>{" "}
                    — {source.publisher}
                  </li>
                ))}
              </ol>
            </section>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
