import { CaseStudy } from "@/components/case-study";

export default function OdooMiddlewareCaseStudy() {
    return (
        <CaseStudy
            title="Odoo ERP Middleware — Scheduled Synchronization"
            subtitle="A scheduled middleware service that synchronized sales and operational data with Odoo ERP, improving data consistency and reducing manual accounting work."
            stack={[
                "TypeScript",
                "REST APIs",
                "Linux",
                "Cron",
                "Odoo ERP",
                "Automation",
            ]}
        >
            <p className="text-sm italic">
                Note: This project was developed in a professional environment.
                Source code is private, so this case study focuses on
                architecture, decisions, and outcomes.
            </p>

            <h2>Problem</h2>
            <p>
                Sales and operational systems generated data that needed to be
                reflected accurately in Odoo ERP. Manual entry and inconsistent
                synchronization caused accounting discrepancies and support
                tickets.
            </p>

            <h2>Constraints</h2>
            <ul>
                <li>ERP access limited to authenticated REST APIs.</li>
                <li>
                    Data consistency was more important than real-time updates.
                </li>
                <li>Failures had to be detectable and recoverable.</li>
            </ul>

            <h2>Solution</h2>
            <p>
                I built a middleware service that ran on a Linux environment and
                executed scheduled synchronization jobs using cron. The service
                periodically pulled new or updated records from upstream
                systems, transformed them into Odoo-compatible payloads, and
                pushed them via REST APIs.
            </p>

            <h2>Architecture</h2>
            <pre>
                {`Upstream systems
   |
   | Scheduled fetch (cron)
   v
Middleware service (TypeScript)
   |
   | Validation + transformation
   v
Odoo ERP (REST API)
   |
   v
Accounting / reporting`}
            </pre>

            <h2>Key decisions</h2>
            <ul>
                <li>
                    <strong>Scheduled sync over real-time:</strong> reduced
                    complexity and avoided partial failures during peak business
                    hours.
                </li>
                <li>
                    <strong>Idempotent operations:</strong> ensured re-running
                    jobs wouldn’t duplicate or corrupt records.
                </li>
                <li>
                    <strong>Error logging:</strong> allowed accounting and IT
                    teams to identify failed syncs quickly.
                </li>
            </ul>

            <h2>Impact</h2>
            <ul>
                <li>
                    Reduced synchronization errors by <strong>~40%</strong>.
                </li>
                <li>
                    Lowered manual data-entry workload for the accounting team.
                </li>
                <li>Improved trust in ERP data accuracy.</li>
            </ul>

            <h2>What I learned</h2>
            <ul>
                <li>
                    Designing reliable scheduled jobs for business-critical
                    systems.
                </li>
                <li>Handling ERP integrations with defensive validation.</li>
                <li>Balancing simplicity vs real-time requirements.</li>
            </ul>
        </CaseStudy>
    );
}
