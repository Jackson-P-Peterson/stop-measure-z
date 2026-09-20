export const site = {
  name: "STOP MEASURE Z.",
  campaignLine: "STOP MEASURE Z.",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@stopmeasurez.com",
  subline: "Berkeley shouldn’t bankroll the East Bay.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://stopmeasurez.com",
  committeeName:
    process.env.NEXT_PUBLIC_COMMITTEE_NAME ??
    "Protect Berkeley, No on Measure Z",
  fppcId: process.env.NEXT_PUBLIC_FPPC_ID ?? "#1496629",
  campaignEmail:
    process.env.NEXT_PUBLIC_CAMPAIGN_EMAIL ?? "campaign@stopmeasurez.com",
  formEndpoint: process.env.FORM_ENDPOINT ?? "",
  treasurerEmail:
    process.env.NEXT_PUBLIC_TREASURER_EMAIL ?? "campaign@stopmeasurez.com",
  pressEmail: process.env.NEXT_PUBLIC_PRESS_EMAIL ?? "campaign@stopmeasurez.com",
  netfileUrl:
    process.env.NEXT_PUBLIC_NETFILE_URL ??
    "https://netfile.com/Connect2/api/public",
  electionDate: "November 3, 2026",
  electionDateShort: "Nov 3",
} as const;

export function paidForBy(): string {
  return `Paid for by ${site.committeeName}. FPPC ID ${site.fppcId}.`;
}
