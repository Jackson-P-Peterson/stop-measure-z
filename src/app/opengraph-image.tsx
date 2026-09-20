import { ImageResponse } from "next/og";

export const alt =
  "No on Measure Z. Berkeley public bank parcel tax, November 3, 2026. Berkeley $58.3 million. Oakland $0.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f1e8",
          color: "#12141a",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#1f4d3a",
            fontFamily: "Georgia, serif",
          }}
        >
          Berkeley · November 3, 2026 · Measure Z
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 1.05,
              fontFamily: "Georgia, serif",
              maxWidth: 980,
            }}
          >
            No on Measure Z.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 36,
              lineHeight: 1.25,
              color: "#143a4d",
              maxWidth: 920,
            }}
          >
            Berkeley’s public bank parcel tax. Oakland pays $0.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 28,
            color: "#c4492c",
            fontFamily: "Georgia, serif",
          }}
        >
          <span>Berkeley $58.3 million</span>
          <span>StopMeasureZ.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
