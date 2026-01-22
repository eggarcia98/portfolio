import Link from "next/link";

export default function HeroSection() {
    
    return (
        <section className="relative py-8 lg:py-32">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[50%] top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-teal-500/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-6xl">
                <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                    {/* Left column - Main content */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 dark:border-teal-900/30 dark:bg-teal-900/20">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-teal-600 dark:bg-teal-400"></div>
                            <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                                Available for opportunities
                            </span>
                        </div>

                        <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl lg:leading-tight">
                            Backend Engineer
                            <span className="mt-2 block text-teal-600 dark:text-teal-400">
                                Building Reliable Systems
                            </span>
                        </h1>

                        <p className="mt-8 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                            Specializing in production systems, database
                            optimization, and cloud infrastructure. I build
                            backend solutions that scale with precision and
                            reliability.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <Link
                                href="/projects"
                                className="btn btn-primary text-base"
                            >
                                <span>View Projects</span>
                                <svg
                                    className="ml-2 h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>

                            <Link
                                href="/contact"
                                className="btn btn-secondary text-base"
                            >
                                Get in Touch
                            </Link>

                            <a
                                href="/Erick_Garcia_Resume.pdf"
                                download
                                className="group inline-flex items-center text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                            >
                                <svg
                                    className="mr-2 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                                Download Resume
                            </a>
                        </div>

                        {/* Quick stats */}
                        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8 dark:border-slate-800">
                            <div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                                    2+
                                </div>
                                <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                                    Years Experience
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                                    4
                                </div>
                                <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                                    Major Projects
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                                    99%
                                </div>
                                <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                                    Uptime Focus
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column - Tech Stack */}
                    <div className="lg:col-span-5">
                        <div className="surface p-8 lg:sticky lg:top-24">
                            <div className="mb-8">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Core Technologies
                                </h2>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                    Production-tested stack for building
                                    scalable systems
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Backend */}
                                <div>
                                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Backend & Runtime
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "TypeScript",
                                            "Node.js",
                                            "Python",
                                            "Fastify",
                                            "Express",
                                        ].map((tech) => (
                                            <span key={tech} className="chip">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Databases */}
                                <div>
                                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Databases
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["PostgreSQL", "MySQL", "SQL"].map(
                                            (tech) => (
                                                <span
                                                    key={tech}
                                                    className="chip"
                                                >
                                                    {tech}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/* Cloud & DevOps */}
                                <div>
                                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Cloud & DevOps
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Docker",
                                            "Google Cloud",
                                            "CI/CD",
                                            "Linux",
                                        ].map((tech) => (
                                            <span key={tech} className="chip">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Tools */}
                                <div>
                                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Tools & Workflow
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Git",
                                            "Bash",
                                            "REST APIs",
                                            "Networking",
                                        ].map((tech) => (
                                            <span key={tech} className="chip">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}