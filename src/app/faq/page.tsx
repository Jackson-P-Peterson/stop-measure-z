import { FaqList } from "@/components/FaqList";
import { PageIntro } from "@/components/PageIntro";
import { faqItems } from "@/lib/copy";

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24">
      <PageIntro
        eyebrow="Objection handling"
        title="FAQ"
        dek="Short version first. Then the paragraph you can read to a neighbor holding a vote-by-mail packet."
      />
      <FaqList items={faqItems} />
    </main>
  );
}
