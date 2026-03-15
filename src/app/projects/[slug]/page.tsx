import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { mdxComponents } from "@/components/mdx-components";
import { SiteShell } from "@/components/site-shell";
import { buildProjectSidebar, getProject, projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: project.href,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: project.href,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const ProjectComponent = project.Component;

  return (
    <SiteShell currentPath={project.href} sidebar={buildProjectSidebar()} toc={project.toc}>
      <article className="article pb-8">
        <div className="mb-3 flex flex-wrap gap-3 text-sm text-foreground-soft">
          <span>{project.category}</span>
          {project.tech?.map((item) => <span key={item}>{item}</span>)}
        </div>
        <h1>{project.title}</h1>
        <p className="mt-5 max-w-3xl">{project.description}</p>
        <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-border bg-background-soft">
          <Image src={project.image} alt={project.title} width={1200} height={630} className="h-auto w-full object-cover" />
        </div>
        <div className="mt-10">
          <ProjectComponent components={mdxComponents} />
        </div>
      </article>
    </SiteShell>
  );
}
