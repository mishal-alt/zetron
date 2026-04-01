import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'HireSphere',
    tagline: 'Orchestrating Global Talent Acquisition',
    industry: 'HR Technology',
    description: 'A distributed system handling high-concurrency recruitment workflows across 15+ time zones with sub-millisecond latency.',
    tech: ['Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    icon: 'stacks'
  },
  {
    name: 'SoleNXT',
    tagline: 'Flash-Sale Resilience Engine',
    industry: 'E-Commerce',
    description: 'High-performance headless engine designed to handle 8,500+ RPS during peak product drops with transactional integrity.',
    tech: ['Vite', 'Node.js', 'MongoDB', 'Cloudflare'],
    icon: 'shopping_cart'
  },
  {
    name: 'SmartCRM',
    tagline: 'Unified Intelligence Data Modeling',
    industry: 'Management Software',
    description: 'Bespoke financial intelligence hub with advanced ETL pipelines reducing reporting overhead by 60%.',
    tech: ['React', 'Fastify', 'MongoDB', 'D3.js'],
    icon: 'analytics'
  },
  {
    name: 'ArtLoom',
    tagline: 'Curated Fine Arts Gallery',
    industry: 'Art & E-Commerce',
    description: 'Immersive digital gallery with high-fidelity zoom and custom framing simulators for collectors.',
    tech: ['WebGL', 'Stripe', 'Sanity CMS'],
    icon: 'palette'
  },
  {
    name: 'hotwheels',
    tagline: 'Precision E-Commerce for Collectors',
    industry: 'Automotive & Retail',
    description: 'High-velocity portal with 3D car viewers for collectors. Features real-time auction synchronization and inventory management.',
    tech: ['Next.js', 'Three.js', 'Redis', 'Node.js'],
    icon: 'car_repair'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-on-surface-variant mb-4 block">03 / Selected Works</span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase whitespace-nowrap">PROJECTS.</h2>
          </div>
          <div className="text-on-surface-variant font-headline italic text-xl">Architectural artifacts, delivered.</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10 border border-outline-variant/10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative bg-surface p-12 hover:bg-surface-container-low transition-colors duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.3em]">
                  {project.industry}
                </span>
                <span className="material-symbols-outlined text-white/10 group-hover:text-white/40 transition-colors duration-500 text-4xl">
                  {project.icon}
                </span>
              </div>
              
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4 uppercase tracking-tight">
                  {project.name}
                </h3>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[9px] font-label font-bold text-white/40 border border-white/10 px-2 py-1 uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <a href="#" className="inline-flex items-center gap-3 text-white font-headline text-[10px] font-bold uppercase tracking-[0.2em] group/link">
                <span>Analyze Architecture</span>
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
