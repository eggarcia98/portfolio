import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-dvh">
            <Navbar />

            <main className="container-page py-16">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Backend Engineer | Cloud & DevOps | PostgreSQL • Docker • GCP
                </p>

                <h1 className="h1 mt-4">
                    Backend engineer & cloud architect.
                </h1>

                <p className="lead mt-6 max-w-2xl">
                    I build production systems focused on reliability, performance, and scale. PostgreSQL optimization, Docker deployments, healthcare integrations, and cloud infrastructure.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                    <Link href="/projects" className="btn btn-primary">
                        View Projects
                    </Link>

                    <a
                        href="/Erick_Garcia_Resume.pdf"
                        download
                        className="btn btn-secondary "
                    >
                        Download Resume
                    </a>

                    <Link href="/contact" className="btn btn-secondary">
                        Contact
                    </Link>
                </div>

                {/* Featured Projects */}
                <section className="section section-tight">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                                Featured work
                            </h2>
                            <p className="lead mt-1">
                                A quick look at projects that show reliability,
                                cloud, and networking.
                            </p>
                        </div>

                        <Link href="/projects" className="navlink">
                            View all →
                        </Link>
                    </div>

                    <div className="mt-6 grid gap-5 lg:grid-cols-3">
                        {/* Big featured card */}
                        <Link
                            href="/projects/db-migration"
                            className="surface group p-6 transition hover:shadow-md lg:col-span-2"
                        >
                            <p className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
                                Featured case study
                            </p>
                            <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                                Live Database Migration: MySQL → PostgreSQL
                            </h3>
                            <p className="lead mt-3 max-w-2xl leading-7">
                                Automated a live production migration with
                                validation gates and rollback planning to avoid
                                downtime and protect data integrity.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="chip">Python</span>
                                <span className="chip">MySQL</span>
                                <span className="chip">PostgreSQL</span>
                                <span className="chip">Reliability</span>
                            </div>
                        </Link>

                        {/* Two smaller cards */}
                        <div className="grid gap-5">
                            <Link
                                href="/projects/hl7-proxy"
                                className="surface group p-6 transition hover:shadow-md"
                            >
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Cloud Run · Stateless
                                </p>
                                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                                    HL7 Proxy on Cloud Run
                                </h3>
                                <p className="lead mt-2 leading-7">
                                    Transforms HL7 analyzer output into JSON for
                                    ingestion. Designed for scale and
                                    reliability.
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <span className="chip">Docker</span>
                                    <span className="chip">GCP</span>
                                    <span className="chip">Fastify</span>
                                </div>
                            </Link>

                            <Link
                                href="/projects/cloudflare-tunnel"
                                className="surface group p-6 transition hover:shadow-md"
                            >
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Networking · Security
                                </p>
                                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                                    Next.js behind CGNAT with Cloudflare Tunnel
                                </h3>
                                <p className="lead mt-2 leading-7">
                                    Public HTTPS without port forwarding. Great
                                    example of real-world deployment
                                    constraints.
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <span className="chip">Cloudflare</span>
                                    <span className="chip">DNS</span>
                                    <span className="chip">Next.js</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
