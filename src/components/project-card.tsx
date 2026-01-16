import Link from "next/link";

type ProjectCardProps = {
    title: string;
    summary: string;
    tags: string[];
    href: string;
    impact?: string;
};

export function ProjectCard({
    title,
    summary,
    tags,
    href,
    impact,
}: ProjectCardProps) {
    return (
        <Link
            href={href}
            className="surface group block p-7 transition-all hover:shadow-lg"
        >
            <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white lg:text-2xl">
                    {title}
                </h3>
                <span className="shrink-0 rounded-md bg-teal-50 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
                    Case Study
                </span>
            </div>

            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-200">
                {summary}
            </p>

            {impact ? (
                <div className="mt-5 rounded-lg border border-teal-200/60 bg-teal-50/50 p-3 dark:border-teal-900/30 dark:bg-teal-900/10">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                        <span className="font-semibold text-teal-700 dark:text-teal-400">Impact:</span>{" "}
                        {impact}
                    </p>
                </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200/60 pt-5 dark:border-slate-800/60">
                {tags.map((t) => (
                    <span key={t} className="chip">
                        {t}
                    </span>
                ))}
            </div>
        </Link>
    );
}
