import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-dvh">
            <Navbar />

            <main className="container-page py-14">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                    Software Engineer | Cloud & Networking | Linux • Docker •
                    Cloudflare • GCP
                </p>

                <h1 className="h1 mt-3">
                    Software Engineer with Cloud & Networking foundations.
                </h1>

                <p className="muted mt-5 max-w-2xl leading-7">
                    I build backend systems and deploy them reliably. I focus on
                    security, performance, and real-world troubleshooting—how
                    software behaves in production networks.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/projects" className="btn btn-primary">
                        View Projects
                    </Link>

                    <a
                        href="/Erick_Garcia_Resume.pdf"
                        download
                        className="btn btn-secondary"
                    >
                        Download Resume
                    </a>

                    <Link href="/contact" className="btn btn-secondary">
                        Contact
                    </Link>
                </div>

                {/* Subtle “proof” row */}
                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                    <div className="surface p-5">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Domain experience
                        </p>
                        <p className="mt-2 font-semibold">
                            Healthcare (HL7), ERP, live migrations
                        </p>
                    </div>
                    <div className="surface p-5">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Cloud & Ops
                        </p>
                        <p className="mt-2 font-semibold">
                            Cloud Run, Docker, CI/CD mindset
                        </p>
                    </div>
                    <div className="surface p-5">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Networking
                        </p>
                        <p className="mt-2 font-semibold">
                            VLANs, routing, troubleshooting
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
