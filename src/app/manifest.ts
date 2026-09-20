import type { MetadataRoute } from "next";
import { defaultDescription } from "@/lib/seo";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.committeeName,
    short_name: "No on Z",
    description: defaultDescription,
    start_url: "/",
    display: "browser",
    background_color: "#f6f1e8",
    theme_color: "#1f4d3a",
    lang: "en-US",
    categories: ["politics", "news"],
  };
}
