import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteShell } from "@/components/site-shell";
import { buildProjectSidebar, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "项目",
  description: "kkxi22 的项目展示页，聚焦个人自动化、站点系统与本地服务编排。",
  alternates: {
    canonical: "/projects/",
  },
};

export default function ProjectsPage() {
  return (
    <SiteShell
      currentPath="/projects/"
      sidebar={buildProjectSidebar()}
      toc={[
        { id: "project-index", label: "项目列表" },
        { id: "principles", label: "设计原则" },
      ]}
    >
      <article className="article pb-8">
        <section id="project-index">
          <div className="mb-3 text-sm text-foreground-soft">项目</div>
          <h1>把工具链、站点和本地服务整理成可长期演进的系统</h1>
          <p className="mt-5 max-w-3xl">
            这里不展示泛泛而谈的“作品集”，只记录那些已经纳入日常使用、具备明确部署路径与维护策略的项目。重点不是视觉噱头，而是结构是否能长期工作。
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
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
                <h2 className="mt-4 text-xl font-semibold">{project.title}</h2>
                <p className="mt-2">{project.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="principles" className="mt-14">
          <h2>设计原则</h2>
          <ul>
            <li>静态优先，尽量避免为了简单内容引入运行时复杂度。</li>
            <li>公共界面与私有入口分层，避免把后台服务直接暴露在首页。</li>
            <li>路径结构长期稳定，便于后续加内容而不破坏外部链接。</li>
          </ul>
        </section>
      </article>
    </SiteShell>
  );
}
