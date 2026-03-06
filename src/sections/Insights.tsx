"use client";

import { AnimateInView } from "@/components/AnimateInView";
import { motion } from "framer-motion";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

const articles = [
    {
        title: "How to Improve Your Financial Health Score",
        category: "Financial Health",
        readTime: "5 min read",
        excerpt:
            "Learn the key strategies to boost your financial health score and achieve financial wellness...",
        gradient: "from-teal-500 to-emerald-500",
    },
    {
        title: "Understanding Asset Allocation Strategy",
        category: "Investing",
        readTime: "7 min read",
        excerpt:
            "A comprehensive guide to building a diversified asset allocation that matches your risk profile...",
        gradient: "from-blue-500 to-indigo-500",
    },
    {
        title: "Financial Planning for Entrepreneurs",
        category: "Business Finance",
        readTime: "6 min read",
        excerpt:
            "Essential financial planning tips for startup founders and small business owners to build wealth...",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        title: "Building Long-Term Wealth: A Complete Guide",
        category: "Wealth Building",
        readTime: "8 min read",
        excerpt:
            "Master the principles of long-term wealth creation through systematic investing and financial discipline...",
        gradient: "from-amber-500 to-orange-500",
    },
];

export function Insights() {
    return (
        <section className="section-padding bg-gray-50/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateInView className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
                            Learn & Grow
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] text-navy-900 mb-4">
                            Financial <span className="gradient-text">Insights</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
                            Expert financial content to help you make smarter money decisions
                            and improve your financial literacy.
                        </p>
                    </div>
                    <button className="btn-outline text-sm whitespace-nowrap">
                        View All Articles
                        <ArrowRight size={16} />
                    </button>
                </AnimateInView>

                <div className="grid sm:grid-cols-2 gap-6">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            whileHover={{ y: -4 }}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 cursor-pointer"
                        >
                            {/* Gradient header */}
                            <div
                                className={`h-2 bg-gradient-to-r ${article.gradient}`}
                            />
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                                        {article.category}
                                    </span>
                                    <div className="flex items-center gap-1 text-gray-400">
                                        <Clock size={12} />
                                        <span className="text-xs">{article.readTime}</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold font-[var(--font-display)] text-navy-900 mb-3 group-hover:text-teal-600 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-teal-600 text-sm font-semibold group-hover:gap-3 transition-all">
                                    <BookOpen size={14} />
                                    Read Article
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
