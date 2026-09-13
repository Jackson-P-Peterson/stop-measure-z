export const ordinancePdf =
  "https://berkeleyca.gov/sites/default/files/Berkeley_Public%20Bank%20-%20Text.pdf";

export const sources = {
  ordinance: {
    label: "Measure Z ordinance text (City of Berkeley)",
    href: ordinancePdf,
  },
  berkeleyside: {
    label: "Berkeleyside, Aug. 25, 2026",
    href: "https://www.berkeleyside.org/2026/08/25/berkeley-election-2026-measure-z-public-bank-east-bay",
  },
  berkeleysideBallot: {
    label: "Berkeleyside, July 24, 2026 — seven local measures",
    href: "https://www.berkeleyside.org/2026/07/24/berkeley-election-2026-ballot-measures-public-bank-soda-tax",
  },
  richmondside: {
    label: "Richmondside, Aug. 31, 2026 — Richmond pledge",
    href: "https://richmondside.org/2026/08/31/richmond-pledges-money-east-bay-public-bank/",
  },
  dailyCal: {
    label: "Daily Cal, May 2026 — LaRosa “pilot” language",
    href: "https://www.dailycal.org/news/city/berkeley-ballot-measure-seeks-to-establish-first-california-public-bank/article_097c90c1-eb0d-4a77-9a9c-368d91929299.html",
  },
  cityClerk: {
    label: "City of Berkeley — initiative petition staff report, July 14, 2026",
    href: "https://berkeleyca.gov/sites/default/files/2026-07/2026-07-14%20Item%2003%20Initiative%20Petition%20%E2%80%93%20Public%20Bank.pdf",
  },
  impartialAnalysis: {
    label: "City Attorney impartial analysis",
    href: "", // TODO: add official impartial-analysis URL when published
  },
} as const;

export const measureZ = {
  type: "Voter-initiated special parcel tax, majority vote (Upland).",
  start: "January 1, 2027",
  duration: "Six years (through 2032 / fund rules through June 30, 2033)",
  residentialRate: 0.06,
  commercialRate: 0.09,
  yearOneEstimate: 9_200_000,
  sixYearEstimate: 58_300_000,
  capitalizationTarget: 40_000_000,
} as const;

export const regionalContributions = [
  {
    id: "oakland",
    name: "Oakland",
    amountLabel: "$0",
    amount: 0,
    note: "No pledged capitalization.",
  },
  {
    id: "county",
    name: "Alameda County",
    amountLabel: "$0",
    amount: 0,
    note: "No pledged capitalization.",
  },
  {
    id: "richmond",
    name: "Richmond",
    amountLabel: "$750K (maybe)",
    amount: 750_000,
    note: "Contingent on a state charter and County money.",
  },
  {
    id: "emeryville",
    name: "Emeryville",
    amountLabel: "$0",
    amount: 0,
    note: "No pledged capitalization in the verified record.",
  },
  {
    id: "berkeley",
    name: "Berkeley",
    amountLabel: "$58.3 million",
    amount: 58_300_000,
    note: "City estimate over six years.",
  },
] as const;

export const yesQuotes = [
  {
    speaker: "Neha Singh, Friends of Public Bank East Bay",
    text: "in Berkeley we polled much better",
    source: sources.berkeleyside,
    context:
      "Proponents said they are only pursuing Berkeley because polling was stronger here.",
  },
  {
    speaker: "Debbie Notkin",
    text: "one way to get the county engaged is to show voter support",
    source: sources.berkeleyside,
    context:
      "The Berkeley vote is framed as a way to pull in governments that have not put up money.",
  },
  {
    speaker: "Julian LaRosa, Yes-side field director",
    text: "pilot project",
    source: sources.dailyCal,
    context:
      "Intended as a pilot that starts in Berkeley before expanding.",
  },
] as const;

export const ordinanceExcerpts = [
  {
    id: "inflator",
    section: "§7.03.020(B)",
    title: "Mandatory inflator",
    excerpt:
      "Annually in May, the City Council shall increase the previous year’s rate by up to the greater of the cost of living in the immediate San Francisco Bay Area or per capita personal income growth in the state…",
    highlights: ["shall", "greater of"],
    translation:
      "The Council is directed to raise the rate every year. There is no cap in this section — only “up to the greater of” two inflation indexes.",
  },
  {
    id: "exemption",
    section: "§7.03.060(B)–(C)",
    title: "Exemption trap",
    excerpt:
      "Very-low-income owners must apply annually, submitting federal income tax returns and W-2 forms to the City Manager. Deadline June 30. Miss it → pay the full tax + penalties.",
    highlights: ["annually", "June 30"],
    translation:
      "The exemption is not automatic. Miss the paperwork deadline and you owe the tax, with penalties, like everyone else.",
    note: "The ordinance requires annual applications with federal returns and W-2s. The “Miss it →” line above is a campaign paraphrase of the penalty consequence, not a full verbatim dump of (B)–(C). Cite the PDF for the complete subsections.",
  },
  {
    id: "lien",
    section: "§7.03.080",
    title: "Lien",
    excerpt:
      "The tax shall constitute a lien upon the parcel and a personal obligation of the owners.",
    highlights: ["shall", "lien"],
    translation:
      "Unpaid tax attaches to the house — and to the people who own it.",
  },
  {
    id: "fallback",
    section: "§7.03.010(F)",
    title: "Fallback if no charter",
    excerpt:
      "If the Bank does not secure authorization by June 30, 2033, the special fund may be used to offer loans for housing / green / small business at Council discretion.",
    highlights: ["may"],
    translation:
      "If the bank never opens, they keep the money. Council “may” lend it — a job the Housing Trust Fund already does.",
    note: "Ellipses condensed for the card; the operative date, “may,” and Council discretion are the load-bearing words. Full text in the ordinance PDF.",
  },
  {
    id: "council",
    section: "§7.03.010(C)",
    title: "Council control",
    excerpt:
      "All funds subject to the review, allocation, and approval by the City Council.",
    highlights: ["approval by the City Council"],
    translation:
      "This is not an independent capitalization locked to a charter. Council still holds the purse.",
  },
  {
    id: "gann",
    section: "Section 4",
    title: "Gann limit",
    excerpt:
      "Raises the City’s appropriations limit by the full amount of the tax.",
    highlights: [],
    translation:
      "The tax is six years. The spending-authority expansion is a precedent that outlasts the rate.",
  },
  {
    id: "conflict",
    section: "Section 6",
    title: "Conflicting measures",
    excerpt:
      "Ambiguous overlap with other local tax measures funding similar uses.",
    highlights: [],
    translation:
      "The ordinance itself flags that other November taxes may fund similar purposes.",
    note: "Paraphrase of the conflicting-measures clause pending counsel’s preferred verbatim excerpt.",
  },
] as const;

export const yesMoney = {
  asOf: "mid-August 2026 FPPC / NetFile filings — update before launch",
  coalitionRaised: "$155K+",
  sfFoundation: "$45K San Francisco Foundation (outside philanthropy)",
  notkin: "$45K Debbie Notkin, later re-disclosed as a loan",
} as const;

export const ballotStack = [
  {
    id: "U",
    name: "Measure U",
    summary: "$300M GO infrastructure bond (2/3), ~$44/year per $100K assessed.",
    pull: false,
  },
  {
    id: "V",
    name: "Measure V",
    summary: "0.5% sales tax to 10.75% (~$9M/yr) for city services / deficit.",
    pull: false,
  },
  {
    id: "W",
    name: "Measure W",
    summary: "Charter amendments.",
    pull: false,
  },
  {
    id: "X",
    name: "Measure X",
    summary: "Rent board amendments.",
    pull: false,
  },
  {
    id: "Y",
    name: "Measure Y",
    summary: "Arts parcel tax (~$0.07/sq ft, 12 years).",
    pull: false,
  },
  {
    id: "Z",
    name: "Measure Z",
    summary: "Public bank parcel tax — Berkeley money for a regional bank that does not exist.",
    pull: true,
  },
  {
    id: "AA",
    name: "Measure AA",
    summary: "Soda tax increase.",
    pull: false,
  },
] as const;

export const ballotBill = [
  {
    letter: "U",
    name: "Infrastructure bond",
    charge: "~$44 / yr per $100K assessed",
    note: "GO bond · 2/3 vote",
    kind: "local" as const,
    strike: false,
  },
  {
    letter: "V",
    name: "City services sales tax",
    charge: "+0.5% sales tax",
    note: "Deficit / city services",
    kind: "local" as const,
    strike: false,
  },
  {
    letter: "W",
    name: "Charter amendments",
    charge: "—",
    note: "Governance, not a tax",
    kind: "local" as const,
    strike: false,
  },
  {
    letter: "X",
    name: "Rent board amendments",
    charge: "—",
    note: "Governance, not a tax",
    kind: "local" as const,
    strike: false,
  },
  {
    letter: "Y",
    name: "Arts parcel tax",
    charge: "~$0.07 / sq ft · 12 years",
    note: "Local arts",
    kind: "local" as const,
    strike: false,
  },
  {
    letter: "Z",
    name: "Public bank parcel tax",
    charge: "$58.3 million from Berkeley",
    note: "Regional bank that does not exist · Oakland $0",
    kind: "local" as const,
    strike: true,
  },
  {
    letter: "AA",
    name: "Soda tax increase",
    charge: "Per-ounce increase",
    note: "Existing soda tax",
    kind: "local" as const,
    strike: false,
  },
  {
    letter: "—",
    name: "Regional transit sales tax",
    charge: "+0.5%",
    note: "Bay Area transit",
    kind: "beyond" as const,
    strike: false,
  },
  {
    letter: "40",
    name: "Prop 40",
    charge: "Statewide",
    note: "Billionaire tax",
    kind: "beyond" as const,
    strike: false,
  },
] as const;

export const beyondBerkeley = [
  {
    id: "transit",
    name: "Regional 0.5% transit sales tax",
    summary: "Bay Area transit tax on the same ballot.",
  },
  {
    id: "prop40",
    name: "Prop 40",
    summary: "Statewide billionaire tax.",
  },
] as const;

export const cityDeficitNote =
  "City structural deficit ~$30M; public discussion of closing Fire Station 4 / service cuts if V fails. Don’t finance an unchartered regional experiment while the city is talking about closing a firehouse.";

export const permissionQuote = {
  text: "I don’t think we’re, collectively, ideologically, anti-public bank at all. The issue is the way this is written… Berkeley money going to a regional effort.",
  attribution: "Paul Mathew",
} as const;

export const calculatorExamples = {
  residentialSqft: [1200, 1500, 1800, 2200, 2800],
  commercialSqft: [3000, 8000],
  copy: [
    {
      sqft: 1500,
      type: "residential" as const,
      year1: 90,
      sixYear4pct: 597,
      line: "1,500 sq ft home → $90 year one, ~$597 over six years at 4%.",
    },
    {
      sqft: 2200,
      type: "residential" as const,
      year1: 132,
      sixYear4pct: 875,
      line: "2,200 sq ft Hills home → $132 year one, ~$875 over six years at 4%.",
    },
    {
      sqft: 5000,
      type: "commercial" as const,
      year1: 450,
      sixYear4pct: 2985,
      line: "5,000 sq ft commercial → $450 year one, ~$2,985 over six years at 4%.",
    },
  ],
} as const;

export const inflatorDisclaimer =
  "Ordinance §7.03.020(B). Illustrative inflator. Actual annual increase will be the greater of Bay Area CPI or state per-capita personal income growth, up to that amount.";

export const inflatorLabel =
  "illustrative; ordinance requires Council to raise the rate by up to the greater of Bay Area CPI or state per-capita personal income — historically in the 3–5%+ range";

export const signZips = ["94705", "94707", "94708", "94709", "94703"] as const;
