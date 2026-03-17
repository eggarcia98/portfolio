import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { personalProjects, professionalProjects } from "@/lib/projects";
import Link from "next/link";

export default function ProjectsPage() {
    const modules = [
        {
            title: "Professional Projects",
            summary:
                "Production case studies focused on architecture, reliability, and measurable business impact.",
            href: "/projects/professional",
            badge: "Module 01",
            countLabel: `${professionalProjects.length} case studies`,
        },
        {
            title: "Personal Projects",
            summary:
                "Independent builds and experiments where I explore ideas, tooling, and implementation patterns.",
            href: "/projects/personal",
            badge: "Module 02",
            countLabel:
                personalProjects.length > 0
                    ? `${personalProjects.length} projects`
                    : "Coming soon",
        },
    ];

    return (
        <div className="min-h-dvh">
            <Navbar />

            <main className="container-page py-16 lg:py-24">
                <div className="max-w-4xl">
                    <p className="text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                        Portfolio
                    </p>
                    <h1 className="h2 mt-4">Project Modules</h1>
                    <p className="lead mt-6">
                        Browse projects by context: professional case studies and personal builds.
                    </p>
                </div>

                <section className="mt-12 grid gap-6 lg:grid-cols-2">
                    {modules.map((module) => (
                        <Link
                            key={module.href}
                            href={module.href}
                            className="surface group block p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
                        >
                            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                                {module.badge}
                            </p>
                            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400 lg:text-3xl">
                                {module.title}
                            </h2>
                            <p className="mt-4 text-sm font-light leading-relaxed text-slate-600 dark:text-slate-300">
                                {module.summary}
                            </p>
                            <div className="mt-6 flex items-center justify-between border-t border-slate-200/60 pt-4 dark:border-slate-800/60">
                                <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    {module.countLabel}
                                </span>
                                <span className="text-sm font-medium text-teal-700 dark:text-teal-300">
                                    Open module
                                </span>
                            </div>
                        </Link>
                    ))}
                </section>

                <section className="mt-20 surface p-8 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                        Open to Opportunities
                    </p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-3xl">
                        Looking for my next role
                    </h2>
                    <p className="lead mt-4 max-w-2xl">
                        Backend engineering, Cloud/DevOps, or Technical Support roles that combine development and infrastructure work.
                    </p>
                    <div className="mt-6">
                        <Link href="/contact" className="btn btn-primary">
                            Get in Touch
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
