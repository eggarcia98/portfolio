import { Navbar } from "@/components/navbar";

export default function ContactPage() {
    return (
        <div className="min-h-dvh bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
            <Navbar />
            <main className="mx-auto max-w-5xl px-4 py-12">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Contact
                </h1>
                <p className="mt-3 max-w-2xl text-slate-700 dark:text-slate-200">
                    If you’re hiring for software engineering, cloud/DevOps
                    support, or networking-focused roles, I’d love to connect.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <a
                        className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                        href="mailto:eggarcia9814@gmail.com"
                    >
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Email
                        </p>
                        <p className="mt-1 font-semibold text-teal-700 dark:text-teal-300">
                            eggarcia9814@gmail.com
                        </p>
                    </a>

                    <a
                        className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                        href="https://www.linkedin.com/in/eggarcia98"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            LinkedIn
                        </p>
                        <p className="mt-1 font-semibold">
                            linkedin.com/in/eggarcia98
                        </p>
                    </a>

                    <a
                        className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                        href="https://github.com/eggarcia98"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            GitHub
                        </p>
                        <p className="mt-1 font-semibold">
                            github.com/eggarcia98
                        </p>
                    </a>
                </div>
            </main>
        </div>
    );
}
