import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-200 dark:border-slate-800">
            <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
                {/* Branding section */}
                <div className="mb-8 lg:mb-12">
                    <Link href="/" className="inline-flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-full bg-teal-600 dark:bg-teal-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-extrabold text-sm">EG</span>
                        </div>
                        <span className="text-lg font-extrabold text-slate-900 dark:text-white">Erick Garcia</span>
                    </Link>
                    <p className="text-sm font-light text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                        Backend engineer specializing in production systems, database optimization, and cloud infrastructure.
                    </p>
                </div>

                {/* Navigation grid - 3 columns on mobile */}
                <div className="grid gap-8 grid-cols-3 lg:gap-16 mb-8">
                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-900 dark:text-white mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/projects" className="text-sm text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-900 dark:text-white mb-4">
                            Connect
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/eggarcia98"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                                >
                                    <Linkedin className="h-4 w-4" />
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/eggarcia98"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                                >
                                    <Github className="h-4 w-4" />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:eggarcia9814@gmail.com"
                                    className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                                >
                                    <Mail className="h-4 w-4" />
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-900 dark:text-white mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="/Erick_Garcia_Resume.pdf"
                                    download
                                    className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider and bottom info */}
                <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
                    <p className="text-xs text-slate-500 dark:text-slate-500 text-center">
                        © {year} Erick Garcia. Built with Next.js & TypeScript.
                    </p>
                </div>
            </div>
        </footer>
    );
}
