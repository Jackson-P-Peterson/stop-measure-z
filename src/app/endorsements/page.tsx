import { EndorsementForm } from "@/components/EndorsementForm";
import { PageIntro } from "@/components/PageIntro";

const seeds = [
  {
    group: "Neighbors",
    items: [
      {
        name: "[NAME — confirm in writing]",
        place: "Berkeley Hills",
        quote: "Placeholder until the neighbor signs off. Do not invent endorsers.",
      },
    ],
  },
  {
    group: "Small landlords & merchants",
    items: [
      {
        name: "[NAME — confirm in writing]",
        place: "North Shattuck",
        quote: "Placeholder. One sentence, neighborhood or title.",
      },
    ],
  },
  {
    group: "Community organizations",
    items: [
      {
        name: "[ORGANIZATION — confirm in writing]",
        place: "Berkeley",
        quote: "Placeholder. Do not invent organizational partners.",
      },
    ],
  },
];

export default function EndorsementsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-24">
      <PageIntro
        eyebrow="Validators, not politicians"
        title="Endorsements"
        dek="Quotes from neighbors, small landlords, seniors, merchants, former budget hawks. No councilmember hero shots."
      />
      <div className="grid gap-10">
        {seeds.map((group) => (
          <section key={group.group}>
            <h2 className="font-serif text-2xl">{group.group}</h2>
            <div className="mt-4 grid gap-4">
              {group.items.map((item) => (
                <article key={item.name} className="border border-dashed border-rule p-5">
                  <p className="font-serif text-xl">{item.name}</p>
                  <p className="font-mono text-xs text-eucalyptus">{item.place}</p>
                  <p className="mt-2 text-bay">{item.quote}</p>
                </article>
              ))}
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
