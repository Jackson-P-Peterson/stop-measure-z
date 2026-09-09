import { BallotStack } from "@/components/BallotStack";
import { DonateBlock } from "@/components/DonateBlock";
import { EastBayBillMap } from "@/components/EastBayBillMap";
import { Photo } from "@/components/Photo";
import { ShareSheet } from "@/components/ShareSheet";
import { TaxCalculator } from "@/components/TaxCalculator";
import { fourReasons } from "@/lib/copy";
import { permissionQuote, regionalContributions } from "@/lib/facts";

export default function HomePage() {
  return (
    <main className="pb-28 md:pb-16">
      <section className="relative isolate min-h-[32rem] overflow-hidden sm:min-h-[36rem]">
        <Photo
          src="/images/berkeley-hills.jpg"
          alt="Berkeley Hills looking west toward the East Bay and San Francisco Bay"
          className="absolute inset-0"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <div className="relative z-10 mx-auto flex min-h-[32rem] max-w-6xl flex-col justify-end px-4 pb-10 pt-16 sm:min-h-[36rem] sm:pb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sage sm:text-xs">
            Berkeley · November 3, 2026 · Measure Z
          </p>
          <h1 className="mt-3 max-w-4xl font-serif text-[2.15rem] leading-[1.05] text-paper sm:text-5xl md:text-6xl">
            Berkeley shouldn’t bankroll the East Bay.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-sage sm:text-lg">
            Measure Z taxes Berkeley homes $58 million over six years to capitalize
            a regional public bank that does not exist — no charter, no insurance,
            no guarantee Berkeley sees a dime. Oakland is paying $0. The County is
            paying $0.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#calculator"
              className="inline-flex min-h-12 items-center justify-center bg-eucalyptus px-5 py-3 text-center text-paper hover:bg-paper hover:text-eucalyptus"
            >
              See what Z costs your home
            </a>
            <a
              href="#stack"
              className="inline-flex min-h-12 items-center justify-center border border-paper px-5 py-3 text-center text-paper hover:bg-paper hover:text-ink"
            >
              See the stack
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-sage/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {regionalContributions
            .filter((r) => r.id !== "emeryville")
            .map((row) => (
              <div
                key={row.id}
                className="border-b border-r border-rule px-3 py-4 last:border-r-0 sm:px-4 sm:py-6 md:border-b-0"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-bay sm:text-xs">
                  {row.name}
                </p>
                <p
                  className={`mt-1 font-mono text-2xl sm:text-3xl md:text-4xl ${
                    row.id === "berkeley" ? "text-terracotta" : "text-ink"
                  }`}
                >
                  {row.amountLabel}
                </p>
              </div>
            ))}
        </div>
      </section>

      <section id="stack" className="scroll-mt-20 bg-[#efe6d4] px-4 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-eucalyptus">
              The stack is open
            </p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">
              It looks like a bill because it is one.
            </h2>
            <p className="mt-3 max-w-xl text-bay">
              You do not have to fight every line. Voting No on Z is the easy
              choice: Berkeley money for other cities’ projects, for a bank that
              does not exist.
            </p>
            <div className="mt-8">
              <BallotStack />
            </div>
          </div>
          <Photo
            src="/images/ballot-table.jpg"
            alt="Vote-by-mail envelope and ballot pages on a kitchen table"
            caption="Mark No on Z. Then return the envelope."
            className="hidden lg:block"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-eucalyptus">
          The map
        </p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">
          One city. Everybody’s bill.
        </h2>
        <p className="mt-3 max-w-2xl text-bay">
          Imagine if only Berkeley paid for BART. That’s the financing plan.
        </p>
        <div className="mt-8">
          <EastBayBillMap />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
        <h2 className="font-serif text-3xl">Four reasons</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {fourReasons.map((reason) => (
            <article key={reason.title} className="border border-rule bg-paper p-5">
              <h3 className="font-serif text-xl sm:text-2xl">{reason.title}</h3>
              <p className="mt-2 text-bay">{reason.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Photo
            src="/images/berkeley-house.jpg"
            alt="Brown-shingle house on a North Berkeley street"
            caption="The tax is on improvements — the house, not the land."
          />
          <Photo
            src="/images/tax-bill.jpg"
            alt="Property tax paperwork and a blank check on a desk"
            caption="They wrote the inflator, the exemption paperwork, and the lien into the ordinance."
          />
        </div>
      </section>

      <section id="calculator" className="scroll-mt-20 mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
        <p className="mb-4 max-w-2xl text-base sm:text-lg">
          A 1,500 sq ft Berkeley home pays $90 the first year — and more every year
          after.
        </p>
        <TaxCalculator variant="mini" />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-12 sm:pb-16">
        <blockquote className="border-l-2 border-eucalyptus pl-4 sm:pl-5">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl">
            “{permissionQuote.text}”
          </p>
          <footer className="mt-4 font-mono text-sm text-bay">
            — {permissionQuote.attribution}
          </footer>
        </blockquote>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <DonateBlock />
        <div className="mt-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-bay">
            Share
          </p>
          <ShareSheet path="/" />
        </div>
        <p className="mt-12 font-serif text-2xl sm:text-3xl">
          Vote No on Measure Z. Then return your ballot.
        </p>
      </section>
    </main>
  );
}
