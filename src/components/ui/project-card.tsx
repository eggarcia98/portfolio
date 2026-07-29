import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Callout } from "@/components/ui/callout";

const badgeText = cva([], {
    variants: {
        variant: {
            professional: "Case Study",
            personal: "Personal Build",
        },
    },
    defaultVariants: {
        variant: "professional",
    },
});

type ProjectCardProps = VariantProps<typeof badgeText> & {
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
    variant,
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
                <Badge variant="teal">{badgeText({ variant })}</Badge>
            </div>

            <p className="mt-4 text-base font-light leading-relaxed text-slate-600 dark:text-slate-300">
                {summary}
            </p>

            {impact ? (
                <div className="mt-5">
                    <Callout label="Impact">{impact}</Callout>
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
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </div>
            </div>
        </Link>
    );
}
