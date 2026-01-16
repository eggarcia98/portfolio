import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const NavLink = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => (
    <Link href={href} className="navlink px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/50">
        {children}
    </Link>
);

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
            <div className="container-page">
                <div className="flex items-center justify-between py-4">
                    <Link
                        href="/"
                        className="text-lg font-bold text-slate-900 transition-colors hover:text-teal-600 dark:text-white dark:hover:text-teal-400"
                    >
                        Erick Garcia
                    </Link>

                    <nav className="flex items-center gap-1 sm:gap-2">
                        <NavLink href="/projects">Projects</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/contact">Contact</NavLink>

                        <div className="ml-2 hidden sm:block">
                            <a
                                href="/Erick_Garcia_Resume.pdf"
                                download
                                className="btn btn-secondary text-xs sm:text-sm"
                            >
                                Resume
                            </a>
                        </div>

                        <div className="ml-2">
                            <ThemeToggle />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
