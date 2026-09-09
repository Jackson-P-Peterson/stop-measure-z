export const RESIDENTIAL_RATE = 0.06;
export const COMMERCIAL_RATE = 0.09;
export const DEFAULT_INFLATOR = 0.04;
export const YEARS = 6;

export type PropertyType = "residential" | "commercial";

export function roundCents(n: number): number {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

export function roundDollars(n: number): number {
  return Math.round(n);
}

export function yearOneTax(sqft: number, type: PropertyType): number {
  const rate = type === "residential" ? RESIDENTIAL_RATE : COMMERCIAL_RATE;
  return roundCents(sqft * rate);
}

/** Geometric series of year-1 through year-6 payments with a constant annual inflator. */
export function sixYearTotal(
  year1: number,
  annualRate: number,
  years: number = YEARS,
): number {
  if (annualRate === 0) return roundCents(year1 * years);
  return roundCents(
    (year1 * (Math.pow(1 + annualRate, years) - 1)) / annualRate,
  );
}

export function yearSchedule(
  year1: number,
  annualRate: number,
  years: number = YEARS,
): number[] {
  return Array.from({ length: years }, (_, i) =>
    roundCents(year1 * Math.pow(1 + annualRate, i)),
  );
}

export function formatUsd(n: number, cents = true): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
  });
}

export function shareLine(sqft: number, type: PropertyType): string {
  const y1 = yearOneTax(sqft, type);
  const six = sixYearTotal(y1, DEFAULT_INFLATOR);
  const kind = type === "residential" ? "home" : "building";
  return `My ${sqft.toLocaleString("en-US")} sq ft ${kind}: ${formatUsd(y1)} in year one, about ${formatUsd(roundDollars(six), false)} over six years. No on Z. StopMeasureZ.com/cost`;
}
