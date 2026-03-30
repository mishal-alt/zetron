import React, { useState, useEffect } from 'react';
import { Menu, X,  } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = document.querySelectorAll('section');
            let current = 'home';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 100) {
                    current = section.getAttribute('id') || current;
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Technology', href: '#tech' },
        { name: 'Process', href: '#process' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'
                }`}
        >
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${scrolled ? 'scale-95' : 'scale-100'}`}>
                <div className={`transition-all duration-500 ${scrolled ? 'glass-morphism rounded-full px-6 py-2' : 'bg-transparent'
                    }`}>
                    <div className="flex justify-between items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 group cursor-pointer"
                        >
                            <div className="relative">
                                <Rocket className="w-8 h-8 text-primary group-hover:text-secondary mb-2 transition-colors duration-300" />
                                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <span className="text-2xl font-black gradient-text tracking-tighter">ZETRON</span>
                        </motion.div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            <div className="flex items-center gap-6">
                                {navLinks.map((link, index) => {
                                    const isActive = activeSection === link.href.substring(1);
                                    return (
                                        <motion.a
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            key={link.name}
                                            href={link.href}
                                            className={`relative text-sm font-medium transition-all group py-1 px-1 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                        >
                                            {link.name}
                                            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                            {isActive && (
                                                <motion.span
                                                    layoutId="nav-active"
                                                    className="absolute inset-0 -z-10 bg-white/5 rounded-lg blur-sm"
                                                />
                                            )}
                                        </motion.a>
                                    );
                                })}
                            </div>

                            <motion.a
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="glow-button px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold rounded-full shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all"
                            >
                                Let's Talk
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-300 hover:text-white p-2 transition-transform active:scale-90"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-24 left-4 right-4 md:hidden glass-morphism rounded-3xl overflow-hidden z-50 p-6"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-xl font-semibold py-2 px-4 rounded-xl transition-all ${activeSection === link.href.substring(1) ? 'bg-primary/20 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <div className="pt-4 mt-2 border-t border-white/10">
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white font-black rounded-2xl shadow-xl active:scale-95 transition-transform"
                                >
                                    GET STARTED
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

