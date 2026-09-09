"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";
import { withUtm } from "@/lib/utm";
import { useUtm } from "./UtmProvider";

const AMOUNTS = [25, 50, 100, 250, 1000] as const;

export function donateHref(amount?: number, utm: ReturnType<typeof useUtm> = {}) {
  const url = new URL(site.stripeDonateUrl);
  if (amount) url.searchParams.set("amount", String(amount));
  return withUtm(url.toString(), utm);
}

export function DonateLink({
  children,
  className,
  amount,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const utm = useUtm();
  return (
    <a
      href={donateHref(amount, utm)}
      className={className}
      rel="noopener noreferrer"
      onClick={() => track("donate_click", amount ? { amount } : undefined)}
    >
      {children}
    </a>
  );
}

export function DonateBlock({ compact = false }: { compact?: boolean }) {
  return (
    <section className="border border-rule bg-sage/60 p-5 sm:p-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-eucalyptus">
        Chip in
      </p>
      <h2 className="mt-2 font-serif text-2xl text-ink sm:text-3xl">
        Answer outside money with Berkeley neighbors.
      </h2>
      <p className="mt-3 max-w-2xl text-bay">
        The San Francisco Foundation put $45,000 into taxing Berkeley homeowners.
        Chip in $50 so Berkeley neighbors can answer.
      </p>
      <div className="mt-6 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap">
        {AMOUNTS.map((amount) => (
          <DonateLink
            key={amount}
            amount={amount}
            className="inline-flex min-h-11 items-center justify-center border border-eucalyptus bg-paper px-3 py-2 font-mono text-sm text-eucalyptus hover:bg-eucalyptus hover:text-paper"
          >
            ${amount.toLocaleString("en-US")}
          </DonateLink>
        ))}
        <DonateLink className="col-span-3 inline-flex min-h-11 items-center justify-center border border-ink bg-ink px-4 py-2 font-mono text-sm text-paper hover:bg-terracotta sm:col-span-1">
          Custom
        </DonateLink>
      </div>
      {!compact ? (
        <p className="mt-4 font-mono text-xs text-bay">
          Donations process on Stripe. We do not collect cards on this domain.
        </p>
      ) : null}
    </section>
  );
}
