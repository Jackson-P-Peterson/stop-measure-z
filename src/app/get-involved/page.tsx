import { DonateBlock } from "@/components/DonateBlock";
import { GetInvolvedForm } from "@/components/GetInvolvedForm";
import { PageIntro } from "@/components/PageIntro";
import { ShareSheet } from "@/components/ShareSheet";

export default function GetInvolvedPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-28 md:pb-24">
      <PageIntro
        eyebrow="November 3 is close"
        title="Get involved"
        dek="Endorse, volunteer, get updates, or request a sign — pick as many as you want. Donate separately on Stripe."
      />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)]">
        <GetInvolvedForm />
        <div className="grid gap-8">
          <DonateBlock compact />
          <p className="text-sm text-bay">
            If you can gather ten neighbors in 94705 / 94707 / 94708, check
            Volunteer and we’ll bring the one-pager and the calculator.
          </p>
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
