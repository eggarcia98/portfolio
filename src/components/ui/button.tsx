import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center transition-all duration-200 font-medium",
    {
        variants: {
            variant: {
                primary:
                    "bg-teal-600 text-white hover:bg-teal-700 shadow-sm hover:shadow-md",
                secondary:
                    "border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-700",
                ghost:
                    "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700",
                "teal-ghost":
                    "text-teal-600 hover:bg-teal-50 dark:text-teal-400 dark:hover:bg-teal-950/30",
            },
            size: {
                xs: "rounded-md px-3 py-1 text-xs gap-1",
                sm: "rounded-lg px-4 py-2 text-xs gap-1.5",
                md: "rounded-lg px-5 py-2.5 text-sm gap-2",
                lg: "rounded-lg px-6 py-3 text-xs gap-2",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    },
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
    VariantProps<typeof buttonVariants> & {
        as?: "button" | "a";
    };

type LinkProps = React.ComponentPropsWithoutRef<"a"> &
    VariantProps<typeof buttonVariants> & {
        as: "a";
    };

type Props = ButtonProps | LinkProps;

export function Button({ className, variant, size, as, ...props }: Props) {
    if (as === "a") {
        const { as: _as, ...linkProps } = props as LinkProps & {
            as: "a";
        };
        return (
            <a
                className={cn(buttonVariants({ variant, size, className }))}
                {...linkProps}
            />
        );
    }

    const { as: _as, ...buttonProps } = props as ButtonProps;
    return (
        <button
            className={cn(buttonVariants({ variant, size, className }))}
            {...buttonProps}
        />
    );
}
