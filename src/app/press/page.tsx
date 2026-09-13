import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export default function PressPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24">
      <PageIntro
        eyebrow="Media"
        title="Press"
        dek="Boilerplate, one-pager, and logos. Counsel reviews numeric claims before anyone pastes them into a release."
      />
      <section className="space-y-4">
        <h2 className="font-serif text-2xl">Boilerplate</h2>
        <p>
          StopMeasureZ.com is the site of the official opposition committee for
          No on Measure Z on the November 3, 2026 ballot. Measure Z is a
          voter-initiated special parcel tax to capitalize a regional Public Bank
          East Bay that does not exist — no charter, no FDIC insurance, no DFPI
          approval. Oakland is paying $0. Alameda County is paying $0. Richmond
          pledged $750,000, contingent on a charter and County money. Berkeley’s
          city estimate is $58.3 million over six years.
        </p>
        <p>
          Contact:{" "}
          <a className="text-eucalyptus underline" href={`mailto:${site.pressEmail}`}>
            {site.pressEmail}
          </a>
        </p>
        <ul className="list-disc space-y-2 pl-5 text-bay">
          <li>One-pager PDF — TODO: add `/press/one-pager.pdf` after counsel review.</li>
          <li>NO ON Z stamp / lockup — use the on-site stamp; SVG logo TODO.</li>
          <li>Releases — none yet. Do not invent them.</li>
        </ul>
      </section>
    </main>
  );
}
