"use client";

import { useState } from "react";
import { AnimateInView } from "@/components/AnimateInView";
import { PhoneMockup } from "@/components/PhoneMockup";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity,
    PieChart,
    BarChart3,
    CreditCard,
    Target,
    GitBranch,
} from "lucide-react";

const appScreens = [
    {
        id: "health-score",
        label: "Health Score",
        icon: Activity,
        screen: (
            <div className="w-full h-full bg-gradient-to-b from-[#0a1628] to-[#0f1d45] p-5 pt-10">
                <div className="text-center mb-3">
                    <div className="text-xs text-teal-400 mb-1">Financial Health Score</div>
                    <div className="text-3xl font-bold text-white">782</div>
                </div>
                <div className="flex justify-center mb-4">
                    <svg width="140" height="140" viewBox="0 0 140 140">
                        <circle cx="70" cy="70" r="58" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
                        <circle cx="70" cy="70" r="58" fill="none" stroke="#14b8a6" strokeWidth="10" strokeLinecap="round" strokeDasharray="364" strokeDashoffset="60" transform="rotate(-90 70 70)" />
                    </svg>
                </div>
                <div className="space-y-2">
                    {[
                        { l: "Assets", v: "85%", c: "#10b981" },
                        { l: "Savings", v: "72%", c: "#14b8a6" },
                        { l: "Investments", v: "90%", c: "#3b82f6" },
                        { l: "Debt Ratio", v: "65%", c: "#f59e0b" },
                    ].map((item) => (
                        <div key={item.l} className="bg-white/5 rounded-lg p-2.5 flex items-center justify-between border border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ background: item.c }} />
                                <span className="text-xs text-gray-400">{item.l}</span>
                            </div>
                            <span className="text-xs font-bold text-white">{item.v}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "portfolio",
        label: "Portfolio",
        icon: PieChart,
        screen: (
            <div className="w-full h-full bg-gradient-to-b from-[#0a1628] to-[#0f1d45] p-5 pt-10">
                <div className="text-xs text-teal-400 mb-1">Investment Portfolio</div>
                <div className="text-2xl font-bold text-white mb-1">₹62,40,000</div>
                <div className="text-xs text-emerald-400 mb-4">↑ 18.5% this year</div>
                <div className="flex justify-center mb-4">
                    <svg width="120" height="120" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#3b82f6" strokeWidth="12" strokeDasharray="100 214" transform="rotate(-90 60 60)" />
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#10b981" strokeWidth="12" strokeDasharray="80 234" strokeDashoffset="-100" transform="rotate(-90 60 60)" />
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#f59e0b" strokeWidth="12" strokeDasharray="60 254" strokeDashoffset="-180" transform="rotate(-90 60 60)" />
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#8b5cf6" strokeWidth="12" strokeDasharray="74 240" strokeDashoffset="-240" transform="rotate(-90 60 60)" />
                    </svg>
                </div>
                <div className="space-y-2">
                    {[
                        { name: "Mutual Funds", val: "₹28L", pct: "45%", color: "#3b82f6" },
                        { name: "Stocks", val: "₹18L", pct: "29%", color: "#10b981" },
                        { name: "Gold", val: "₹10L", pct: "16%", color: "#f59e0b" },
                        { name: "Crypto", val: "₹6L", pct: "10%", color: "#8b5cf6" },
                    ].map((item) => (
                        <div key={item.name} className="flex items-center justify-between bg-white/5 rounded-lg p-2 border border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                                <span className="text-xs text-gray-300">{item.name}</span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-semibold text-white">{item.val}</span>
                                <span className="text-[10px] text-gray-500 ml-1">{item.pct}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "assets",
        label: "Assets",
        icon: BarChart3,
        screen: (
            <div className="w-full h-full bg-gradient-to-b from-[#0a1628] to-[#0f1d45] p-5 pt-10">
                <div className="text-xs text-teal-400 mb-1">Total Assets</div>
                <div className="text-2xl font-bold text-white mb-1">₹1,24,00,000</div>
                <div className="text-xs text-emerald-400 mb-4">↑ 24.3% from last year</div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/5 mb-3">
                    <div className="text-[10px] text-gray-400 mb-2">Asset Growth</div>
                    <svg width="100%" height="60" viewBox="0 0 220 60">
                        <polyline points="0,55 35,45 70,48 105,35 140,28 175,20 210,10" fill="none" stroke="#14b8a6" strokeWidth="2.5" />
                        <polyline points="0,55 35,45 70,48 105,35 140,28 175,20 210,10 210,60 0,60" fill="url(#assetFill)" stroke="none" />
                        <defs>
                            <linearGradient id="assetFill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="rgba(20,184,166,0.25)" />
                                <stop offset="100%" stopColor="rgba(20,184,166,0)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="space-y-2">
                    {[
                        { name: "Real Estate", val: "₹55L", icon: "🏠" },
                        { name: "Investments", val: "₹42L", icon: "📈" },
                        { name: "Savings", val: "₹18L", icon: "💰" },
                        { name: "Gold & Others", val: "₹9L", icon: "✨" },
                    ].map((item) => (
                        <div key={item.name} className="flex items-center justify-between bg-white/5 rounded-lg p-2.5 border border-white/5">
                            <div className="flex items-center gap-2">
                                <span className="text-sm">{item.icon}</span>
                                <span className="text-xs text-gray-300">{item.name}</span>
                            </div>
                            <span className="text-xs font-bold text-white">{item.val}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "liabilities",
        label: "Liabilities",
        icon: CreditCard,
        screen: (
            <div className="w-full h-full bg-gradient-to-b from-[#0a1628] to-[#0f1d45] p-5 pt-10">
                <div className="text-xs text-teal-400 mb-1">Total Liabilities</div>
                <div className="text-2xl font-bold text-white mb-1">₹12,80,000</div>
                <div className="text-xs text-emerald-400 mb-4">↓ 15% from last year</div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/5 mb-3">
                    <div className="text-[10px] text-gray-400 mb-2">Debt Payoff Progress</div>
                    <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-[72%] bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full" />
                    </div>
                    <div className="flex justify-between mt-1">
                        <span className="text-[10px] text-gray-500">72% paid off</span>
                        <span className="text-[10px] text-gray-500">₹12.8L remaining</span>
                    </div>
                </div>
                <div className="space-y-2">
                    {[
                        { name: "Home Loan", val: "₹8.5L", emi: "₹22K/mo", pct: 68 },
                        { name: "Car Loan", val: "₹3.2L", emi: "₹15K/mo", pct: 45 },
                        { name: "Credit Card", val: "₹1.1L", emi: "₹8K/mo", pct: 82 },
                    ].map((item) => (
                        <div key={item.name} className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                            <div className="flex justify-between mb-1">
                                <span className="text-xs text-gray-300">{item.name}</span>
                                <span className="text-xs font-bold text-white">{item.val}</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-teal-500 rounded-full" style={{ width: `${item.pct}%` }} />
                            </div>
                            <div className="text-[10px] text-gray-500 mt-1">EMI: {item.emi}</div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "goals",
        label: "Goals",
        icon: Target,
        screen: (
            <div className="w-full h-full bg-gradient-to-b from-[#0a1628] to-[#0f1d45] p-5 pt-10">
                <div className="text-xs text-teal-400 mb-1">Financial Goals</div>
                <div className="text-lg font-bold text-white mb-4">3 Active Goals</div>
                <div className="space-y-3">
                    {[
                        { name: "Emergency Fund", target: "₹10L", current: "₹7.5L", pct: 75, icon: "🛡️", color: "#10b981" },
                        { name: "Dream Home", target: "₹50L", current: "₹22L", pct: 44, icon: "🏠", color: "#3b82f6" },
                        { name: "Retirement", target: "₹2Cr", current: "₹45L", pct: 22, icon: "🌅", color: "#f59e0b" },
                    ].map((goal) => (
                        <div key={goal.name} className="bg-white/5 rounded-xl p-3 border border-white/5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-lg">{goal.icon}</span>
                                <div>
                                    <div className="text-xs font-semibold text-white">{goal.name}</div>
                                    <div className="text-[10px] text-gray-500">Target: {goal.target}</div>
                                </div>
                            </div>
                            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-1">
                                <div className="h-full rounded-full transition-all" style={{ width: `${goal.pct}%`, background: goal.color }} />
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[10px] text-gray-400">{goal.current} saved</span>
                                <span className="text-[10px] font-semibold" style={{ color: goal.color }}>{goal.pct}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "scenarios",
        label: "Scenarios",
        icon: GitBranch,
        screen: (
            <div className="w-full h-full bg-gradient-to-b from-[#0a1628] to-[#0f1d45] p-5 pt-10">
                <div className="text-xs text-teal-400 mb-1">Scenario Analysis</div>
                <div className="text-lg font-bold text-white mb-4">What If...</div>
                <div className="space-y-3">
                    <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                        <div className="text-xs font-semibold text-white mb-2">Pay off home loan early</div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="text-center bg-white/5 rounded-lg p-2">
                                <div className="text-[10px] text-gray-400">Save Interest</div>
                                <div className="text-sm font-bold text-emerald-400">₹4.2L</div>
                            </div>
                            <div className="text-center bg-white/5 rounded-lg p-2">
                                <div className="text-[10px] text-gray-400">Score Impact</div>
                                <div className="text-sm font-bold text-emerald-400">+45 pts</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                        <div className="text-xs font-semibold text-white mb-2">Increase SIP by 20%</div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="text-center bg-white/5 rounded-lg p-2">
                                <div className="text-[10px] text-gray-400">Extra Wealth</div>
                                <div className="text-sm font-bold text-blue-400">₹28L</div>
                            </div>
                            <div className="text-center bg-white/5 rounded-lg p-2">
                                <div className="text-[10px] text-gray-400">In 10 Years</div>
                                <div className="text-sm font-bold text-blue-400">₹1.8Cr</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                        <div className="text-xs font-semibold text-white mb-2">Buy investment property</div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="text-center bg-white/5 rounded-lg p-2">
                                <div className="text-[10px] text-gray-400">Rental Income</div>
                                <div className="text-sm font-bold text-amber-400">₹35K/mo</div>
                            </div>
                            <div className="text-center bg-white/5 rounded-lg p-2">
                                <div className="text-[10px] text-gray-400">ROI</div>
                                <div className="text-sm font-bold text-amber-400">8.2%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
];

export function MobileAppExperience() {
    const [activeScreen, setActiveScreen] = useState(0);

    return (
        <section className="section-padding gradient-bg-dark relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-400/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <AnimateInView className="text-center mb-16">
                    <span className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
                        App Experience
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] text-white mb-6">
                        Powerful Financial Insights,{" "}
                        <span className="gradient-text-teal">Right in Your Pocket</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Experience the full power of financial intelligence through our
                        beautifully designed mobile application.
                    </p>
                </AnimateInView>

                {/* Tab navigation */}
                <AnimateInView delay={0.2}>
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {appScreens.map((screen, index) => {
                            const Icon = screen.icon;
                            return (
                                <button
                                    key={screen.id}
                                    onClick={() => setActiveScreen(index)}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeScreen === index
                                            ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
                                        }`}
                                >
                                    <Icon size={16} />
                                    {screen.label}
                                </button>
                            );
                        })}
                    </div>
                </AnimateInView>

                {/* Phone mockup with active screen */}
                <div className="flex justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeScreen}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                        >
                            <PhoneMockup>
                                {appScreens[activeScreen].screen}
                            </PhoneMockup>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
