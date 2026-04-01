import React from 'react';
import { motion } from 'framer-motion';

const techGroups = [
  {
    category: 'Frontend',
    techs: ['React.js', 'Vite', 'Tailwind', 'Three.js', 'HTML5', 'CSS3', 'Bootstrap'],
    icon: 'terminal'
  },
  {
    category: 'Backend',
    techs: ['Node.js', 'Go', 'Fastify', 'Python', 'Express.js'],
    icon: 'api'
  },
  {
    category: 'Database & Security',
    techs: ['PostgreSQL', 'MongoDB', 'Redis', 'JWT', 'OAuth 2.0', 'BCrypt'],
    icon: 'database'
  },
  {
    category: 'Cloud & Delivery',
    techs: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Git'],
    icon: 'cloud'
  }
];

const TechStack = () => {
  return (
    <section id="tech" className="py-32 px-6 md:px-12 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-on-surface-variant mb-4 block">06 / Architecture</span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase whitespace-nowrap">TECH STACK.</h2>
          </div>
          <div className="text-on-surface-variant font-headline italic text-xl">Battle-tested tools for elite systems.</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/10 border border-outline-variant/10">
          {techGroups.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface group p-12 hover:bg-surface-container-low transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-white/20 group-hover:text-white transition-colors">
                  {group.icon}
                </span>
                <h3 className="font-headline text-xl font-bold text-white uppercase tracking-tighter">
                  {group.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.techs.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-[10px] font-headline font-bold text-on-surface-variant border border-outline-variant/20 px-3 py-1.5 uppercase hover:text-white hover:border-white transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
