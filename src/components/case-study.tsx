import Link from "next/link";

type Props = {
    title: string;
    subtitle: string;
    stack: string[];
    children: React.ReactNode;
};

export function CaseStudy({ title, subtitle, stack, children }: Props) {
    return (
        <div className="min-h-dvh bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
            <header className="border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
                <div className="mx-auto max-w-5xl px-4 py-4">
                    <Link
                        href="/projects"
                        className="text-sm text-teal-700 hover:underline dark:text-teal-300"
                    >
                        ← Back to projects
                    </Link>
                    <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        {title}
                    </h1>
                    <p className="mt-2 max-w-3xl text-slate-700 dark:text-slate-200">
                        {subtitle}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {stack.map((s) => (
                            <span
                                key={s}
                                className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-4 py-10">
                <article className="prose prose-slate max-w-none dark:prose-invert prose-a:text-teal-700 dark:prose-a:text-teal-300">
                    {children}
                </article>
            </main>
        </div>
    );
}
