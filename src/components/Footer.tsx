import Link from "next/link";
import {
    Mail,
    MapPin,
    Phone,
    ArrowRight,
} from "lucide-react";

const footerLinks = {
    Platform: [
        { name: "Financial Health Score", href: "/platform#score" },
        { name: "Portfolio Analytics", href: "/platform#analytics" },
        { name: "Data Insights", href: "/platform#insights" },
        { name: "Goal Planning", href: "/platform#goals" },
    ],
    Features: [
        { name: "Net Worth Tracking", href: "/features#net-worth" },
        { name: "Portfolio Tracking", href: "/features#portfolio" },
        { name: "Debt Management", href: "/features#debt" },
        { name: "Scenario Analysis", href: "/features#scenario" },
    ],
    Tools: [
        { name: "EMI Calculator", href: "/tools#emi" },
        { name: "SIP Calculator", href: "/tools#sip" },
        { name: "Future Value", href: "/tools#future-value" },
        { name: "Loan Planner", href: "/tools#loan" },
    ],
    Resources: [
        { name: "Articles", href: "/resources#articles" },
        { name: "Financial Guides", href: "/resources#guides" },
        { name: "Investment Insights", href: "/resources#insights" },
        { name: "Planning Tips", href: "/resources#tips" },
    ],
    Company: [
        { name: "About Us", href: "/company#about" },
        { name: "Mission", href: "/company#mission" },
        { name: "Careers", href: "/company#careers" },
        { name: "Contact", href: "/company#contact" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-navy-950 text-white relative overflow-hidden">
            {/* Subtle gradient orb */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-teal-500/5 to-transparent rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Newsletter Section */}
                <div className="py-16 border-b border-white/10">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl font-bold font-[var(--font-display)] mb-2">
                                Stay financially informed
                            </h3>
                            <p className="text-gray-400 max-w-md">
                                Get expert financial insights, tips, and updates delivered to
                                your inbox weekly.
                            </p>
                        </div>
                        <div className="flex w-full lg:w-auto gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 lg:w-80 px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/25 transition-all"
                            />
                            <button className="px-6 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all flex items-center gap-2 whitespace-nowrap">
                                Subscribe
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-4">
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <span className="text-lg font-bold font-[var(--font-display)]">
                            1Cr Club
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                        <Link
                            href="/privacy"
                            className="hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link
                            href="/contact"
                            className="hover:text-white transition-colors"
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <div className="flex items-center gap-2">
                            <Mail size={14} />
                            <span>hello@1crclub.com</span>
                        </div>
                    </div>
                </div>

                <div className="pb-8 text-center text-xs text-gray-600">
                    © {new Date().getFullYear()} 1Cr Club. All rights reserved. |
                    Financial Intelligence Platform
                </div>
            </div>
        </footer>
    );
}
