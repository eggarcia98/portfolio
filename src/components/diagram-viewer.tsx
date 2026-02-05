"use client";

import { useRef, useEffect, useState } from "react";

type Props = {
    src: string;
    alt: string;
};

export default function DiagramViewer({ src, alt }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [lastTouch, setLastTouch] = useState({ x: 0, y: 0 });

    // Handle pinch zoom
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let lastDistance = 0;

        const handleTouchStart = (e: TouchEvent) => {
            if (e.touches.length === 2) {
                const touch1 = e.touches[0];
                const touch2 = e.touches[1];
                lastDistance = Math.hypot(
                    touch2.clientX - touch1.clientX,
                    touch2.clientY - touch1.clientY
                );
            } else if (e.touches.length === 1) {
                setLastTouch({
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY,
                });
                setIsDragging(true);
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length === 2) {
                e.preventDefault();
                const touch1 = e.touches[0];
                const touch2 = e.touches[1];
                const distance = Math.hypot(
                    touch2.clientX - touch1.clientX,
                    touch2.clientY - touch1.clientY
                );

                if (lastDistance > 0) {
                    const scaleChange = distance / lastDistance;
                    setScale((prev) => {
                        const newScale = prev * scaleChange;
                        return Math.max(1, Math.min(5, newScale));
                    });
                }

                lastDistance = distance;
            } else if (e.touches.length === 1 && isDragging && scale > 1) {
                e.preventDefault();
                const touch = e.touches[0];
                const deltaX = touch.clientX - lastTouch.x;
                const deltaY = touch.clientY - lastTouch.y;

                setPosition((prev) => ({
                    x: prev.x + deltaX,
                    y: prev.y + deltaY,
                }));

                setLastTouch({
                    x: touch.clientX,
                    y: touch.clientY,
                });
            }
        };

        const handleTouchEnd = () => {
            setIsDragging(false);
            lastDistance = 0;
        };

        container.addEventListener("touchstart", handleTouchStart);
        container.addEventListener("touchmove", handleTouchMove, {
            passive: false,
        });
        container.addEventListener("touchend", handleTouchEnd);

        return () => {
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
            container.removeEventListener("touchend", handleTouchEnd);
        };
    }, [isDragging, scale]);

    return (
        <div
            ref={containerRef}
            className="my-8 overflow-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
            style={{
                touchAction: "none",
                userSelect: "none",
                WebkitUserSelect: "none",
            }}
        >
            <div
                style={{
                    display: "inline-block",
                    transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                    transformOrigin: "0 0",
                    transition: isDragging ? "none" : "transform 0.1s ease-out",
                }}
            >
                <img
                    ref={imgRef}
                    src={src}
                    alt={alt}
                    className="w-full max-w-none"
                    style={{
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        pointerEvents: "none",
                    }}
                />
            </div>
        </div>
    );
}
