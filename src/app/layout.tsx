import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site";

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
        default: site.title,
        template: `%s | ${site.name}`,
    },
    description: site.description,
    applicationName: site.name,
    authors: [{ name: site.name }],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    alternates: {
        canonical: site.url,
    },
    openGraph: {
        type: "website",
        url: site.url,
        title: site.title,
        description: site.description,
        siteName: site.name,
        locale: site.locale,
        images: [
            {
                url: "/opengraph-image",
                alt: site.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: site.title,
        description: site.description,
        images: [
            {
                url: "/opengraph-image",
                alt: site.name,
            },
        ],
        // site: site.twitterHandle || undefined,
        // creator: site.twitterHandle || undefined,
    },
    icons: {
        icon: "/favicon.ico",
    },
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
