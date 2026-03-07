import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-[1px] bg-primary/30" />
                            <h2 className="text-primary font-bold tracking-widest uppercase text-xs font-mono">
                                Engineering Collective
                            </h2>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                            Building Resilient <span className="text-primary italic">Infrastructure</span>
                        </h3>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                ZETRON TECH isn't just a development agency; we are a specialized engineering task force. We design, architect, and deploy high-performance software systems built for scale and reliability.
                            </p>
                            <p>
                                By leveraging modern distributed systems, event-driven architectures, and robust CI/CD pipelines, we empower tech-forward companies to process millions of transactions with zero downtime.
                            </p>
                            <div className="pt-4 grid grid-cols-2 gap-4">
                                <div className="glass p-4 rounded-xl border border-white/5">
                                    <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-2">P99 Latency</h4>
                                    <p className="text-2xl font-black text-primary">&lt; 50ms</p>
                                </div>
                                <div className="glass p-4 rounded-xl border border-white/5">
                                    <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-2">Uptime SLA</h4>
                                    <p className="text-2xl font-black text-primary">99.99%</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden glass p-2 border border-white/5">
                            <img
                                src="/images/about-coding.png"
                                alt="ZETRON TECH Developer Working"
                                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                            />
                        </div>

                        {/* Background elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[120px] rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
