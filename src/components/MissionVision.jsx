import React from 'react';
import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10 border border-outline-variant/10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-8 md:p-16 group hover:bg-surface-container-low transition-colors duration-500"
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="material-symbols-outlined text-4xl text-white group-hover:scale-110 transition-transform">target</span>
              <h2 className="font-headline text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">MISSION & VISION.</h2>
            </div>
            <p className="font-body text-xl text-white leading-relaxed font-light italic">
              To architect immutable, highly-available distributed systems that empower modern enterprises. We reject monolithic approaches in favor of decoupling and aggressive automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-surface p-16 group hover:bg-surface-container-low transition-colors duration-500"
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="material-symbols-outlined text-4xl text-white group-hover:scale-110 transition-transform">visibility</span>
              <h3 className="font-headline text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.4em]">Architectural Vision</h3>
            </div>
            <p className="font-body text-xl text-white leading-relaxed font-light italic">
              To establish the gold standard for site reliability and type-safe development. We build the silent infrastructure that handles tomorrow's massive data streams flawlessly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
