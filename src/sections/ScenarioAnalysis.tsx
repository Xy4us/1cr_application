"use client";

import { AnimateInView } from "@/components/AnimateInView";
import { motion } from "framer-motion";
import { GitBranch, ArrowRight, TrendingDown, TrendingUp, Home } from "lucide-react";

const scenarios = [
    {
        icon: TrendingDown,
        title: "Debt Payoff Planning",
        description:
            "Model different payoff strategies for your loans. Compare snowball vs avalanche methods and see how extra payments reduce interest and tenure.",
        impact: "Save up to ₹4.2L in interest",
        color: "from-emerald-400 to-emerald-500",
        bgColor: "bg-emerald-50",
    },
    {
        icon: TrendingUp,
        title: "Investment Projections",
        description:
            "Project your investment portfolio growth with different contribution levels, asset allocations, and expected return rates.",
        impact: "See wealth growth up to 30 years",
        color: "from-blue-400 to-blue-500",
        bgColor: "bg-blue-50",
    },
    {
        icon: Home,
        title: "Major Purchase Planning",
        description:
            "Analyze the financial impact of major purchases like a home, car, or business investment on your overall financial health.",
        impact: "Score impact analysis included",
        color: "from-amber-400 to-amber-500",
        bgColor: "bg-amber-50",
    },
];

export function ScenarioAnalysis() {
    return (
        <section className="section-padding bg-gray-50/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Content */}
                    <AnimateInView direction="left">
                        <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
                            What-If Analysis
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-navy-900 mb-6">
                            Plan Smarter with{" "}
                            <span className="gradient-text">Scenario Analysis</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            Visualize the impact of financial decisions before you make them.
                            Our scenario analysis engine lets you model multiple outcomes and
                            choose the optimal path for your financial goals.
                        </p>

                        <div className="space-y-5">
                            {scenarios.map((scenario, index) => {
                                const Icon = scenario.icon;
                                return (
                                    <motion.div
                                        key={scenario.title}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.15 * index, duration: 0.5 }}
                                        className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-300 group cursor-pointer"
                                    >
                                        <div
                                            className={`w-12 h-12 rounded-xl ${scenario.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                                        >
                                            <Icon size={22} className="text-navy-700" />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-navy-900 mb-1">
                                                {scenario.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 leading-relaxed mb-2">
                                                {scenario.description}
                                            </p>
                                            <span className="text-xs font-semibold text-teal-600">
                                                {scenario.impact}
                                            </span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </AnimateInView>

                    {/* Right - Visual Diagram */}
                    <AnimateInView direction="right">
                        <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.1),transparent_70%)]" />

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
                                        <GitBranch size={20} className="text-teal-400" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">Scenario Engine</div>
                                        <div className="text-gray-400 text-xs">
                                            3 active scenarios
                                        </div>
                                    </div>
                                </div>

                                {/* Flow diagram */}
                                <div className="space-y-4">
                                    {/* Current State */}
                                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                        <div className="text-xs text-teal-400 mb-1">
                                            Current State
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-white font-semibold">
                                                Score: 782
                                            </span>
                                            <span className="text-gray-400 text-sm">
                                                Net Worth: ₹1.12Cr
                                            </span>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="flex justify-center">
                                        <div className="flex flex-col items-center">
                                            <div className="w-0.5 h-4 bg-teal-500/30" />
                                            <ArrowRight
                                                size={16}
                                                className="text-teal-400 rotate-90"
                                            />
                                            <div className="w-0.5 h-4 bg-teal-500/30" />
                                        </div>
                                    </div>

                                    {/* Scenarios */}
                                    <div className="grid grid-cols-1 gap-3">
                                        {[
                                            {
                                                name: "Pay off loan",
                                                score: "+45",
                                                wealth: "+₹4.2L",
                                                color: "text-emerald-400",
                                                border: "border-emerald-500/20",
                                            },
                                            {
                                                name: "Increase SIP",
                                                score: "+28",
                                                wealth: "+₹28L (10yr)",
                                                color: "text-blue-400",
                                                border: "border-blue-500/20",
                                            },
                                            {
                                                name: "Buy property",
                                                score: "-15",
                                                wealth: "+₹35K/mo",
                                                color: "text-amber-400",
                                                border: "border-amber-500/20",
                                            },
                                        ].map((s) => (
                                            <div
                                                key={s.name}
                                                className={`bg-white/5 rounded-xl p-3 border ${s.border}`}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-300">
                                                        {s.name}
                                                    </span>
                                                    <div className="flex gap-4">
                                                        <span className={`text-sm font-bold ${s.color}`}>
                                                            {s.score} pts
                                                        </span>
                                                        <span className="text-sm text-gray-400">
                                                            {s.wealth}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateInView>
                </div>
            </div>
        </section>
    );
}
