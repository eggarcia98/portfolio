"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const current = theme === "system" ? systemTheme : theme;

    return (
        <button
            type="button"
            onClick={() => setTheme(current === "dark" ? "light" : "dark")}
            className="rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
            aria-label="Toggle theme"
        >
            {current === "dark" ? "Light" : "Dark"}
        </button>
    );
}
