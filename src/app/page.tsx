import { BlogIndexContent } from "@/components/blog-index-content";
import { SiteShell } from "@/components/site-shell";

export default function HomePage() {
  return (
    <SiteShell>
      <BlogIndexContent />
    </SiteShell>
  );
}
