"use client";

import { AnimateInView } from "@/components/AnimateInView";
import { motion } from "framer-motion";
import { useState } from "react";
import {
    Calculator,
    TrendingUp,
    DollarSign,
    Home,
} from "lucide-react";

function EMICalculator() {
    const [principal, setPrincipal] = useState(2500000);
    const [rate, setRate] = useState(8.5);
    const [tenure, setTenure] = useState(20);

    const r = rate / 12 / 100;
    const n = tenure * 12;
    const emi = principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - principal;

    return (
        <div className="space-y-6">
            <div>
                <label className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">Loan Amount</span>
                    <span className="text-navy-900 font-bold">₹{(principal / 100000).toFixed(1)}L</span>
                </label>
                <input type="range" min={100000} max={10000000} step={100000} value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="w-full accent-teal-500" />
            </div>
            <div>
                <label className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">Interest Rate</span>
                    <span className="text-navy-900 font-bold">{rate}%</span>
                </label>
                <input type="range" min={5} max={20} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-teal-500" />
            </div>
            <div>
                <label className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">Tenure</span>
                    <span className="text-navy-900 font-bold">{tenure} years</span>
                </label>
                <input type="range" min={1} max={30} step={1} value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full accent-teal-500" />
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Monthly EMI</div>
                    <div className="text-lg font-bold text-navy-900">₹{Math.round(emi).toLocaleString()}</div>
                </div>
                <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Total Interest</div>
                    <div className="text-lg font-bold text-red-500">₹{(totalInterest / 100000).toFixed(1)}L</div>
                </div>
                <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Total Amount</div>
                    <div className="text-lg font-bold text-teal-600">₹{(totalAmount / 100000).toFixed(1)}L</div>
                </div>
            </div>
        </div>
    );
}

function SIPCalculator() {
    const [monthly, setMonthly] = useState(10000);
    const [returnRate, setReturnRate] = useState(12);
    const [years, setYears] = useState(15);

    const r = returnRate / 12 / 100;
    const n = years * 12;
    const futureValue = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const invested = monthly * n;
    const earnings = futureValue - invested;

    return (
        <div className="space-y-6">
            <div>
                <label className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">Monthly SIP</span>
                    <span className="text-navy-900 font-bold">₹{monthly.toLocaleString()}</span>
                </label>
                <input type="range" min={500} max={100000} step={500} value={monthly} onChange={(e) => setMonthly(Number(e.target.value))} className="w-full accent-teal-500" />
            </div>
            <div>
                <label className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">Expected Return</span>
                    <span className="text-navy-900 font-bold">{returnRate}% p.a.</span>
                </label>
                <input type="range" min={4} max={25} step={0.5} value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))} className="w-full accent-teal-500" />
            </div>
            <div>
                <label className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">Time Period</span>
                    <span className="text-navy-900 font-bold">{years} years</span>
                </label>
                <input type="range" min={1} max={30} step={1} value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-teal-500" />
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Invested</div>
                    <div className="text-lg font-bold text-navy-900">₹{(invested / 100000).toFixed(1)}L</div>
                </div>
                <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Earnings</div>
                    <div className="text-lg font-bold text-emerald-500">₹{(earnings / 100000).toFixed(1)}L</div>
                </div>
                <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Total Value</div>
                    <div className="text-lg font-bold text-teal-600">₹{(futureValue / 100000).toFixed(1)}L</div>
                </div>
            </div>
        </div>
    );
}

function FutureValueCalculator() {
    const [lumpsum, setLumpsum] = useState(500000);
    const [returnRate, setReturnRate] = useState(10);
    const [years, setYears] = useState(10);
    const [inflation, setInflation] = useState(6);

    const fv = lumpsum * Math.pow(1 + returnRate / 100, years);
    const realReturn = ((1 + returnRate / 100) / (1 + inflation / 100) - 1) * 100;
    const realFv = lumpsum * Math.pow(1 + realReturn / 100, years);

    return (
        <div className="space-y-6">
            <div>
                <label className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">Investment Amount</span>
                    <span className="text-navy-900 font-bold">₹{(lumpsum / 100000).toFixed(1)}L</span>
                </label>
                <input type="range" min={10000} max={5000000} step={10000} value={lumpsum} onChange={(e) => setLumpsum(Number(e.target.value))} className="w-full accent-teal-500" />
            </div>
            <div>
                <label className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">Expected Return</span>
                    <span className="text-navy-900 font-bold">{returnRate}% p.a.</span>
                </label>
                <input type="range" min={4} max={25} step={0.5} value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))} className="w-full accent-teal-500" />
            </div>
            <div>
                <label className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">Time Period</span>
                    <span className="text-navy-900 font-bold">{years} years</span>
                </label>
                <input type="range" min={1} max={30} step={1} value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-teal-500" />
            </div>
            <div>
                <label className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">Inflation Rate</span>
                    <span className="text-navy-900 font-bold">{inflation}%</span>
                </label>
                <input type="range" min={2} max={12} step={0.5} value={inflation} onChange={(e) => setInflation(Number(e.target.value))} className="w-full accent-teal-500" />
            </div>
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Nominal Value</div>
                    <div className="text-lg font-bold text-navy-900">₹{(fv / 100000).toFixed(1)}L</div>
                </div>
                <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Real Value (adj.)</div>
                    <div className="text-lg font-bold text-teal-600">₹{(realFv / 100000).toFixed(1)}L</div>
                </div>
            </div>
        </div>
    );
}

function LoanPlanningTool() {
    const [loanAmount, setLoanAmount] = useState(5000000);
    const [rate, setRate] = useState(9);
    const [tenure, setTenure] = useState(20);
    const [extraEmi, setExtraEmi] = useState(5000);

    const r = rate / 12 / 100;
    const n = tenure * 12;
    const normalEmi = loanAmount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const normalTotal = normalEmi * n;
    const totalWithExtra = normalEmi + extraEmi;

    let balance = loanAmount;
    let months = 0;
    while (balance > 0 && months < n) {
        const interest = balance * r;
        const principalPaid = totalWithExtra - interest;
        balance -= principalPaid;
        months++;
        if (balance < 0) balance = 0;
    }
    const savedMonths = n - months;
    const savedInterest = normalTotal - (totalWithExtra * months);

    return (
        <div className="space-y-6">
            <div>
                <label className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">Loan Amount</span>
                    <span className="text-navy-900 font-bold">₹{(loanAmount / 100000).toFixed(0)}L</span>
                </label>
                <input type="range" min={500000} max={20000000} step={100000} value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full accent-teal-500" />
            </div>
            <div>
                <label className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">Interest Rate</span>
                    <span className="text-navy-900 font-bold">{rate}%</span>
                </label>
                <input type="range" min={5} max={18} step={0.25} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-teal-500" />
            </div>
            <div>
                <label className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">Extra Monthly Payment</span>
                    <span className="text-navy-900 font-bold">₹{extraEmi.toLocaleString()}</span>
                </label>
                <input type="range" min={0} max={50000} step={1000} value={extraEmi} onChange={(e) => setExtraEmi(Number(e.target.value))} className="w-full accent-teal-500" />
            </div>
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                <div className="text-center bg-emerald-50 rounded-xl p-3">
                    <div className="text-xs text-gray-500 mb-1">Time Saved</div>
                    <div className="text-lg font-bold text-emerald-600">{Math.round(savedMonths / 12)} yr {savedMonths % 12} mo</div>
                </div>
                <div className="text-center bg-teal-50 rounded-xl p-3">
                    <div className="text-xs text-gray-500 mb-1">Interest Saved</div>
                    <div className="text-lg font-bold text-teal-600">₹{Math.max(0, savedInterest / 100000).toFixed(1)}L</div>
                </div>
            </div>
        </div>
    );
}

const toolsData = [
    {
        id: "emi",
        icon: Calculator,
        title: "EMI Calculator",
        description: "Calculate Equated Monthly Installments for any loan type.",
        component: <EMICalculator />,
        color: "from-blue-400 to-blue-600",
    },
    {
        id: "sip",
        icon: TrendingUp,
        title: "SIP Calculator",
        description: "Project your wealth growth through systematic investments.",
        component: <SIPCalculator />,
        color: "from-emerald-400 to-emerald-600",
    },
    {
        id: "future-value",
        icon: DollarSign,
        title: "Future Value Calculator",
        description: "Calculate the inflation-adjusted future value of investments.",
        component: <FutureValueCalculator />,
        color: "from-amber-400 to-amber-600",
    },
    {
        id: "loan",
        icon: Home,
        title: "Loan Planning Tool",
        description: "See how extra payments can save you years of loan tenure.",
        component: <LoanPlanningTool />,
        color: "from-purple-400 to-purple-600",
    },
];

export default function ToolsPage() {
    const [activeTool, setActiveTool] = useState(0);

    return (
        <>
            {/* Hero */}
            <section className="gradient-bg-hero pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <AnimateInView className="text-center max-w-3xl mx-auto">
                        <span className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
                            Financial Calculators
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-white mb-6">
                            Smart <span className="gradient-text-teal">Financial Tools</span>
                        </h1>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Powerful calculators to help you plan, project, and make informed financial decisions.
                        </p>
                    </AnimateInView>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Tools Section */}
            <section className="section-padding bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Tool Tabs */}
                    <AnimateInView>
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {toolsData.map((tool, index) => {
                                const Icon = tool.icon;
                                return (
                                    <button
                                        key={tool.id}
                                        onClick={() => setActiveTool(index)}
                                        className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTool === index
                                                ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/25"
                                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                            }`}
                                    >
                                        <Icon size={18} />
                                        {tool.title}
                                    </button>
                                );
                            })}
                        </div>
                    </AnimateInView>

                    {/* Active Tool */}
                    <motion.div
                        key={activeTool}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl shadow-black/5"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            {(() => {
                                const Icon = toolsData[activeTool].icon;
                                return (
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${toolsData[activeTool].color} flex items-center justify-center`}>
                                        <Icon size={22} className="text-white" />
                                    </div>
                                );
                            })()}
                            <div>
                                <h2 className="text-xl font-bold font-[var(--font-display)] text-navy-900">
                                    {toolsData[activeTool].title}
                                </h2>
                                <p className="text-sm text-gray-500">
                                    {toolsData[activeTool].description}
                                </p>
                            </div>
                        </div>
                        {toolsData[activeTool].component}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
