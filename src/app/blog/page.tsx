import type { Metadata } from "next";

import { BlogIndexContent } from "@/components/blog-index-content";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "博客",
  description: "kkxi22 的博客，围绕个人基础设施、AI agent 与内容系统展开，支持关键词检索。",
  alternates: {
    canonical: "/blog/",
  },
};

export default function BlogIndexPage() {
  return (
    <SiteShell>
      <BlogIndexContent />
    </SiteShell>
  );
}
