import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = site.url;

    const routes = [
        "",
        "/projects",
        "/about",
        "/contact",
        "/projects/cloudflare-tunnel",
        "/projects/hl7-proxy",
        "/projects/odoo-middleware",
        "/projects/db-migration",
    ];

    return routes.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.7,
    }));
}
