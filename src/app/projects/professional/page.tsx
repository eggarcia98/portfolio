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
            </main>

            <Footer />
        </div>
    );
}
