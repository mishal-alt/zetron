import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'System Discovery',
    description: 'Analyzing operational constraints, throughput requirements, and drafting technical RFCs to define the project scope.',
    icon: 'search'
  },
  {
    num: '02',
    title: 'Architecture Design',
    description: 'Modeling database schemas, mapping API contracts, and defining cloud infrastructure topologies before the first line of code.',
    icon: 'architecture'
  },
  {
    num: '03',
    title: 'Component Engineering',
    description: 'Iterative, test-driven development focusing on modular components and robust state management systems.',
    icon: 'code'
  },
  {
    num: '04',
    title: 'CI/CD & Security',
    description: 'Automated integration pipelines, static code analysis, and rigorous vulnerability assessments for maximum resilience.',
    icon: 'security'
  },
  {
    num: '05',
    title: 'Immutable Deployment',
    description: 'Containerized staging and production launches using blue-green deployment strategies for zero-downtime releases.',
    icon: 'rocket_launch'
  },
  {
    num: '06',
    title: 'Telemetry & SRE',
    description: 'Continuous observability, automated scaling, and proactive incident management to ensure 99.99% uptime.',
    icon: 'monitoring'
  }
];

const Process = () => {
  return (
    <section id="process" className="py-32 px-6 md:px-12 bg-background border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-on-surface-variant mb-6 block">02 / Methodology</span>
            <h2 className="font-headline text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">THE WORKFLOW.</h2>
          </div>
          <div className="text-on-surface-variant font-headline italic text-xl sm:text-2xl">Linear execution, exponential results.</div>
        </div>

        <div className="space-y-0 relative">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-outline-variant/10 py-16 hover:bg-surface-container-low transition-colors duration-500 px-6 cursor-default"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-baseline gap-8">
                  <span className="font-headline text-2xl text-on-surface-variant/40">{step.num}</span>
                  <h3 className="font-headline text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter group-hover:pl-4 transition-all duration-500">
                    {step.title}
                  </h3>
                </div>
                <p className="md:max-w-md text-on-surface-variant leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {step.description}
                </p>
                <span className="material-symbols-outlined text-5xl text-white/5 group-hover:text-white transition-colors duration-500">
                  {step.icon}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
