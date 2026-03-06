"use client";

import { AnimateInView } from "@/components/AnimateInView";
import { motion } from "framer-motion";
import {
    Target,
    Eye,
    Heart,
    Users,
    Shield,
    Award,
    Sparkles,
    ArrowRight,
    Linkedin,
    Twitter,
} from "lucide-react";

const values = [
    {
        icon: Shield,
        title: "Trust & Transparency",
        description: "We believe financial data should be clear, accurate, and always in the user's control.",
    },
    {
        icon: Sparkles,
        title: "Innovation First",
        description: "We push the boundaries of financial technology to deliver cutting-edge tools.",
    },
    {
        icon: Heart,
        title: "User Empowerment",
        description: "Every feature we build is designed to help users take charge of their financial future.",
    },
    {
        icon: Award,
        title: "Excellence",
        description: "We strive for the highest quality in everything — from algorithms to user experience.",
    },
];

const team = [
    {
        name: "Aarav Mehta",
        role: "Founder & CEO",
        bio: "Former investment banker with 15+ years in financial services. Passionate about democratizing financial intelligence.",
        gradient: "from-teal-400 to-emerald-500",
    },
    {
        name: "Priya Sharma",
        role: "CTO",
        bio: "Ex-Google engineer specializing in fintech platforms. Leads the technology and data science team.",
        gradient: "from-blue-400 to-indigo-500",
    },
    {
        name: "Vikram Patel",
        role: "Head of Product",
        bio: "Product leader with experience at top fintech startups. Obsessed with building intuitive financial tools.",
        gradient: "from-purple-400 to-pink-500",
    },
    {
        name: "Sneha Reddy",
        role: "Head of Finance",
        bio: "Chartered Accountant and CFA with deep expertise in personal finance and wealth management.",
        gradient: "from-amber-400 to-orange-500",
    },
];

const milestones = [
    { year: "2021", event: "Founded with a vision to democratize financial health" },
    { year: "2022", event: "Launched beta app with 1,000 early adopters" },
    { year: "2023", event: "Crossed 25,000 users, launched Financial Health Score" },
    { year: "2024", event: "50,000+ active users, ₹2,000 Cr+ assets tracked" },
    { year: "2025", event: "Enterprise partnerships and SME financial tools" },
];

export default function CompanyPage() {
    return (
        <>
            {/* Hero */}
            <section className="gradient-bg-hero pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-navy-400/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <AnimateInView className="text-center max-w-3xl mx-auto">
                        <span className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
                            About 1Cr Club
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-white mb-6">
                            Empowering Financial{" "}
                            <span className="gradient-text-teal">Intelligence</span>
                        </h1>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            We&apos;re building the future of personal financial health — one
                            score, one insight, one smart decision at a time.
                        </p>
                    </AnimateInView>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Mission & Vision */}
            <section id="mission" className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <AnimateInView direction="left">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                                    <Target size={24} className="text-teal-600" />
                                </div>
                                <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                                    Our Mission
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold font-[var(--font-display)] text-navy-900 mb-6">
                                Democratize Financial Health Intelligence
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We believe every individual deserves access to the same quality of
                                financial insights that were previously available only to the
                                wealthy. Our mission is to make financial health tracking
                                accessible, understandable, and actionable for everyone — from
                                young professionals to seasoned entrepreneurs.
                            </p>
                        </AnimateInView>

                        <AnimateInView direction="right">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <Eye size={24} className="text-blue-600" />
                                </div>
                                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                                    Our Vision
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold font-[var(--font-display)] text-navy-900 mb-6">
                                A Financially Intelligent India
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We envision a future where every Indian has a clear understanding
                                of their financial health, makes informed financial decisions, and
                                builds lasting wealth. 1Cr Club aims to be the trusted financial
                                intelligence companion for 10 million Indians by 2028.
                            </p>
                        </AnimateInView>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimateInView className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-navy-900 mb-4">
                            Our <span className="gradient-text">Values</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-xl mx-auto">
                            The principles that guide everything we build.
                        </p>
                    </AnimateInView>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="feature-card text-center"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-4">
                                        <Icon size={26} className="text-teal-600" />
                                    </div>
                                    <h3 className="text-lg font-bold font-[var(--font-display)] text-navy-900 mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimateInView className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-navy-900 mb-4">
                            Our <span className="gradient-text">Journey</span>
                        </h2>
                    </AnimateInView>

                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-emerald-500" />

                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 * index }}
                                className={`relative flex items-center mb-10 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                <div className="flex-1 hidden md:block" />
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-teal-500 z-10" />
                                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                                    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                                        <div className="text-sm font-bold text-teal-600 mb-1">{milestone.year}</div>
                                        <div className="text-gray-700 font-medium">{milestone.event}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="team" className="section-padding bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimateInView className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-navy-900 mb-4">
                            Meet the <span className="gradient-text">Team</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-xl mx-auto">
                            Experienced leaders in finance, technology, and product — united
                            by a passion for financial empowerment.
                        </p>
                    </AnimateInView>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                whileHover={{ y: -4 }}
                                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
                            >
                                <div className={`h-32 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl font-bold font-[var(--font-display)]">
                                        {member.name.split(" ").map(n => n[0]).join("")}
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold font-[var(--font-display)] text-navy-900">
                                        {member.name}
                                    </h3>
                                    <div className="text-sm text-teal-600 font-semibold mb-3">
                                        {member.role}
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                        {member.bio}
                                    </p>
                                    <div className="flex gap-3">
                                        <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                                            <Linkedin size={18} />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-sky-500 transition-colors">
                                            <Twitter size={18} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section id="contact" className="section-padding bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimateInView>
                        <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-navy-900 mb-6">
                            Want to Learn More?
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Get in touch with our team to learn more about 1Cr Club, partnership
                            opportunities, or media inquiries.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="mailto:hello@1crclub.com" className="btn-primary">
                                Contact Us
                                <ArrowRight size={18} />
                            </a>
                            <a href="#download" className="btn-outline">
                                Download App
                            </a>
                        </div>
                    </AnimateInView>
                </div>
            </section>
        </>
    );
}
