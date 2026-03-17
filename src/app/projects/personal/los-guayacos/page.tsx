import { CaseStudy } from "@/components/case-study";
import { Github, Globe } from "lucide-react";

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

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_16rem]">
                <figure className="flex h-96 items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-slate-900/40">
                    <img
                        src="/diagrams/los-guayacos/web.png"
                        alt="Los Guayacos web version"
                        className="block h-full w-full object-contain"
                    />
                </figure>

                <figure className="flex h-96 items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-slate-900/40">
                    <img
                        src="/diagrams/los-guayacos/mobile.png"
                        alt="Los Guayacos mobile version"
                        className="block h-full w-full object-contain"
                    />
                </figure>
            </div>

            <div className="not-prose flex flex-wrap gap-3">
                <a
                    href="https://preview.food-order-system.pages.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white no-underline transition-colors hover:bg-teal-700 hover:no-underline"
                >
                    <Globe className="h-4 w-4" />
                    Try it!
                </a>
                <a
                    href="https://github.com/eggarcia98/food-order-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 no-underline transition-colors hover:bg-slate-200 hover:no-underline dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                    <Github className="h-4 w-4" />
                    View on GitHub
                </a>
            </div>

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
