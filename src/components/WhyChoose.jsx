import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Code, MessageSquare, Clock, Headphones } from 'lucide-react';

const reasons = [
    {
        title: 'Elastic Scalability',
        description: 'Systems engineered to dynamically scale horizontally and vertically under high concurrent loads.',
        icon: Zap
    },
    {
        title: 'Modern Ecosystems',
        description: 'Leveraging cutting-edge, type-safe runtimes for ultimate performance and security guarantees.',
        icon: Code
    },
    {
        title: 'Clean Architecture',
        description: 'Adhering to SOLID principles and modular design for long-term maintainability and reduced technical debt.',
        icon: Shield
    },
    {
        title: 'Agile Transparency',
        description: 'Direct communication with lead engineers via Slack/Teams and real-time Jira/Linear sprint tracking.',
        icon: MessageSquare
    },
    {
        title: 'Immutable Deliverables',
        description: 'Strict CI/CD automated deployments ensure precise builds matching staging environments flawlessly.',
        icon: Clock
    },
    {
        title: '24/7 SRE Support',
        description: 'Continuous telemetry monitoring, incident response, and SLA-backed infrastructure management.',
        icon: Headphones
    }
];

const WhyChoose = () => {
    return (
        <section className="py-24 relative bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase text-xs mb-4 flex items-center justify-center gap-2 font-mono"
                    >
                        <div className="w-8 h-[1px] bg-primary/30" />
                        Engineering Standards
                        <div className="w-8 h-[1px] bg-primary/30" />
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black mb-6"
                    >
                        Architectural <span className="text-primary">Principles</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-3xl flex flex-col items-center text-center relative overflow-hidden group transition-all hover:border-primary/30"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="bg" className="w-full h-full object-cover opacity-20 filter grayscale group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" />
                                <div className="absolute inset-0 bg-dark/90" />
                            </div>

                            <div className="relative z-10 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:bg-primary transition-all group-hover:scale-110 duration-500">
                                <reason.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h4 className="relative z-10 text-xl font-bold mb-4">{reason.title}</h4>
                            <p className="relative z-10 text-gray-400 group-hover:text-gray-300 transition-colors">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
