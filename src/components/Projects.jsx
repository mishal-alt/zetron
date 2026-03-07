import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Cpu, Smartphone, BarChart3 } from 'lucide-react';


const projects = [
    {
        name: 'HireSphere',
        tagline: 'Orchestrating Global Talent Acquisition',
        industry: 'HR Technology',
        client: 'TalentStream Global',
        description: 'A distributed system engineered to handle high-concurrency recruitment workflows. Built with a modular micro-frontend architecture, this platform leverages custom event-driven scheduling logic to synchronize interviews across 15+ time zones with sub-millisecond latency.',
        image: '/images/hiresphere.png',
        features: [
            'Cron-Based Multi-Region Sync',
            'WebSocket-Driven Live Evaluation',
            'Secure OAuth 2.0 Integration',
            'Real-time P99 Latency Monitoring',
        ],
        techStack: ['Node.js (LTS)', 'PostgreSQL', 'Redis', 'WebSockets', 'AWS S3'],
        impact: 'Optimized resource allocation by 40%, managing over 250,000 candidate evaluations with 99.99% uptime.',
        icon: Cpu,
        status: 'Production',
        buildId: 'v2.4.0-stable'
    },
    {
        name: 'SoleNXT',
        tagline: 'Engineered for Flash-Sale Resilience',
        industry: 'Retail & E-Commerce',
        client: 'UrbanFootwear Distribution',
        description: 'A high-performance headless engine designed to survive massive traffic spikes. We implemented an aggressive edge-caching strategy with custom service workers and an idempotent payment pipeline to ensure transactional integrity during million-user product drops.',
        image: '/images/solenxt.png',
        features: [
            'Edge-Optimized Page Rendering',
            'Idempotent API Architecture',
            'Redis-Backed Rate Limiting',
            'PCI-DSS Compliant Workflows',
        ],
        techStack: ['Vite', 'Node.js', 'MongoDB Cluster', 'Stripe SDK', 'Cloudflare'],
        impact: 'Sustained throughput of 8,500 requests per second during peak holiday traffic with zero packet loss.',
        icon: Smartphone,
        status: 'Production',
        buildId: 'v1.8.2-stable'
    },
    {
        name: 'SmartCRM',
        tagline: 'Unified Intelligence & Data Modeling',
        industry: 'Management Software',
        client: 'Nexus Financial Enterprises',
        description: 'A bespoke financial intelligence hub focused on complex data modeling and predictive analysis. The platform features an advanced ETL pipeline that aggregates legacy data into a high-performance analytics engine built on top of a custom-indexed MongoDB cluster.',
        image: '/images/smartcrm.png',
        features: [
            'Bespoke Data Aggregation ETL',
            'RBAC Security Architecture',
            'Predictive ML Modeling Hooks',
            'Real-time Change Streams',
        ],
        techStack: ['React 18', 'Fastify', 'MongoDB', 'D3.js', 'Redis Cache'],
        impact: 'Unified 12+ legacy datasets into a single source of truth, reducing financial reporting overhead by 60%.',
        icon: BarChart3,
        status: 'Production',
        buildId: 'v3.1.5-stable'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase text-xs mb-4 flex items-center justify-center gap-2"
                    >
                        <div className="w-8 h-[1px] bg-primary/30" />
                        Engineering Portfolio
                        <div className="w-8 h-[1px] bg-primary/30" />
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black mb-6"
                    >
                        High-Performance <span className="text-primary">Deployments</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg font-mono lowercase"
                    >
                        // examining real-world architectures engineered by ZETRON TECH
                    </motion.p>
                </div>

                <div className="space-y-40">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col lg:flex-row gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Technical Visualization Side */}
                            <div className="flex-1 w-full relative group">
                                <div className="absolute -inset-4 bg-primary/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                <div className="relative z-10 p-0.5 rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/5 flex items-center px-6 gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                        <div className="ml-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                            {project.buildId}
                                        </div>
                                    </div>

                                    <div className="mt-8 rounded-b-[2.4rem] overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-auto shadow-2xl transition-transform duration-[2000ms] group-hover:scale-105 logo-blend"
                                        />
                                    </div>

                                    <div className="absolute bottom-6 right-6 flex items-center gap-2">
                                        <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-full">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-[10px] font-black text-white uppercase tracking-widest">{project.status}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Engineering Details Side */}
                            <div className="flex-1 space-y-10">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                                            {project.industry}
                                        </span>
                                        <div className="h-4 w-[1px] bg-white/10" />
                                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                            Partner // {project.client}
                                        </span>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-5xl font-black text-white tracking-tighter">{project.name}</h4>
                                        <p className="text-xl font-medium text-primary leading-tight">
                                            {project.tagline}
                                        </p>
                                    </div>

                                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <h5 className="text-[10px] font-black text-white uppercase tracking-[0.3em] opacity-50">Technical Specs</h5>
                                        <ul className="space-y-4">
                                            {project.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 group">
                                                    <div className="mt-1.5 w-1 h-1 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                                                    <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors font-medium">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h5 className="text-[10px] font-black text-white uppercase tracking-[0.3em] opacity-50">Core Stack</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold text-gray-400 hover:text-white hover:border-primary/50 transition-all font-mono">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-white/5 space-y-8">
                                    <div className="bg-white/5 border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                            <BarChart3 className="w-12 h-12 text-white" />
                                        </div>
                                        <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-3">Validation & Metrics</h5>
                                        <p className="text-white text-lg font-medium italic relative z-10">
                                            "{project.impact}"
                                        </p>
                                    </div>

                                    <motion.a
                                        whileHover={{ x: 10 }}
                                        href="#"
                                        className="inline-flex items-center gap-4 text-white font-black uppercase tracking-[0.2em] text-[10px] group py-2"
                                    >
                                        <span className="border-b border-primary pb-1 group-hover:border-white transition-colors">Analyze Architecture</span>
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                                            <ExternalLink className="w-4 h-4 text-white" />
                                        </div>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
