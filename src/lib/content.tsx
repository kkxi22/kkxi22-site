import type { ComponentType } from "react";

import BlogBbBrowserPost from "@/content/blog/bb-browser-source-deep-dive.mdx";
import BlogWorkflowPost from "@/content/blog/human-loop-workflows.mdx";
import BlogStackPost from "@/content/blog/nextjs-personal-site-stack.mdx";
import ProjectAgents from "@/content/projects/terminal-agents.mdx";
import ProjectHomelab from "@/content/projects/home-lab.mdx";

export type TocItem = {
  id: string;
  label: string;
};

export type SidebarGroup = {
  title: string;
  items: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
};

export type ContentEntry = {
  slug: string;
  href: string;
  title: string;
  description: string;
  summary: string;
  date?: string;
  category: string;
  image: string;
  readingTime?: string;
  tags?: string[];
  tech?: string[];
  toc: TocItem[];
  Component: ComponentType<{ components?: Record<string, ComponentType | string> }>;
};

export const topTabs = [
  { label: "概览", href: "/" },
  { label: "个人介绍", href: "/#profile" },
  { label: "博客", href: "/blog/" },
  { label: "项目", href: "/projects/" },
  { label: "联系", href: "/#contact" },
];

export const blogPosts: ContentEntry[] = [
  {
    slug: "bb-browser-source-deep-dive",
    href: "/blog/bb-browser-source-deep-dive/",
    title: "bb-browser 源码深度分析",
    description: "拆解 bb-browser 如何把真实 Chrome 会话转成 Agent 可编排的本地浏览器执行面。",
    summary: "聚焦原理、架构和实战教程：OpenClaw、独立模式与 MCP 三种接法，以及应用层编排方法。",
    date: "2026-03-15",
    category: "源码分析",
    image: "/images/blog-bb-browser-v2.svg",
    readingTime: "10 min",
    tags: ["bb-browser", "Browser Agent", "Chrome Extension", "MCP", "Source Dive"],
    toc: [
      { id: "basic-info", label: "基本信息" },
      { id: "core-principles", label: "核心原理" },
      { id: "architecture", label: "总体架构" },
      { id: "quick-start", label: "快速上手" },
      { id: "usage-recipes", label: "应用层教程" },
      { id: "adapter-workflow", label: "网站接入流程" },
      { id: "limitations", label: "边界与风险" },
      { id: "final-evaluation", label: "最终评价" },
    ],
    Component: BlogBbBrowserPost,
  },
  {
    slug: "nextjs-personal-site-stack",
    href: "/blog/nextjs-personal-site-stack/",
    title: "为个人站点选定 Next.js 16 技术栈",
    description: "为什么在 2026 年把个人站重构为 Next.js 16、TypeScript、Tailwind 4 与 MDX。",
    summary: "一次把框架、内容系统、图片、字体与 SEO 能力统一到一个静态可导出的站点里。",
    date: "2026-03-10",
    category: "技术栈",
    image: "/images/blog-stack.svg",
    readingTime: "4 min",
    toc: [
      { id: "why-now", label: "为什么现在重构" },
      { id: "stack-choice", label: "技术栈选择" },
      { id: "delivery", label: "交付方式" },
    ],
    Component: BlogStackPost,
  },
  {
    slug: "human-loop-workflows",
    href: "/blog/human-loop-workflows/",
    title: "把个人服务做成 human-in-the-loop 工作流",
    description: "主页、博客、项目与本地服务怎样围绕同一入口协同。",
    summary: "从公开内容到私人面板，信息边界与操作边界必须拆清楚。",
    date: "2026-03-09",
    category: "工作流",
    image: "/images/blog-workflow.svg",
    readingTime: "5 min",
    toc: [
      { id: "single-entry", label: "单一入口" },
      { id: "separation", label: "公开与私有分层" },
      { id: "iteration", label: "持续迭代" },
    ],
    Component: BlogWorkflowPost,
  },
];

export const projects: ContentEntry[] = [
  {
    slug: "terminal-agents",
    href: "/projects/terminal-agents/",
    title: "Terminal Agents",
    description: "把终端代理、自动化脚本与文档界面编织成一套个人生产环境。",
    summary: "一个围绕命令行、浏览器自动化和记忆文件展开的个人 AI 工作台。",
    category: "Automation",
    image: "/images/project-agent.svg",
    tech: ["Next.js 16", "MDX", "Agent Browser", "Nginx"],
    toc: [
      { id: "overview", label: "项目概览" },
      { id: "architecture", label: "架构" },
      { id: "results", label: "结果" },
    ],
    Component: ProjectAgents,
  },
  {
    slug: "home-lab",
    href: "/projects/home-lab/",
    title: "Home Lab Surface",
    description: "让 Mac mini 上的个人服务以统一站点入口被发现、维护和发布。",
    summary: "把域名、静态导出、代理入口和内容管理整合到同一个发布路径。",
    category: "Infrastructure",
    image: "/images/project-homelab.svg",
    tech: ["Static Export", "OpenClaw", "Launchd", "HTTPS"],
    toc: [
      { id: "lab-goal", label: "目标" },
      { id: "surface", label: "站点界面" },
      { id: "deployment", label: "部署" },
    ],
    Component: ProjectHomelab,
  },
];

export const homeToc: TocItem[] = [
  { id: "overview", label: "概览" },
  { id: "profile", label: "个人介绍" },
  { id: "latest", label: "最近更新" },
  { id: "projects", label: "精选项目" },
  { id: "contact", label: "联系" },
];

export const homeSidebar: SidebarGroup[] = [
  {
    title: "站点导航",
    items: [
      { label: "概览", href: "/" },
      { label: "博客", href: "/blog/" },
      { label: "项目", href: "/projects/" },
    ],
  },
  {
    title: "最近文章",
    items: blogPosts.map((post) => ({ label: post.title, href: post.href })),
  },
  {
    title: "项目展示",
    items: projects.map((project) => ({ label: project.title, href: project.href })),
  },
];

export function buildBlogSidebar(): SidebarGroup[] {
  return [
    {
      title: "博客",
      items: [{ label: "全部文章", href: "/blog/" }],
    },
    {
      title: "最新文章",
      items: blogPosts.map((post) => ({ label: post.title, href: post.href })),
    },
  ];
}

export function buildProjectSidebar(): SidebarGroup[] {
  return [
    {
      title: "项目",
      items: [{ label: "全部项目", href: "/projects/" }],
    },
    {
      title: "项目列表",
      items: projects.map((project) => ({ label: project.title, href: project.href })),
    },
  ];
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
