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
            className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
        >
            <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-300">
                    {title}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                    Case study
                </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                {summary}
            </p>

            {impact ? (
                <p className="mt-3 text-sm font-medium text-slate-900 dark:text-slate-100">
                    Impact:{" "}
                    <span className="text-teal-700 dark:text-teal-300">
                        {impact}
                    </span>
                </p>
            ) : null}

            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                    <span
                        key={t}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </Link>
    );
}
