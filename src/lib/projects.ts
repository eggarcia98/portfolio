export type Project = {
    title: string;
    summary: string;
    impact?: string;
    tags: string[];
    href: string;
};

export const professionalProjects: Project[] = [
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
];

export const personalProjects: Project[] = [];
