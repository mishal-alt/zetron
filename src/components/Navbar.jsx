import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', side: 'left' },
    { name: 'About', href: '#about', side: 'left' },
    { name: 'Services', href: '#services', side: 'left' },
    { name: 'Tech', href: '#tech', side: 'right' },
    { name: 'Process', href: '#process', side: 'right' },
    { name: 'Projects', href: '#projects', side: 'right' },
  ];

  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center justify-between px-8 py-4 bg-[#191919]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
      >
        {/* Left Links */}
        <div className="flex items-center gap-10 flex-1">
          {navLinks.filter(link => link.side === 'left').map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-white/60 font-headline text-[10px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Centered Logo with Dropped Element */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-1">
          <div className="relative flex flex-col items-center">
            {/* The 'Semi-Circular' Accented Background */}
            <div className="absolute top-0 w-48 h-18 bg-[#191919] border-x border-b border-white/20 rounded-b-full shadow-lg -z-10 flex items-center justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent absolute top-0"></div>
            </div>
            {/* Logo Content */}
            <div className="pt-4 flex flex-col items-center">
              <span className="material-symbols-outlined text-white text-2xl mb-1">architecture</span>
              <span className="text-[10px] font-black tracking-[0.4em] text-white font-headline uppercase whitespace-nowrap">ZETRON TECH</span>
            </div>
          </div>
        </div>

        {/* Right Links */}
        <div className="flex items-center justify-end gap-10 flex-1">
          {navLinks.filter(link => link.side === 'right').map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-white/60 font-headline text-[10px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;

