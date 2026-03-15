import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteShell } from "@/components/site-shell";
import { blogPosts, buildBlogSidebar } from "@/lib/content";

export const metadata: Metadata = {
  title: "博客",
  description: "kkxi22 的博客，围绕个人基础设施、AI agent 与内容系统展开。",
  alternates: {
    canonical: "/blog/",
  },
};

export default function BlogIndexPage() {
  return (
    <SiteShell
      currentPath="/blog/"
      sidebar={buildBlogSidebar()}
      toc={[
        { id: "blog-index", label: "博客列表" },
        { id: "recent-topics", label: "关注主题" },
      ]}
    >
      <article className="article pb-8">
        <section id="blog-index">
          <div className="mb-3 text-sm text-foreground-soft">博客</div>
          <h1>围绕个人服务、代理工作流和站点架构的写作</h1>
          <p className="mt-5 max-w-3xl">
            博客不是日记，而是对已经验证过的方案做沉淀。这里主要记录站点重构、AI agent 协作、家庭服务器表面层设计，以及公开与私有边界的拆分方式。
          </p>
          <div className="mt-8 space-y-4">
            {blogPosts.map((post) => (
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
        </section>

        <section id="recent-topics" className="mt-14">
          <h2>关注主题</h2>
          <table>
            <thead>
              <tr>
                <th>主题</th>
                <th>核心问题</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>内容系统</td>
                <td>如何让博客、项目页与主页共用一套内容模型。</td>
              </tr>
              <tr>
                <td>公开边界</td>
                <td>哪些内容适合放在主域名，哪些服务应保持受控访问。</td>
              </tr>
              <tr>
                <td>持续维护</td>
                <td>如何用静态导出与简单部署链保证后续维护成本低。</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </SiteShell>
  );
}
