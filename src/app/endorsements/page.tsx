import { EndorsementForm } from "@/components/EndorsementForm";
import { EndorsementGrid } from "@/components/EndorsementGrid";
import { PageJsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/endorsements");

export default function EndorsementsPage() {
  return (
    <main className="pb-24">
      <PageJsonLd path="/endorsements" />
      <PageIntro
        eyebrow="No on Measure Z"
        title="Endorsements"
        dek="Organizations and elected officials who have publicly urged Berkeley to vote No. Names appear here after a written position. We will not invent endorsers."
      />
      <div className="mx-auto max-w-6xl px-4">
        <EndorsementGrid />
        <h2 className="mt-14 font-serif text-3xl">Add your name</h2>
        <div className="mt-6 max-w-3xl">
          <EndorsementForm />
        </div>
      </div>
    </main>
  );
}
