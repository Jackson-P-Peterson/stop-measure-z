import { PageIntro } from "@/components/PageIntro";
import { noIndexMetadata } from "@/lib/seo";

export const metadata = noIndexMetadata(
  "News",
  "No news posts have been published yet on StopMeasureZ.com.",
);

export default function NewsStubPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24">
      <PageIntro
        eyebrow="News"
        title="No posts yet"
        dek="This slug route exists so a later clip can live at /news/[slug]. We are not faking a blog."
      />
    </main>
  );
}
