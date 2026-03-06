"use client";

import { AnimateInView } from "@/components/AnimateInView";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const assetTypes = [
    {
        name: "Mutual Funds",
        icon: "📊",
        description: "Diversified investment in professionally managed portfolios across equity, debt, and hybrid funds.",
        stats: "Track 5000+ funds",
        gradient: "from-blue-500/10 to-blue-600/5",
        border: "hover:border-blue-300",
    },
    {
        name: "Stocks",
        icon: "📈",
        description: "Monitor your equity investments with real-time tracking, fundamental analysis, and portfolio insights.",
        stats: "NSE & BSE covered",
        gradient: "from-emerald-500/10 to-emerald-600/5",
        border: "hover:border-emerald-300",
    },
    {
        name: "Real Estate",
        icon: "🏠",
        description: "Track property values, rental yields, and real estate investments as part of your total asset portfolio.",
        stats: "Market value updates",
        gradient: "from-amber-500/10 to-amber-600/5",
        border: "hover:border-amber-300",
    },
    {
        name: "Gold",
        icon: "✨",
        description: "Monitor gold investments including physical gold, digital gold, sovereign gold bonds, and gold ETFs.",
        stats: "Live price tracking",
        gradient: "from-yellow-500/10 to-yellow-600/5",
        border: "hover:border-yellow-300",
    },
    {
        name: "Cryptocurrency",
        icon: "₿",
        description: "Track your crypto portfolio across multiple exchanges with real-time valuations and profit/loss analysis.",
        stats: "200+ coins supported",
        gradient: "from-purple-500/10 to-purple-600/5",
        border: "hover:border-purple-300",
    },
];

export function LearnAssets() {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateInView className="text-center mb-16">
                    <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
                        Asset Coverage
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] text-navy-900 mb-6">
                        Track <span className="gradient-text">Every Asset Class</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        From traditional investments to modern asset classes, track
                        everything that contributes to your financial health.
                    </p>
                </AnimateInView>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {assetTypes.map((asset, index) => (
                        <motion.div
                            key={asset.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            whileHover={{ y: -4 }}
                            className={`group bg-gradient-to-br ${asset.gradient} rounded-2xl p-6 border border-gray-100 ${asset.border} transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-black/5`}
                        >
                            <div className="text-4xl mb-4">{asset.icon}</div>
                            <h3 className="text-lg font-bold font-[var(--font-display)] text-navy-900 mb-2">
                                {asset.name}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                {asset.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                                    {asset.stats}
                                </span>
                                <ArrowRight
                                    size={16}
                                    className="text-gray-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
