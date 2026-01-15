import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const NavLink = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => (
    <Link
        href={href}
        className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
    >
        {children}
    </Link>
);

export function Navbar() {
    return (
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
                <Link
                    href="/"
                    className="font-semibold text-slate-900 dark:text-white"
                >
                    Erick Garcia
                </Link>
                <nav className="flex items-center gap-5">
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
