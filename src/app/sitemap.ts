import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
    title: "About",
    description: `About ${site.name} — software engineering with cloud and networking foundations.`,
    openGraph: {
        title: `About | ${site.name}`,
        description: `About ${site.name} — software engineering with cloud and networking foundations.`,
        url: `${site.url}/about`,
    },
};
