import Link from "next/link";

type Props = {
    title: string;
    subtitle: string;
    stack: string[];
    children: React.ReactNode;
};

export function CaseStudy({ title, subtitle, stack, children }: Props) {
    return (
        <div className="min-h-dvh">
            <header className="border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40 sticky top-0 z-30">
                <div className="container-page py-8">
                    <Link
                        href="/projects"
                        className="navlink inline-flex items-center gap-1 text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-teal-200 transition-colors"
                    >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to projects
                    </Link>
                    <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
                        {title}
                    </h1>
                    <p className="mt-4 max-w-3xl text-lg font-light leading-relaxed text-slate-600 dark:text-slate-300">
                        {subtitle}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {stack.map((s) => (
                            <span
                                key={s}
                                className="chip"
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
            </header>

            <main className="container-page py-16 lg:py-20">
                <article className="article max-w-3xl">{children}</article>
            </main>
        </div>
    );
}
