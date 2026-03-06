"use client";

import { AnimateInView } from "@/components/AnimateInView";
import { motion } from "framer-motion";
import {
    BookOpen,
    TrendingUp,
    Lightbulb,
    GraduationCap,
    ArrowRight,
    Clock,
    Tag,
} from "lucide-react";

const categories = [
    { name: "All", count: 12 },
    { name: "Financial Health", count: 4 },
    { name: "Investing", count: 3 },
    { name: "Planning", count: 3 },
    { name: "Wealth Building", count: 2 },
];

const articles = [
    {
        title: "How to Improve Your Financial Health Score",
        category: "Financial Health",
        readTime: "5 min read",
        excerpt: "Discover the top strategies to boost your financial health score. From reducing debt ratios to building emergency funds, learn the proven methods.",
        gradient: "from-teal-500 to-emerald-500",
        featured: true,
    },
    {
        title: "Understanding Asset Allocation Strategy",
        category: "Investing",
        readTime: "7 min read",
        excerpt: "Learn how to build a diversified asset allocation that matches your risk profile, time horizon, and financial goals.",
        gradient: "from-blue-500 to-indigo-500",
        featured: true,
    },
    {
        title: "Financial Planning for Entrepreneurs",
        category: "Planning",
        readTime: "6 min read",
        excerpt: "Essential financial planning tips every startup founder and SME owner needs to know for building wealth while growing a business.",
        gradient: "from-purple-500 to-pink-500",
        featured: false,
    },
    {
        title: "Building Long-Term Wealth: A Complete Guide",
        category: "Wealth Building",
        readTime: "8 min read",
        excerpt: "Master the principles of long-term wealth creation through systematic investing, compounding, and financial discipline.",
        gradient: "from-amber-500 to-orange-500",
        featured: false,
    },
    {
        title: "The Power of Compound Interest",
        category: "Investing",
        readTime: "4 min read",
        excerpt: "Understanding why Einstein called compound interest the eighth wonder of the world and how to harness it for wealth building.",
        gradient: "from-emerald-500 to-teal-500",
        featured: false,
    },
    {
        title: "Debt Management: Snowball vs Avalanche",
        category: "Financial Health",
        readTime: "6 min read",
        excerpt: "Compare the two most popular debt payoff strategies and find which one works best for your financial situation.",
        gradient: "from-red-500 to-rose-500",
        featured: false,
    },
    {
        title: "Emergency Fund: How Much Do You Need?",
        category: "Planning",
        readTime: "5 min read",
        excerpt: "Calculate the right emergency fund size for your lifestyle and learn the best strategies to build one quickly.",
        gradient: "from-cyan-500 to-blue-500",
        featured: false,
    },
    {
        title: "Tax-Saving Investment Options in India",
        category: "Investing",
        readTime: "7 min read",
        excerpt: "A comprehensive guide to Section 80C investments, tax-saving mutual funds, and other legal tax optimization strategies.",
        gradient: "from-green-500 to-emerald-500",
        featured: false,
    },
];

const guides = [
    {
        icon: BookOpen,
        title: "Beginner's Guide to Investing",
        description: "Everything you need to know to start your investment journey with confidence.",
        lessons: 12,
    },
    {
        icon: TrendingUp,
        title: "Portfolio Management 101",
        description: "Learn how to build, manage, and rebalance an investment portfolio.",
        lessons: 8,
    },
    {
        icon: Lightbulb,
        title: "Financial Literacy Masterclass",
        description: "Deep dive into financial concepts every adult should understand.",
        lessons: 15,
    },
    {
        icon: GraduationCap,
        title: "Retirement Planning Guide",
        description: "Plan for a comfortable retirement with actionable steps and calculations.",
        lessons: 10,
    },
];

export default function ResourcesPage() {
    return (
        <>
            {/* Hero */}
            <section className="gradient-bg-hero pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <AnimateInView className="text-center max-w-3xl mx-auto">
                        <span className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
                            Learning Resources
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-white mb-6">
                            Financial Knowledge{" "}
                            <span className="gradient-text-teal">Hub</span>
                        </h1>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Expert articles, comprehensive guides, and actionable insights to
                            help you build financial literacy and make smarter money decisions.
                        </p>
                    </AnimateInView>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Categories + Articles */}
            <section id="articles" className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimateInView>
                        <div className="flex flex-wrap gap-3 mb-12 justify-center">
                            {categories.map((cat, i) => (
                                <button
                                    key={cat.name}
                                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${i === 0
                                            ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                        }`}
                                >
                                    {cat.name}
                                    <span className="ml-2 text-xs opacity-70">({cat.count})</span>
                                </button>
                            ))}
                        </div>
                    </AnimateInView>

                    {/* Featured Articles */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {articles.filter(a => a.featured).map((article, index) => (
                            <motion.article
                                key={article.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                whileHover={{ y: -4 }}
                                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
                            >
                                <div className={`h-40 bg-gradient-to-br ${article.gradient} flex items-center justify-center`}>
                                    <BookOpen size={48} className="text-white/30" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">{article.category}</span>
                                        <div className="flex items-center gap-1 text-gray-400">
                                            <Clock size={12} />
                                            <span className="text-xs">{article.readTime}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold font-[var(--font-display)] text-navy-900 mb-3 group-hover:text-teal-600 transition-colors">{article.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                                    <div className="flex items-center gap-2 text-teal-600 text-sm font-semibold">
                                        Read Article <ArrowRight size={14} />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* More Articles */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {articles.filter(a => !a.featured).map((article, index) => (
                            <motion.article
                                key={article.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                whileHover={{ y: -4 }}
                                className="group bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
                            >
                                <div className={`h-2 rounded-full bg-gradient-to-r ${article.gradient} mb-4`} />
                                <div className="flex items-center gap-2 mb-3">
                                    <Tag size={12} className="text-gray-400" />
                                    <span className="text-xs text-gray-500">{article.category}</span>
                                    <span className="text-xs text-gray-300">·</span>
                                    <span className="text-xs text-gray-400">{article.readTime}</span>
                                </div>
                                <h3 className="text-base font-bold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors">{article.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{article.excerpt}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guides Section */}
            <section id="guides" className="section-padding bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimateInView className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-navy-900 mb-4">
                            Comprehensive <span className="gradient-text">Guides</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-xl mx-auto">
                            Structured learning paths to build your financial knowledge from the ground up.
                        </p>
                    </AnimateInView>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {guides.map((guide, index) => {
                            const Icon = guide.icon;
                            return (
                                <motion.div
                                    key={guide.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    whileHover={{ y: -4 }}
                                    className="feature-card group cursor-pointer"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <Icon size={22} className="text-teal-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold font-[var(--font-display)] text-navy-900 mb-2">{guide.title}</h3>
                                            <p className="text-sm text-gray-500 mb-3">{guide.description}</p>
                                            <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">{guide.lessons} lessons</span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
