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
            <main className="container-page py-16 lg:py-24">
                <div className="max-w-4xl">
                    <p className="text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                        About Me
                    </p>
                    <h1 className="h2 mt-4">
                        Backend engineer building reliable systems
                    </h1>
                </div>

                <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-16">
                    <section className="lg:col-span-2">
                        <p className="lead">
                            I'm Erick Garcia, a backend engineer focused on production reliability, cloud deployments, and database performance. I've built systems handling healthcare integrations, ERP middleware, and live database migrations without downtime.
                        </p>

                        <p className="lead mt-6">
                            2+ years building and supporting production systems at scale. Comfortable across the stack: TypeScript/Node, PostgreSQL optimization, Docker, Google Cloud, and networking fundamentals. Currently studying Telecommunications Engineering.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/projects"
                                className="btn btn-primary"
                            >
                                View Projects
                            </Link>
                            <Link
                                href="/contact"
                                className="btn btn-secondary"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </section>

                    <aside className="space-y-8">
                        <div className="surface p-6">
                            <h2 className="text-base font-bold text-slate-900 dark:text-white">
                                Core Skills
                            </h2>
                            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                                <li className="flex items-start">
                                    <span className="mr-2 text-teal-600 dark:text-teal-400">•</span>
                                    <span>Backend (TypeScript, Node, Python, SQL)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-teal-600 dark:text-teal-400">•</span>
                                    <span>Databases (PostgreSQL, MySQL optimization)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-teal-600 dark:text-teal-400">•</span>
                                    <span>Cloud & DevOps (Docker, GCP, CI/CD)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-teal-600 dark:text-teal-400">•</span>
                                    <span>Production troubleshooting & reliability</span>
                                </li>
                            </ul>
                        </div>

                        <div className="surface p-6">
                            <h2 className="text-base font-bold text-slate-900 dark:text-white">
                                Location
                            </h2>
                            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                                Brisbane, Australia
                            </p>
                            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                Open to remote opportunities
                            </p>
                        </div>
                    </aside>
                </div>
            </main>
            <Footer />
        </div>
    );
}
