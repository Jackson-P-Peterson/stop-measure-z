import Image from "next/image";
import {
  endorsementGroups,
  endorsements,
  type Endorsement,
} from "@/lib/endorsements";

function EndorsementCard({ endorsement }: { endorsement: Endorsement }) {
  const logo = endorsement.fit === "contain";

  return (
    <article className="flex h-full min-w-0 flex-col border border-rule bg-paper">
      <div
        className={`overflow-hidden ${logo ? "flex aspect-[4/3] items-center justify-center bg-white p-4" : "relative aspect-[4/3] bg-sage"}`}
      >
        {logo ? (
          <Image
            src={endorsement.image}
            alt={endorsement.imageAlt}
            width={640}
            height={320}
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <Image
            src={endorsement.image}
            alt={endorsement.imageAlt}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
            className="object-cover object-top"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-eucalyptus">
          {endorsement.title}
        </p>
        <h3 className="mt-1 font-serif text-xl leading-snug">{endorsement.name}</h3>
      </div>
    </article>
  );
}

export function EndorsementGrid() {
  return (
    <div className="grid gap-12">
      {endorsementGroups.map((group) => (
        <section key={group}>
          <h2 className="font-serif text-2xl">{group}</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {endorsements
              .filter((endorsement) => endorsement.group === group)
              .map((endorsement) => (
                <EndorsementCard key={endorsement.name} endorsement={endorsement} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
