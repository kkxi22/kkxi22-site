import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "kkxi22";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(180deg, #fffefb 0%, #fdfdf7 55%, #f4efe4 100%)",
          color: "#171717",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 28 }}>
          <span style={{ color: "#c46f3a" }}>KK</span>
          <span>kkxi22</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 68, lineHeight: 1.08, fontWeight: 700, width: "85%" }}>
            Blog-first site for notes, workflows, and experiments
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.5, color: "#5f5b53", width: "70%" }}>
            Next.js 16 · TypeScript · Tailwind CSS 4 · MDX
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#5f5b53" }}>
          <span>https://kkxi22.cn</span>
          <span>kkxi22</span>
        </div>
      </div>
    ),
    size,
  );
}
