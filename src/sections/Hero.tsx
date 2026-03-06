"use client";

import { motion } from "framer-motion";
import { PhoneMockup } from "@/components/PhoneMockup";
import { ArrowRight, Download, TrendingUp, Shield, PieChart } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen gradient-bg-hero overflow-hidden flex items-center">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl floating-element" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-400/10 rounded-full blur-3xl floating-element-delayed" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-600/5 rounded-full blur-3xl" />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-teal-300 text-sm font-medium mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                            Financial Intelligence Platform
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-[var(--font-display)] text-white leading-[1.1] mb-6"
                        >
                            Understand Your{" "}
                            <span className="gradient-text-teal">Financial Health</span>.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                        >
                            Track your net worth, investments, assets, and liabilities with
                            the 1Cr Club Financial Health Platform. Make smarter financial
                            decisions with data-driven insights.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                        >
                            <Link href="#download" className="btn-primary text-base">
                                <Download size={18} />
                                Download App
                            </Link>
                            <Link href="/platform" className="btn-secondary text-base">
                                Explore Platform
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex items-center gap-8 mt-14 justify-center lg:justify-start"
                        >
                            {[
                                { value: "50K+", label: "Active Users" },
                                { value: "₹2000Cr+", label: "Assets Tracked" },
                                { value: "4.8★", label: "App Rating" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center lg:text-left">
                                    <div className="text-2xl font-bold text-white font-[var(--font-display)]">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right - Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 60, rotateY: -15 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex justify-center lg:justify-end relative"
                    >
                        {/* Floating cards around phone */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-4 top-24 glass-card rounded-2xl p-4 z-20 hidden lg:flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center">
                                <TrendingUp size={18} className="text-white" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400">Net Worth</div>
                                <div className="text-white font-bold">₹1.2 Cr</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 top-48 glass-card rounded-2xl p-4 z-20 hidden lg:flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                                <PieChart size={18} className="text-white" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400">Portfolio</div>
                                <div className="text-white font-bold">+18.5%</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [-8, 12, -8] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-8 bottom-32 glass-card rounded-2xl p-4 z-20 hidden lg:flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center">
                                <Shield size={18} className="text-white" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400">Health Score</div>
                                <div className="text-white font-bold">782 / 900</div>
                            </div>
                        </motion.div>

                        <PhoneMockup className="relative z-10">
                            {/* Simulated App Screen */}
                            <div className="w-full h-full bg-gradient-to-b from-[#0a1628] to-[#0f1d45] p-5 pt-10">
                                <div className="text-center mb-4">
                                    <div className="text-xs text-teal-400 font-medium mb-1">
                                        Financial Health Score
                                    </div>
                                    <div className="text-4xl font-bold text-white font-[var(--font-display)]">
                                        782
                                    </div>
                                    <div className="text-xs text-gray-500 mt-0.5">/ 900</div>
                                </div>

                                {/* Score ring */}
                                <div className="flex justify-center mb-4">
                                    <svg width="120" height="120" viewBox="0 0 120 120">
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="50"
                                            fill="none"
                                            stroke="rgba(255,255,255,0.08)"
                                            strokeWidth="8"
                                        />
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="50"
                                            fill="none"
                                            stroke="url(#heroGrad)"
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            strokeDasharray="314"
                                            strokeDashoffset="50"
                                            transform="rotate(-90 60 60)"
                                        />
                                        <defs>
                                            <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#14b8a6" />
                                                <stop offset="100%" stopColor="#10b981" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                {/* Mini stats */}
                                <div className="grid grid-cols-2 gap-2 mb-3">
                                    {[
                                        { label: "Assets", value: "₹85L", color: "bg-emerald-500" },
                                        { label: "Liabilities", value: "₹12L", color: "bg-red-400" },
                                        { label: "Investments", value: "₹62L", color: "bg-blue-400" },
                                        { label: "Savings", value: "₹18L", color: "bg-gold-400" },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className="bg-white/5 rounded-xl p-2.5 border border-white/5"
                                        >
                                            <div className="flex items-center gap-1.5 mb-1">
                                                <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                                                <span className="text-[10px] text-gray-400">{item.label}</span>
                                            </div>
                                            <div className="text-sm font-bold text-white">{item.value}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Mini chart */}
                                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                    <div className="text-[10px] text-gray-400 mb-2">Net Worth Trend</div>
                                    <svg width="100%" height="40" viewBox="0 0 200 40">
                                        <polyline
                                            points="0,35 30,28 60,30 90,22 120,18 150,15 180,8 200,5"
                                            fill="none"
                                            stroke="#14b8a6"
                                            strokeWidth="2"
                                        />
                                        <polyline
                                            points="0,35 30,28 60,30 90,22 120,18 150,15 180,8 200,5"
                                            fill="url(#chartFill)"
                                            stroke="none"
                                        />
                                        <defs>
                                            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="rgba(20,184,166,0.3)" />
                                                <stop offset="100%" stopColor="rgba(20,184,166,0)" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </PhoneMockup>
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}
