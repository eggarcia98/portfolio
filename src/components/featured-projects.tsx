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
                        href="/projects/hl7-proxy"
                        className="surface group relative overflow-hidden p-8 lg:col-span-7 transition-all hover:shadow-sm"
                    >
                        <div className="flex items-start justify-between gap-4 mb-6">
                            <div className="flex-1">
                                <p className="text-xs font-medium uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
                                    Featured Project
                                </p>
                                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white lg:text-3xl">
                                    HL7 Data Proxy & Cloud Run Integration
                                </h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                    Healthcare Data Integration
                                </p>
                            </div>
                            <Cloud className="h-6 w-6 text-teal-600/30 dark:text-teal-400/30 shrink-0" />
                        </div>
                        <p className="text-sm font-light text-slate-600 dark:text-slate-300 leading-relaxed">
                            Stateless TypeScript service that transforms HL7 analyzer output into JSON for ingestion, deployed in Docker on Cloud Run for reliable scaling.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="chip text-xs">TypeScript</span>
                            <span className="chip text-xs">Fastify</span>
                            <span className="chip text-xs">Cloud Run</span>
                            <span className="chip text-xs">HL7</span>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-medium group-hover:gap-3 transition-all">
                            View case study
                            <ArrowRight className="h-3 w-3" />
                        </div>
                    </Link>

                    {/* Two smaller cards */}
                    <div className="grid gap-4 lg:col-span-5">
                        <Link
                            href="/projects/personal/home-server"
                            className="surface group relative overflow-hidden p-6 transition-all hover:shadow-sm"
                        >
                            <div className="flex items-start justify-between gap-3 mb-4">
                                <div className="flex-1">
                                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                        Self-Hosted · Infrastructure
                                    </p>
                                    <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                                        Home Server Infrastructure
                                    </h3>
                                </div>
                                <Database className="h-5 w-5 text-teal-600/30 dark:text-teal-400/30 shrink-0" />
                            </div>
                            <p className="text-sm font-light text-slate-600 dark:text-slate-300 leading-relaxed">
                                Unified home platform with Docker, Portainer, Nextcloud, Collabora, and centralized authentication exposed securely via Cloudflare Tunnel.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="chip text-xs">Docker</span>
                                <span className="chip text-xs">Portainer</span>
                                <span className="chip text-xs">Nextcloud</span>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-medium">
                                View case study
                                <ArrowRight className="h-3 w-3" />
                            </div>
                        </Link>

                        <Link
                            href="/projects/personal/los-guayacos"
                            className="surface group relative overflow-hidden p-6 transition-all hover:shadow-sm"
                        >
                            <div className="flex items-start justify-between gap-3 mb-4">
                                <div className="flex-1">
                                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                        Business · Web Platform
                                    </p>
                                    <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                                        Los Guayacos Restaurant
                                    </h3>
                                </div>
                                <Lock className="h-5 w-5 text-teal-600/30 dark:text-teal-400/30 shrink-0" />
                            </div>
                            <p className="text-sm font-light text-slate-600 dark:text-slate-300 leading-relaxed">
                                Restaurant web presence built with Next.js on Cloudflare Pages, integrated with home-server authentication powered by Supabase.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="chip text-xs">Next.js</span>
                                <span className="chip text-xs">Cloudflare Pages</span>
                                <span className="chip text-xs">Supabase</span>
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