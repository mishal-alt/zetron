import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'HireSphere',
    tagline: 'Orchestrating Global Talent Acquisition',
    industry: 'HR Technology',
    description: 'A distributed system handling high-concurrency recruitment workflows across 15+ time zones with sub-millisecond latency.',
    tech: ['Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    icon: 'stacks',
    image: '/images/hiresphere.png'
  },
  {
    name: 'SoleNXT',
    tagline: 'Flash-Sale Resilience Engine',
    industry: 'E-Commerce',
    description: 'High-performance headless engine designed to handle 8,500+ RPS during peak product drops with transactional integrity.',
    tech: ['Vite', 'Node.js', 'MongoDB', 'Cloudflare'],
    icon: 'shopping_cart',
    image: '/images/solenxt.png'
  },
  {
    name: 'SmartCRM',
    tagline: 'Unified Intelligence Data Modeling',
    industry: 'Management Software',
    description: 'Bespoke financial intelligence hub with advanced ETL pipelines reducing reporting overhead by 60%.',
    tech: ['React', 'Fastify', 'MongoDB', 'D3.js'],
    icon: 'analytics',
    image: '/images/smartcrm.png'
  },
  {
    name: 'ArtLoom',
    tagline: 'Curated Fine Arts Gallery',
    industry: 'Art & E-Commerce',
    description: 'Immersive digital gallery with high-fidelity zoom and custom framing simulators for collectors.',
    tech: ['WebGL', 'Stripe', 'Sanity CMS'],
    icon: 'palette',
    image: '/images/artloom.png'
  },
  {
    name: 'hotwheels',
    tagline: 'Precision E-Commerce for Collectors',
    industry: 'Automotive & Retail',
    description: 'High-velocity portal with 3D car viewers for collectors. Features real-time auction synchronization and inventory management.',
    tech: ['Next.js', 'Three.js', 'Redis', 'Node.js'],
    icon: 'car_repair',
    image: '/images/hotwheels.png'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-on-surface-variant mb-6 block">03 / Selected Works</span>
            <h2 className="font-headline text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">PROJECTS.</h2>
          </div>
          <div className="text-on-surface-variant font-headline italic text-xl sm:text-2xl">Architectural artifacts, delivered.</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative h-[500px] overflow-hidden bg-surface-container border border-white/5"
            >
              {/* Background Image with Hover Effects */}
              <div className="absolute inset-0 z-0">
                <motion.img 
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:grayscale-0 group-hover:brightness-75 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
              </div>
              
              {/* Content Panel */}
              <div className="relative z-20 h-full p-8 md:p-12 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-headline font-bold text-white/40 uppercase tracking-[0.4em] mb-2">
                      {project.industry}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-headline font-bold text-white uppercase tracking-tight">
                      {project.name}
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-white/20 group-hover:text-white transition-colors duration-500 text-3xl">
                    {project.icon}
                  </span>
                </div>
                
                <div className="max-w-md">
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-[9px] font-label font-bold text-white/60 bg-white/5 border border-white/10 px-2 py-1 uppercase tracking-widest backdrop-blur-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <a href="#" className="inline-flex items-center gap-3 text-white font-headline text-[10px] font-extrabold uppercase tracking-[0.3em] group/link">
                    <span className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 group-hover/link:after:scale-x-100 after:transition-transform after:duration-500">Analyze Architecture</span>
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform duration-500">arrow_forward</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
