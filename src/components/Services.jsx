import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Layout,
    Database,
    ShoppingCart,
    Settings,
    Globe
} from 'lucide-react';

const services = [
    {
        title: 'Cloud-Native Architecture',
        description: 'Serverless and containerized deployments using AWS, Docker, and Kubernetes for infinite scaling.',
        icon: Globe,
        features: ['Microservices Design', 'Auto-scaling Clusters', 'EKS/ECS Deployments', 'Zero-Downtime CI/CD']
    },
    {
        title: 'Reactive Client Applications',
        description: 'Highly-performant, client-side rendered SPA/SSR platforms driven by modern React paradigms.',
        icon: Layout,
        features: ['Concurrent Mode React', 'State Management (Redux/Zustand)', 'WebSockets/RTC', 'Lighthouse 95+ Scores']
    },
    {
        title: 'Distributed Data Systems',
        description: 'High-throughput, ACID-compliant database topologies and real-time caching layers.',
        icon: Database,
        features: ['PostgreSQL Sharding', 'Redis Cache Layers', 'GraphQL Federations', 'Idempotent API Design']
    },
    {
        title: 'High-Volume E-Commerce',
        description: 'Headless storefront architectures optimized for flash sales and massive inventory indexing.',
        icon: ShoppingCart,
        features: ['PCI-DSS Compliance', 'ElasticSearch Indexing', 'Stripe Multi-Tenant Auth', 'Sub-Second Redirections']
    },
    {
        title: 'Site Reliability Engineering',
        description: 'Proactive infrastructure monitoring, automated failovers, and incident response operations.',
        icon: Settings,
        features: ['Prometheus Grafana', 'Chaos Engineering', 'Automated Health Checks', 'P99 Latency Audits']
    },
    {
        title: 'Systems Integrations (ETL)',
        description: 'Custom middleware and data pipelines to synchronize complex legacy enterprise datasets.',
        icon: Code2,
        features: ['Kafka Event Streams', 'Legacy DB Migrations', 'Serverless Cron Jobs', 'OAuth2/SAML SSO']
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 relative bg-dark">
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
                            Technical Capabilities
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black mb-6"
                        >
                            Infrastructure & <br /><span className="text-primary">Engineering Services</span>
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg leading-relaxed mb-8"
                        >
                            We provide robust, end-to-end technical solutions designed to meet strict operational constraints. From high-availability data layers to optimized edge rendering.
                        </motion.p>
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
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
                                alt="High-Availability Server Infrastructure"
                                className="w-full h-auto rounded-[1.4rem] shadow-xl object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass p-8 rounded-3xl group relative overflow-hidden transition-all hover:border-primary/30"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="Card Background" className="w-full h-full object-cover opacity-20 filter grayscale group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" />
                                <div className="absolute inset-0 bg-dark/90" />
                            </div>

                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity z-0 pointer-events-none">
                                <service.icon className="w-24 h-24" />
                            </div>

                            <div className="relative z-10 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                            </div>

                            <h4 className="relative z-10 text-2xl font-bold mb-4">{service.title}</h4>
                            <p className="relative z-10 text-gray-400 mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="relative z-10 space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
