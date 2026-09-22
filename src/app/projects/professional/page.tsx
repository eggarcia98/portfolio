import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { BackLink } from "@/components/ui/back-link";
import { PageHeader } from "@/components/ui/page-header";
import { ProjectCard } from "@/components/ui/project-card";
import { professionalProjects } from "@/lib/projects";

export default function ProfessionalProjectsPage() {
    return (
        <div className="min-h-dvh">
            <Navbar />

            <main className="container-page py-16 lg:py-24">
                <div className="max-w-4xl">
                    <BackLink href="/projects">Back to project modules</BackLink>

                    <PageHeader
                        eyebrow="Module 01"
                        title="Professional Projects"
                        description="Production case studies focused on architecture decisions, reliability, and measurable outcomes."
                        className="mt-6"
                    />
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {professionalProjects.map((project) => (
                        <ProjectCard key={project.href} variant="professional" {...project} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
