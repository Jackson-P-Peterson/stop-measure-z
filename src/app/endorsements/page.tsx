import { EndorsementForm } from "@/components/EndorsementForm";
import { PageJsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/endorsements");

const groups = [
  "Elected Officials",
  "Organizations",
  "Businesses",
  "Community Members",
] as const;

export default function EndorsementsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-24">
      <PageJsonLd path="/endorsements" />
      <PageIntro
        eyebrow="Written confirmation only"
        title="Endorsements"
        dek="Elected officials, organizations, businesses, and community members. Names appear here after they sign off in writing. We will not invent endorsers."
      />
      <div className="grid gap-10">
        {groups.map((group) => (
          <section key={group}>
            <h2 className="font-serif text-2xl">{group}</h2>
            <div className="mt-4 grid gap-4">
              <article className="border border-dashed border-rule p-5">
                <p className="font-serif text-xl">Coming Soon</p>
              </article>
            </div>
          </section>
        ))}
      </div>
      <h2 className="mt-14 font-serif text-3xl">Add your name</h2>
      <div className="mt-6">
        <EndorsementForm />
      </div>
    </main>
  );
}
