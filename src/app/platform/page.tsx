"use client";

import { AnimateInView } from "@/components/AnimateInView";
import { ScoreMeter } from "@/components/ScoreMeter";
import { motion } from "framer-motion";
import {
    Activity,
    PieChart,
    LineChart,
    Target,
    Cpu,
    Database,
    BarChart3,
    Layers,
} from "lucide-react";

const platformSections = [
    {
        id: "score",
        icon: Activity,
        title: "Financial Health Score Engine",
        description:
            "Our proprietary scoring engine evaluates your complete financial picture using advanced algorithms. It analyzes your assets, liabilities, savings patterns, investment returns, and financial behavior to generate a comprehensive score that reflects your true financial health.",
        features: [
            "Multi-factor scoring algorithm",
            "Real-time score updates",
            "Historical score tracking",
            "Personalized improvement tips",
            "Benchmark against peers",
        ],
        color: "from-teal-400 to-teal-600",
        bgColor: "bg-teal-50",
    },
    {
        id: "analytics",
        icon: PieChart,
        title: "Portfolio Analytics",
        description:
            "Deep analytics on your investment portfolio with performance attribution, risk analysis, and comparison against market benchmarks. Understand what drives your returns and optimize your allocation strategy.",
        features: [
            "Asset-wise performance breakdown",
            "Risk-adjusted returns (Sharpe ratio)",
            "Sector & industry allocation",
            "Benchmark comparison",
            "Rebalancing recommendations",
        ],
        color: "from-blue-400 to-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        id: "insights",
        icon: LineChart,
        title: "Financial Data Insights",
        description:
            "Transform raw financial data into actionable insights. Our platform identifies patterns, trends, and opportunities across your financial life, helping you make data-driven decisions for better outcomes.",
        features: [
            "Spending pattern analysis",
            "Income growth tracking",
            "Net worth trend charts",
            "Cash flow forecasting",
            "Anomaly detection alerts",
        ],
        color: "from-purple-400 to-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        id: "goals",
        icon: Target,
        title: "Goal Planning Engine",
        description:
            "Set financial goals with intelligent milestones and get personalized roadmaps to achieve them. The engine adjusts recommendations based on your current financial health and market conditions.",
        features: [
            "Smart goal setting wizard",
            "Progress milestone tracking",
            "Dynamic roadmap adjustments",
            "Priority-based planning",
            "Achievement celebrations",
        ],
        color: "from-amber-400 to-amber-600",
        bgColor: "bg-amber-50",
    },
];

export default function PlatformPage() {
    return (
        <>
            {/* Hero */}
            <section className="gradient-bg-hero pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-400/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <AnimateInView className="text-center max-w-3xl mx-auto">
                        <span className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
                            Technology Platform
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-white mb-6">
                            The Engine Behind Your{" "}
                            <span className="gradient-text-teal">Financial Intelligence</span>
                        </h1>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Discover the powerful technology platform that processes your
                            financial data and delivers actionable insights to help you build
                            wealth.
                        </p>
                    </AnimateInView>

                    {/* Platform stats */}
                    <AnimateInView delay={0.3} className="mt-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { icon: Cpu, label: "AI-Powered", value: "Score Engine" },
                                { icon: Database, label: "Data Points", value: "200+" },
                                { icon: BarChart3, label: "Asset Classes", value: "15+" },
                                { icon: Layers, label: "Integrations", value: "50+" },
                            ].map((stat) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={stat.label}
                                        className="glass-card rounded-2xl p-6 text-center"
                                    >
                                        <Icon size={28} className="text-teal-400 mx-auto mb-3" />
                                        <div className="text-2xl font-bold text-white font-[var(--font-display)]">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </AnimateInView>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Platform Sections */}
            {platformSections.map((section, index) => {
                const Icon = section.icon;
                const isEven = index % 2 === 0;

                return (
                    <section
                        key={section.id}
                        id={section.id}
                        className={`section-padding ${isEven ? "bg-white" : "bg-gray-50/50"
                            }`}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div
                                className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:[direction:rtl]" : ""
                                    }`}
                            >
                                <AnimateInView
                                    direction={isEven ? "left" : "right"}
                                    className={!isEven ? "lg:[direction:ltr]" : ""}
                                >
                                    <div
                                        className={`w-16 h-16 rounded-2xl ${section.bgColor} flex items-center justify-center mb-6`}
                                    >
                                        <Icon size={30} className="text-navy-700" />
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-navy-900 mb-6">
                                        {section.title}
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        {section.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {section.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                                                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                                                </div>
                                                <span className="text-gray-700 font-medium">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </AnimateInView>

                                <AnimateInView
                                    direction={isEven ? "right" : "left"}
                                    className={!isEven ? "lg:[direction:ltr]" : ""}
                                >
                                    <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.08),transparent_70%)]" />
                                        <div className="relative">
                                            {index === 0 && (
                                                <div className="flex justify-center">
                                                    <ScoreMeter score={782} size={240} />
                                                </div>
                                            )}
                                            {index === 1 && (
                                                <div className="space-y-4">
                                                    <div className="text-white font-bold mb-4">Portfolio Distribution</div>
                                                    {[
                                                        { name: "Large Cap", pct: 35, color: "#3b82f6" },
                                                        { name: "Mid Cap", pct: 25, color: "#10b981" },
                                                        { name: "Small Cap", pct: 15, color: "#f59e0b" },
                                                        { name: "Debt", pct: 15, color: "#8b5cf6" },
                                                        { name: "Gold", pct: 10, color: "#ef4444" },
                                                    ].map((item) => (
                                                        <div key={item.name}>
                                                            <div className="flex justify-between text-sm mb-1">
                                                                <span className="text-gray-300">{item.name}</span>
                                                                <span className="text-white font-semibold">{item.pct}%</span>
                                                            </div>
                                                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                                                <motion.div
                                                                    initial={{ width: 0 }}
                                                                    whileInView={{ width: `${item.pct}%` }}
                                                                    viewport={{ once: true }}
                                                                    transition={{ duration: 1, delay: 0.2 }}
                                                                    className="h-full rounded-full"
                                                                    style={{ background: item.color }}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            {index === 2 && (
                                                <div>
                                                    <div className="text-white font-bold mb-4">Net Worth Trend</div>
                                                    <svg width="100%" height="160" viewBox="0 0 300 160">
                                                        <polyline points="0,140 40,120 80,125 120,100 160,85 200,70 240,55 280,30" fill="none" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" />
                                                        <polyline points="0,140 40,120 80,125 120,100 160,85 200,70 240,55 280,30 300,30 300,160 0,160" fill="url(#trendFill)" stroke="none" />
                                                        <defs>
                                                            <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="0%" stopColor="rgba(20,184,166,0.2)" />
                                                                <stop offset="100%" stopColor="rgba(20,184,166,0)" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                                                        <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
                                                    </div>
                                                </div>
                                            )}
                                            {index === 3 && (
                                                <div className="space-y-3">
                                                    <div className="text-white font-bold mb-4">Active Goals</div>
                                                    {[
                                                        { name: "Emergency Fund", pct: 75, target: "₹10L", color: "#10b981" },
                                                        { name: "Dream Home", pct: 44, target: "₹50L", color: "#3b82f6" },
                                                        { name: "Retirement", pct: 22, target: "₹2Cr", color: "#f59e0b" },
                                                        { name: "Child Education", pct: 35, target: "₹25L", color: "#8b5cf6" },
                                                    ].map((goal) => (
                                                        <div key={goal.name} className="bg-white/5 rounded-xl p-3 border border-white/5">
                                                            <div className="flex justify-between text-sm mb-2">
                                                                <span className="text-gray-300">{goal.name}</span>
                                                                <span className="text-gray-400 text-xs">Target: {goal.target}</span>
                                                            </div>
                                                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                                                <motion.div initial={{ width: 0 }} whileInView={{ width: `${goal.pct}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full rounded-full" style={{ background: goal.color }} />
                                                            </div>
                                                            <div className="text-right mt-1">
                                                                <span className="text-xs font-semibold" style={{ color: goal.color }}>{goal.pct}%</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </AnimateInView>
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    );
}
