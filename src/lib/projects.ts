export type Project = {
    title: string;
    summary: string;
    impact?: string;
    tags: string[];
    href: string;
};

export type ProjectType = "professional" | "personal";

export type DatabaseProjectRow = {
    type: ProjectType;
    title: string;
    summary: string;
    impact: string | null;
    tags: unknown;
    href: string;
    display_order: number;
    is_featured: boolean;
};

const fallbackProfessionalProjects: Project[] = [
    {
        title: "HL7 Data Proxy & Cloud Run Integration",
        summary:
            "Stateless TypeScript service that transforms HL7 analyzer output into JSON for ingestion, deployed as a Docker container on Cloud Run.",
        impact: "~50% faster onboarding",
        tags: [
            "TypeScript",
            "Fastify",
            "Docker",
            "GCP Cloud Run",
            "PostgreSQL",
            "HL7",
        ],
        href: "/projects/hl7-proxy",
    },
    {
        title: "Publishing a Next.js App Behind CGNAT (Cloudflare Tunnel)",
        summary:
            "Exposed a local Next.js app securely without port forwarding, using Cloudflare Tunnel + DNS for public HTTPS access.",
        impact: "Public HTTPS without public IP",
        tags: [
            "Cloudflare",
            "Tunnels",
            "Next.js",
            "DNS",
            "Networking",
            "Security",
        ],
        href: "/projects/cloudflare-tunnel",
    },
    {
        title: "Live Database Migration: MySQL → PostgreSQL",
        summary:
            "Automated a live production migration with validation gates and rollback planning to minimize risk and avoid downtime.",
        impact: "Live cutover with integrity checks",
        tags: ["Python", "SQL", "Bash", "MySQL", "PostgreSQL", "Reliability"],
        href: "/projects/db-migration",
    },
    {
        title: "Odoo ERP Middleware — Scheduled Synchronization",
        summary:
            "Built scheduled sync jobs that improved ERP data consistency and reduced manual accounting work via defensive validation and idempotent operations.",
        impact: "~40% fewer sync errors",
        tags: [
            "TypeScript",
            "REST APIs",
            "Linux",
            "Cron",
            "Automation",
            "Integration",
        ],
        href: "/projects/odoo-middleware",
    },
    // TalentBlocks Marketplace: Calendar Sync & OnSched Integration
    {
        title: "TalentBlocks Calendar Sync & OnSched Integration",
        summary:
            "Architected and implemented a multi-provider calendar synchronization system (Google Calendar, Outlook) with OAuth 2.0 flow management, atomic provider switching, and resilient JSON parsing for OnSched API edge cases. Features deferred calendar deletion via sessionStorage to prevent data loss during failed OAuth handshakes.",
        impact: "Zero-downtime provider switching; 99.9% OAuth success rate",
        tags: [
            "TypeScript",
            "Next.js",
            "OAuth 2.0",
            "OnSched",
            "Google Calendar",
            "Outlook",
            "API Integration",
            "Error Recovery",
        ],
        href: "/projects/tb-calendar-sync",
    },
    // TalentBlocks Marketplace: Skills Marketplace & Canonical Matching
    {
        title: "TalentBlocks Skills Marketplace & Canonical Matching Engine",
        summary:
            "Designed and built a canonical skills taxonomy and matching engine for a two-sided talent marketplace. Implements fuzzy skill matching, skill progression tracking for students, and real-time freelancer skill ranking with PostgreSQL materialized views. Powers freelancer discovery, student project matching, and hire-relevance scoring.",
        impact: "40% faster talent matching; unified skill taxonomy across 15K+ profiles",
        tags: [
            "TypeScript",
            "PostgreSQL",
            "Supabase",
            "Materialized Views",
            "Fuzzy Matching",
            "Taxonomy",
            "Real-time Ranking",
            "Marketplace",
        ],
        href: "/projects/tb-skills-marketplace",
    },
    // TalentBlocks Marketplace: Freelancer Public Track Record & HireTalent Booking
    {
        title: "TalentBlocks Freelancer Public Track Record & HireTalent Booking System",
        summary:
            "Delivered a public freelancer profile system with verified work history, client ratings, and project portfolio. Built the end-to-end HireTalent booking flow: real-time availability, dynamic cost estimation, slot booking, and contract generation. Includes modal standardization (44px close targets), performance optimization reducing page-load blocking work by 60%, and RLS policies for anonymous student browse.",
        impact: "Enabled self-serve hiring; 30% reduction in booking abandonment",
        tags: [
            "TypeScript",
            "Next.js",
            "Supabase",
            "RLS",
            "Real-time",
            "Booking Engine",
            "Cost Estimation",
            "Contract Generation",
            "Performance",
        ],
        href: "/projects/tb-hiretalent-booking",
    },
];

const fallbackPersonalProjects: Project[] = [
    {
        title: "Home Server Infrastructure",
        summary:
            "Self-hosted unified platform running Portainer for container orchestration, Nextcloud for file storage/sync, Collabora for real-time document collaboration, and custom authentication service with Supabase. All services exposed securely via Cloudflare Tunnel.",
        tags: [
            "Docker",
            "Portainer",
            "Nextcloud",
            "Collabora",
            "Supabase",
            "Cloudflare Tunnel",
            "Authentication",
            "Self-hosted",
        ],
        href: "/projects/personal/home-server",
    },
    {
        title: "Los Guayacos — Restaurant Business",
        summary:
            "Restaurant web presence built with Next.js and deployed on Cloudflare Pages. Integrates with custom authentication service (powered by Supabase) running on the home server infrastructure for seamless account management.",
        tags: [
            "Next.js",
            "Cloudflare Pages",
            "Supabase",
            "Authentication",
            "TypeScript",
            "Business",
        ],
        href: "/projects/personal/los-guayacos",
    },
    {
        title: "Orca-Gentle-AI Control Plane",
        summary: "System to manage and develop projects using AI.",
        impact: "AI-assisted project control plane",
        tags: ["AI", "Project Management", "Automation", "SDD", "Orca", "Gentle-AI"],
        href: "/projects/personal/orca-gentle-ai-control-plane",
    },
];

const projectSelect = [
    "type",
    "title",
    "summary",
    "impact",
    "tags",
    "href",
    "display_order",
    "is_featured",
].join(",");

const fallbackProjectsByType: Record<ProjectType, Project[]> = {
    professional: fallbackProfessionalProjects,
    personal: fallbackPersonalProjects,
};

function getSupabaseProjectsEndpoint() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !anonKey) {
        return null;
    }

    try {
        const url = new URL("/rest/v1/projects", supabaseUrl);
        url.searchParams.set("select", projectSelect);
        url.searchParams.set("deleted_at", "is.null");
        url.searchParams.set("order", "display_order.asc");

        return { url, anonKey };
    } catch {
        return null;
    }
}

function toProject(row: DatabaseProjectRow): Project {
    return {
        title: row.title,
        summary: row.summary,
        impact: row.impact ?? undefined,
        tags: Array.isArray(row.tags)
            ? row.tags.filter((tag): tag is string => typeof tag === "string")
            : [],
        href: row.href,
    };
}

async function fetchProjectRows(): Promise<DatabaseProjectRow[] | null> {
    const endpoint = getSupabaseProjectsEndpoint();

    if (!endpoint) {
        return null;
    }

    try {
        const response = await fetch(endpoint.url, {
            headers: {
                apikey: endpoint.anonKey,
                Authorization: `Bearer ${endpoint.anonKey}`,
            },
            next: { revalidate: 300 },
        });

        if (!response.ok) {
            return null;
        }

        return (await response.json()) as DatabaseProjectRow[];
    } catch {
        return null;
    }
}

async function getProjectsByType(type: ProjectType): Promise<Project[]> {
    const rows = await fetchProjectRows();

    if (!rows) {
        return fallbackProjectsByType[type];
    }

    return rows.filter((row) => row.type === type).map(toProject);
}

export async function getProfessionalProjects(): Promise<Project[]> {
    return getProjectsByType("professional");
}

export async function getPersonalProjects(): Promise<Project[]> {
    return getProjectsByType("personal");
}
