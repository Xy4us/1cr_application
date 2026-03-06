"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ScoreMeterProps {
    score: number;
    maxScore?: number;
    size?: number;
    strokeWidth?: number;
    label?: string;
    animate?: boolean;
}

export function ScoreMeter({
    score,
    maxScore = 900,
    size = 280,
    strokeWidth = 18,
    label = "Financial Health Score",
    animate = true,
}: ScoreMeterProps) {
    const [displayScore, setDisplayScore] = useState(0);
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = score / maxScore;
    const strokeDashoffset = circumference * (1 - progress);

    // Get color based on score
    const getColor = (s: number) => {
        if (s < 300) return { main: "#ef4444", glow: "rgba(239,68,68,0.3)" };
        if (s < 500) return { main: "#f59e0b", glow: "rgba(245,158,11,0.3)" };
        if (s < 700) return { main: "#14b8a6", glow: "rgba(20,184,166,0.3)" };
        return { main: "#10b981", glow: "rgba(16,185,129,0.3)" };
    };

    const color = getColor(score);

    useEffect(() => {
        if (!animate) {
            setDisplayScore(score);
            return;
        }
        let current = 0;
        const duration = 2000;
        const steps = 60;
        const increment = score / steps;
        const stepDuration = duration / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= score) {
                setDisplayScore(score);
                clearInterval(timer);
            } else {
                setDisplayScore(Math.round(current));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [score, animate]);

    return (
        <div className="relative inline-flex items-center justify-center">
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="score-ring -rotate-90"
            >
                <defs>
                    <linearGradient
                        id="scoreGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="50%" stopColor="#0d9488" />
                        <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                />

                {/* Progress circle */}
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="url(#scoreGradient)"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
                    filter="url(#glow)"
                />
            </svg>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xs font-medium text-teal-400 uppercase tracking-widest mb-1">
                    {label}
                </span>
                <motion.span
                    className="text-5xl font-bold font-[var(--font-display)] text-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    {displayScore}
                </motion.span>
                <span className="text-sm text-gray-400 mt-1">/ {maxScore}</span>
            </div>
        </div>
    );
}
