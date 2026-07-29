import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "shrink-0 rounded-md px-2.5 py-1 text-xs font-medium uppercase tracking-wider shadow-sm",
    {
        variants: {
            variant: {
                teal: "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
                slate: "bg-slate-100/50 text-slate-600 dark:bg-slate-900 dark:text-slate-200",
            },
            withDot: {
                true: "inline-flex items-center gap-2 rounded-full px-3",
            },
        },
        defaultVariants: {
            variant: "teal",
        },
    },
);

type BadgeProps = React.ComponentPropsWithoutRef<"span"> &
    VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, withDot, ...props }: BadgeProps) {
    return (
        <span
            className={cn(badgeVariants({ variant, withDot, className }))}
            {...props}
        />
    );
}
