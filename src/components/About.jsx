import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="font-label text-xs tracking-[0.4em] uppercase text-on-surface-variant mb-6 block">05 / The Collective</span>
            <h2 className="font-headline text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-8 md:mb-12">
              BUILDING<br/>
              <span className="text-on-surface-variant font-light italic text-xl sm:text-4xl md:text-6xl tracking-[0.2em] md:tracking-widest block md:inline">RESILIENT INFRASTRUCTURE.</span>
            </h2>
            <div className="space-y-8 text-on-surface-variant text-lg font-light leading-relaxed">
              <p>
                ZETRON TECH isn't just a development agency; we are a specialized engineering task force. We design, architect, and deploy high-performance software systems built for scale and reliability.
              </p>
              <p>
                By leveraging modern distributed systems, event-driven architectures, and robust CI/CD pipelines, we empower tech-forward companies to process millions of transactions with zero downtime.
              </p>
              
              <div className="grid grid-cols-2 gap-px bg-outline-variant/10 border border-outline-variant/10 mt-12">
                <div className="bg-surface-container-low p-8">
                  <span className="block text-[10px] font-headline font-bold text-white/40 uppercase tracking-[0.3em] mb-4">P99 LATENCY</span>
                  <span className="text-3xl font-headline font-black text-white italic tracking-tighter">&lt; 50MS</span>
                </div>
                <div className="bg-surface-container-low p-8">
                  <span className="block text-[10px] font-headline font-bold text-white/40 uppercase tracking-[0.3em] mb-4">UPTIME SLA</span>
                  <span className="text-3xl font-headline font-black text-white italic tracking-tighter">99.99%</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative grayscale contrast-125 brightness-75"
          >
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070"
              alt="Technological Core"
              className="w-full aspect-[4/5] object-cover border border-white/5"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
