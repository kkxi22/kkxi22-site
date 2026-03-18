import { BlogSearchList } from "@/components/blog-search-list";
import { blogPostPreviews } from "@/lib/content";

export function BlogIndexContent() {
  return (
    <article className="article pb-8">
      <section id="blog-index">
        <BlogSearchList posts={blogPostPreviews} />
      </section>
    </article>
  );
}
