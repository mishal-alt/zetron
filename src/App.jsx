import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Projects from './components/Projects';
import WhyChoose from './components/WhyChoose';
import MissionVision from './components/MissionVision';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Process />
        <Projects />
        <WhyChoose />
        <MissionVision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
<<<<<<< HEAD
=======

//mishal worked
>>>>>>> d670b57fe9cbb8635753ed849bf6c5323eb02d1c
