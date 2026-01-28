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
            className="surface group relative block overflow-hidden p-7 transition-all hover:shadow-xl hover:-translate-y-1"
        >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-teal-50/0 via-teal-50/0 to-teal-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-teal-900/0 dark:via-teal-900/0 dark:to-teal-900/20"></div>
            
            <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400 lg:text-2xl">
                    {title}
                </h3>
                <span className="shrink-0 rounded-md bg-teal-50 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-teal-700 shadow-sm dark:bg-teal-900/30 dark:text-teal-400">
                    Case Study
                </span>
            </div>

            <p className="mt-4 text-base font-light leading-relaxed text-slate-600 dark:text-slate-300">
                {summary}
            </p>

            {impact ? (
                <div className="mt-5 rounded-lg border border-teal-200/60 bg-gradient-to-br from-teal-50/80 to-teal-100/40 p-4 shadow-sm dark:border-teal-900/30 dark:from-teal-900/20 dark:to-teal-900/10">
                    <p className="text-sm font-light text-slate-700 dark:text-slate-200">
                        <span className="font-semibold text-teal-700 dark:text-teal-400">Impact:</span>{" "}
                        {impact}
                    </p>
                </div>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-200/60 pt-5 dark:border-slate-800/60">
                <div className="flex flex-wrap gap-2">
                    {tags.map((t) => (
                        <span key={t} className="chip">
                            {t}
                        </span>
                    ))}
                </div>
                
                {/* Arrow indicator */}
                <div className="ml-auto">
                    <svg 
                        className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-teal-600 dark:text-slate-500 dark:group-hover:text-teal-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}
