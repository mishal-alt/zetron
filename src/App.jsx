import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import About from './components/About';
import TechStack from './components/TechStack';
import WhyChoose from './components/WhyChoose';
import MissionVision from './components/MissionVision';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-white selection:text-black relative">
      {/* Global Background Systems */}
      <div className="noise-overlay" />
      <div className="grid-overlay" />
      <div className="scanline-overlay opacity-20" />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <MissionVision />
        <TechStack />
        <Process />
        <Projects />
        <WhyChoose />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;


