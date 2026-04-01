import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Elastic Scalability',
    description: 'Systems engineered to dynamically scale horizontally and vertically under high concurrent loads without performance degradation.',
    icon: 'bolt'
  },
  {
    title: 'Modern Ecosystems',
    description: 'Leveraging cutting-edge, type-safe runtimes and distributed patterns for ultimate performance and security guarantees.',
    icon: 'code'
  },
  {
    title: 'Clean Architecture',
    description: 'Adhering to SOLID principles and modular design for long-term maintainability and drastically reduced technical debt.',
    icon: 'architecture'
  },
  {
    title: 'Agile Transparency',
    description: 'Direct communication with lead engineers via Slack and real-time project tracking for absolute visibility.',
    icon: 'sync_alt'
  },
  {
    title: 'Immutable Deliveries',
    description: 'Strict CI/CD automated deployments ensure precise builds matching staging and production environments flawlessly.',
    icon: 'deployed_code'
  },
  {
    title: '24/7 SRE Support',
    description: 'Continuous telemetry monitoring, incident response, and SLA-backed infrastructure management around the clock.',
    icon: 'monitoring'
  }
];

const WhyChoose = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-on-surface-variant mb-6 block">07 / Engineering standards</span>
            <h2 className="font-headline text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">PRINCIPLES.</h2>
          </div>
          <div className="text-on-surface-variant font-headline italic text-xl sm:text-2xl">Architectural integrity, uncompromising quality.</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant/10 border border-outline-variant/10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface p-12 group hover:bg-surface-container-low transition-colors duration-500"
            >
              <span className="material-symbols-outlined text-4xl text-white/10 group-hover:text-white transition-colors duration-500 mb-8 block">
                {reason.icon}
              </span>
              <h4 className="font-headline text-2xl font-bold text-white mb-6 uppercase tracking-tight">
                {reason.title}
              </h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
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
