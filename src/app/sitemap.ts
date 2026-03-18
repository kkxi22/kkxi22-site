import type { MetadataRoute } from "next";

import { blogPosts } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/blog/"].map((path) => ({
    url: `https://kkxi22.cn${path}`,
    lastModified: "2026-03-10",
  }));

  const dynamicPages = blogPosts.map((entry) => ({
    url: `https://kkxi22.cn${entry.href}`,
    lastModified: entry.date ?? "2026-03-10",
  }));

  return [...staticPages, ...dynamicPages];
}
