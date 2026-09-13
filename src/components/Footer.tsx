import Link from "next/link";
import { sources } from "@/lib/facts";
import { paidForBy, site } from "@/lib/site";

export function Footer() {
  const official = [
    sources.ordinance,
    sources.berkeleyside,
    sources.cityClerk,
  ].filter((s) => s.href);

  return (
    <footer className="mt-auto border-t border-rule bg-bay text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-2 text-sm text-sage">{site.subline}</p>
        </div>
        <nav className="grid gap-2 text-sm" aria-label="Footer">
          <Link href="/cost" className="hover:underline">
            Calculator
          </Link>
          <Link href="/fine-print" className="hover:underline">
            Fine print
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
          <Link href="/get-involved" className="hover:underline">
            Donate / volunteer
          </Link>
          <Link href="/about" className="hover:underline">
            About / contact
          </Link>
          <Link href="/press" className="hover:underline">
            Press
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy + SMS terms
          </Link>
          <a href={site.netfileUrl} className="hover:underline">
            FPPC NetFile
          </a>
        </nav>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sage">
            Official sources
          </p>
          <ul className="mt-3 grid gap-2 text-sm">
            {official.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
            {!sources.impartialAnalysis.href ? (
              <li className="text-sage">
                City Attorney impartial analysis — TODO: add URL when published
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-paper/15 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] leading-relaxed text-sage">
          {paidForBy()}
        </p>
        <a
          href={`mailto:${site.contactEmail}`}
          className="font-mono text-sm text-sage hover:text-paper hover:underline"
        >
          {site.contactEmail}
        </a>
      </div>
    </footer>
  );
}
