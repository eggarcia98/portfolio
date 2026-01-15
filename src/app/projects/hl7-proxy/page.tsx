import { CaseStudy } from "@/components/case-study";

export default function Hl7ProxyCaseStudy() {
    return (
        <CaseStudy
            title="HL7 Data Proxy & Cloud Run Integration"
            subtitle="A stateless TypeScript service that transforms HL7 analyzer output into JSON and exposes it for ingestion—deployed as a Docker container on Google Cloud Run."
            stack={[
                "TypeScript",
                "Fastify",
                "Docker",
                "GCP Cloud Run",
                "PostgreSQL",
                "HL7",
                "Reliability",
            ]}
        >
            <h2>Problem</h2>
            <p>
                Laboratory analyzers produced HL7 messages, but downstream
                systems needed structured JSON to ingest data reliably.
                Onboarding new devices was slow and error-prone due to
                differences in device formats and configuration steps.
            </p>

            <h2>Constraints</h2>
            <ul>
                <li>
                    Service must be <strong>stateless</strong> to scale and
                    recover cleanly on Cloud Run.
                </li>
                <li>Traffic reliability matters (medical data workflows).</li>
                <li>Messages needed validation and predictable JSON output.</li>
            </ul>

            <h2>Solution</h2>
            <p>
                I built a proxy service using <strong>Fastify</strong> that
                accepts HL7 input, parses and validates it, transforms it into a
                consistent JSON schema, and exposes endpoints for downstream
                ingestion. The service was packaged as a <strong>Docker</strong>{" "}
                container and deployed to <strong>GCP Cloud Run</strong>.
            </p>

            <h2>Architecture</h2>
            <pre>
                {`Analyzer / Source
   |
   | HL7 messages
   v
HL7 Proxy (Fastify, stateless on Cloud Run)
   |
   | JSON output (validated + normalized)
   v
Downstream ingestion (API / GraphQL / ETL)
   |
   v
PostgreSQL / internal systems`}
            </pre>

            <h2>Key decisions</h2>
            <ul>
                <li>
                    <strong>Stateless design:</strong> no local file storage and
                    no in-memory “state” required for correct processing, so
                    Cloud Run can scale instances safely.
                </li>
                <li>
                    <strong>Containerized deployment:</strong> consistent
                    runtime + easy rollbacks with image versions.
                </li>
                <li>
                    <strong>Validation layer:</strong> reject malformed messages
                    early to protect downstream systems.
                </li>
                <li>
                    <strong>Observability mindset:</strong> structured logs to
                    troubleshoot parsing and integration issues.
                </li>
            </ul>

            <h2>Impact</h2>
            <ul>
                <li>
                    Reduced new equipment onboarding time by{" "}
                    <strong>~50%</strong>.
                </li>
                <li>
                    Improved operational reliability by standardizing output
                    format and handling edge cases consistently.
                </li>
            </ul>

            <h2>What I learned</h2>
            <ul>
                <li>
                    Designing for stateless compute (Cloud Run) and scaling
                    characteristics.
                </li>
                <li>
                    Building robust parsers + defensive validation for “messy”
                    real-world inputs.
                </li>
                <li>
                    Deploying containerized services with predictable releases
                    and rollbacks.
                </li>
            </ul>
        </CaseStudy>
    );
}
