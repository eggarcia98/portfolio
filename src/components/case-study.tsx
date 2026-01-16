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
            <header className="border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40">
                <div className="container-page py-6">
                    <Link
                        href="/projects"
                        className="navlink text-teal-700 dark:text-teal-300"
                    >
                        ← Back to projects
                    </Link>
                    <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                        {title}
                    </h1>
                    <p className="mt-3 max-w-3xl lead">
                        {subtitle}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
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

            <main className="container-page py-14">
                <article className="article">{children}</article>
            </main>
        </div>
    );
}
