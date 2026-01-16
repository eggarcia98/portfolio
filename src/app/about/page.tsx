import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
    title: "About",
    description: `About ${site.name} — software engineering with cloud and networking foundations.`,
    openGraph: {
        title: `About | ${site.name}`,
        description: `About ${site.name} — software engineering with cloud and networking foundations.`,
        url: `${site.url}/about`,
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-dvh bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
            <Navbar />
            <main className="container-page py-14">
                <h1 className="h2">
                    About
                </h1>

                <div className="mt-8 grid gap-12 md:grid-cols-3">
                    <section className="md:col-span-2">
                        <p className="lead">
                            I’m Erick Garcia, a software engineer with strong
                            foundations in cloud and networking. I enjoy
                            building backend systems and deploying them
                            reliably—thinking about security, performance, and
                            how software behaves in real networks.
                        </p>

                        <p className="lead mt-4">
                            I’ve worked on production systems involving
                            PostgreSQL performance, cloud deployments
                            (Docker/GCP), and integrations (HL7, ERP
                            middleware). I’m also studying Telecommunications
                            Engineering, which reinforces my practical
                            networking skills.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/projects"
                                className="btn btn-primary"
                            >
                                View projects
                            </Link>
                            <Link
                                href="/contact"
                                className="btn btn-secondary"
                            >
                                Contact
                            </Link>
                        </div>
                    </section>

                    <aside className="surface p-6">
                        <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                            Focus areas
                        </h2>
                        <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                            <li>• Backend & APIs (TypeScript/Node, SQL)</li>
                            <li>• Cloud & DevOps (Docker, CI/CD, GCP)</li>
                            <li>
                                • Networking (VLANs, routing, troubleshooting)
                            </li>
                            <li>• Reliability & operations mindset</li>
                        </ul>

                        <h2 className="mt-6 text-sm font-semibold text-slate-900 dark:text-white">
                            Location
                        </h2>
                        <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                            Brisbane, Australia (open to global opportunities)
                        </p>
                    </aside>
                </div>
            </main>
            <Footer />
        </div>
    );
}
