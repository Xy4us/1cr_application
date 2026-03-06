"use client";

import { AnimateInView } from "@/components/AnimateInView";
import { motion } from "framer-motion";
import {
    Calculator,
    TrendingUp,
    DollarSign,
    LineChart,
    ArrowRight,
} from "lucide-react";

const tools = [
    {
        icon: Calculator,
        title: "Loan Calculator",
        description:
            "Calculate EMI, total interest, and payoff timelines for any loan amount. Make informed borrowing decisions.",
        color: "from-blue-500 to-blue-600",
        stat: "12+ loan types",
    },
    {
        icon: TrendingUp,
        title: "SIP Calculator",
        description:
            "Plan your systematic investments with projections for wealth accumulation over time with SIP returns.",
        color: "from-emerald-500 to-emerald-600",
        stat: "Up to 30yr projection",
    },
    {
        icon: DollarSign,
        title: "Future Value Calculator",
        description:
            "Project the future value of your investments considering inflation, returns, and compounding frequency.",
        color: "from-amber-500 to-amber-600",
        stat: "Inflation adjusted",
    },
    {
        icon: LineChart,
        title: "Financial Planning Tools",
        description:
            "Comprehensive planning suite for retirement, education, emergency funds, and major financial milestones.",
        color: "from-purple-500 to-purple-600",
        stat: "10+ planning tools",
    },
];

export function FinancialTools() {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateInView className="text-center mb-16">
                    <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
                        Built-in Calculators
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] text-navy-900 mb-6">
                        Smart <span className="gradient-text">Financial Tools</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Powerful calculators and planning tools to help you make informed
                        financial decisions, all accessible within the app.
                    </p>
                </AnimateInView>

                <div className="grid sm:grid-cols-2 gap-6">
                    {tools.map((tool, index) => {
                        const Icon = tool.icon;
                        return (
                            <motion.div
                                key={tool.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/5 cursor-pointer"
                            >
                                <div className="flex items-start gap-5">
                                    <div
                                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <Icon size={24} className="text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-lg font-bold font-[var(--font-display)] text-navy-900">
                                                {tool.title}
                                            </h3>
                                            <ArrowRight
                                                size={18}
                                                className="text-gray-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all duration-300"
                                            />
                                        </div>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-3">
                                            {tool.description}
                                        </p>
                                        <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                                            {tool.stat}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
