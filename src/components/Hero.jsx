import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Glows */}
            <div className="hero-glow top-0 -left-64 opacity-50" />
            <div className="hero-glow bottom-0 -right-64 opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-left max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 text-[10px] font-mono tracking-widest text-primary mb-8"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span>SYSTEM STATUS: ALL CLUSTERS OPERATIONAL // LATENCY: 12ms</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]"
                        >
                            <span className="gradient-text">Architecting High-Performance</span>
                            <br />
                            <span className="text-white">Distributed Systems</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed"
                        >
                            ZETRON TECH is an elite engineering collective building scalable, fault-tolerant infrastructure and complex digital ecosystems for modern enterprises.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4"
                        >
                            <a
                                href="#contact"
                                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-all flex items-center justify-center gap-3 group shadow-xl shadow-primary/30 text-sm uppercase tracking-widest"
                            >
                                <Terminal className="w-5 h-5" />
                                Initialize Project
                            </a>
                            <a
                                href="#process"
                                className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-widest"
                            >
                                View Architecture
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
                        <div className="relative z-10 p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent">
                            <div className="rounded-[1.4rem] overflow-hidden">
                                <img
                                    src="/images/hero-tech.png"
                                    alt="ZETRON TECH Engineering Workspace"
                                    className="w-full h-auto shadow-2xl object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
