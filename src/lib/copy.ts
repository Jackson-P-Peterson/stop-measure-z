export const faqItems = [
  {
    id: "public-banks",
    q: "Are you against public banks?",
    short:
      "No. Against Berkeley property owners alone capitalizing a regional experiment Oakland declined to fund.",
    a: "No. Public banking may be a fine idea for a state or a region to fund. This measure makes Berkeley property owners alone capitalize a regional experiment Oakland already walked away from. The argument is the financing, not the theory.",
  },
  {
    id: "housing",
    q: "Doesn’t this fund affordable housing?",
    short:
      "It funds a bank that doesn’t exist. If the charter never comes, Council may lend the money — something the Housing Trust Fund already does.",
    a: "It funds a bank that doesn’t exist. If the charter never comes, Council may lend the money — something the Housing Trust Fund already does, without a new $58 million tax and with no production targets or Berkeley minimum in this ordinance. Loans can go to recipients in Berkeley or elsewhere in the East Bay.",
  },
  {
    id: "bnd",
    q: "What about the Bank of North Dakota?",
    short:
      "A 105-year-old state bank with a state’s balance sheet. Z is one city’s parcel tax betting on a charter no California public bank has received yet under AB 857.",
    a: "The Bank of North Dakota is a 105-year-old state bank with a state’s balance sheet. Measure Z is one city’s parcel tax betting on a charter no California public bank has received yet under AB 857. LA’s effort collapsed; San Francisco’s municipal finance corporation stalled; FDIC insurance is uncertain. None of that is an argument that a public bank can never be chartered. It is an argument against this tax, this way.",
  },
  {
    id: "six-years",
    q: "Isn’t this just six years?",
    short:
      "Six years of mandatory compounding increases. The Gann expansion and the precedent are longer.",
    a: "The rate lasts six years, with a mandatory annual inflator and fund rules through June 30, 2033. Section 4 raises the City’s appropriations limit by the full amount of the tax. Six years of compounding is not a rounding error, and the spending-authority precedent is not temporary.",
  },
  {
    id: "exemption",
    q: "There’s a low-income exemption, right?",
    short:
      "Only if you apply every year with federal returns and W-2s by June 30. Miss it → full tax + lien. Renters get no exemption.",
    a: "Very-low-income owners must apply every year, submitting federal income tax returns and W-2 forms to the City Manager, by June 30. Miss the deadline and you pay the full tax plus penalties, and unpaid tax shall constitute a lien on the parcel. The exemption is for owners, not tenants.",
  },
  {
    id: "majority",
    q: "Why does this only need 50% + 1?",
    short:
      "Special tax placed by initiative, so majority under Upland — not the two-thirds most Berkeley parcel taxes needed when the Council puts them on the ballot.",
    a: "This is a special parcel tax placed by voter initiative. Under the Upland decision, that means a majority, not the two-thirds vote most Berkeley parcel taxes need when the City Council puts them on the ballot. The lower threshold is a legal fact about who put it there, not a reason it costs less.",
  },
  {
    id: "deposits",
    q: "Will this lower my other taxes / move City deposits off Wall Street?",
    short:
      "This tax does not move one City deposit. It taxes improvements to capitalize someone else’s regional project.",
    a: "This tax does not move one City deposit off a commercial bank. It taxes square footage of improvements to capitalize a regional institution that does not exist. If you want a debate about where Berkeley parks its cash, that is a different ordinance — and it is not on this ballot.",
  },
  {
    id: "yes-money",
    q: "Who is paying for the Yes campaign?",
    short:
      "As of mid-August 2026 filings: $155K+ raised, including $45K from the San Francisco Foundation and a $45K loan from Debbie Notkin.",
    a: "As of mid-August 2026 NetFile filings (update before launch): Coalition to Keep Berkeley Money Local raised $155K+. That includes $45,000 from the San Francisco Foundation and $45,000 from Debbie Notkin, later re-disclosed as a loan. Outside philanthropy and a compliance correction are on the public record. Read the filings; don’t invent a conspiracy.",
  },
  {
    id: "who-we-are",
    q: "Who is behind No on Z?",
    short:
      "Volunteer neighbors and local property owners, including Within Our Means Berkeley. Not a party committee.",
    a: "Volunteer neighbors and local property owners. Within Our Means Berkeley is part of the effort. This is not a party committee. Treasurer and FPPC filings will be linked on /about once the committee ID is live. We will not pretend to be a council slate.",
  },
  {
    id: "uvy",
    q: "How does this interact with Measures U, V, and Y?",
    short:
      "U is a two-thirds infrastructure bond. V is a sales tax for city services. Y is a 12-year arts parcel tax. Z is the regional bankroll with no charter.",
    a: "Measure U is a $300 million general-obligation infrastructure bond needing two-thirds. Measure V is a 0.5% sales tax for city services against a ~$30 million structural deficit. Measure Y is an arts parcel tax at about $0.07 per square foot for 12 years. Measure Z is a majority-vote parcel tax for a bank that does not exist. Section 6 of Z even flags ambiguous overlap with other local taxes funding similar uses. When the stack arrives, Z is the weakest, newest, least accountable item. Cut it first.",
  },
  {
    id: "already-mailed",
    q: "What if I already mailed my ballot?",
    short:
      "If you have not returned it, you can still mark No on Z. If it is already in, you cannot retrieve it — tell a neighbor.",
    a: "If the envelope is still on the kitchen table, you can still vote No on Z. If it is already in the mail or a drop box, you cannot retrieve it. Tell a neighbor who has not voted. The election is November 3, 2026.",
  },
] as const;

export const fourReasons = [
  {
    title: "It’s not a Berkeley bank.",
    body: "It’s Berkeley money for a regional institution. Loans can go anywhere in the East Bay. Proponents said they came here because the polling was better.",
  },
  {
    title: "The bank doesn’t exist.",
    body: "No charter. No FDIC insurance. No DFPI approval. If it never opens, the City keeps the money and “may” lend it out — a job the Housing Trust Fund already does.",
  },
  {
    title: "The tax goes up every year automatically.",
    body: "The ordinance says the Council shall raise the rate by the greater of Bay Area CPI or state income growth. No cap.",
  },
  {
    title: "The exemption is a paperwork trap.",
    body: "Very-low-income seniors must file tax returns and W-2s with City Hall every year by June 30. Miss it, and the tax becomes a lien on the house.",
  },
] as const;

export const navLinks = [
  { href: "/cost", label: "Your cost" },
  { href: "/why-berkeley", label: "Why Berkeley" },
  { href: "/fine-print", label: "Fine print" },
  { href: "/ballot", label: "The ballot" },
  { href: "/faq", label: "FAQ" },
  { href: "/endorsements", label: "Endorsements" },
  { href: "/get-involved", label: "Get involved" },
] as const;
