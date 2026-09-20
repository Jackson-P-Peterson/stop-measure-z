import {
  canonicalUrl,
  faqJsonLd,
  measureZEntity,
  seoPages,
  type SeoPath,
} from "@/lib/seo";
import { site } from "@/lib/site";

function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const orgId = `${site.url}/#organization`;
const siteId = `${site.url}/#website`;
const measureId = `${site.url}/#measure-z`;
const electionId = `${site.url}/#election`;

function organizationNode() {
  const entity = measureZEntity();
  return {
    "@type": "Organization",
    "@id": orgId,
    name: site.committeeName,
    alternateName: [site.name, "StopMeasureZ.com", "No on Measure Z"],
    url: site.url,
    email: site.contactEmail,
    description: entity.description,
    areaServed: {
      "@type": "City",
      name: "Berkeley",
      containedInPlace: { "@type": "State", name: "California" },
    },
    knowsAbout: entity.alternateName,
    logo: `${site.url}/icon.svg`,
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": siteId,
    url: site.url,
    name: site.name,
    alternateName: ["StopMeasureZ.com", "No on Measure Z Berkeley"],
    description: measureZEntity().description,
    inLanguage: "en-US",
    publisher: { "@id": orgId },
    about: { "@id": measureId },
  };
}

function measureNode() {
  const entity = measureZEntity();
  return {
    "@type": "Thing",
    "@id": measureId,
    name: entity.name,
    alternateName: entity.alternateName,
    description: entity.description,
    identifier: "Measure Z",
    url: site.url,
  };
}

function electionNode() {
  return {
    "@type": "Event",
    "@id": electionId,
    name: "Berkeley Municipal Election — Measure Z",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    startDate: "2026-11-03",
    endDate: "2026-11-03",
    location: {
      "@type": "City",
      name: "Berkeley, California",
    },
    organizer: { "@id": orgId },
    about: { "@id": measureId },
    description:
      "City of Berkeley election day for Measure Z, a voter-initiated special parcel tax to capitalize a regional Public Bank East Bay.",
    url: canonicalUrl("/ballot"),
  };
}

export function SiteJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode(), measureNode(), electionNode()],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(graph) }}
    />
  );
}

export function PageJsonLd({ path }: { path: SeoPath }) {
  const page = seoPages[path];
  const url = canonicalUrl(path);
  const crumbs: { name: string; path: SeoPath }[] = [{ name: "Home", path: "/" }];
  if (path !== "/") crumbs.push({ name: page.title.split("|")[0].trim(), path });

  const webPage = {
    "@type": page.schemaType,
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: "en-US",
    isPartOf: { "@id": siteId },
    about: { "@id": measureId },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2"],
    },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    ...(path === "/faq" ? { mainEntity: faqJsonLd() } : {}),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: canonicalUrl(crumb.path),
    })),
  };

  const extra: Record<string, unknown>[] = [];
  if (path === "/cost") {
    extra.push({
      "@type": "WebApplication",
      name: "Measure Z Berkeley tax calculator",
      url,
      applicationCategory: "FinanceApplication",
      operatingSystem: "All",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      about: { "@id": measureId },
    });
  }

  const graph = {
    "@context": "https://schema.org",
    "@graph": [webPage, breadcrumb, ...extra],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(graph) }}
    />
  );
}
