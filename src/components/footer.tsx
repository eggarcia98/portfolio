import Link from "next/link";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-200 dark:border-slate-800">
            <div className="container-page flex flex-col gap-3 py-10 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                    © {year} Erick Garcia. Built with Next.js.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                    <Link className="navlink" href="/projects">
                        Projects
                    </Link>
                    <Link className="navlink" href="/about">
                        About
                    </Link>
                    <Link className="navlink" href="/contact">
                        Contact
                    </Link>

                    <a
                        className="navlink"
                        href="/Erick_Garcia_Resume.pdf"
                        download
                    >
                        Resume
                    </a>

                    <a
                        className="navlink"
                        href="https://www.linkedin.com/in/eggarcia98"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        className="navlink"
                        href="https://github.com/eggarcia98"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
