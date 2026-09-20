import { OrdinanceCard } from "@/components/OrdinanceCard";
import { PageJsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { ordinanceExcerpts, ordinancePdf } from "@/lib/facts";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/fine-print");

export default function FinePrintPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-24">
      <PageJsonLd path="/fine-print" />
      <PageIntro
        eyebrow="They wrote it down"
        title="Fine print"
        dek="Automatic increases every year. Tax returns to City Hall for the exemption. A lien if you miss the deadline. If the bank never opens, they keep the money."
      />
      <p className="mb-8 max-w-3xl text-sm text-bay">
        Operative verbs highlighted. Full text:{" "}
        <a href={ordinancePdf} className="text-eucalyptus underline">
          City of Berkeley ordinance PDF
        </a>
        .
      </p>
      <div className="grid gap-6">
        {ordinanceExcerpts
          .filter((e) => ["inflator", "exemption", "lien"].includes(e.id))
          .map((card) => (
            <OrdinanceCard key={card.id} {...card} />
          ))}
      </div>

      <h2 className="mt-14 font-serif text-3xl">If the bank is never chartered</h2>
      <p className="mt-3 max-w-3xl text-bay">
        None has been chartered yet under AB 857. This site does not claim no
        public bank can ever be chartered in California. It claims this ordinance
        still collects the tax if the charter never comes.
      </p>
      <div className="mt-6 grid gap-6">
        {ordinanceExcerpts
          .filter((e) => ["fallback", "council"].includes(e.id))
          .map((card) => (
            <OrdinanceCard key={card.id} {...card} />
          ))}
      </div>

      <h2 className="mt-14 font-serif text-3xl">Gann limit</h2>
      <p className="mt-3 max-w-3xl text-bay">
        Section 4 raises the City’s appropriations limit by the full amount of the
        tax. This permanently expands spending authority; the tax is six years, the
        precedent is not.
      </p>
      <div className="mt-6 grid gap-6">
        {ordinanceExcerpts
          .filter((e) => ["gann", "conflict"].includes(e.id))
          .map((card) => (
            <OrdinanceCard key={card.id} {...card} />
          ))}
      </div>
    </main>
  );
}
