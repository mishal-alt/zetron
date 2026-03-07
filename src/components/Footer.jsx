import React from 'react';
import { Cpu, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-dark border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="flex flex-col items-start group">
                            <img
                                src="/logo.png"
                                alt="ZETRON TECH Logo"
                                className="h-32 w-auto object-contain mb-2 -ml-4 transition-transform duration-500 hover:scale-105 logo-blend"
                            />
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed font-light">
                            Engineering resilient, highly-available infrastructures and digital ecosystems. From architecture design to immutable deployments, we deliver systems built to scale.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { icon: Twitter, href: '#' },
                                { icon: Linkedin, href: '#' },
                                { icon: Github, href: '#' }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="font-bold mb-6 text-white uppercase text-xs tracking-widest font-mono">System Modules</h5>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Technology', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-primary transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h5 className="font-bold mb-6 text-white uppercase text-xs tracking-widest font-mono">Architecture</h5>
                        <ul className="space-y-4">
                            {[
                                'Distributed Systems',
                                'Cloud-Native Delivery',
                                'Telemetry & SRE',
                                'Immutable Deployments',
                                'Event-Driven Architectures'
                            ].map((item) => (
                                <li key={item}>
                                    <a href="#services" className="text-gray-500 hover:text-primary transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h5 className="font-bold mb-6 text-white uppercase text-xs tracking-widest font-mono">System Alerts</h5>
                        <p className="text-gray-500 text-sm mb-4 font-light">Subscribe to engineering RFCs and architectural updates.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                            />
                            <button className="absolute right-2 top-1.5 p-1.5 bg-primary rounded-lg hover:bg-secondary transition-colors">
                                <ArrowUp className="w-4 h-4 text-white rotate-45" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs">
                        © 2026 ZETRON TECH. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-600 hover:text-white transition-colors text-xs">Privacy Policy</a>
                        <a href="#" className="text-gray-600 hover:text-white transition-colors text-xs">Terms of Service</a>
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all shrink-0"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
