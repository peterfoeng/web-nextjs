import { ImageResponse } from "next/og";

export const alt = "Peter Foeng - Senior Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(160deg, rgba(251, 146, 60, 0.16), #fffaf5 45%, #ffffff 100%)",
          color: "#7c2d12",
          padding: "64px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#c2410c",
          }}
        >
          Peter Foeng
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              lineHeight: 1.05,
              maxWidth: "86%",
            }}
          >
            Senior Software Engineer with a frontend focus.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              lineHeight: 1.4,
              maxWidth: "78%",
              fontFamily: "Arial, sans-serif",
              color: "#78716c",
            }}
          >
            Accessibility, design systems, React, Next.js, TypeScript, and
            sharp product execution from Melbourne.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            fontFamily: "Arial, sans-serif",
            color: "#9a3412",
          }}
        >
          <div style={{ display: "flex" }}>peterfoeng.com</div>
          <div style={{ display: "flex" }}>Melbourne, Australia</div>
        </div>
      </div>
    ),
    size,
  );
}
