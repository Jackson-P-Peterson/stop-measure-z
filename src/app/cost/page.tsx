import { TaxCalculator } from "@/components/TaxCalculator";
import { PageJsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { calculatorExamples } from "@/lib/facts";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/cost");

export default function CostPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-28 md:pb-24">
      <PageJsonLd path="/cost" />
      <PageIntro
        eyebrow="The product"
        title="What Measure Z costs"
        dek="Year-one rate is $0.06 per square foot of residential improvements and $0.09 non-residential. The ordinance then requires annual increases. We show 0%, 4%, and 5% so nobody can say we cooked the inflator."
      />
      <Photo
        src="/images/tax-bill.jpg"
        alt="Property tax paperwork and a blank check on a desk"
        caption="Parcel taxes show up on the bill. Measure Z adds another line — and an annual inflator."
        className="mb-8"
      />
      <TaxCalculator />

      <details className="mt-8 border border-rule p-5">
        <summary className="cursor-pointer font-serif text-xl">
          How we calculated this
        </summary>
        <div className="mt-4 space-y-3 font-mono text-sm leading-relaxed text-bay">
          <p>Year-1 residential = sqft × 0.06</p>
          <p>Year-1 commercial = sqft × 0.09</p>
          <p>
            Six-year total at rate r = year1 × ((1+r)^6 − 1) / r. If r = 0, total =
            year1 × 6.
          </p>
          <p>
            Default r = 4% (illustrative). Cite ordinance §7.03.020(B): Council
            shall increase the previous year’s rate by up to the greater of Bay
            Area CPI or state per-capita personal income growth.
          </p>
          <p>
            1,500 sq ft residential: year one $90.00; 4% six-year $596.97,
            displayed as $597.
          </p>
        </div>
      </details>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <article className="border border-rule p-6">
          <h2 className="font-serif text-2xl">You don’t get a tax bill. You still pay.</h2>
          <p className="mt-3 text-bay">
            Renters are not billed directly by the City. Landlords of non-exempt
            buildings will treat this like every other parcel tax — it shows up in
            rent. The low-income exemption is for owners, not tenants. Toggle “I
            rent” on the calculator for a pass-through estimate, labeled as such.
          </p>
        </article>
        <article className="border border-rule p-6">
          <h2 className="font-serif text-2xl">Commercial (BPOA / Fourth St / Gilman)</h2>
          <p className="mt-3 text-bay">
            Non-residential improvements are taxed at $0.09 per square foot. A
            5,000 sq ft space is $450 year one and about $2,985 over six years at
            4%. Switch the calculator to non-residential for Fourth Street,
            Gilman, and other commercial footprints.
          </p>
        </article>
      </section>

      <ul className="mt-10 grid gap-2 font-mono text-sm">
        {calculatorExamples.copy.map((ex) => (
          <li key={ex.line}>{ex.line}</li>
        ))}
      </ul>
    </main>
  );
}
