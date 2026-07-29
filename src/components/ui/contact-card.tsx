import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const valueTextVariants = cva("mt-1 font-semibold", {
    variants: {
        variant: {
            teal: "text-teal-700 dark:text-teal-300",
            slate: "text-slate-900 dark:text-white",
        },
    },
    defaultVariants: {
        variant: "teal",
    },
});

type ContactCardProps = VariantProps<typeof valueTextVariants> & {
    label: string;
    value: string;
    icon: React.ReactNode;
    href?: string;
    external?: boolean;
};

export function ContactCard({
    label,
    value,
    icon,
    href,
    external,
    variant,
}: ContactCardProps) {
    const content = (
        <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/30">
                <div className="h-6 w-6 text-teal-600 dark:text-teal-400">
                    {icon}
                </div>
            </div>
            <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {label}
                </p>
                <p className={cn(valueTextVariants({ variant }))}>{value}</p>
            </div>
        </div>
    );

    const wrapperClass =
        "surface p-7 transition-all hover:shadow-lg";

    if (href) {
        return (
            <a
                href={href}
                className={wrapperClass}
                {...(external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
            >
                {content}
            </a>
        );
    }

    return <div className={wrapperClass}>{content}</div>;
}
