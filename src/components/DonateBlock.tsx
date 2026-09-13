"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";

const AMOUNTS = [25, 50, 100, 250, 1000] as const;

export function donateHref(amount?: number) {
  const url = new URL(`mailto:${site.campaignEmail}`);
  url.searchParams.set(
    "subject",
    amount
      ? `Donation of $${amount.toLocaleString("en-US")} — No on Measure Z`
      : "Donation — No on Measure Z",
  );
  return url.toString();
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
  return (
    <a
      href={donateHref(amount)}
      className={className}
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
          Donate by email to {site.campaignEmail}. We do not collect cards on this
          domain.
        </p>
      ) : null}
    </section>
  );
}
