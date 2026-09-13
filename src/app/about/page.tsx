import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24">
      <PageIntro
        eyebrow="Committee"
        title="Who’s behind No on Z"
        dek="The official opposition committee for No on Measure Z."
      />
      <div className="space-y-4 text-bay">
        <p>
          StopMeasureZ.com is the site of the official ballot-measure committee
          opposing Berkeley Measure Z on the November 3, 2026 ballot.
        </p>
        <p>
          Volunteer neighbors and local property owners. Not a party committee.
        </p>
        <p>
          Contact:{" "}
          <a
            className="text-eucalyptus underline"
            href={`mailto:${site.contactEmail}`}
          >
            {site.contactEmail}
          </a>
        </p>
      </div>
    </main>
  );
}
