import Image from "next/image";
import Link from "next/link";

import { SiteShell } from "@/components/site-shell";
import { blogPosts, homeSidebar, homeToc, projects } from "@/lib/content";

export default function HomePage() {
  return (
    <SiteShell currentPath="/" sidebar={homeSidebar} toc={homeToc}>
      <article className="article pb-8">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-foreground-soft">
          <span className="rounded-full border border-border px-3 py-1">个人服务入口</span>
          <span>Next.js 16.1.6</span>
          <span>Tailwind CSS 4</span>
          <span>MDX</span>
        </div>

        <section id="overview">
          <h1>把个人介绍、博客和项目展示统一进一个文档式站点</h1>
          <p className="mt-5 max-w-3xl">
            这个站点不是传统的个人主页，而是一个长期维护的公开表面。它负责表达我是谁、最近在写什么、正在做什么，以及哪些私人服务应该只通过受控入口访问。
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(19rem,1fr)]">
            <div className="rounded-3xl border border-border bg-background-elevated p-5">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground-soft">
                概览
              </div>
              <ul className="space-y-3 text-sm text-foreground-soft">
                <li>个人站以文档型壳层承载公开内容，路径结构稳定。</li>
                <li>博客文章由 MDX 驱动，项目页也走同一套内容系统。</li>
                <li>OpenClaw 等私有服务保留在受保护路径，不混入公开信息层。</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border bg-background-soft">
              <Image
                src="/images/avatar-card.svg"
                alt="个人站点插图"
                width={720}
                height={540}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section id="profile" className="mt-14">
          <h2>个人介绍</h2>
          <p>
            我把这台机器当作长期在线的个人服务中枢。公开层强调清晰、克制、可持续；私有层负责自动化、代理协作、命令行工作流和日常实验。站点的设计目标不是“炫”，而是让信息结构足够稳固，几年后仍然能继续叠加内容。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["身份", "独立维护个人站、自动化脚本与本地服务。"],
              ["方向", "偏向 AI agent、终端工作流、个人基础设施与内容系统。"],
              ["偏好", "静态优先、路径稳定、边界清晰、部署简单。"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-border bg-background-elevated p-4">
                <h3 className="mt-0 text-base font-semibold">{title}</h3>
                <p className="mt-2">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="latest" className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2>最近更新</h2>
              <p>博客条目按文档风格排列，保留清晰摘要和可读的深入内容页面。</p>
            </div>
            <Link href="/blog/" className="text-sm font-medium text-foreground">
              查看全部文章
            </Link>
          </div>
          <div className="mt-5 space-y-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={post.href}
                className="grid gap-5 rounded-3xl border border-border bg-background-elevated p-4 transition hover:border-border-strong hover:bg-[#fffaf3] md:grid-cols-[9rem_minmax(0,1fr)]"
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-background-soft">
                  <Image src={post.image} alt={post.title} width={360} height={220} className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="mb-2 flex flex-wrap gap-3 text-xs text-foreground-soft">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="mt-0 text-xl font-semibold text-foreground">{post.title}</h3>
                  <p className="mt-2">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2>精选项目</h2>
              <p>项目页沿用同一视觉框架，展示架构、能力边界和部署方式。</p>
            </div>
            <Link href="/projects/" className="text-sm font-medium text-foreground">
              浏览全部项目
            </Link>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={project.href}
                className="rounded-3xl border border-border bg-background-elevated p-4 transition hover:border-border-strong hover:bg-[#fffaf3]"
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-background-soft">
                  <Image src={project.image} alt={project.title} width={560} height={320} className="h-auto w-full object-cover" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-foreground-soft">
                  {project.tech?.map((item) => (
                    <span key={item} className="rounded-full border border-border px-2.5 py-1">
                      {item}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-14">
          <h2>联系</h2>
          <p>
            当前公开联系入口优先保持简单。如果是项目交流、部署问题或自动化协作，可以通过邮件联系；如果需要进入私人工作台，则走受保护的
            <code> /openclaw/ </code>路径。
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
            <a href="mailto:hello@kkxi22.cn" className="rounded-full border border-border px-4 py-2 hover:bg-background-soft">
              hello@kkxi22.cn
            </a>
            <a
              href="/openclaw/"
              className="rounded-full border border-[rgba(122,74,41,0.16)] bg-accent-soft px-4 py-2 text-accent-soft-strong transition hover:bg-[#ead8c4]"
            >
              OpenClaw
            </a>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
