import Link from "next/link";
import type { ReactNode } from "react";

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background-elevated">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <span className="text-[0.72rem] text-accent">◆</span>
            <span>kkxi22</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-4 pt-8 lg:px-8">{children}</main>
    </div>
  );
}
