import { PageJsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { formatNewsDate, newsItems } from "@/lib/news";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/news");

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24">
      <PageJsonLd path="/news" />
      <PageIntro
        eyebrow="Newest first"
        title="News"
        dek="Coverage and opinion on Berkeley Measure Z, listed in date order."
      />
      <ol className="border-t border-rule">
        {newsItems.map((item) => (
          <li key={item.href} className="border-b border-rule">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-eucalyptus">
                <time dateTime={item.date}>{formatNewsDate(item.date)}</time>
                <span className="text-bay"> · {item.outlet}</span>
                <span className="text-bay"> · {item.kind}</span>
              </p>
              <h2 className="mt-2 font-serif text-2xl leading-snug group-hover:text-eucalyptus">
                {item.title}
              </h2>
              <p className="mt-2 text-bay">{item.dek}</p>
            </a>
          </li>
        ))}
      </ol>
    </main>
  );
}
