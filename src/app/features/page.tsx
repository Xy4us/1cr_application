"use client";

import { AnimateInView } from "@/components/AnimateInView";
import { PhoneMockup } from "@/components/PhoneMockup";
import { motion } from "framer-motion";
import {
    Activity,
    PieChart,
    TrendingUp,
    CreditCard,
    GitBranch,
    Calculator,
    Target,
    BarChart3,
} from "lucide-react";

const features = [
    {
        id: "health-score",
        icon: Activity,
        title: "Financial Health Score",
        description:
            "Get a comprehensive assessment of your complete financial well-being with our proprietary scoring engine. The score evaluates your assets, savings, investments, debt ratio, income stability, and financial behavior.",
        highlights: ["Multi-factor analysis", "Real-time updates", "Peer benchmarking", "Improvement roadmap"],
        screen: (
            <div className="w-full h-full bg-gradient-to-b from-[#0a1628] to-[#0f1d45] p-4 pt-10">
                <div className="text-center mb-3">
                    <div className="text-[10px] text-teal-400">Your Score</div>
                    <div className="text-3xl font-bold text-white">782</div>
                    <div className="text-[10px] text-emerald-400">Excellent</div>
                </div>
                <svg width="100%" height="80" viewBox="0 0 200 100">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="16" strokeDasharray="251" strokeDashoffset="-125.5" />
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#14b8a6" strokeWidth="16" strokeLinecap="round" strokeDasharray="218" strokeDashoffset="-125.5" />
                </svg>
                <div className="grid grid-cols-2 gap-1.5 mt-2">
                    {[{ l: "Assets", v: "85%" }, { l: "Savings", v: "72%" }, { l: "Invest", v: "90%" }, { l: "Debt", v: "65%" }].map(i => (
                        <div key={i.l} className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                            <div className="text-[9px] text-gray-400">{i.l}</div>
                            <div className="text-xs font-bold text-white">{i.v}</div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "portfolio",
        icon: PieChart,
        title: "Portfolio Tracking",
        description:
            "Track your entire investment portfolio in one place. Monitor performance across mutual funds, stocks, bonds, and alternative investments with detailed analytics and visualizations.",
        highlights: ["Multi-asset tracking", "Performance analytics", "Allocation views", "Returns analysis"],
        screen: (
            <div className="w-full h-full bg-gradient-to-b from-[#0a1628] to-[#0f1d45] p-4 pt-10">
                <div className="text-[10px] text-teal-400">Portfolio Value</div>
                <div className="text-2xl font-bold text-white">₹62.4L</div>
                <div className="text-[10px] text-emerald-400 mb-3">↑ 18.5% YTD</div>
                <div className="flex justify-center mb-3">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="10" strokeDasharray="80 171" transform="rotate(-90 50 50)" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="10" strokeDasharray="63 188" strokeDashoffset="-80" transform="rotate(-90 50 50)" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="10" strokeDasharray="50 201" strokeDashoffset="-143" transform="rotate(-90 50 50)" />
                    </svg>
                </div>
                <div className="space-y-1.5">
                    {[{ n: "Equity", v: "₹32L", c: "#3b82f6" }, { n: "Debt", v: "₹20L", c: "#10b981" }, { n: "Gold", v: "₹10L", c: "#f59e0b" }].map(i => (
                        <div key={i.n} className="flex items-center justify-between bg-white/5 rounded p-2 border border-white/5">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full" style={{ background: i.c }} />
                                <span className="text-[10px] text-gray-300">{i.n}</span>
                            </div>
                            <span className="text-[10px] font-bold text-white">{i.v}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "net-worth",
        icon: TrendingUp,
        title: "Net Worth Analytics",
        description:
            "Monitor your net worth in real-time with comprehensive analytics. Track how your wealth grows over time and understand the components driving your financial progress.",
        highlights: ["Real-time calculation", "Growth visualization", "Component breakdown", "Historical trends"],
        screen: (
            <div className="w-full h-full bg-gradient-to-b from-[#0a1628] to-[#0f1d45] p-4 pt-10">
                <div className="text-[10px] text-teal-400">Net Worth</div>
                <div className="text-2xl font-bold text-white">₹1.12 Cr</div>
                <div className="text-[10px] text-emerald-400 mb-3">↑ 24.3% YoY</div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/5 mb-3">
                    <svg width="100%" height="50" viewBox="0 0 200 50">
                        <polyline points="0,45 30,38 60,40 90,30 120,25 150,18 180,12 200,5" fill="none" stroke="#14b8a6" strokeWidth="2" />
                        <polyline points="0,45 30,38 60,40 90,30 120,25 150,18 180,12 200,5 200,50 0,50" fill="url(#nwf)" stroke="none" />
                        <defs><linearGradient id="nwf" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="rgba(20,184,166,0.25)" /><stop offset="100%" stopColor="rgba(20,184,166,0)" /></linearGradient></defs>
                    </svg>
                </div>
                <div className="space-y-1.5">
                    {[{ l: "Assets", v: "₹1.24Cr", c: "text-emerald-400" }, { l: "Liabilities", v: "-₹12.8L", c: "text-red-400" }].map(i => (
                        <div key={i.l} className="flex justify-between bg-white/5 rounded p-2 border border-white/5">
                            <span className="text-[10px] text-gray-400">{i.l}</span>
                            <span className={`text-[10px] font-bold ${i.c}`}>{i.v}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "debt",
        icon: CreditCard,
        title: "Debt Management",
        description:
            "Take control of your liabilities with smart debt management tools. Track all loans, visualize payoff timelines, compare strategies, and optimize your repayment to minimize interest costs.",
        highlights: ["All loans in one view", "Payoff strategies", "Interest savings calc", "EMI optimization"],
        screen: (
            <div className="w-full h-full bg-gradient-to-b from-[#0a1628] to-[#0f1d45] p-4 pt-10">
                <div className="text-[10px] text-teal-400">Total Debt</div>
                <div className="text-2xl font-bold text-white">₹12.8L</div>
                <div className="text-[10px] text-emerald-400 mb-3">↓ 15% from last year</div>
                <div className="space-y-2">
                    {[
                        { n: "Home Loan", v: "₹8.5L", p: 68 },
                        { n: "Car Loan", v: "₹3.2L", p: 45 },
                        { n: "Credit Card", v: "₹1.1L", p: 82 },
                    ].map(i => (
                        <div key={i.n} className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                            <div className="flex justify-between mb-1">
                                <span className="text-[10px] text-gray-300">{i.n}</span>
                                <span className="text-[10px] font-bold text-white">{i.v}</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-teal-500 rounded-full" style={{ width: `${i.p}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "scenario",
        icon: GitBranch,
        title: "Scenario Analysis",
        description:
            "Make data-driven decisions by analyzing 'what-if' scenarios before committing. Model the impact of major financial decisions on your overall wealth and financial health score.",
        highlights: ["What-if modeling", "Score impact preview", "Multi-scenario compare", "Decision confidence"],
        screen: (
            <div className="w-full h-full bg-gradient-to-b from-[#0a1628] to-[#0f1d45] p-4 pt-10">
                <div className="text-[10px] text-teal-400">Scenario Analysis</div>
                <div className="text-lg font-bold text-white mb-3">What If...</div>
                <div className="space-y-2">
                    {[
                        { q: "Pay loan early?", s: "+45 pts", w: "Save ₹4.2L" },
                        { q: "Increase SIP 20%?", s: "+28 pts", w: "+₹28L in 10yr" },
                        { q: "Buy property?", s: "-15 pts", w: "₹35K/mo rental" },
                    ].map(i => (
                        <div key={i.q} className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                            <div className="text-xs text-white font-medium mb-1">{i.q}</div>
                            <div className="flex gap-2">
                                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">{i.s}</span>
                                <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">{i.w}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "tools",
        icon: Calculator,
        title: "Financial Tools",
        description:
            "Access a comprehensive suite of financial calculators and planning tools. From EMI calculations to retirement planning, get the tools you need to make informed decisions.",
        highlights: ["EMI Calculator", "SIP Calculator", "Future Value Projector", "Loan Planner"],
        screen: (
            <div className="w-full h-full bg-gradient-to-b from-[#0a1628] to-[#0f1d45] p-4 pt-10">
                <div className="text-[10px] text-teal-400">Financial Tools</div>
                <div className="text-lg font-bold text-white mb-3">Calculators</div>
                <div className="grid grid-cols-2 gap-2">
                    {[
                        { n: "EMI", i: "💰", v: "₹22,456" },
                        { n: "SIP Returns", i: "📈", v: "₹1.2Cr" },
                        { n: "Future Value", i: "🎯", v: "₹85L" },
                        { n: "Loan Plan", i: "🏦", v: "7.2%" },
                    ].map(i => (
                        <div key={i.n} className="bg-white/5 rounded-xl p-3 border border-white/5 text-center">
                            <div className="text-2xl mb-1">{i.i}</div>
                            <div className="text-[10px] text-gray-400">{i.n}</div>
                            <div className="text-xs font-bold text-white mt-0.5">{i.v}</div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
];

export default function FeaturesPage() {
    return (
        <>
            {/* Hero */}
            <section className="gradient-bg-hero pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <AnimateInView className="text-center max-w-3xl mx-auto">
                        <span className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
                            App Features
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-white mb-6">
                            Everything You Need for{" "}
                            <span className="gradient-text-teal">Financial Clarity</span>
                        </h1>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Explore the powerful features of the 1Cr Club mobile application
                            designed to give you complete control over your financial life.
                        </p>
                    </AnimateInView>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Features */}
            {features.map((feature, index) => {
                const Icon = feature.icon;
                const isEven = index % 2 === 0;

                return (
                    <section
                        key={feature.id}
                        id={feature.id}
                        className={`section-padding ${isEven ? "bg-white" : "bg-gray-50/50"}`}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                                <AnimateInView direction={isEven ? "left" : "right"} className={!isEven ? "lg:order-2" : ""}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                                            <Icon size={24} className="text-teal-600" />
                                        </div>
                                        <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                                            Feature
                                        </span>
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-navy-900 mb-6">
                                        {feature.title}
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        {feature.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {feature.highlights.map((h) => (
                                            <div key={h} className="flex items-center gap-2">
                                                <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                                                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                                                </div>
                                                <span className="text-sm text-gray-700 font-medium">{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </AnimateInView>

                                <AnimateInView direction={isEven ? "right" : "left"} className={`flex justify-center ${!isEven ? "lg:order-1" : ""}`}>
                                    <PhoneMockup>
                                        {feature.screen}
                                    </PhoneMockup>
                                </AnimateInView>
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    );
}
