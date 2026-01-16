import Link from "next/link";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
            <div className="container-page py-12 lg:py-16">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    <div>
                        <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">
                            Erick Garcia
                        </Link>
                        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                            Backend engineer specializing in production systems, database optimization, and cloud infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                                Navigation
                            </h3>
                            <ul className="mt-3 space-y-2">
                                <li>
                                    <Link className="navlink" href="/projects">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link className="navlink" href="/about">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link className="navlink" href="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                                Connect
                            </h3>
                            <ul className="mt-3 space-y-2">
                                <li>
                                    <a
                                        className="navlink"
                                        href="https://www.linkedin.com/in/eggarcia98"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="navlink"
                                        href="https://github.com/eggarcia98"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="navlink"
                                        href="mailto:eggarcia9814@gmail.com"
                                    >
                                        Email
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                                Resources
                            </h3>
                            <ul className="mt-3 space-y-2">
                                <li>
                                    <a
                                        className="navlink"
                                        href="/Erick_Garcia_Resume.pdf"
                                        download
                                    >
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-8 dark:border-slate-800">
                    <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                        © {year} Erick Garcia. Built with Next.js & TypeScript.
                    </p>
                </div>
            </div>
        </footer>
    );
}
