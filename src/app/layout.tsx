import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kkxi22.cn"),
  title: {
    default: "kkxi22",
    template: "%s | kkxi22",
  },
  description:
    "kkxi22 的博客，聚焦个人基础设施、AI agent 与工程实践。",
  applicationName: "kkxi22",
  authors: [{ name: "kkxi22" }],
  keywords: ["kkxi22", "博客", "Next.js", "MDX", "AI agent"],
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
    title: "kkxi22",
    description: "kkxi22 的博客，聚焦个人基础设施、AI agent 与工程实践。",
    siteName: "kkxi22",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "kkxi22",
    description: "kkxi22 的博客，聚焦个人基础设施、AI agent 与工程实践。",
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
