import Link from "next/link";

export default function FeaturedProjects() {
    return (
        <section className="section">
            <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-4xl">
                    Featured Work
                </h2>
                <p className="lead mt-3 max-w-2xl">
                    Case studies demonstrating production reliability,
                    architecture decisions, and real-world problem solving.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-12">
                {/* Big featured card */}
                <Link
                    href="/projects/db-migration"
                    className="surface group p-8 lg:col-span-7"
                >
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                        Featured Project
                    </p>
                    <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white lg:text-3xl">
                        Live Database Migration
                    </h3>
                    <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                        MySQL → PostgreSQL
                    </p>
                    <p className="lead mt-4 leading-relaxed">
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
                        className="surface group p-6"
                    >
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                            Cloud Run · Healthcare
                        </p>
                        <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                            HL7 Proxy Service
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                            Stateless service transforming HL7 data to JSON,
                            designed for reliability and scale.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="chip text-xs">Docker</span>
                            <span className="chip text-xs">GCP</span>
                            <span className="chip text-xs">TypeScript</span>
                        </div>
                    </Link>

                    <Link
                        href="/projects/cloudflare-tunnel"
                        className="surface group p-6"
                    >
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                            Networking · Infrastructure
                        </p>
                        <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                            Cloudflare Tunnel Setup
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                            Publishing Next.js behind CGNAT with secure tunnel
                            and DNS configuration.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="chip text-xs">Cloudflare</span>
                            <span className="chip text-xs">DNS</span>
                            <span className="chip text-xs">Security</span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="m-8 text-center">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                >
                    View all projects
                    <svg
                        className="ml-2 h-4 w-4"
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