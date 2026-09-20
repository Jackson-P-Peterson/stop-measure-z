import { DonateBlock } from "@/components/DonateBlock";
import { GetInvolvedForm } from "@/components/GetInvolvedForm";
import { PageJsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { ShareSheet } from "@/components/ShareSheet";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/get-involved");

export default async function GetInvolvedPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string; error?: string }>;
}) {
  const query = await searchParams;
  return (
    <main className="mx-auto max-w-6xl px-4 pb-28 md:pb-24">
      <PageJsonLd path="/get-involved" />
      <PageIntro
        eyebrow="November 3 is close"
        title="Get involved"
        dek="Endorse, volunteer, get updates, or request a sign — pick as many as you want. Donate separately by email."
      />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)]">
        <GetInvolvedForm sent={query.sent === "1"} error={query.error === "1"} />
        <div className="grid gap-8">
          <DonateBlock compact />
        </div>
      </div>
      <div className="mt-10">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-bay">
          Share
        </p>
        <ShareSheet path="/get-involved" />
      </div>
    </main>
  );
}
