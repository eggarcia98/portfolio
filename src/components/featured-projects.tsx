import Link from "next/link";

export default function FeaturedProjects() {
    return (
        <section className="section">
            <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white lg:text-4xl">
                    Featured Work
                </h2>
                <p className="lead mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
                    Case studies demonstrating production reliability,
                    architecture decisions, and real-world problem solving.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-12 my-8">
                {/* Big featured card */}
                <Link
                    href="/projects/db-migration"
                    className="surface group relative overflow-hidden p-8 lg:col-span-7 transition-all hover:shadow-xl hover:-translate-y-1"
                >
                    <div className="absolute inset-0 -z-10 bg-linear-to-br from-teal-50/0 via-teal-50/0 to-teal-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-teal-900/0 dark:via-teal-900/0 dark:to-teal-900/20"></div>
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-teal-600 dark:text-teal-400">
                                Featured Project
                            </p>
                            <h3 className="mt-4 text-2xl font-bold text-slate-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400 lg:text-3xl">
                                Live Database Migration
                            </h3>
                            <p className="mt-2 text-sm font-light text-slate-500 dark:text-slate-400">
                                MySQL → PostgreSQL
                            </p>
                        </div>
                        <svg
                            className="h-8 w-8 shrink-0 text-teal-600/20 transition-transform duration-300 group-hover:rotate-12 dark:text-teal-400/20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <p className="lead mt-4 font-light leading-relaxed">
                        Automated a live production migration with validation
                        gates and rollback planning to avoid downtime and
                        protect data integrity.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        <span className="chip">Python</span>
                        <span className="chip">MySQL</span>
                        <span className="chip">PostgreSQL</span>
                        <span className="chip">Reliability</span>
                    </div>
                </Link>

                {/* Two smaller cards */}
                <div className="grid gap-6 lg:col-span-5">
                    <Link
                        href="/projects/hl7-proxy"
                        className="surface group relative overflow-hidden p-6 transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                        <div className="absolute inset-0 -z-10 bg-linear-to-br from-teal-50/0 to-teal-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-teal-900/0 dark:to-teal-900/20"></div>
                        <div className="flex items-start justify-between gap-2">
                            <div>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                    Cloud Run · Healthcare
                                </p>
                                <h3 className="mt-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                                    HL7 Proxy Service
                                </h3>
                            </div>
                            <svg
                                className="h-6 w-6 shrink-0 text-teal-600/20 transition-transform duration-300 group-hover:translate-x-1 dark:text-teal-400/20"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </div>
                        <p className="mt-3 text-base font-light leading-relaxed text-slate-600 dark:text-slate-300">
                            Stateless service transforming HL7 data to JSON,
                            designed for reliability and scale.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="chip">Docker</span>
                            <span className="chip">GCP</span>
                            <span className="chip">TypeScript</span>
                        </div>
                    </Link>

                    <Link
                        href="/projects/cloudflare-tunnel"
                        className="surface group relative overflow-hidden p-6 transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                        <div className="absolute inset-0 -z-10 bg-linear-to-br from-teal-50/0 to-teal-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-teal-900/0 dark:to-teal-900/20"></div>
                        <div className="flex items-start justify-between gap-2">
                            <div>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                    Networking · Infrastructure
                                </p>
                                <h3 className="mt-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                                    Cloudflare Tunnel Setup
                                </h3>
                            </div>
                            <svg
                                className="h-6 w-6 shrink-0 text-teal-600/20 transition-transform duration-300 group-hover:translate-x-1 dark:text-teal-400/20"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </div>
                        <p className="mt-3 text-base font-light leading-relaxed text-slate-600 dark:text-slate-300">
                            Publishing Next.js behind CGNAT with secure tunnel
                            and DNS configuration.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="chip">Cloudflare</span>
                            <span className="chip">DNS</span>
                            <span className="chip">Security</span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-teal-700 hover:shadow-md dark:hover:bg-teal-500"
                >
                    View all projects
                    <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            </div>
        </section>
    );
}