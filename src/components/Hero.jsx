import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} id="home" className="relative h-screen flex items-end px-6 md:px-12 pb-24 overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <img 
            className="w-full h-full object-cover grayscale brightness-110 contrast-125" 
            alt="Cinematic high-contrast monochrome architecture" 
            src="/images/hero-bg.png"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-10"></div>
      </div>
      
      <div className="relative z-20 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-headline font-extrabold text-display-lg text-white mb-8 md:mb-4 uppercase tracking-tighter">
            ARCHITECTING<br/>
            <span className="text-on-surface-variant font-light italic">THE VOID.</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-on-surface-variant text-lg md:text-xl font-light mb-12 leading-relaxed"
          >
            We design, engineer, and deploy high-concurrency digital infrastructure for the modern enterprise. Cinematic interfaces meet precision-driven code for zero downtime and infinite scale.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row gap-6"
          >
            <a href="#contact" className="bg-white text-black px-12 py-5 font-headline font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-all cursor-pointer text-center">
              Connect with Us
            </a>
            <a href="#projects" className="border border-white/20 text-white px-12 py-5 font-headline font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-all cursor-pointer text-center">
              Explore Works
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
