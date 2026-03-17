import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PersonalProjectCard } from "@/components/personal-project-card";
import { personalProjects } from "@/lib/projects";
import Link from "next/link";

export default function PersonalProjectsPage() {
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
                        Module 02
                    </p>
                    <h1 className="h2 mt-4">Personal Projects</h1>
                    <p className="lead mt-6">
                        Independent builds for experimentation, learning, and exploring new ideas.
                    </p>
                </div>

                {personalProjects.length > 0 ? (
                    <div className="mt-12 grid gap-6 lg:grid-cols-2">
                        {personalProjects.map((project) => (
                            <PersonalProjectCard
                                key={project.href}
                                title={project.title}
                                summary={project.summary}
                                tags={project.tags}
                                href={project.href}
                            />
                        ))}
                    </div>
                ) : (
                    <section className="surface mt-12 border-dashed p-8 lg:p-10">
                        <p className="text-sm font-light leading-relaxed text-slate-600 dark:text-slate-300">
                            Personal projects will appear here soon.
                        </p>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
}
