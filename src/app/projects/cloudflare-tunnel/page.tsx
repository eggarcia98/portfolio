import { CaseStudy } from "@/components/case-study";

export default function CloudflareTunnelCaseStudy() {
    return (
        <CaseStudy
            title="Publishing a Next.js App Behind CGNAT with Cloudflare Tunnel"
            subtitle="A practical deployment that exposes a local Next.js app securely without port forwarding, even when the ISP uses CGNAT."
            stack={[
                "Next.js",
                "Cloudflare Tunnel",
                "DNS",
                "TLS",
                "Linux/macOS",
                "Networking",
            ]}
        >
            <h2>Problem</h2>
            <p>
                Home ISPs often use CGNAT, which blocks inbound connections.
                Traditional port forwarding doesn’t work, so hosting a web app
                directly from home becomes difficult.
            </p>

            <h2>Solution</h2>
            <p>
                I used Cloudflare Tunnel (cloudflared) to create an outbound
                connection from the machine running the app to Cloudflare.
                Cloudflare then proxies HTTPS traffic to the app through the
                tunnel.
            </p>

            <h2>Architecture</h2>
            <ul>
                <li>User → Cloudflare (DNS + TLS)</li>
                <li>Cloudflare → Tunnel</li>
                <li>Tunnel → Next.js (localhost:3000)</li>
            </ul>

            <h2>Key decisions</h2>
            <ul>
                <li>No port forwarding (safer and works with CGNAT)</li>
                <li>HTTPS handled at Cloudflare edge</li>
                <li>
                    Ingress rules with a 404 fallback to avoid accidental
                    exposure
                </li>
            </ul>

            <h2>What I learned</h2>
            <ul>
                <li>CGNAT vs inbound/outbound connectivity</li>
                <li>DNS records for tunnels (CNAME to cfargotunnel)</li>
                <li>
                    Operational reliability concerns (sleep/restarts on laptops)
                </li>
            </ul>
        </CaseStudy>
    );
}
