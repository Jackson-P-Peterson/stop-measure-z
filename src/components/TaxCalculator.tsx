"use client";

import { useEffect, useMemo, useState } from "react";
import {
  DEFAULT_INFLATOR,
  formatUsd,
  roundDollars,
  shareLine,
  sixYearTotal,
  yearOneTax,
  yearSchedule,
  type PropertyType,
} from "@/lib/calculator";
import { calculatorExamples, inflatorDisclaimer, inflatorLabel } from "@/lib/facts";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";
import { withUtm } from "@/lib/utm";
import { useUtm } from "./UtmProvider";

const STORAGE_KEY = "smz_calculator";

type Saved = {
  sqft: number;
  type: PropertyType;
  renter: boolean;
};

export function TaxCalculator({
  variant = "full",
}: {
  variant?: "full" | "mini";
}) {
  const utm = useUtm();
  const [sqft, setSqft] = useState(1500);
  const [type, setType] = useState<PropertyType>("residential");
  const [renter, setRenter] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as Saved;
      if (saved.sqft) setSqft(saved.sqft);
      if (saved.type) setType(saved.type);
      if (typeof saved.renter === "boolean") setRenter(saved.renter);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ sqft, type, renter } satisfies Saved),
    );
  }, [sqft, type, renter]);

  const year1 = useMemo(() => yearOneTax(sqft || 0, type), [sqft, type]);
  const totals = useMemo(
    () => ({
      zero: sixYearTotal(year1, 0),
      four: sixYearTotal(year1, DEFAULT_INFLATOR),
      five: sixYearTotal(year1, 0.05),
    }),
    [year1],
  );
  const schedule = useMemo(
    () => ({
      zero: yearSchedule(year1, 0),
      four: yearSchedule(year1, DEFAULT_INFLATOR),
      five: yearSchedule(year1, 0.05),
    }),
    [year1],
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    track("calculator_submit", { sqft, type, renter });
    document.getElementById("calculator-result")?.focus();
  }

  async function share() {
    const text = shareLine(sqft, type);
    const url = withUtm("https://stopmeasurez.com/cost", utm);
    try {
      if (navigator.share) {
        await navigator.share({ title: site.name, text, url });
      } else {
        await navigator.clipboard.writeText(`${text}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    }
  }

  const chips =
    type === "residential"
      ? calculatorExamples.residentialSqft
      : calculatorExamples.commercialSqft;

  return (
    <div className="border border-rule bg-paper">
      <form onSubmit={onSubmit} className="grid gap-5 p-4 sm:p-5 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-eucalyptus">
              Parcel tax calculator
            </p>
            <h2 className="mt-1 font-serif text-2xl md:text-3xl">
              See what Z costs your {renter ? "rent" : "home"}
            </h2>
          </div>
          <label className="flex items-center gap-2 font-mono text-sm">
            <input
              type="checkbox"
              checked={renter}
              onChange={(e) => setRenter(e.target.checked)}
            />
            I rent
          </label>
        </div>

        {renter ? (
          <p className="border-l-2 border-terracotta pl-3 text-sm text-bay">
            You don’t get a tax bill. You still pay. This is an estimate of what a
            landlord of a non-exempt building may pass through — not a City bill.
            The low-income exemption is for owners, not tenants.
          </p>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-1 text-sm">
            <span>Square footage of improvements</span>
            <input
              type="number"
              min={1}
              inputMode="numeric"
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="border border-ink bg-paper px-3 py-3 font-mono text-base"
              required
            />
          </label>
          <fieldset className="grid gap-2 text-sm">
            <legend>Property type</legend>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                checked={type === "residential"}
                onChange={() => setType("residential")}
              />
              Residential — $0.06 / sq ft
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                checked={type === "commercial"}
                onChange={() => setType("commercial")}
              />
              Non-residential — $0.09 / sq ft
            </label>
          </fieldset>
        </div>

        <div className="flex flex-wrap gap-2">
          {chips.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setSqft(n)}
              className={`min-h-11 border px-3 py-2 font-mono text-sm ${
                sqft === n
                  ? "border-eucalyptus bg-sage text-eucalyptus"
                  : "border-rule text-bay"
              }`}
            >
              {n.toLocaleString("en-US")} sq ft
            </button>
          ))}
        </div>

        <button
          type="submit"
          className="min-h-12 w-full bg-eucalyptus px-5 py-2.5 text-paper hover:bg-bay sm:w-fit"
        >
          Calculate
        </button>
      </form>

      <div
        id="calculator-result"
        tabIndex={-1}
        className="border-t border-rule bg-sage/40 p-4 sm:p-5 md:p-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-bay">
          Six-year total at 4% {renter ? "(pass-through estimate)" : ""}
        </p>
        <p className="mt-1 font-mono text-4xl text-terracotta sm:text-5xl md:text-6xl">
          {formatUsd(roundDollars(totals.four), false)}
        </p>
        <p className="mt-2 text-sm text-bay">
          Year one: {formatUsd(year1)}. Exact 4% series: {formatUsd(totals.four)}.
        </p>
        <p className="mt-3 max-w-2xl font-mono text-[11px] leading-relaxed text-bay">
          {inflatorDisclaimer} Scenario labeled {inflatorLabel}.
        </p>

        {variant === "full" ? (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[32rem] text-left font-mono text-sm">
              <caption className="sr-only">
                Year-by-year Measure Z cost at 0%, 4%, and 5% inflators
              </caption>
              <thead>
                <tr className="border-b border-rule text-xs uppercase tracking-wider text-bay">
                  <th className="py-2 pr-3">Year</th>
                  <th className="py-2 pr-3">0% (no increase)</th>
                  <th className="py-2 pr-3">4% (illustrative)</th>
                  <th className="py-2">5%</th>
                </tr>
              </thead>
              <tbody>
                {schedule.four.map((_, i) => (
                  <tr key={i} className="border-b border-rule/70">
                    <td className="py-2 pr-3">{2027 + i}</td>
                    <td className="py-2 pr-3">{formatUsd(schedule.zero[i])}</td>
                    <td className="py-2 pr-3">{formatUsd(schedule.four[i])}</td>
                    <td className="py-2">{formatUsd(schedule.five[i])}</td>
                  </tr>
                ))}
                <tr className="font-semibold">
                  <td className="py-2 pr-3">Six-year total</td>
                  <td className="py-2 pr-3">{formatUsd(totals.zero)}</td>
                  <td className="py-2 pr-3 text-terracotta">
                    {formatUsd(totals.four)}
                  </td>
                  <td className="py-2">{formatUsd(totals.five)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p className="mt-4 text-sm">
            0% total {formatUsd(totals.zero)} · 5% total {formatUsd(totals.five)}.{" "}
            <a href="/cost" className="text-eucalyptus underline">
              Full table and formula
            </a>
          </p>
        )}

        <button
          type="button"
          onClick={share}
          className="mt-6 min-h-11 border border-ink px-4 py-2 text-sm hover:bg-ink hover:text-paper"
        >
          {copied ? "Copied" : "Share my cost"}
        </button>
      </div>
    </div>
  );
}
