'use client';

import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  problem: string;
  keyDecisions: string[];
  stack: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const PROJECTS: Project[] = [
  {
    name: 'Contntly',
    description: 'AI-powered content automation platform for marketing teams',
    problem:
      'Marketing teams and creators spend excessive time manually creating repetitive social media content, leading to inconsistency and slower growth.',
    keyDecisions: [
      'AI-driven content and clip generation to reduce manual effort',
      'Workflow-based automation for scheduling and consistency',
      'Scalable backend to support high-volume media processing',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'OpenAI',
      'Supabase',
      'N8N',
      'ShadcnUI',
      'TailwindCSS',
    ],
    links: {
      demo: 'https://contntly.emmanueltaiwo.dev',
      github: 'https://github.com/emmanueltaiwo/contntly',
    },
  },
  {
    name: 'Lexify',
    description: 'AI contract analysis tool for law firms',
    problem:
      'Manual contract review is slow, expensive, and error-prone, often taking hours per document for legal teams.',
    keyDecisions: [
      'LLM-powered clause extraction and risk detection',
      'Structured document parsing for consistent analysis',
      'Clear risk scoring to speed up legal decision-making',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'OpenAI',
      'Supabase',
      'ShadcnUI',
      'TailwindCSS',
    ],
    links: {
      demo: 'https://lexify.emmanueltaiwo.dev',
      github: 'https://github.com/emmanueltaiwo/lexify',
    },
  },
];

export default function Projects() {
  return (
    <section id='projects' className='mx-auto max-w-2xl px-4 md:px-0 border-t border-border py-12 md:py-16'>
      <motion.h2
        className='text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 tracking-tight'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <div className='space-y-8 md:space-y-12'>
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            className='space-y-4 pb-8 md:pb-12 border-b border-border last:border-b-0 last:pb-0 group relative'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >

            <motion.h3
              className='text-xl md:text-2xl font-bold text-foreground relative z-10'
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {project.name}
            </motion.h3>
            <p className='text-sm md:text-base lg:text-lg text-muted-foreground relative z-10'>
              {project.description}
            </p>

            <div className='space-y-2 relative z-10'>
              <motion.p
                className='text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-2'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className='text-muted-foreground'>▸</span> Problem
              </motion.p>
              <p className='text-sm md:text-base text-foreground/90 leading-relaxed'>
                {project.problem}
              </p>
            </div>

            <div className='space-y-2 relative z-10'>
              <motion.p
                className='text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-2'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className='text-muted-foreground'>▸</span> Key Technical Decisions
              </motion.p>
              <ul className='space-y-2'>
                {project.keyDecisions.map((decision, i) => (
                  <motion.li
                    key={i}
                    className='text-sm md:text-base text-foreground/90 flex items-start gap-3'
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <span className='text-muted-foreground shrink-0 pt-1'>
                      ▸
                    </span>
                    <span>{decision}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className='space-y-2 relative z-10'>
              <motion.p
                className='text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-2'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <span className='text-muted-foreground'>▸</span> Tech Stack
              </motion.p>
              <div className='flex flex-wrap gap-2'>
                {project.stack.map((tech, i) => (
                  <motion.span
                    key={i}
                    className='px-2 md:px-3 py-1 text-xs md:text-sm border border-border rounded text-foreground/80 relative overflow-hidden group'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className='relative z-10'>{tech}</span>
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              className='flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 relative z-10'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              {project.links.demo && (
                <motion.a
                  href={project.links.demo}
                  target='_blank'
                  className='text-sm md:text-base font-medium text-foreground hover:opacity-75 transition-opacity flex items-center gap-2 group'
                  whileHover={{ x: 5 }}
                >
                  <span>Live Demo</span>
                  <ExternalLink className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity' />
                </motion.a>
              )}
              {project.links.github && (
                <motion.a
                  href={project.links.github}
                  target='_blank'
                  className='text-sm md:text-base font-medium text-foreground hover:opacity-75 transition-opacity flex items-center gap-2 group'
                  whileHover={{ x: 5 }}
                >
                  <span>GitHub</span>
                  <ExternalLink className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity' />
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
