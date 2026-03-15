import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kkxi22.cn"),
  title: {
    default: "kkxi22.cn",
    template: "%s | kkxi22.cn",
  },
  description:
    "kkxi22 的个人站点，包含个人介绍、博客与项目展示，采用 Next.js 16、TypeScript、Tailwind CSS 4 与 MDX 构建。",
  applicationName: "kkxi22.cn",
  authors: [{ name: "kkxi22" }],
  keywords: ["kkxi22", "Next.js", "MDX", "个人博客", "项目展示"],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.svg?v=20260315", type: "image/svg+xml" }],
    shortcut: "/favicon.svg?v=20260315",
    apple: "/favicon.svg?v=20260315",
  },
  openGraph: {
    type: "website",
    url: "https://kkxi22.cn",
    title: "kkxi22.cn",
    description:
      "个人介绍、博客与项目展示统一收纳在一个文档式站点里，风格对齐 Claude Code Docs。",
    siteName: "kkxi22.cn",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "kkxi22.cn",
    description:
      "个人介绍、博客与项目展示统一收纳在一个文档式站点里，风格对齐 Claude Code Docs。",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
