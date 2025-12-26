import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "William Andrade | Full-stack Web Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Same design as icon.svg, just at OG image dimensions
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 280,
            fontWeight: 700,
            color: "white",
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          WA
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
