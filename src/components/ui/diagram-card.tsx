import { cn } from "@/lib/utils";

type DiagramCardProps = React.ComponentPropsWithoutRef<"div"> & {
    src: string;
    alt: string;
    fullscreenHref?: string;
};

export function DiagramCard({
    src,
    alt,
    fullscreenHref,
    className,
    ...props
}: DiagramCardProps) {
    const href = fullscreenHref ?? src;

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800",
                "my-5",
                className,
            )}
            {...props}
        >
            <img src={src} alt={alt} className="w-full" />
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-2 top-2 rounded bg-white/60 p-1 text-teal-600 transition-colors hover:bg-white/80 dark:bg-slate-800/60 dark:text-teal-400 dark:hover:bg-slate-800/80"
                title="Open fullscreen"
            >
                <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </a>
        </div>
    );
}
