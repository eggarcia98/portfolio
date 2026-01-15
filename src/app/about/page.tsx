import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-dvh bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
            <Navbar />
            <main className="mx-auto max-w-5xl px-4 py-12">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    About
                </h1>

                <div className="mt-6 grid gap-10 md:grid-cols-3">
                    <section className="md:col-span-2">
                        <p className="text-slate-700 dark:text-slate-200 leading-7">
                            I’m Erick Garcia, a software engineer with strong
                            foundations in cloud and networking. I enjoy
                            building backend systems and deploying them
                            reliably—thinking about security, performance, and
                            how software behaves in real networks.
                        </p>

                        <p className="mt-4 text-slate-700 dark:text-slate-200 leading-7">
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
                                className="rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
                            >
                                View projects
                            </Link>
                            <Link
                                href="/contact"
                                className="rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-white dark:border-slate-800 dark:text-slate-100 dark:hover:bg-slate-900"
                            >
                                Contact
                            </Link>
                        </div>
                    </section>

                    <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
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

                        <h2 className="mt-6 text-sm font-semibold text-slate-900 dark:text-slate-100">
                            Location
                        </h2>
                        <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                            Brisbane, Australia (open to global opportunities)
                        </p>
                    </aside>
                </div>
            </main>
        </div>
    );
}
