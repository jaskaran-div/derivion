import type { Article } from "@/app/data/articles";
import type { Programme } from "@/app/data/programmes";
import { ORGANIZATION, SITE_NAME, SITE_URL, absoluteUrl } from "@/app/lib/seo";

type JsonLdProps = {
  data: Record<string, unknown>;
};

type BreadcrumbItem = {
  name: string;
  pathname: string;
};

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

function JsonLd({ data }: JsonLdProps) {
  const serializedData = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializedData }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "@id": ORGANIZATION_ID,
          name: SITE_NAME,
          alternateName: ORGANIZATION.alternateName,
          legalName: ORGANIZATION.legalName,
          url: SITE_URL,
          logo: absoluteUrl(ORGANIZATION.logo),
          email: ORGANIZATION.email,
          telephone: ORGANIZATION.telephone,
          address: {
            "@type": "PostalAddress",
            ...ORGANIZATION.address,
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "admissions",
            email: ORGANIZATION.email,
            telephone: ORGANIZATION.telephone,
            areaServed: "IN",
            availableLanguage: ["en"],
          },
          sameAs: ORGANIZATION.sameAs,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: SITE_NAME,
          url: SITE_URL,
          publisher: { "@id": ORGANIZATION_ID },
          inLanguage: "en-IN",
        }}
      />
    </>
  );
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: absoluteUrl(item.pathname),
        })),
      }}
    />
  );
}

// Age ranges as stated in each programme's eligibility.
const AUDIENCE_AGES: Partial<Record<string, { min: number; max?: number }>> = {
  "sprout-literacy": { min: 9, max: 11 },
  "bloom-literacy": { min: 11, max: 14 },
  "harvest-literacy": { min: 18 },
};

// Describes only what the programme page itself shows. Fees and cohort dates
// are not published, so no offers or schedule are included.
export function CourseJsonLd({ programme }: { programme: Programme }) {
  const url = absoluteUrl(`/programs/${programme.slug}`);
  const isOnline = programme.format.toLowerCase().startsWith("online");
  const level = programme.stats.find((stat) => stat.label === "Qualification");
  const ages = AUDIENCE_AGES[programme.slug];

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Course",
        "@id": `${url}#course`,
        name: programme.title,
        description: programme.description,
        url,
        image: absoluteUrl(programme.heroImage),
        inLanguage: "en",
        provider: { "@id": ORGANIZATION_ID },
        ...(level ? { educationalLevel: level.value } : {}),
        ...(ages
          ? {
              audience: {
                "@type": "PeopleAudience",
                suggestedMinAge: ages.min,
                ...(ages.max ? { suggestedMaxAge: ages.max } : {}),
              },
            }
          : {}),
        coursePrerequisites: programme.eligibility,
        syllabusSections: programme.curriculum.map((module) => ({
          "@type": "Syllabus",
          name: module.title,
          description: module.description,
        })),
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: isOnline ? "Online" : "Blended",
        },
      }}
    />
  );
}

export function ProgrammeListJsonLd({
  programmes,
}: {
  programmes: Programme[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Derivion programmes",
        numberOfItems: programmes.length,
        itemListElement: programmes.map((programme, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/programs/${programme.slug}`),
          name: programme.title,
        })),
      }}
    />
  );
}

export function ArticleJsonLd({ article }: { article: Article }) {
  const url = absoluteUrl(`/learn/${article.slug}`);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${url}#article`,
        headline: article.title,
        description: article.description,
        url,
        mainEntityOfPage: url,
        inLanguage: "en-IN",
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        ...(article.publishedAt ? { datePublished: article.publishedAt } : {}),
        ...(article.updatedAt ? { dateModified: article.updatedAt } : {}),
        ...(article.sources.length
          ? { citation: article.sources.map((source) => source.url) }
          : {}),
      }}
    />
  );
}
