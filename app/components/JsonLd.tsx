import { SITE_URL } from "@/app/lib/seo";

type JsonLdProps = {
  data: Record<string, unknown>;
};

type BreadcrumbItem = {
  name: string;
  pathname: string;
};

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
  const organizationId = `${SITE_URL}/#organization`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": organizationId,
          name: "Derivion",
          url: SITE_URL,
          logo: new URL("/Home/derivion-logo.png", SITE_URL).toString(),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: "Derivion",
          url: SITE_URL,
          publisher: { "@id": organizationId },
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
          item: new URL(item.pathname, SITE_URL).toString(),
        })),
      }}
    />
  );
}
