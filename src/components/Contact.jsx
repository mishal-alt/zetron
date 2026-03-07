import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage('');
        setIsError(false);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            }
        )
            .then((result) => {
                console.log(result.text);
                setStatusMessage('Message sent successfully!');
                setIsSubmitting(false);
                e.target.reset(); // Clear the form
            }, (error) => {
                console.log(error.text);
                setStatusMessage('Failed to send message. Please try again.');
                setIsError(true);
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2 font-mono"
                        >
                            <div className="w-8 h-[1px] bg-primary/30" />
                            Initialize Connection
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black mb-6"
                        >
                            Architect Your <span className="text-primary">System</span>
                        </motion.h3>
                        <p className="text-gray-400 text-lg leading-relaxed font-light">
                            Drafting technical requirements? Open a direct channel with our lead engineers to map out your infrastructure, data models, and deployment strategies.
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />
                        <div className="relative z-10 p-1 rounded-3xl bg-white/5 border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
                                alt="Lead Engineers Collaborating"
                                className="w-full h-auto rounded-[1.4rem] shadow-xl object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 space-y-8"
                    >
                        <div className="glass p-8 rounded-3xl">
                            <h4 className="text-xl font-bold mb-8">Contact Information</h4>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email Us</p>
                                        <a href="mailto:zetrontechin@gmail.com" className="text-white font-medium hover:text-primary transition-colors">zetrontechin@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us</p>
                                        <p className="text-white font-medium">+91 XXXXX XXXXX</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Our Location</p>
                                        <p className="text-white font-medium">Digital Hub, Tech Park, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-3xl bg-primary/5 border-primary/20">
                            <h5 className="font-bold mb-2">Available for new projects</h5>
                            <p className="text-sm text-gray-400">Response time: Usually within 24 hours.</p>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8"
                    >
                        <form ref={form} onSubmit={sendEmail} className="glass p-8 md:p-12 rounded-[2.5rem] space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white/10 transition-all text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white/10 transition-all text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 ml-1">Company (Optional)</label>
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Your Company Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white/10 transition-all text-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 ml-1">Project Details</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white/10 transition-all text-white resize-none"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto px-10 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            Sending...
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                {statusMessage && (
                                    <span className={`text-sm font-medium ${isError ? 'text-red-400' : 'text-green-400'}`}>
                                        {statusMessage}
                                    </span>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
