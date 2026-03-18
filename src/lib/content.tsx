import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

import BlogAgentNativeEcommercePost from "@/content/blog/agent-native-ecommerce-java-qiankun-blueprint.mdx";
import BlogAgentCognitionRepost from "@/content/blog/agent-cognition-os-and-agent-native-applications-repost.mdx";
import BlogBbBrowserCompetitivePost from "@/content/blog/bb-browser-competitive-ecommerce-playbook.mdx";
import BlogBbBrowserPost from "@/content/blog/bb-browser-source-deep-dive.mdx";
import BlogCliAnythingCodexPost from "@/content/blog/cli-anything-codex-application-playbook.mdx";
import BlogWorkflowPost from "@/content/blog/human-loop-workflows.mdx";
import BlogHowWeUseSkillsPost from "@/content/blog/lessons-from-building-claude-code-how-we-use-skills-translation.mdx";
import BlogStackPost from "@/content/blog/nextjs-personal-site-stack.mdx";

export type TocItem = {
  id: string;
  label: string;
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
  toc: TocItem[];
  Component: ComponentType<{ components?: Record<string, ComponentType | string> }>;
};

export type BlogPreview = Pick<
  ContentEntry,
  "slug" | "href" | "title" | "description" | "summary" | "date" | "category" | "image" | "readingTime" | "tags"
> & {
  searchText: string;
};

export const blogPosts: ContentEntry[] = [
  {
    slug: "agent-cognition-os-and-agent-native-applications-repost",
    href: "/blog/agent-cognition-os-and-agent-native-applications-repost/",
    title: "最近一些 Agent 认知：OS 与 Agent-native 应用【转载】",
    description: "转载 yan5xu 关于 Agent OS 与 Agent-native Application 的思考，含原推文配图。",
    summary:
      "核心观点：垂类不要做 Agent OS，而要做 Agent 之上的 Application，用领域状态和基础设施建立不可复制壁垒。",
    date: "2026-03-18",
    category: "转载",
    image: "/images/blog-workflow.svg",
    readingTime: "8 min",
    tags: ["Agent", "Agent-native", "OS", "Application", "转载"],
    toc: [
      { id: "basic-info", label: "基本信息" },
      { id: "original-content", label: "原文" },
      { id: "structured-summary", label: "结构化整理" },
      { id: "references", label: "来源链接" },
    ],
    Component: BlogAgentCognitionRepost,
  },
  {
    slug: "lessons-from-building-claude-code-how-we-use-skills-translation",
    href: "/blog/lessons-from-building-claude-code-how-we-use-skills-translation/",
    title: "构建 Claude Code 的经验：我们如何使用 Skills【译·完整版】",
    description: "Anthropic 团队关于 Skills 的实战总结完整版译文，含原推文配图。",
    summary:
      "覆盖 Skills 分类、编写技巧、渐进式披露、按需钩子与团队治理，并补齐原推文配图。",
    date: "2026-03-18",
    category: "译文",
    image: "/images/blog-workflow.svg",
    readingTime: "18 min",
    tags: ["Claude Code", "Skills", "Anthropic", "Translation", "Workflow"],
    toc: [
      { id: "basic-info", label: "基本信息" },
      { id: "why-skills-matter", label: "为何 Skills 重要" },
      { id: "skill-categories", label: "Skills 分类" },
      { id: "writing-practices", label: "编写最佳实践" },
      { id: "progressive-disclosure", label: "渐进式披露" },
      { id: "activation-and-memory", label: "按需激活与记忆" },
      { id: "distribution-and-governance", label: "分发与治理" },
      { id: "final-thoughts", label: "结语" },
      { id: "references", label: "来源链接" },
    ],
    Component: BlogHowWeUseSkillsPost,
  },
  {
    slug: "cli-anything-codex-application-playbook",
    href: "/blog/cli-anything-codex-application-playbook/",
    title: "CLI-Anything × Codex：原理、架构与应用场景大全",
    description: "基于 CLI-Anything 官方 README_CN 与 HARNESS，整理可直接落地的场景与教程。",
    summary:
      "围绕原理、架构和实操展开：先解释为什么可行，再给出从安装到场景落地的工程化模板。",
    date: "2026-03-15",
    category: "工程方法论",
    image: "/images/blog-stack.svg",
    readingTime: "14 min",
    tags: ["CLI-Anything", "Codex", "Agent", "HARNESS", "GUI-to-CLI", "Automation"],
    toc: [
      { id: "basic-info", label: "基本信息" },
      { id: "principles", label: "核心原理" },
      { id: "architecture", label: "架构拆解" },
      { id: "how-to-use", label: "如何使用" },
      { id: "scenario-matrix", label: "场景矩阵" },
      { id: "practical-recipes", label: "应用层教程" },
      { id: "rollout", label: "团队落地路线" },
      { id: "risks", label: "边界与风险" },
      { id: "summary", label: "总结" },
      { id: "references", label: "参考链接" },
    ],
    Component: BlogCliAnythingCodexPost,
  },
  {
    slug: "agent-native-ecommerce-java-qiankun-blueprint",
    href: "/blog/agent-native-ecommerce-java-qiankun-blueprint/",
    title: "Java 微服务 + 乾坤微前端：电商 Agent 化改造蓝图",
    description: "基于真实讨论记录，拆解前后端分离电商系统如何做 Agent 化改造与分阶段落地。",
    summary:
      "核心方法是三层分治：后端能力层、Agent 接入层、浏览器兜底层；避免把页面自动化当成主方案。",
    date: "2026-03-15",
    category: "应用架构",
    image: "/images/blog-workflow.svg",
    readingTime: "11 min",
    tags: ["E-commerce", "Agent", "Java Microservices", "Qiankun", "CLI-Anything", "MCP"],
    toc: [
      { id: "context", label: "背景与问题" },
      { id: "key-conclusion", label: "核心结论" },
      { id: "what-to-agentize", label: "改造范围" },
      { id: "architecture", label: "三层架构" },
      { id: "qiankun-strategy", label: "乾坤策略" },
      { id: "rollout-plan", label: "落地节奏" },
      { id: "cli-anything-position", label: "CLI-Anything 定位" },
      { id: "command-examples", label: "命令示例" },
      { id: "risk-control", label: "风险治理" },
      { id: "summary", label: "总结" },
      { id: "references", label: "来源" },
    ],
    Component: BlogAgentNativeEcommercePost,
  },
  {
    slug: "bb-browser-competitive-ecommerce-playbook",
    href: "/blog/bb-browser-competitive-ecommerce-playbook/",
    title: "bb-browser 竞品对比与电商落地手册",
    description: "基于一份真实对话内容，整理 bb-browser 的定位、竞品边界，以及电商落地路径。",
    summary:
      "回答三个关键问题：和 Browser Use/Browserbase/Stagehand 差在哪、如何把网站命令化、为什么电商不能零开发全自动。",
    date: "2026-03-15",
    category: "应用架构",
    image: "/images/blog-bb-browser-v2.svg",
    readingTime: "9 min",
    tags: ["bb-browser", "Browser Use", "Browserbase", "Stagehand", "E-commerce", "MCP"],
    toc: [
      { id: "positioning", label: "先定位置" },
      { id: "competition", label: "竞品对比" },
      { id: "browser-as-api", label: "网站命令化" },
      { id: "ecommerce-reality", label: "电商现实边界" },
      { id: "implementation", label: "三阶段落地" },
      { id: "decision-guide", label: "选型原则" },
      { id: "summary", label: "总结" },
    ],
    Component: BlogBbBrowserCompetitivePost,
  },
  {
    slug: "bb-browser-source-deep-dive",
    href: "/blog/bb-browser-source-deep-dive/",
    title: "bb-browser 源码深度分析",
    description: "拆解 bb-browser 如何把真实 Chrome 会话转成 Agent 可编排的本地浏览器执行面。",
    summary: "汇总知识库两篇文档：从核心原理、分层架构到 OpenClaw/独立模式/MCP 的应用层实操路径。",
    date: "2026-03-15",
    category: "源码分析",
    image: "/images/blog-bb-browser-v2.svg",
    readingTime: "12 min",
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

function stripMdxSyntax(content: string) {
  return content
    .replace(/^---[\s\S]*?---/m, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/[#>*_~\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function readBlogBody(slug: string) {
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

export const blogPostPreviews: BlogPreview[] = blogPosts.map((post) => ({
  slug: post.slug,
  href: post.href,
  title: post.title,
  description: post.description,
  summary: post.summary,
  date: post.date,
  category: post.category,
  image: post.image,
  readingTime: post.readingTime,
  tags: post.tags,
  searchText: stripMdxSyntax(readBlogBody(post.slug)).toLowerCase(),
}));

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
