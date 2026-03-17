import Link from "next/link";

type PersonalProjectCardProps = {
    title: string;
    summary: string;
    tags: string[];
    href: string;
};

export function PersonalProjectCard({
    title,
    summary,
    tags,
    href,
}: PersonalProjectCardProps) {
    return (
        <Link
            href={href}
            className="surface group relative block overflow-hidden p-6 transition-all hover:shadow-md"
        >
            <div className="absolute inset-y-0 left-0 w-1 bg-teal-600/80 dark:bg-teal-400/70" />

            <div className="pl-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Personal Build
                    </p>
                    <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        Project
                    </span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                    {title}
                </h3>

                <p className="mt-3 text-sm font-light leading-relaxed text-slate-600 dark:text-slate-300">
                    {summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="chip">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
