import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";

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

            <main className="container-page py-12">
                <div className="flex flex-col gap-3">
                    <h1 className="h2">Projects</h1>
                    <p className="muted max-w-2xl leading-7">
                        Recruiter-friendly case studies that focus on outcomes,
                        architecture, and trade-offs. Some source code is
                        private because it was developed in a professional
                        environment.
                    </p>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    {projects.map((p) => (
                        <ProjectCard key={p.href} {...p} />
                    ))}
                </div>

                <section className="mt-12 surface p-6">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                        What I’m looking for
                    </h2>
                    <p className="muted mt-2 leading-7">
                        Roles where development and infrastructure intersect:
                        backend engineering, cloud/DevOps support, or
                        networking-focused technician roles with automation.
                    </p>
                </section>
            </main>
        </div>
    );
}
