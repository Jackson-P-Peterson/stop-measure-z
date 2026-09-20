import type { MetadataRoute } from "next";
import { seoPages } from "@/lib/seo";
import { site } from "@/lib/site";

const lastModified = new Date("2026-09-20");

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(seoPages) as (keyof typeof seoPages)[]).map((path) => ({
    url: path === "/" ? site.url : `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "/" || path === "/cost" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/cost" || path === "/why-berkeley" || path === "/faq"
          ? 0.9
          : 0.7,
  }));
}
