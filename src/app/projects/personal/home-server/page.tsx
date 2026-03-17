import { CaseStudy } from "@/components/case-study";

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
                "Supabase",
                "Cloudflare Tunnel",
                "Linux",
            ]}
        >
            <h2>Overview</h2>
            <p>
                A unified home server platform consolidating file storage, document collaboration, and authentication services. Designed for reliability and security with all services exposed via Cloudflare Tunnel.
            </p>

            <h2>Services & Stack</h2>
            <ul>
                <li>
                    <strong>Portainer:</strong> Container orchestration and management UI for Docker
                </li>
                <li>
                    <strong>Nextcloud:</strong> Self-hosted file storage, sync, and sharing with full control over data
                </li>
                <li>
                    <strong>Collabora:</strong> Real-time document editing integrated with Nextcloud for collaborative workflows
                </li>
                <li>
                    <strong>Supabase:</strong> Backend authentication and authorization service supporting multiple applications
                </li>
                <li>
                    <strong>Cloudflare Tunnel:</strong> Secure exposure of local services to the internet without port forwarding
                </li>
            </ul>

            <h2>Key Implementation Details</h2>
            <p>
                The platform uses Docker containers for isolation and Portainer for centralized management. Authentication is decoupled via Supabase, allowing other applications (like Los Guayacos) to authenticate against the home server. Cloudflare Tunnel provides a secure, performant entry point without exposing the underlying infrastructure.
            </p>

            <h2>Architecture Highlights</h2>
            <ul>
                <li>Containerized services for easy scaling and maintenance</li>
                <li>Centralized authentication gateway for multi-app support</li>
                <li>Secure external access via Cloudflare Tunnel</li>
                <li>Collaborative document workflows with Collabora + Nextcloud</li>
            </ul>
        </CaseStudy>
    );
}
