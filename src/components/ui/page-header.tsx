import { cn } from "@/lib/utils";

type PageHeaderProps = React.ComponentPropsWithoutRef<"div"> & {
    eyebrow?: string;
    title: string;
    description?: string;
};

export function PageHeader({
    eyebrow,
    title,
    description,
    className,
    ...props
}: PageHeaderProps) {
    return (
        <div className={cn("max-w-4xl", className)} {...props}>
            {eyebrow ? (
                <p className="text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    {eyebrow}
                </p>
            ) : null}
            <h1 className={cn("h2", eyebrow ? "mt-4" : "")}>{title}</h1>
            {description ? (
                <p className="lead mt-6">{description}</p>
            ) : null}
        </div>
    );
}
