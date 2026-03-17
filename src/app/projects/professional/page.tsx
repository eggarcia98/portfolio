import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { professionalProjects } from "@/lib/projects";
import Link from "next/link";

export default function ProfessionalProjectsPage() {
    return (
        <div className="min-h-dvh">
            <Navbar />

            <main className="container-page py-16 lg:py-24">
                <div className="max-w-4xl">
                    <Link href="/projects" className="navlink inline-flex items-center gap-1">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to project modules
                    </Link>

                    <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                        Module 01
                    </p>
                    <h1 className="h2 mt-4">Professional Projects</h1>
                    <p className="lead mt-6">
                        Production case studies focused on architecture decisions, reliability, and measurable outcomes.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {professionalProjects.map((project) => (
                        <ProjectCard key={project.href} {...project} />
                    ))}
                </div>

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
