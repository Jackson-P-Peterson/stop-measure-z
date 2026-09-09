import { EastBayBillMap } from "@/components/EastBayBillMap";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { sources, yesQuotes } from "@/lib/facts";

export default function WhyBerkeleyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-28 md:pb-24">
      <PageIntro
        eyebrow="Regional fairness"
        title="They chose us because we’d pay"
        dek="Oakland put up nothing. The County put up nothing. Richmond pledged $750,000 — maybe, if someone else pays too. Berkeley is on the hook for $58.3 million."
      />
      <Photo
        src="/images/berkeley-hills.jpg"
        alt="Berkeley Hills looking west toward the East Bay"
        caption="Berkeley sits on the bay. The service area does not stop at the city line."
        className="mb-8"
      />
      <EastBayBillMap />

      <section className="mt-12 max-w-3xl space-y-6">
        <p>
          Public banking may be a fine idea for a state or a region to fund. This
          measure makes Berkeley property owners alone capitalize a regional
          experiment Oakland already walked away from.
        </p>
        <p>
          Imagine if only Berkeley paid for BART. That’s the financing plan: a
          service area that includes the East Bay, capitalized by one city’s
          parcel tax, with loans that can go to recipients in Berkeley or
          elsewhere.
        </p>
      </section>

      <section className="mt-12 grid gap-6">
        {yesQuotes.map((q) => (
          <blockquote key={q.speaker} className="border border-rule bg-paper p-6">
            <p className="font-serif text-2xl">“{q.text}”</p>
            <p className="mt-3 text-sm text-bay">{q.context}</p>
            <footer className="mt-4 font-mono text-xs text-eucalyptus">
              — {q.speaker} ·{" "}
              <a href={q.source.href} className="underline">
                {q.source.label}
              </a>
            </footer>
          </blockquote>
        ))}
        <p className="text-sm text-bay">
          Additional reporting:{" "}
          <a href={sources.richmondside.href} className="underline">
            {sources.richmondside.label}
          </a>
          .
        </p>
      </section>
    </main>
  );
}
