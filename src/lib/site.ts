export const site = {
  name: "StopMeasureZ.com",
  campaignLine: "No on Measure Z",
  subline: "Berkeley shouldn’t bankroll the East Bay.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://stopmeasurez.com",
  committeeName:
    process.env.NEXT_PUBLIC_COMMITTEE_NAME ?? "[COMMITTEE LEGAL NAME]",
  fppcId: process.env.NEXT_PUBLIC_FPPC_ID ?? "#________",
  stripeDonateUrl:
    process.env.NEXT_PUBLIC_STRIPE_DONATE_URL ??
    "https://donate.stripe.com/TODO",
  formEndpoint: process.env.FORM_ENDPOINT ?? "",
  treasurerEmail:
    process.env.NEXT_PUBLIC_TREASURER_EMAIL ?? "[TREASURER_EMAIL]",
  pressEmail: process.env.NEXT_PUBLIC_PRESS_EMAIL ?? "[PRESS_EMAIL]",
  netfileUrl:
    process.env.NEXT_PUBLIC_NETFILE_URL ??
    "https://netfile.com/Connect2/api/public",
  electionDate: "November 3, 2026",
  electionDateShort: "Nov 3",
} as const;

export function paidForBy(): string {
  return `Paid for by ${site.committeeName}, FPPC ID ${site.fppcId}. Not authorized by a candidate or candidate committee.`;
}
