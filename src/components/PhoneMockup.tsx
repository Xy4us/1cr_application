"use client";

import { ReactNode } from "react";

interface PhoneMockupProps {
    children: ReactNode;
    className?: string;
    scale?: string;
}

export function PhoneMockup({
    children,
    className = "",
    scale = "1",
}: PhoneMockupProps) {
    return (
        <div
            className={`phone-mockup relative ${className}`}
            style={{ transform: `scale(${scale})`, width: "280px" }}
        >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-10 flex items-center justify-center">
                <div className="w-16 h-4 bg-[#1a1a1a] rounded-full" />
            </div>

            {/* Screen */}
            <div className="phone-screen w-full aspect-[9/19.5] relative overflow-hidden">
                {children}
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-gray-600 rounded-full" />
        </div>
    );
}
