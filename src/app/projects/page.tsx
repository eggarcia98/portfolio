import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";

const projects = [
    {
        title: "HL7 Data Proxy & Cloud Integration",
        summary:
            "Built a proxy that converts HL7 analyzer output into JSON for ingestion, improving reliability and reducing onboarding time for new devices.",
        impact: "50% faster onboarding • 99.9% uptime target",
        tags: [
            "TypeScript",
            "Fastify",
            "PostgreSQL",
            "GCP",
            "Healthcare",
            "Reliability",
        ],
        href: "/projects/hl7-proxy",
    },
    {
        title: "Odoo ERP Middleware",
        summary:
            "Engineered middleware to sync sales events with Odoo ERP, reducing manual work and improving data consistency for accounting workflows.",
        impact: "40% fewer sync errors",
        tags: ["TypeScript", "REST APIs", "Linux", "Automation", "Integration"],
        href: "/projects/odoo-middleware",
    },
    {
        title: "Home Server Publishing Behind CGNAT (Cloudflare Tunnel)",
        summary:
            "Deployed a Next.js app from a home environment using Cloudflare Tunnel, securing inbound access without port forwarding.",
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
        title: "Live MySQL → PostgreSQL migrationS",
        summary:
            "Designed a campus network prototype including VLAN segmentation, routing strategy, and scalable coverage planning for a multi-floor environment.",
        impact: "Scalable network segmentation",
        tags: [
            "VLANs",
            "OSPF/EIGRP",
            "Switching",
            "Subnetting",
            "Troubleshooting",
        ],
        href: "/projects/db-migration",
    },
];

export default function ProjectsPage() {
    return (
        <div className="min-h-dvh bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
            <Navbar />
            <main className="mx-auto max-w-5xl px-4 py-12">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Projects
                </h1>
                <p className="mt-3 max-w-2xl text-slate-700 dark:text-slate-200">
                    A small selection of work that shows how I build, deploy,
                    and troubleshoot systems — from backend services to
                    networking fundamentals.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    {projects.map((p) => (
                        <ProjectCard key={p.href} {...p} />
                    ))}
                </div>
            </main>
        </div>
    );
}
