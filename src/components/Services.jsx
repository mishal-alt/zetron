import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="font-label text-xs tracking-[0.4em] uppercase text-on-surface-variant mb-4 block">01 / Capabilities</span>
          <h2 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">CORE SERVICES.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full md:h-[800px]">
          {/* Distributed Systems */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-surface-container border border-outline-variant/10 p-12 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8">
              <span className="material-symbols-outlined text-white/5 text-9xl group-hover:text-white/10 transition-all duration-700">hub</span>
            </div>
            <div>
              <h3 className="text-3xl font-headline font-bold text-white mb-6 uppercase tracking-widest">Distributed Systems</h3>
              <p className="text-on-surface-variant max-w-md leading-relaxed">Architecting high-availability backends with idempotent microservices and event-driven data streaming pipelines.</p>
            </div>
            <div className="flex items-center gap-4 text-white font-label uppercase text-xs tracking-widest cursor-pointer group/link">
              <span>System Specs</span>
              <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
            </div>
          </motion.div>

          {/* Frontend Engineering */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-surface p-12 border border-outline-variant/10 flex flex-col justify-between group"
          >
            <div>
              <h3 className="text-2xl font-headline font-bold text-white mb-4 uppercase">Frontend</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">High-fidelity, type-safe interfaces with frame-perfect precision and cinematic motion logic.</p>
            </div>
            <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-white transition-all">layers</span>
          </motion.div>

          {/* Cloud-Native Infrastructure */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-surface p-12 border border-outline-variant/10 flex flex-col justify-between group"
          >
            <div>
              <h3 className="text-2xl font-headline font-bold text-white mb-4 uppercase">Cloud-Native</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Containerized deployment strategies using AWS, Docker, and Kubernetes for ultimate scalability.</p>
            </div>
            <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-white transition-all">cloud</span>
          </motion.div>

          {/* Telemetry & DevOps */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 bg-surface-container-high p-12 border border-outline-variant/10 flex flex-col md:flex-row gap-12"
          >
            <div className="flex-1 flex flex-col justify-between group">
              <div>
                <h3 className="text-2xl font-headline font-bold text-white mb-4 uppercase">Telemetry</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Continuous observability and performance monitoring for mission-critical applications.</p>
              </div>
              <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-white transition-all">monitoring</span>
            </div>
            <div className="w-px bg-outline-variant/20 hidden md:block"></div>
            <div className="flex-1 flex flex-col justify-between group">
              <div>
                <h3 className="text-2xl font-headline font-bold text-white mb-4 uppercase">SRE</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Site Reliability Engineering focused on incident response and uptime optimization.</p>
              </div>
              <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-white transition-all">verified_user</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
