import { ImageResponse } from "next/og";

export const alt = "Brandon Tate — IT Leadership, Infrastructure & Security";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", background: "#0F3046", color: "white", padding: "80px", fontFamily: "sans-serif" }}>
      <div style={{ color: "#D6A85F", fontSize: 24, letterSpacing: 6 }}>IT LEADER · BUILDER · PROBLEM SOLVER</div>
      <div style={{ display: "flex", fontSize: 100, fontWeight: 900, marginTop: 32 }}>BRANDON <span style={{ color: "#4FA3D1", marginLeft: 24 }}>TATE</span></div>
      <div style={{ fontSize: 32, marginTop: 28 }}>Infrastructure · Security · Automation · People</div>
      <div style={{ color: "#D6A85F", fontSize: 24, marginTop: 60 }}>brandontate.info</div>
    </div>, size,
  );
}
