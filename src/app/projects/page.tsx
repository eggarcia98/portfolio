import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { Footer } from "@/components/footer";

const projects = [
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

export default function ProjectsPage() {
    return (
        <div className="min-h-dvh">
            <Navbar />

            <main className="container-page py-14">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h1>
                    <p className="lead max-w-2xl">
                        Case studies focused on outcomes and architecture decisions. Source code remains private due to professional constraints.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                    {projects.map((p) => (
                        <ProjectCard key={p.href} {...p} />
                    ))}
                </div>

                <section className="mt-14 surface p-7">
                    <p className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">Targets</p>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                        What I’m looking for
                    </h2>
                    <p className="lead mt-2">
                        Backend engineering, Cloud/DevOps, or Technical Support roles that combine development and infrastructure work.
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
}
