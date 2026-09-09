import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  "/",
  "/cost",
  "/why-berkeley",
  "/fine-print",
  "/ballot",
  "/faq",
  "/endorsements",
  "/get-involved",
  "/press",
  "/about",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: "weekly",
    priority: path === "/" || path === "/cost" ? 1 : 0.7,
  }));
}
