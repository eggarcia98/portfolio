"use client";

import { useState } from "react";

type ServiceImage = {
    src: string;
    alt: string;
};

type ServiceImageGalleryProps = {
    serviceName: string;
    images: ServiceImage[];
};

export function ServiceImageGallery({
    serviceName,
    images,
}: ServiceImageGalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeImage = images[activeIndex] ?? images[0];

    if (!activeImage) {
        return null;
    }

    return (
        <div className="flex w-full items-center gap-3">
            {/* Main image */}
            <div className="min-w-0 flex flex-1 items-center justify-center">
                <img
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="block  rounded-md"
                />
            </div>

            {/* Thumbnail column */}
            {images.length > 1 ? (
                <div className="flex shrink-0 flex-col mr-7 self-center gap-y-2">
                    {images.map((image, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <button
                                key={`${image.src}-${index}`}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Show ${serviceName} screenshot ${index + 1}`}
                                aria-pressed={isActive}
                                className={`shrink-0 rounded-md border p-1 transition-colors ${
                                    isActive
                                        ? "border-teal-500 bg-teal-50 dark:border-teal-400 dark:bg-teal-900/30"
                                        : "border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900/40 dark:hover:border-slate-600"
                                }`}
                            >
                                <div className="flex h-14 w-20 items-center justify-center overflow-hidden rounded">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="block max-h-full max-w-full object-contain"
                                    />
                                </div>
                            </button>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}
