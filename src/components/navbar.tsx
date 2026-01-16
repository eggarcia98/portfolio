"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";

const NavLink = ({
    href,
    children,
    onClick,
}: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}) => (
    <Link href={href} onClick={onClick} className="navlink block px-4 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/50 lg:inline-block lg:px-3">
        {children}
    </Link>
);

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <>
            <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
                <div className="container-page">
                <div className="flex items-center justify-between py-4">
                    <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className="text-lg font-bold text-slate-900 transition-colors hover:text-teal-600 dark:text-white dark:hover:text-teal-400"
                    >
                        Erick Garcia
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-1 lg:flex">
                        <NavLink href="/projects">Projects</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/contact">Contact</NavLink>

                        <div className="ml-2">
                            <a
                                href="/Erick_Garcia_Resume.pdf"
                                download
                                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-teal-600 transition-colors hover:bg-teal-50 dark:text-teal-400 dark:hover:bg-teal-950/30"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Resume
                            </a>
                        </div>

                        <div className="ml-2">
                            <ThemeToggle />
                        </div>
                    </nav>

                    {/* Mobile Menu Button + Resume + Theme Toggle */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <a
                            href="/Erick_Garcia_Resume.pdf"
                            download
                            className="flex items-center gap-1 rounded-md px-3 py-1 text-xs font-medium text-teal-600 transition-colors hover:bg-teal-50 dark:text-teal-400 dark:hover:bg-teal-950/30"
                        >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Resume
                        </a>
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>

            {/* Mobile Menu Overlay & Panel - Rendered outside header to avoid stacking context */}
            <>
                {/* Backdrop */}
                <div
                    className={`fixed inset-0 bg-slate-900/50 transition-opacity duration-300 lg:hidden ${
                        mobileMenuOpen ? 'opacity-100 z-[998]' : 'opacity-0 pointer-events-none -z-10'
                    }`}
                    onClick={closeMobileMenu}
                />

                {/* Sliding Panel from Right */}
                <div className={`fixed right-0 top-0 z-[999] w-80 max-h-screen overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-in-out dark:bg-slate-900 lg:hidden ${
                    mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="flex flex-col">
                            {/* Panel Header */}
                            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-900">
                                <span className="text-lg font-bold text-slate-900 dark:text-white">Menu</span>
                                <button
                                    onClick={closeMobileMenu}
                                    className="rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                                    aria-label="Close menu"
                                >
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Panel Content */}
                            <div className="flex-1 bg-white px-6 py-6 dark:bg-slate-900">
                                <nav className="flex flex-col space-y-2">
                                    <NavLink href="/projects" onClick={closeMobileMenu}>
                                        Projects
                                    </NavLink>
                                    <NavLink href="/about" onClick={closeMobileMenu}>
                                        About
                                    </NavLink>
                                    <NavLink href="/contact" onClick={closeMobileMenu}>
                                        Contact
                                    </NavLink>
                                </nav>

                                <div className="mt-8">
                                    <a
                                        href="/Erick_Garcia_Resume.pdf"
                                        download
                                        className="btn btn-primary block w-full text-center"
                                        onClick={closeMobileMenu}
                                    >
                                        Download Resume
                                    </a>
                                </div>

                                {/* Contact info for recruiters */}
                                <div className="mt-8 space-y-4 border-t border-slate-200 pt-6 dark:border-slate-800">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Quick Contact
                                    </p>
                                    <a
                                        href="mailto:eggarcia9814@gmail.com"
                                        className="flex items-center gap-3 rounded-lg p-3 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                                    >
                                        <svg className="h-5 w-5 flex-shrink-0 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="break-all text-left">eggarcia9814@gmail.com</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/eggarcia98"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-3 rounded-lg p-3 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                                    >
                                        <svg className="h-5 w-5 flex-shrink-0 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                        <span>LinkedIn Profile</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
        </>
    );
}
