import { PageIntro } from "@/components/PageIntro";
import { noIndexMetadata } from "@/lib/seo";

export const metadata = noIndexMetadata(
  "Traducción en camino",
  "Spanish translation is not published yet. The official No on Measure Z site is in English.",
);

export default function SpanishStubPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24">
      <PageIntro
        eyebrow="Español"
        title="Traducción en camino"
        dek="This route is stubbed on purpose. Do not publish machine-translated claims. When counsel clears a Spanish packet, this page becomes the homepage mirror."
      />
    </main>
  );
}
