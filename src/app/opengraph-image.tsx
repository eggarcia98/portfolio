import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background:
                        "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
                    fontFamily:
                        'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
                    color: "#0f172a",
                }}
            >
                {/* Accent bar */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "10px",
                        background: "#0d9488", // teal-600
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "18px",
                    }}
                >
                    <div
                        style={{
                            fontSize: 64,
                            fontWeight: 800,
                            letterSpacing: -1,
                        }}
                    >
                        Erick Garcia
                    </div>

                    <div
                        style={{
                            fontSize: 30,
                            fontWeight: 600,
                            color: "#0f766e",
                        }}
                    >
                        Software Engineer · Cloud & Networking
                    </div>

                    <div style={{ fontSize: 24, color: "#334155" }}>
                        Linux · Docker · Cloudflare · GCP
                    </div>

                    {/* Subtle footer */}
                    <div
                        style={{
                            marginTop: 30,
                            fontSize: 20,
                            color: "#64748b",
                        }}
                    >
                        Case studies · Projects · Contact
                    </div>
                </div>
            </div>
        ),
        size
    );
}
