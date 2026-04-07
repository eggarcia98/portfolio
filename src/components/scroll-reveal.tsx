'use client';

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    threshold?: number;
};

export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    threshold = 0.18,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }

        if (typeof IntersectionObserver === "undefined") {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold,
                rootMargin: "0px 0px -8% 0px",
            },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`}
            style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
        >
            {children}
        </div>
    );
}
