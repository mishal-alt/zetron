import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Small delay to allow menu to close smoothly first
    }
  };

  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center justify-between px-8 py-4 bg-[#191919]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
      >
        {/* Left Links - Desktop Only */}
        <div className="hidden md:flex items-center gap-10 flex-1">
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

        {/* Mobile Menu Toggle - Hamburger */}
        <div className="flex md:hidden flex-1 items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white/60 hover:text-white transition-colors flex items-center justify-center p-2"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
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

        {/* Right Links - Desktop Only */}
        <div className="hidden md:flex items-center justify-end gap-10 flex-1">
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

        {/* Placeholder for mobile link spacing context if needed - empty div to balance flex for logo on mobile if menu button is on left */}
        <div className="flex md:hidden flex-1 justify-end"></div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mt-4 overflow-hidden rounded-3xl border border-white/10 bg-[#141414]/95 backdrop-blur-2xl shadow-2xl"
          >
            <motion.nav 
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-8 py-10 flex flex-col gap-6"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  variants={itemVariants}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-white/60 font-headline text-xs font-bold uppercase tracking-[0.4em] hover:text-white transition-colors border-b border-white/5 pb-4 block"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div variants={itemVariants} className="mt-4">
                <a 
                   href="#contact" 
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="bg-white text-black px-8 py-4 font-headline text-[10px] font-extrabold uppercase tracking-[0.4em] block text-center hover:bg-white/90 transition-all rounded-full"
                >
                  Connect with Us
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

