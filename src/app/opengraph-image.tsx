import { ImageResponse } from "next/og";

export const alt = "Vishal Joshi — Senior Mobile Engineer";
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
          background: "#050605",
          color: "#e9eee5",
          padding: "64px 72px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#c8f542",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          vj.mobile · freelance
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02 }}>
            Vishal Joshi
          </div>
          <div style={{ fontSize: 34, color: "#8b9587", maxWidth: 820 }}>
            Senior React Native & Flutter engineer. Live store apps for startups
            & agencies.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 22,
            color: "#c8f542",
            letterSpacing: "0.04em",
          }}
        >
          <span>5+ yrs</span>
          <span>15+ apps</span>
          <span>99.5% crash-free</span>
          <span>USA · UK · EU · UAE</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
