import Link from "next/link";
import { Code, Database, Cloud, Wrench, Download } from "lucide-react";

const techStacks = [
    {
        name: "Backend",
        icon: Code,
        technologies: ["TypeScript", "Node.js", "Python"],
    },
    {
        name: "Databases",
        icon: Database,
        technologies: ["PostgreSQL", "MySQL", "Redis"],
    },
    {
        name: "Cloud",
        icon: Cloud,
        technologies: ["Docker", "GCP", "CI/CD"],
    },
    {
        name: "Tools",
        icon: Wrench,
        technologies: ["Git", "REST APIs", "Linux"],
    },
];

const experienceStats = [
    {
        label: "Years Developing",
        value: "3+",
    },
    {
        label: "Major Projects",
        value: "4",
    },
    {
        label: "System Uptime",
        value: "99%",
    },
];

export default function HeroSection() {
    return (
        <section className="relative pt-12 pb-12 lg:pt-14 lg:pb-14 bg-linear-to-b from-slate-50/50 to-transparent dark:from-slate-900/30 dark:to-transparent">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[50%] top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-teal-500/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-6xl">
                {/* Top Section - Profile + Top Tech Cards */}
                <div className="grid gap-4 lg:grid-cols-[65%_auto] lg:grid-rows-4 mb-4 ">
                    {/* Left Column - Profile Box */}
                    <div className="surface p-8 flex flex-col row-span-3">
                        <div className="flex items-start justify-between gap-4 mb-6">
                            <div>
                                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                                    Erick Garcia
                                </h1>
                                <p className="text-teal-600 dark:text-teal-400 font-medium text-sm">
                                    Backend Engineer
                                </p>
                            </div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 dark:border-teal-900/30 dark:bg-teal-900/20 whitespace-nowrap">
                                <div className="h-2 w-2 animate-pulse rounded-full bg-teal-600 dark:bg-teal-400"></div>
                                <span className="text-xs font-medium text-teal-700 dark:text-teal-300">
                                    Open to work
                                </span>
                            </div>
                        </div>
                        <p className="text-sm font-light text-slate-600 dark:text-slate-300 leading-relaxed mb-8 flex-1">
                            Crafting production-grade systems with TypeScript,
                            Python, and modern cloud infrastructure. I
                            specialize in database optimization, scalable APIs,
                            and building systems that prioritize reliability.
                        </p>
                        <div className="flex gap-3">
                            <Link
                                href="/projects"
                                className="rounded-lg bg-teal-600 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-teal-700"
                            >
                                Projects
                            </Link>
                            <Link
                                href="/contact"
                                className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>

                    {/* Tech Cards Stacked */}
                    <div className="flex flex-col gap-4 row-span-4 h-full ">
                        {techStacks.map((stack) => (
                            <div
                                key={stack.name}
                                className="surface p-6 w-full h-full"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <stack.icon className="h-5 w-5 dark:text-teal-400" />
                                    <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-700 dark:text-slate-200">
                                        {stack.name}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {stack.technologies.map((t) => (
                                        <span
                                            key={t}
                                            className="chip text-xs h-fit"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Experience Stats */}
                    <div className="surface p-6 ">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
                            Experience
                        </h3>
                        <div className="flex gap-6 text-2xl">
                            {experienceStats.map((stat) => (
                                <div key={stat.label} className="">
                                    <div className="font-extrabold text-slate-900 dark:text-white">
                                        {stat.value}
                                    </div>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Download Resume Card */}
                <a
                    href="/Erick_Garcia_Resume.pdf"
                    download
                    className="surface p-2 group flex items-center justify-center gap-4 rounded-lg bg-teal-600 text-white font-medium text-xs transition-all hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700 mb-4"
                >
                    <Download className="h-5 w-5 shrink-0" />
                    <div className="flex">
                        <p className="text-xs font-semibold ">
                            Download Resume
                        </p>
                        <div className="text-xs text-slate-300">
                            &nbsp;-&nbsp;PDF • 2MB
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
}
