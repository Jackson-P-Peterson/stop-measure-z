import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24">
      <PageIntro
        eyebrow="Committee"
        title="Who’s behind No on Z"
        dek="Volunteer neighbors and local property owners. Within Our Means Berkeley. Not a party committee."
      />
      <div className="space-y-4 text-bay">
        <p>
          {site.committeeName}. FPPC ID {site.fppcId}. Registered with the FPPC.
        </p>
        <p>
          Treasurer:{" "}
          <a className="text-eucalyptus underline" href={`mailto:${site.treasurerEmail}`}>
            {site.treasurerEmail}
          </a>
        </p>
        <p>
          Press:{" "}
          <a className="text-eucalyptus underline" href={`mailto:${site.pressEmail}`}>
            {site.pressEmail}
          </a>
        </p>
        <p>
          Filings:{" "}
          <a className="text-eucalyptus underline" href={site.netfileUrl}>
            FPPC NetFile
          </a>
        </p>
        <p className="font-mono text-xs">
          Paid for by {site.committeeName}, FPPC ID {site.fppcId}. Not authorized by
          a candidate or candidate committee.
        </p>
      </div>
    </main>
  );
}
