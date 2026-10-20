export type NewsItem = {
  date: string;
  outlet: string;
  kind: string;
  title: string;
  dek: string;
  href: string;
};

/** Newest first. */
export const newsItems: NewsItem[] = [
  {
    date: "2026-10-16",
    outlet: "Berkeley Scanner",
    kind: "Op-ed",
    title: "4 questions to ask before you vote on Measure Z",
    dek: "Paul Mathew and Steve Tracy argue Berkeley would fund a regional bank without requiring neighboring cities to contribute.",
    href: "https://www.berkeleyscanner.com/2026/10/16/community/4-questions-to-ask-measure-z-op-ed/",
  },
  {
    date: "2026-10-14",
    outlet: "NBC Bay Area",
    kind: "Video",
    title: "What to know about Berkeley’s Measure Z",
    dek: "Scott McGrew walks through the November ballot measure.",
    href: "https://www.nbcbayarea.com/video/news/local/what-to-know-about-berkeleys-measure-z/4157972/",
  },
  {
    date: "2026-10-12",
    outlet: "The Daily Californian",
    kind: "News",
    title: "Berkeley Measure Z would fund public bank through parcel tax",
    dek: "A city government story on the six-year parcel tax proposed to capitalize Public Bank East Bay.",
    href: "https://www.dailycal.org/news/city/city-government/berkeley-measure-z-would-fund-public-bank-through-parcel-tax/article_8f29d54f-4aa0-4bf4-9930-1c33e6ca1bad.html",
  },
  {
    date: "2026-09-21",
    outlet: "Berkeleyside",
    kind: "Opinion",
    title:
      "Measure Z would tax Berkeley residents to create a public bank benefitting other cities",
    dek: "Councilmembers Mark Humbert, Rashi Kesarwani, and Terry Taplin, with Paul Mathew, urge a No vote.",
    href: "https://www.berkeleyside.org/2026/09/21/opinion-measure-z-would-tax-berkeley-residents-to-create-a-public-bank-benefitting-other-cities",
  },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatNewsDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${months[month - 1]} ${day}, ${year}`;
}
