import { CaseStudy } from "@/components/case-study";
import { ServiceImageGallery } from "@/components/service-image-gallery";

type Service = {
    name: string;
    description: string;
    screenshots?: {
        src: string;
        alt: string;
    }[];
    ciCdSteps?: string[];
    github?: string;
};

const services: Service[] = [
    {
        name: "Portainer",
        description:
            "Container orchestration and management UI for Docker. Centralized dashboard for managing all containerized services.",
        screenshots: [
            {
                src: "/diagrams/portainer/capture1.png",
                alt: "Portainer",
            },
            {
                src: "/diagrams/portainer/capture2.png",
                alt: "Portainer",
            },
            {
                src: "/diagrams/portainer/capture3.png",
                alt: "Portainer",
            },
        ],
    },
    {
        name: "Nextcloud + Collabora",
        description:
            "Self-hosted file storage, sync, and sharing with real-time document collaboration. Nextcloud provides file management while Collabora (LibreOffice-based) enables concurrent editing.",
        screenshots: [
            {
                src: "/diagrams/nextcloud/capture1.png",
                alt: "Nextcloud",
            },
            {
                src: "/diagrams/nextcloud/capture2.png",
                alt: "Nextcloud",
            },
            {
                src: "/diagrams/nextcloud/capture3.png",
                alt: "Nextcloud",
            },
        ],
    },
    {
        name: "Auth Service",
        description:
            "One secure login service for the entire home server stack, powered by Fastify and Supabase PostgreSQL. It centralizes authentication and authorization across apps with a reliable, automated release workflow.",
        ciCdSteps: [
            "Push changes to the stage branch.",
            "GitHub Actions runs the test suite and quality checks.",
            "Merge approved changes into the master branch.",
            "On master updates, GitHub Actions pulls the latest code on the local server and rebuilds the Docker container image.",
        ],
        github: "https://github.com/eggarcia98/auth-backend",
    },
];

export default function HomeServerPage() {
    return (
        <CaseStudy
            title="Home Server Infrastructure"
            subtitle="Self-hosted Services & Unified Platform"
            backHref="/projects/personal"
            stack={[
                "Docker",
                "Portainer",
                "Nextcloud",
                "Collabora",
                "Fastify",
                "Supabase",
                "Cloudflare Tunnel",
            ]}
        >
            <h2>Overview</h2>
            <p>
                A unified home server platform consolidating file storage, document collaboration, and authentication services. Designed for reliability and security with all services exposed via Cloudflare Tunnel.
            </p>

            <h2>Architecture Highlights</h2>
            <ul>
                <li>Containerized services for easy scaling and maintenance</li>
                <li>Centralized authentication gateway for multi-app support</li>
                <li>Secure external access via Cloudflare Tunnel</li>
                <li>Collaborative document workflows with Nextcloud + Collabora</li>
            </ul>

            <h2>Core Components</h2>
            <p>
                The platform is built on three core components, each serving a distinct purpose in the ecosystem:
            </p>

            <div className="my-8 space-y-6">
                {services.map((service) => (
                    <div
                        key={service.name}
                        className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
                    >
                        {/* Service Screenshot */}
                        {service.screenshots && service.screenshots.length > 0 ? (
                            <ServiceImageGallery
                                serviceName={service.name}
                                images={service.screenshots}
                            />
                        ) : null}

                        {/* Service Details */}
                        <div className="border-t border-slate-200 px-6 py-4 dark:border-slate-700">
                            <h3 className="mb-0! mt-0! text-xl font-bold text-slate-900 dark:text-white">
                                {service.name}
                            </h3>
                            <p className="mb-0! mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                {service.description}
                            </p>

                            {service.ciCdSteps && service.ciCdSteps.length > 0 ? (
                                <div className="mt-4 rounded-md border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-800/40">
                                    <p className="m-0 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                        CI/CD Flow
                                    </p>
                                    <ol className="mb-0 mt-3 list-none space-y-2 p-0 text-sm text-slate-700 dark:text-slate-200">
                                        {service.ciCdSteps.map((step, index) => (
                                            <li
                                                key={`${service.name}-cicd-${index}`}
                                                className="flex items-start gap-2"
                                            >
                                                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-semibold text-teal-700 dark:bg-teal-900/40 dark:text-teal-300">
                                                    {index + 1}
                                                </span>
                                                <span>{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            ) : null}

                            {/* Links */}
                            {service.github && (
                                <div className="mt-4">
                                    <a
                                        href={service.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        View on GitHub
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <h2>Key Implementation Details</h2>
            <p>
                The platform uses Docker containers for isolation and Portainer for centralized management. Authentication is decoupled via our custom Fastify-based service backed by Supabase, allowing other applications (like Los Guayacos) to authenticate against the home server. Cloudflare Tunnel provides a secure, performant entry point without exposing the underlying infrastructure.
            </p>
        </CaseStudy>
    );
}