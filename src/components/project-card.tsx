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
            className="surface group block p-6 transition hover:shadow-md"
        >
            <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {title}
                </h3>
                <span className="text-xs capitalize tracking-wide leading-tight text-right text-slate-400 dark:text-slate-500">
                    Case<br />Study
                </span>
            </div>

            <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">
                {summary}
            </p>

            {impact ? (
                <p className="mt-4 text-sm text-slate-700 dark:text-slate-200">
                    Impact:{" "}
                    <span className="font-medium text-teal-700 dark:text-teal-300">
                        {impact}
                    </span>
                </p>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-200/70 pt-4 dark:border-slate-800/70">
                {tags.map((t) => (
                    <span key={t} className="chip">
                        {t}
                    </span>
                ))}
            </div>
        </Link>
    );
}
