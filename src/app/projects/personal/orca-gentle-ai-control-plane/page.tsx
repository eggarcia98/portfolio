import { CaseStudy } from "@/components/case-study";

export default function OrcaGentleAiControlPlanePage() {
    return (
        <CaseStudy
            title="Orca-Gentle-AI Control Plane"
            subtitle="AI-assisted project management and development workflow"
            backHref="/projects/personal"
            stack={["AI", "Project Management", "Automation", "SDD", "Orca", "Gentle-AI"]}
        >
            <h2>Overview</h2>
            <p>
                Orca-Gentle-AI Control Plane is a system for managing and developing projects using AI. It coordinates planning, implementation, verification, delivery evidence, and human approval gates so AI-assisted work stays structured and auditable.
            </p>

            <h2>Core Purpose</h2>
            <p>
                The control plane helps transform project requests into traceable work units. It combines Orca workflow control with Gentle-AI SDD practices to keep project development organized from intake through implementation and review.
            </p>

            <h2>Key Capabilities</h2>
            <ul>
                <li>Structured project intake, planning, and task handoff</li>
                <li>Spec-driven development artifacts for complex changes</li>
                <li>Human Gates for protected decisions and external mutations</li>
                <li>Persistent evidence for implementation, verification, and delivery</li>
                <li>AI-assisted execution while preserving developer control</li>
            </ul>

            <h2>Why It Matters</h2>
            <p>
                The system makes AI-assisted software development safer and more repeatable by separating planning, execution, verification, and delivery responsibilities. It is designed to reduce lost context, prevent accidental secret exposure, and keep important project decisions visible.
            </p>
        </CaseStudy>
    );
}
