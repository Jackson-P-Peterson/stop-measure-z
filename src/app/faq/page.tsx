import { FaqList } from "@/components/FaqList";
import { PageJsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { faqItems } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/faq");

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24">
      <PageJsonLd path="/faq" />
      <PageIntro
        eyebrow="Objection handling"
        title="FAQ"
        dek="Short version first. Then the paragraph you can read to a neighbor holding a vote-by-mail packet."
      />
      <FaqList items={faqItems} />
    </main>
  );
}
