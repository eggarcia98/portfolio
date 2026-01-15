import { CaseStudy } from "@/components/case-study";

export default function DbMigrationCaseStudy() {
    return (
        <CaseStudy
            title="Live Database Migration: MySQL → PostgreSQL"
            subtitle="A live, in-production database migration from MySQL to PostgreSQL using automated scripts, validation gates, and rollback planning to avoid business downtime."
            stack={[
                "Python",
                "SQL",
                "Bash",
                "MySQL",
                "PostgreSQL",
                "Automation",
                "Reliability",
            ]}
        >
            <p className="text-sm italic">
                Note: This project was developed in a professional environment.
                Source code is private, so this case study focuses on
                architecture, process, and outcomes.
            </p>

            <h2>Problem</h2>
            <p>
                The business needed to migrate from{" "}
                <strong>MySQL to PostgreSQL</strong> to improve long-term
                performance, data integrity, and maintainability. The challenge
                was that the system
                <strong> could not be taken offline</strong>—the migration had
                to happen while the business was actively operating.
            </p>

            <h2>Constraints</h2>
            <ul>
                <li>
                    <strong>Live production environment:</strong> users were
                    actively using the system.
                </li>
                <li>Zero data loss requirement.</li>
                <li>
                    Different database engines with schema and data-type
                    differences.
                </li>
                <li>Rollback had to be possible at any point.</li>
            </ul>

            <h2>Solution</h2>
            <p>
                I designed an automated migration process that allowed data to
                be transferred from MySQL to PostgreSQL while the application
                remained operational. The process relied on scripted exports,
                controlled imports, and validation checkpoints to ensure
                consistency between both databases before final cutover.
            </p>

            <h2>High-level approach</h2>
            <ol>
                <li>
                    <strong>Schema preparation:</strong> adapt schemas and data
                    types for PostgreSQL compatibility.
                </li>
                <li>
                    <strong>Initial data migration:</strong> bulk transfer
                    historical data from MySQL to PostgreSQL.
                </li>
                <li>
                    <strong>Live delta sync:</strong> re-run migrations to
                    capture changes made while the business was active.
                </li>
                <li>
                    <strong>Validation:</strong> compare row counts and critical
                    tables between both databases.
                </li>
                <li>
                    <strong>Cutover:</strong> switch application configuration
                    to PostgreSQL during a controlled window.
                </li>
                <li>
                    <strong>Rollback readiness:</strong> MySQL remained intact
                    until PostgreSQL was fully validated.
                </li>
            </ol>

            <h2>Key decisions</h2>
            <ul>
                <li>
                    <strong>Live migration strategy:</strong> avoided business
                    downtime by syncing data incrementally.
                </li>
                <li>
                    <strong>Automation:</strong> reduced manual steps during a
                    high-risk operation.
                </li>
                <li>
                    <strong>Validation gates:</strong> no cutover until
                    consistency checks passed.
                </li>
                <li>
                    <strong>Rollback-first mindset:</strong> the ability to
                    revert was designed before execution.
                </li>
            </ul>

            <h2>Impact</h2>
            <ul>
                <li>
                    Successfully migrated from MySQL to PostgreSQL with{" "}
                    <strong>no business interruption</strong>.
                </li>
                <li>Maintained data integrity during live operations.</li>
                <li>
                    Reduced long-term maintenance complexity and improved
                    database reliability.
                </li>
            </ul>

            <h2>What I learned</h2>
            <ul>
                <li>
                    Planning and executing database migrations in live
                    environments.
                </li>
                <li>
                    Managing risk when changing core infrastructure components.
                </li>
                <li>
                    Communicating clearly with stakeholders during high-impact
                    changes.
                </li>
            </ul>
        </CaseStudy>
    );
}
