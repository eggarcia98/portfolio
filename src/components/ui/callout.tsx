import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const calloutVariants = cva(
    "rounded-lg border p-4 shadow-sm",
    {
        variants: {
            variant: {
                impact:
                    "border-teal-200/60 bg-linear-to-br from-teal-50/80 to-teal-100/40 dark:border-teal-900/30 dark:from-teal-900/20 dark:to-teal-900/10",
                info: "border-slate-200 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-800/40",
            },
        },
        defaultVariants: {
            variant: "impact",
        },
    },
);

type CalloutProps = React.ComponentPropsWithoutRef<"div"> &
    VariantProps<typeof calloutVariants> & {
        label?: string;
        labelClassName?: string;
    };

export function Callout({
    className,
    variant,
    label,
    labelClassName,
    children,
    ...props
}: CalloutProps) {
    return (
        <div className={cn(calloutVariants({ variant, className }))} {...props}>
            {label ? (
                <p
                    className={cn(
                        "text-sm font-light text-slate-700 dark:text-slate-200",
                        labelClassName,
                    )}
                >
                    <span className="font-semibold text-teal-700 dark:text-teal-400">
                        {label}:
                    </span>{" "}
                    {children}
                </p>
            ) : (
                children
            )}
        </div>
    );
}
