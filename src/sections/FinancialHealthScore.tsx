"use client";

import { AnimateInView } from "@/components/AnimateInView";
import { ScoreMeter } from "@/components/ScoreMeter";
import { motion } from "framer-motion";

const scoreFactors = [
    { label: "Assets", value: 85, color: "from-emerald-400 to-emerald-500" },
    { label: "Savings Rate", value: 72, color: "from-teal-400 to-teal-500" },
    { label: "Investments", value: 90, color: "from-blue-400 to-blue-500" },
    { label: "Debt Ratio", value: 65, color: "from-amber-400 to-amber-500" },
    { label: "Income Stability", value: 88, color: "from-purple-400 to-purple-500" },
];

export function FinancialHealthScore() {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <AnimateInView className="text-center mb-16">
                    <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
                        Core Feature
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] text-navy-900 mb-6">
                        Your Financial{" "}
                        <span className="gradient-text">Health Score</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Get a comprehensive assessment of your financial well-being. Our
                        proprietary scoring engine analyzes multiple financial indicators to
                        give you a clear picture of your financial health.
                    </p>
                </AnimateInView>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Score Meter */}
                    <AnimateInView className="flex justify-center" direction="left">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-800 rounded-[40px] -m-12" />
                            <div className="relative p-12 flex flex-col items-center">
                                <ScoreMeter score={782} />
                                <div className="mt-8 flex items-center gap-3">
                                    <div className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold">
                                        Excellent
                                    </div>
                                    <span className="text-gray-400 text-sm">
                                        Top 15% of users
                                    </span>
                                </div>
                            </div>
                        </div>
                    </AnimateInView>

                    {/* Score Breakdown */}
                    <AnimateInView direction="right">
                        <h3 className="text-2xl font-bold font-[var(--font-display)] text-navy-900 mb-2">
                            Score Breakdown
                        </h3>
                        <p className="text-gray-500 mb-8">
                            Your score is calculated based on these key financial indicators
                        </p>

                        <div className="space-y-5">
                            {scoreFactors.map((factor, index) => (
                                <motion.div
                                    key={factor.label}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold text-navy-800">
                                            {factor.label}
                                        </span>
                                        <span className="text-sm font-bold text-navy-900">
                                            {factor.value}%
                                        </span>
                                    </div>
                                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${factor.value}%` }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1.2,
                                                delay: 0.2 + 0.1 * index,
                                                ease: "easeOut",
                                            }}
                                            className={`h-full rounded-full bg-gradient-to-r ${factor.color}`}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </AnimateInView>
                </div>
            </div>
        </section>
    );
}
