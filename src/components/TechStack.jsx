import React from 'react';
import { motion } from 'framer-motion';

const techGroups = [
    {
        category: 'Frontend',
        techs: ['React.js', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
        category: 'Backend',
        techs: ['Node.js', 'Express.js', 'Fastify', 'Python', 'Go']
    },
    {
        category: 'Database & Security',
        techs: ['MongoDB', 'PostgreSQL', 'Redis', 'JWT', 'OAuth 2.0', 'BCrypt']
    },
    {
        category: 'Deployment & Cloud',
        techs: ['Vercel', 'AWS', 'Docker', 'CI/CD Pipelines', 'Git', 'Kubernetes']
    }
];

const TechStack = () => {
    return (
        <section id="tech" className="py-24 relative overflow-hidden bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
                        <div className="relative z-10 p-0.5 rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                <div className="ml-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                    cluster_topology_map
                                </div>
                            </div>
                            <div className="mt-8">
                                <img
                                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                                    alt="System Architecture Code"
                                    className="relative z-10 w-full h-auto shadow-2xl object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                    <div className="text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2 font-mono"
                        >
                            <div className="w-8 h-[1px] bg-primary/30" />
                            Core System Architecture
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black mb-6"
                        >
                            Infrastructure & <span className="text-primary">Tech Stack</span>
                        </motion.h3>
                        <p className="text-gray-400 text-lg leading-relaxed font-light">
                            We architect systems using battle-tested, enterprise-grade technologies to guarantee linear scalability, robust fault tolerance, and zero-trust security compliance.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techGroups.map((group, groupIdx) => (
                        <motion.div
                            key={groupIdx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: groupIdx * 0.1 }}
                            className="glass p-8 rounded-3xl relative overflow-hidden group transition-all hover:border-primary/30"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="bg" className="w-full h-full object-cover opacity-20 filter grayscale group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" />
                                <div className="absolute inset-0 bg-dark/90" />
                            </div>

                            <div className="relative z-10">
                                <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                                    <div className="w-1.5 h-6 bg-primary rounded-full transition-all group-hover:scale-y-125" />
                                    {group.category}
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {group.techs.map((tech, techIdx) => (
                                        <span
                                            key={techIdx}
                                            className="px-4 py-2 bg-white/5 rounded-full text-sm font-semibold text-gray-400 border border-white/5 hover:border-primary/50 hover:bg-primary/20 hover:text-white transition-all cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] rounded-full -rotate-12" />
        </section>
    );
};

export default TechStack;
