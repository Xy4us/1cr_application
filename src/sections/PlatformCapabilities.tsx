"use client";

import { AnimateInView } from "@/components/AnimateInView";
import { motion } from "framer-motion";
import {
    TrendingUp,
    PieChart,
    BarChart3,
    CreditCard,
    Target,
    Calculator,
} from "lucide-react";

const capabilities = [
    {
        icon: TrendingUp,
        title: "Net Worth Tracking",
        description:
            "Track your complete financial picture with real-time net worth calculations across all your assets and liabilities.",
        color: "from-emerald-400 to-emerald-600",
        bgColor: "bg-emerald-50",
    },
    {
        icon: PieChart,
        title: "Portfolio Analytics",
        description:
            "Deep dive into your investment portfolio with advanced analytics, allocation insights, and performance tracking.",
        color: "from-blue-400 to-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: BarChart3,
        title: "Asset Allocation",
        description:
            "Visualize and optimize your asset allocation across multiple asset classes for a balanced financial strategy.",
        color: "from-purple-400 to-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: CreditCard,
        title: "Debt Management",
        description:
            "Track, manage, and plan payoff strategies for all your liabilities with smart debt management tools.",
        color: "from-red-400 to-red-600",
        bgColor: "bg-red-50",
    },
    {
        icon: Target,
        title: "Goal Tracking",
        description:
            "Set financial goals, track progress, and get recommendations to achieve your financial milestones faster.",
        color: "from-amber-400 to-amber-600",
        bgColor: "bg-amber-50",
    },
    {
        icon: Calculator,
        title: "Financial Planning",
        description:
            "Comprehensive planning tools to model scenarios, project future wealth, and make informed financial decisions.",
        color: "from-teal-400 to-teal-600",
        bgColor: "bg-teal-50",
    },
];

export function PlatformCapabilities() {
    return (
        <section className="section-padding bg-gray-50/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateInView className="text-center mb-16">
                    <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
                        What We Offer
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] text-navy-900 mb-6">
                        A Complete Financial{" "}
                        <span className="gradient-text">Intelligence Platform</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Everything you need to understand, track, and improve your financial
                        health — all in one powerful mobile application.
                    </p>
                </AnimateInView>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((cap, index) => {
                        const Icon = cap.icon;
                        return (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                whileHover={{ y: -6 }}
                                className="feature-card group cursor-pointer"
                            >
                                <div
                                    className={`w-14 h-14 rounded-2xl ${cap.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <Icon
                                        size={26}
                                        className={`bg-gradient-to-br ${cap.color} bg-clip-text`}
                                        style={{ color: 'currentColor' }}
                                    />
                                </div>
                                <h3 className="text-xl font-bold font-[var(--font-display)] text-navy-900 mb-3">
                                    {cap.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {cap.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
