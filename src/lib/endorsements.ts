export type Endorsement = {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  fit: "cover" | "contain";
  group: "Organizations" | "Elected officials";
};

export const endorsements: Endorsement[] = [
  {
    name: "Berkeley Democratic Club",
    title: "Organization",
    image: "/images/endorsements/berkeley-democratic-club.jpg",
    imageAlt: "Berkeley Democratic Club logo",
    fit: "contain",
    group: "Organizations",
  },
  {
    name: "Within Our Means Berkeley",
    title: "Organization",
    image: "/images/endorsements/within-our-means.png",
    imageAlt: "Within Our Means Berkeley logo",
    fit: "contain",
    group: "Organizations",
  },
  {
    name: "Affordable Berkeley",
    title: "Organization",
    image: "/images/endorsements/affordable-berkeley.png",
    imageAlt: "Affordable Berkeley logo",
    fit: "contain",
    group: "Organizations",
  },
  {
    name: "Mark Humbert",
    title: "Councilmember, District 8",
    image: "/images/endorsements/mark-humbert.jpg",
    imageAlt: "Councilmember Mark Humbert",
    fit: "cover",
    group: "Elected officials",
  },
  {
    name: "Rashi Kesarwani",
    title: "Councilmember, District 1",
    image: "/images/endorsements/rashi-kesarwani.jpg",
    imageAlt: "Councilmember Rashi Kesarwani",
    fit: "cover",
    group: "Elected officials",
  },
  {
    name: "Terry Taplin",
    title: "Councilmember, District 2",
    image: "/images/endorsements/terry-taplin.jpg",
    imageAlt: "Councilmember Terry Taplin",
    fit: "cover",
    group: "Elected officials",
  },
];

export const endorsementGroups = [
  "Organizations",
  "Elected officials",
] as const;
