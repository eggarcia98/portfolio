import Link from "next/link";
import { ArrowRight, Database, Cloud, Lock } from "lucide-react";

export default function FeaturedProjects() {
    return (
        <section className="relative ">
            <div className="mx-auto max-w-6xl">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white lg:text-4xl">
                        Featured Work
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm font-light text-slate-600 dark:text-slate-300 leading-relaxed">
                        Case studies demonstrating production reliability, architecture decisions, and real-world problem solving.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-12 my-6">
                    {/* Big featured card */}
                    <Link
                        href="/projects/db-migration"
                        className="surface group relative overflow-hidden p-8 lg:col-span-7 transition-all hover:shadow-sm"
                    >
                        <div className="flex items-start justify-between gap-4 mb-6">
                            <div className="flex-1">
                                <p className="text-xs font-medium uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
                                    Featured Project
                                </p>
                                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white lg:text-3xl">
                                    Live Database Migration
                                </h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                    MySQL → PostgreSQL
                                </p>
                            </div>
                            <Database className="h-6 w-6 text-teal-600/30 dark:text-teal-400/30 shrink-0" />
                        </div>
                        <p className="text-sm font-light text-slate-600 dark:text-slate-300 leading-relaxed">
                            Automated a live production migration with validation gates and rollback planning to avoid downtime and protect data integrity.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="chip text-xs">Python</span>
                            <span className="chip text-xs">MySQL</span>
                            <span className="chip text-xs">PostgreSQL</span>
                            <span className="chip text-xs">Reliability</span>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-medium group-hover:gap-3 transition-all">
                            View case study
                            <ArrowRight className="h-3 w-3" />
                        </div>
                    </Link>

                    {/* Two smaller cards */}
                    <div className="grid gap-4 lg:col-span-5">
                        <Link
                            href="/projects/hl7-proxy"
                            className="surface group relative overflow-hidden p-6 transition-all hover:shadow-sm"
                        >
                            <div className="flex items-start justify-between gap-3 mb-4">
                                <div className="flex-1">
                                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                        Cloud Run · Healthcare
                                    </p>
                                    <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                                        HL7 Proxy Service
                                    </h3>
                                </div>
                                <Cloud className="h-5 w-5 text-teal-600/30 dark:text-teal-400/30 shrink-0" />
                            </div>
                            <p className="text-sm font-light text-slate-600 dark:text-slate-300 leading-relaxed">
                                Stateless service transforming HL7 data to JSON, designed for reliability and scale.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="chip text-xs">Docker</span>
                                <span className="chip text-xs">GCP</span>
                                <span className="chip text-xs">TypeScript</span>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-medium">
                                View case study
                                <ArrowRight className="h-3 w-3" />
                            </div>
                        </Link>

                        <Link
                            href="/projects/cloudflare-tunnel"
                            className="surface group relative overflow-hidden p-6 transition-all hover:shadow-sm"
                        >
                            <div className="flex items-start justify-between gap-3 mb-4">
                                <div className="flex-1">
                                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                        Networking · Infrastructure
                                    </p>
                                    <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                                        Cloudflare Tunnel Setup
                                    </h3>
                                </div>
                                <Lock className="h-5 w-5 text-teal-600/30 dark:text-teal-400/30 shrink-0" />
                            </div>
                            <p className="text-sm font-light text-slate-600 dark:text-slate-300 leading-relaxed">
                                Publishing Next.js behind CGNAT with secure tunnel and DNS configuration.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="chip text-xs">Cloudflare</span>
                                <span className="chip text-xs">DNS</span>
                                <span className="chip text-xs">Security</span>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-medium">
                                View case study
                                <ArrowRight className="h-3 w-3" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="text-center mt-6 mb-6">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-xs font-medium text-white transition-all hover:bg-teal-700"
                    >
                        View all projects
                        <ArrowRight className="h-3 w-3" />
                    </Link>
                </div>
            </div>
        </section>
    );
}