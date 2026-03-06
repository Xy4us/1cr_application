"use client";

import { AnimateInView } from "@/components/AnimateInView";
import { motion } from "framer-motion";
import { Apple, PlayCircle, ArrowRight, Star, Users, Shield } from "lucide-react";

export function AppDownloadCTA() {
    return (
        <section id="download" className="relative overflow-hidden">
            <div className="gradient-bg-cta py-24 sm:py-32 relative">
                {/* Background effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-300/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    <AnimateInView>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-medium mb-8"
                        >
                            <Star size={14} className="text-gold-400" />
                            Rated 4.8 on App Store & Play Store
                        </motion.div>
                    </AnimateInView>

                    <AnimateInView delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-[var(--font-display)] text-white mb-6 leading-tight">
                            Start Improving Your{" "}
                            <span className="gradient-text-teal">Financial Health</span>{" "}
                            Today
                        </h2>
                    </AnimateInView>

                    <AnimateInView delay={0.2}>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                            Join 50,000+ users who are already making smarter financial
                            decisions with 1Cr Club. Download now and get your Financial
                            Health Score for free.
                        </p>
                    </AnimateInView>

                    <AnimateInView delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            {/* App Store Button */}
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-3 bg-white text-navy-900 px-7 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-white/20 transition-shadow w-full sm:w-auto justify-center"
                            >
                                <Apple size={28} />
                                <div className="text-left">
                                    <div className="text-[10px] text-gray-500 leading-none">
                                        Download on the
                                    </div>
                                    <div className="text-lg font-bold leading-tight">
                                        App Store
                                    </div>
                                </div>
                            </motion.a>

                            {/* Play Store Button */}
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-7 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto justify-center"
                            >
                                <PlayCircle size={28} />
                                <div className="text-left">
                                    <div className="text-[10px] text-gray-400 leading-none">
                                        Get it on
                                    </div>
                                    <div className="text-lg font-bold leading-tight">
                                        Google Play
                                    </div>
                                </div>
                            </motion.a>
                        </div>
                    </AnimateInView>

                    <AnimateInView delay={0.4}>
                        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <Shield size={16} className="text-teal-400" />
                                <span>Bank-grade security</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users size={16} className="text-teal-400" />
                                <span>50K+ active users</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star size={16} className="text-teal-400" />
                                <span>4.8 star rating</span>
                            </div>
                        </div>
                    </AnimateInView>
                </div>
            </div>
        </section>
    );
}
