import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { BackLink } from "@/components/ui/back-link";
import { PageHeader } from "@/components/ui/page-header";
import { ProjectCard } from "@/components/ui/project-card";
import { getPersonalProjects } from "@/lib/projects";

export default async function PersonalProjectsPage() {
    const personalProjects = await getPersonalProjects();

    return (
        <div className="min-h-dvh">
            <Navbar />

            <main className="container-page py-16 lg:py-24">
                <div className="max-w-4xl">
                    <BackLink href="/projects">Back to project modules</BackLink>

                    <PageHeader
                        eyebrow="Module 02"
                        title="Personal Projects"
                        description="Independent builds for experimentation, learning, and exploring new ideas."
                        className="mt-6"
                    />
                </div>

                {personalProjects.length > 0 ? (
                    <div className="mt-12 grid gap-6 lg:grid-cols-2">
                        {personalProjects.map((project) => (
                            <ProjectCard
                                key={project.href}
                                variant="personal"
                                {...project}
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
