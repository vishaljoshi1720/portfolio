import type { MetadataRoute } from "next";
import { projects } from "@/data/site";

const base = "https://vishaljoshi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const work = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/one-pager`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...work,
  ];
}
