import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
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
        setStatusMessage('PROTOCOL INITIATED: MESSAGE DISPATCHED.');
        setIsSubmitting(false);
        e.target.reset();
      }, (error) => {
        setStatusMessage('CONNECTION FAILURE: PLEASE RETRY.');
        setIsError(true);
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-40 px-6 md:px-12 bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="font-label text-xs tracking-[0.4em] uppercase text-on-surface-variant mb-4 block">04 / Connection</span>
            <h2 className="font-headline text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase mb-12">
              INITIATE<br/>
              <span className="text-on-surface-variant font-light italic">SYNC.</span>
            </h2>
            <p className="max-w-md text-on-surface-variant text-lg font-light leading-relaxed mb-12">
              Drafting technical requirements? Open a direct channel with our lead engineers to map out your infrastructure and deployment strategies.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <span className="material-symbols-outlined text-white/20 group-hover:text-white transition-colors">mail</span>
                <a href="mailto:sync@zetron.tech" className="text-white font-headline text-sm font-bold uppercase tracking-[0.2em] hover:text-white/60 transition-colors">
                  sync@zetron.tech
                </a>
              </div>
              <div className="flex items-center gap-6 group">
                <span className="material-symbols-outlined text-white/20 group-hover:text-white transition-colors">location_on</span>
                <span className="text-on-surface-variant font-headline text-sm font-bold uppercase tracking-[0.2em]">
                  DIGITAL HUB / GLOBAL
                </span>
              </div>
            </div>
          </div>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div className="space-y-px bg-outline-variant/10 border border-outline-variant/10">
              <div className="bg-surface p-6">
                <label className="block text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.3em] mb-4">
                  IDENTIFIER / NAME
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full bg-transparent border-none p-0 text-white font-body focus:ring-0 placeholder:text-white/10"
                  placeholder="AUTHORITY CODE"
                />
              </div>
              <div className="bg-surface p-6">
                <label className="block text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.3em] mb-4">
                  COMMUNICATION / EMAIL
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-transparent border-none p-0 text-white font-body focus:ring-0 placeholder:text-white/10"
                  placeholder="PROTOCOL@DOMAIN.INT"
                />
              </div>
              <div className="bg-surface p-6">
                <label className="block text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.3em] mb-4">
                  DATA / MESSAGE
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-transparent border-none p-0 text-white font-body focus:ring-0 placeholder:text-white/10 resize-none"
                  placeholder="ENCODE YOUR REQUIREMENTS..."
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black px-12 py-5 font-headline font-extrabold uppercase tracking-[0.4em] text-xs hover:bg-white/90 transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'DISPATCHING...' : 'INITIATE PROTOCOL'}
              </button>
              
              {statusMessage && (
                <p className={`font-headline text-[10px] font-bold uppercase tracking-[0.2em] ${isError ? 'text-red-500' : 'text-primary'}`}>
                  {statusMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
