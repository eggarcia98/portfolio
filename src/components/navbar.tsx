import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const NavLink = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => (
    <Link href={href} className="navlink">
        {children}
    </Link>
);

export function Navbar() {
    return (
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
            <div className="container-page flex items-center justify-between py-3">
                <Link
                    href="/"
                    className="font-semibold text-slate-900 dark:text-white"
                >
                    Erick Garcia
                </Link>

                <nav className="flex items-center gap-4">
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/contact">Contact</NavLink>

                    <a
                        href="/Erick_Garcia_Resume.pdf"
                        download
                        className="btn btn-secondary "
                    >
                        Resume
                    </a>

                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
