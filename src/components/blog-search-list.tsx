"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import type { BlogPreview } from "@/lib/content";

type BlogSearchListProps = {
  posts: BlogPreview[];
};

function buildSearchHaystack(post: BlogPreview) {
  return [
    post.slug,
    post.title,
    post.description,
    post.summary,
    post.category,
    post.date ?? "",
    post.searchText,
    ...(post.tags ?? []),
  ]
    .join(" ")
    .toLowerCase();
}

export function BlogSearchList({ posts }: BlogSearchListProps) {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return posts;
    }

    const terms = normalized.split(/\s+/).filter(Boolean);
    return posts.filter((post) => {
      const haystack = buildSearchHaystack(post);
      return terms.every((term) => haystack.includes(term));
    });
  }, [posts, query]);

  return (
    <>
      <form className="mt-2" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="q" className="sr-only">
          搜索博客
        </label>
        <div className="flex h-11 items-center gap-3 rounded-xl border border-border bg-background-elevated px-3.5 text-sm text-foreground-soft transition focus-within:border-border-strong focus-within:bg-background">
          <svg
            className="h-4 w-4 shrink-0 text-foreground-soft"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M11.5 11.5L14 14M12.75 7.25C12.75 10.2876 10.2876 12.75 7.25 12.75C4.21243 12.75 1.75 10.2876 1.75 7.25C1.75 4.21243 4.21243 1.75 7.25 1.75C10.2876 1.75 12.75 4.21243 12.75 7.25Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            id="q"
            name="q"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="关键字搜索"
            className="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-sm text-foreground outline-none placeholder:text-foreground-soft"
          />
          <kbd className="hidden rounded-md border border-border bg-background px-1.5 py-0.5 text-[11px] text-foreground-soft sm:inline">
            /
          </kbd>
        </div>
      </form>

      <div className="mt-4 text-sm text-foreground-soft">共 {filteredPosts.length} 篇结果{query.trim() ? `（关键词：${query.trim()}）` : ""}</div>

      <div className="mt-8 space-y-4">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={post.href}
            className="grid gap-5 rounded-3xl border border-border bg-background-elevated p-4 transition hover:border-border-strong hover:bg-[#fffaf3] md:grid-cols-[10rem_minmax(0,1fr)]"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-background-soft">
              <Image src={post.image} alt={post.title} width={400} height={240} className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap gap-3 text-xs text-foreground-soft">
                <span>{post.category}</span>
                <span>{post.date}</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-0 text-xl font-semibold">{post.title}</h2>
              <p className="mt-2">{post.description}</p>
              <p className="mt-3 text-sm">{post.summary}</p>
            </div>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-border bg-background-elevated p-5 text-sm text-foreground-soft">
          没有匹配结果，换个关键词再试试。
        </div>
      ) : null}
    </>
  );
}
