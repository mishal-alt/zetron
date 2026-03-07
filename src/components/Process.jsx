import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        title: 'System Discovery & Scope',
        num: '01',
        description: 'Analyzing operational constraints, throughput requirements, and drafting technical RFCs.'
    },
    {
        title: 'State & Architecture Design',
        num: '02',
        description: 'Modeling database schemas, mapping API contracts, and defining cloud infrastructure topologies.'
    },
    {
        title: 'Component Engineering',
        num: '03',
        description: 'Iterative, test-driven development focusing on modular components and robust state management.'
    },
    {
        title: 'CI/CD & Security Audits',
        num: '04',
        description: 'Automated integration pipelines, static code analysis, and rigorous vulnerability assessments.'
    },
    {
        title: 'Immutable Deployment',
        num: '05',
        description: 'Containerized staging and production launches using blue-green deployment strategies.'
    },
    {
        title: 'Telemetry & SRE',
        num: '06',
        description: 'Continuous observability, automated scaling, and proactive incident management.'
    }
];

const Process = () => {
    return (
        <section id="process" className="py-24 relative overflow-hidden bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2 font-mono"
                        >
                            <div className="w-8 h-[1px] bg-primary/30" />
                            Delivery Pipeline
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black mb-6"
                        >
                            Engineering <span className="text-primary">Lifecycle</span>
                        </motion.h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Our standardized CI/CD workflow guarantees zero-downtime releases, rigorous code quality, and transparent architectural decisions from day one.
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />
                        <div className="relative z-10 p-1 rounded-3xl bg-white/5 border border-white/10">
                            <img
                                src="/images/process-pipeline.png"
                                alt="Engineering Infrastructure Design"
                                className="w-full h-auto rounded-[1.4rem] shadow-xl object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Vertical Line on Desktop */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/5 hidden lg:block" />

                    <div className="space-y-12 lg:space-y-0">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                                    {/* Content */}
                                    <div className="flex-1 w-full lg:w-auto">
                                        <motion.div
                                            initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className={`glass p-8 rounded-3xl relative overflow-hidden group transition-all hover:border-primary/30 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
                                        >
                                            <div className="absolute inset-0 z-0">
                                                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="bg" className="w-full h-full object-cover opacity-20 filter grayscale group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" />
                                                <div className="absolute inset-0 bg-dark/90" />
                                            </div>
                                            <div className="relative z-10">
                                                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Number Circle */}
                                    <div className="relative z-10 flex items-center justify-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            className="w-16 h-16 rounded-full bg-dark border-4 border-primary/20 flex items-center justify-center relative overflow-hidden group"
                                        >
                                            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                                            <span className="text-xl font-black text-primary">{step.num}</span>
                                        </motion.div>
                                    </div>

                                    {/* Empty Spacer */}
                                    <div className="flex-1 hidden lg:block" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
