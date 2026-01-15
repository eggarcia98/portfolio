import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-dvh bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
            <Navbar />
            <main className="mx-auto max-w-5xl px-4 py-14">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                    Software Engineer | Cloud & Networking | Linux • Docker •
                    Cloudflare • GCP
                </p>

                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                    I build reliable web systems — and I understand how they run
                    in real networks.
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-200">
                    Backend-focused developer with infrastructure foundations. I
                    enjoy designing and deploying systems that are secure,
                    observable, and maintainable.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                        href="/projects"
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="/contact"
                        className="rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-white dark:border-slate-800 dark:text-slate-100 dark:hover:bg-slate-900"
                    >
                        Contact
                    </Link>
                </div>
            </main>
        </div>
    );
}
