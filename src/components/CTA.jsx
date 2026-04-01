import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative py-40 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover grayscale brightness-[0.2]" 
          alt="Abstract high-tech background" 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
        />
      </div>
      <div className="relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-label text-xs tracking-[0.6em] uppercase text-white/60 mb-8 block"
        >
          Project Inquiry
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-headline text-4xl md:text-8xl font-black text-white tracking-[0.1em] mb-12 uppercase"
        >
          READY TO SYNC?
        </motion.h2>
        <motion.a 
          href="#contact"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-primary text-on-primary px-16 py-6 font-headline font-bold uppercase tracking-[0.4em] text-sm hover:px-20 transition-all duration-700"
        >
          Connect with Us
        </motion.a>
      </div>
    </section>
  );
};

export default CTA;
