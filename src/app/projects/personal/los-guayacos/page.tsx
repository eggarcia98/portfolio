import { CaseStudy } from "@/components/case-study";

export default function LosGuayacosPage() {
    return (
        <CaseStudy
            title="Los Guayacos — Restaurant Business"
            subtitle="Restaurant Web Presence & Online Presence"
            backHref="/projects/personal"
            stack={["Next.js", "TypeScript", "Cloudflare Pages", "Supabase", "Authentication"]}
        >
            <h2>Overview</h2>
            <p>
                Los Guayacos is a restaurant business web presence built with modern web standards. The application showcases the restaurant brand, integrates online ordering or reservation capabilities, and leverages centralized authentication via the home server infrastructure.
            </p>

            <h2>Technology Stack</h2>
            <ul>
                <li>
                    <strong>Next.js:</strong> Full-stack React framework for fast, SEO-friendly web presence
                </li>
                <li>
                    <strong>Cloudflare Pages:</strong> Global CDN deployment for edge performance and zero cold-starts
                </li>
                <li>
                    <strong>Supabase Authentication:</strong> Centralized auth service running on the home server, enabling order history and account management
                </li>
                <li>
                    <strong>TypeScript:</strong> Type-safe development for reliability and maintainability
                </li>
            </ul>

            <h2>Key Features</h2>
            <ul>
                <li>Restaurant information, menu, and location display</li>
                <li>User authentication via Supabase (running on home server)</li>
                <li>Account management for order history and preferences</li>
                <li>Fast global delivery via Cloudflare Pages edge network</li>
                <li>Responsive design for mobile ordering/browsing</li>
            </ul>

            <h2>Integration with Home Server</h2>
            <p>
                Los Guayacos authenticates users against the custom Supabase instance running on the home server. This enables a seamless omnichannel experience where customers can manage their accounts across multiple services, all backed by a single authentication gateway.
            </p>

            <h2>Deployment & Performance</h2>
            <ul>
                <li>Deployed on Cloudflare Pages for global edge performance</li>
                <li>Zero-downtime deployments with automatic rollbacks</li>
                <li>Integrated with home server auth via secure API calls</li>
                <li>Analytics and performance monitoring via Cloudflare</li>
            </ul>
        </CaseStudy>
    );
}
