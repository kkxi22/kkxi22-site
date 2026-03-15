import Link from "next/link";
import type { ReactNode } from "react";

import { topTabs, type SidebarGroup, type TocItem } from "@/lib/content";

function Header({ currentPath }: { currentPath: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background-elevated">
      <div className="mx-auto max-w-[90rem] px-4 lg:px-8">
        <div className="flex h-16 items-center gap-4 border-b border-border">
          <Link href="/" className="flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground">
            <span className="text-[0.72rem] text-accent">◆</span>
            <span>kkxi22 Docs</span>
          </Link>
          <div className="hidden items-center gap-3 text-xs text-foreground-soft lg:flex">
            <span>zh-CN</span>
            <span className="text-border-strong">|</span>
            <span>个人入口</span>
          </div>
          <div className="ml-auto hidden max-w-md flex-1 items-center lg:flex">
            <div className="flex h-10 w-full items-center rounded-xl border border-border bg-background px-3 text-sm text-foreground-soft">
              搜索站点内容
              <span className="ml-auto rounded-md border border-border px-2 py-0.5 text-[11px]">⌘K</span>
            </div>
          </div>
          <a
            href="/openclaw/"
            className="rounded-full border border-[rgba(122,74,41,0.16)] bg-accent-soft px-4 py-2 text-xs font-semibold text-accent-soft-strong transition hover:bg-[#ead8c4]"
          >
            打开工作台
          </a>
        </div>
        <nav className="flex h-12 items-center gap-6 overflow-x-auto text-sm">
          {topTabs.map((tab) => {
            const active =
              tab.href === "/"
                ? currentPath === "/"
                : currentPath.startsWith(tab.href.replace(/#.*$/, ""));

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`relative whitespace-nowrap pb-3 pt-3 font-medium transition ${
                  active ? "text-foreground" : "text-foreground-soft hover:text-foreground"
                }`}
              >
                {tab.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-[1.5px] rounded-full ${
                    active ? "bg-accent" : "bg-transparent"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

function Sidebar({
  groups,
  currentPath,
}: {
  groups: SidebarGroup[];
  currentPath: string;
}) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-3">
        {groups.map((group) => (
          <div key={group.title} className="mt-7 first:mt-0">
            <h3 className="mb-3 pl-4 text-sm font-semibold text-foreground">{group.title}</h3>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const active =
                  item.href === "/" ? currentPath === "/" : currentPath === item.href || currentPath.startsWith(item.href);
                const baseClass =
                  "block rounded-xl px-4 py-2 text-sm leading-6 transition";

                if (item.external) {
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`${baseClass} text-foreground-soft hover:bg-background-muted hover:text-foreground`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${baseClass} ${
                        active
                          ? "bg-background-soft font-medium text-foreground"
                          : "text-foreground-soft hover:bg-background-soft hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}

function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-28">
        <h3 className="mb-3 text-sm font-semibold text-foreground">在此页上</h3>
        <ul className="space-y-3 text-sm text-foreground-soft">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="transition hover:text-foreground">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function Footer() {
  const columns = [
    {
      title: "Company",
      items: ["Overview", "Blog", "Projects", "OpenClaw"],
    },
    {
      title: "Page hierarchy",
      items: ["Docs shell", "MDX content", "Static export", "Metadata"],
    },
    {
      title: "Links",
      items: ["kkxi22.cn", "Terminal agents", "Home lab", "RSS soon"],
    },
    {
      title: "Social",
      items: ["GitHub pending", "Email", "Now page", "Status"],
    },
  ];

  return (
    <footer className="mt-20 border-t border-border bg-background-soft">
      <div className="mx-auto grid max-w-[90rem] gap-8 px-4 py-10 text-sm text-foreground-soft lg:grid-cols-[1.2fr_repeat(4,1fr)] lg:px-8">
        <div>
          <div className="mb-3 flex items-center gap-2 font-semibold text-foreground">
            <span className="text-[0.72rem] text-accent">◆</span>
            kkxi22 Docs
          </div>
          <p className="max-w-xs leading-7">
            用文档式外壳呈现个人介绍、博客与项目，和本地服务入口保持统一。
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-3 font-semibold text-foreground">{column.title}</h3>
            <ul className="space-y-2">
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export function SiteShell({
  currentPath,
  sidebar,
  toc,
  children,
}: {
  currentPath: string;
  sidebar: SidebarGroup[];
  toc: TocItem[];
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header currentPath={currentPath} />
      <main className="mx-auto max-w-[90rem] px-4 pt-8 lg:px-8">
        <div className="content-grid">
          <Sidebar groups={sidebar} currentPath={currentPath} />
          <div className="min-w-0">{children}</div>
          <TableOfContents items={toc} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
