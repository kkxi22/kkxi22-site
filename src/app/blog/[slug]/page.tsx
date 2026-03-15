import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { mdxComponents } from "@/components/mdx-components";
import { SiteShell } from "@/components/site-shell";
import { buildBlogSidebar, blogPosts, getBlogPost } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: post.href,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: post.href,
      images: ["/opengraph-image"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const PostComponent = post.Component;

  return (
    <SiteShell currentPath={post.href} sidebar={buildBlogSidebar()} toc={post.toc}>
      <article className="article pb-8">
        <div className="mb-3 flex flex-wrap gap-3 text-sm text-foreground-soft">
          <span>{post.category}</span>
          <span>{post.date}</span>
          <span>{post.readingTime}</span>
        </div>
        <h1>{post.title}</h1>
        <p className="mt-5 max-w-3xl">{post.description}</p>
        <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-border bg-background-soft">
          <Image src={post.image} alt={post.title} width={1200} height={630} className="h-auto w-full object-cover" />
        </div>
        <div className="mt-10">
          <PostComponent components={mdxComponents} />
        </div>
      </article>
    </SiteShell>
  );
}
