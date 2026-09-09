import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "$58.3 million / Oakland $0 — No on Measure Z";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F6F1E8",
          color: "#12141A",
          padding: 72,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#1F4D3A",
          }}
        >
          StopMeasureZ.com · November 3, 2026
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 56, lineHeight: 1.1, maxWidth: 900 }}>
            Berkeley shouldn’t bankroll the East Bay.
          </div>
          <div style={{ display: "flex", gap: 28, fontSize: 36 }}>
            <span>
              Berkeley <strong style={{ color: "#C4492C" }}>$58.3 million</strong>
            </span>
            <span>Oakland $0</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 180,
            justifyContent: "center",
            border: "3px solid #C4492C",
            color: "#C4492C",
            fontSize: 22,
            letterSpacing: 4,
            padding: "8px 12px",
            transform: "rotate(-3deg)",
          }}
        >
          NO ON Z
        </div>
      </div>
    ),
    { ...size },
  );
}
