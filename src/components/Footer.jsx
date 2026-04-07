import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] w-full py-20 px-6 md:px-12 flex flex-col items-center gap-12 border-t border-outline-variant/5">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl gap-12 md:gap-0">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-white text-2xl">architecture</span>
            <span className="font-headline font-bold text-white text-xl tracking-widest uppercase">ZETRON TECH</span>
          </div>
          <p className="text-[#474747] font-body text-sm max-w-xs leading-relaxed uppercase tracking-tighter">
            Developing digital artifacts for the elite technological landscape. Built for performance, designed for the future.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-white font-headline text-xs font-bold uppercase tracking-[0.2em]">Map</span>
            <a className="text-[#474747] hover:text-white transition-colors font-body text-[10px] tracking-[0.2em] uppercase" href="#home">Home</a>
            <a className="text-[#474747] hover:text-white transition-colors font-body text-[10px] tracking-[0.2em] uppercase" href="#services">Services</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-headline text-xs font-bold uppercase tracking-[0.2em]">Social</span>
            <a className="text-[#474747] hover:text-white transition-colors font-body text-[10px] tracking-[0.2em] uppercase" href="#">LinkedIn</a>
            <a className="text-[#474747] hover:text-white transition-colors font-body text-[10px] tracking-[0.2em] uppercase" href="https://www.instagram.com/zetron.tech/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-headline text-xs font-bold uppercase tracking-[0.2em]">Legal</span>
            <a className="text-[#474747] hover:text-white transition-colors font-body text-[10px] tracking-[0.2em] uppercase" href="#">Privacy</a>
            <a className="text-[#474747] hover:text-white transition-colors font-body text-[10px] tracking-[0.2em] uppercase" href="#">Terms</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-headline text-xs font-bold uppercase tracking-[0.2em]">Contact</span>
            <a className="text-[#474747] hover:text-white transition-colors font-body text-[10px] tracking-[0.2em] uppercase" href="mailto:zetrontechin@gmail.com">zetrontechin@gmail.com</a>
          </div>
        </div>
      </div>
      
      <div className="pt-20 border-t border-outline-variant/10 w-full flex justify-center">
        <span className="font-body text-[10px] tracking-[0.5em] text-[#474747] uppercase opacity-80 hover:opacity-100 transition-opacity text-center">
          © 2026 ZETRON TECH. ARCHITECTING THE VOID.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
