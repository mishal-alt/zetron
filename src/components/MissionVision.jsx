import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-12 rounded-[2.5rem] relative overflow-hidden group border border-white/5 transition-all hover:border-primary/30"
                    >
                        <div className="absolute inset-0 z-0">
                            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="bg" className="w-full h-full object-cover opacity-20 filter grayscale group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-0 bg-dark/90" />
                        </div>
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

                        <div className="relative z-10">
                            <Target className="w-12 h-12 text-primary mb-8" />
                            <h3 className="text-xl font-mono uppercase tracking-widest font-black mb-6 text-white text-[10px] flex items-center gap-2">
                                <div className="w-4 h-[1px] bg-primary" />
                                Engineering Mission
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                                To architect immutable, highly-available distributed systems that empower modern enterprises. We reject monolithic approaches in favor of decoupling, idempotency, and aggressive automation.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass p-12 rounded-[2.5rem] relative overflow-hidden group border border-white/5 transition-all hover:border-secondary/30"
                    >
                        <div className="absolute inset-0 z-0">
                            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="bg" className="w-full h-full object-cover opacity-20 filter grayscale group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-0 bg-dark/90" />
                        </div>
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

                        <div className="relative z-10">
                            <Eye className="w-12 h-12 text-secondary mb-8" />
                            <h3 className="text-xl font-mono uppercase tracking-widest font-black mb-6 text-white text-[10px] flex items-center gap-2">
                                <div className="w-4 h-[1px] bg-secondary" />
                                Architectural Vision
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                                To establish the gold standard for site reliability, type-safe development, and full-stack ecosystems. We build the silent infrastructure that handles tomorrow's massive data streams flawlessly.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
