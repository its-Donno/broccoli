import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — school software built in Nepal`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social card, drawn from the same construction as the site mark.
 * Generated at build time, so it costs nothing at runtime.
 */
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
          backgroundColor: "#0b0c0e",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "68px 68px",
          padding: 72,
          color: "#f6f5f1",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 4.2 28.4 27.8H3.6L16 4.2Z"
                stroke="#4a6bff"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path d="M9.6 20.4h12.2" stroke="#4a6bff" strokeWidth="2" strokeLinecap="round" />
              <circle cx="21.8" cy="20.4" r="2.5" fill="#f6f5f1" />
            </svg>
            <div style={{ display: "flex", fontSize: 26, letterSpacing: "-0.5px" }}>{site.name}</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "3px",
              color: "#9ba1a8",
              textTransform: "uppercase",
            }}
          >
            Nepal
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              fontSize: 62,
              lineHeight: 1.12,
              letterSpacing: "-2px",
              fontWeight: 500,
            }}
          >
            Thoughtful software.
            <span style={{ color: "#b7bcc3" }}>Built for what comes next.</span>
          </div>
          <svg width="216" height="216" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="92" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1" />
            <circle cx="100" cy="100" r="62" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" />
            <path
              d="M100 20 180 145H20L100 20Z"
              stroke="#f6f5f1"
              strokeOpacity="0.6"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path d="M60 100h74" stroke="#4a6bff" strokeWidth="3" strokeLinecap="round" />
            <circle cx="134" cy="100" r="6" fill="#4a6bff" />
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#9ba1a8",
          }}
        >
          <div style={{ display: "flex" }}>School software for students</div>
          <div style={{ display: "flex", color: "#4a6bff" }}>{new URL(site.url).host}</div>
        </div>
      </div>
    ),
    size,
  );
}