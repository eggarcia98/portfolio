import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
    title: "Erick Garcia | Software Engineer",
    description: "Software Engineer with Cloud & Networking foundations.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
