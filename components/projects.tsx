'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  stack: string[];
  links: {
    demo?: string;
    github?: string;
  };  
}

const PROJECTS: Project[] = [
  {
  name: 'Limitly',
  description: 'Limitly is a centralized typescript-first rate-limiting SDK service using Redis and token bucket algorithm, designed to operate across distributed services with graceful degradation and real-time metrics.',
  stack: [
    'Node.js',
    'TypeScript',
    'Redis',
    'Express',
    'Docker',
    'Railway',
    'PostHog',
  ],
  links: {
    demo: 'https://limitly.emmanueltaiwo.dev',
    github: 'https://github.com/emmanueltaiwo/limitly',
  },
},
  {
    name: 'Contntly',
    description: 'AI-powered content automation platform for marketing teams',
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
        className='text-2xl md:text-3xl lg:text-4xl font-bold mb-10 md:mb-12 tracking-tight'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <div className='space-y-16 md:space-y-20'>
        {PROJECTS.map((project, idx) => (
          <motion.article
            key={idx}
            className='group'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4'>
              <div className='flex-1'>
                <h3 className='text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-foreground/80 transition-colors'>
                  {project.name}
                </h3>
                <p className='text-sm md:text-base text-muted-foreground leading-relaxed'>
                  {project.description}
                </p>
              </div>

              <div className='flex items-center gap-3'>
                {project.links.demo && (
                  <motion.a
                    href={project.links.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 border border-border rounded-md hover:border-foreground/30 transition-colors group/link'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label='View demo'
                  >
                    <ExternalLink className='w-5 h-5 text-muted-foreground group-hover/link:text-foreground transition-colors' />
                  </motion.a>
                )}
                {project.links.github && (
                  <motion.a
                    href={project.links.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 border border-border rounded-md hover:border-foreground/30 transition-colors group/link'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label='View on GitHub'
                  >
                    <Github className='w-5 h-5 text-muted-foreground group-hover/link:text-foreground transition-colors' />
                  </motion.a>
                )}
              </div>
            </div>

            <div className='flex flex-wrap gap-2 mt-6'>
              {project.stack.map((tech, i) => (
                <motion.span
                  key={i}
                  className='px-3 py-1 text-xs md:text-sm border border-border rounded-full text-muted-foreground bg-background/50'
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + i * 0.03 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
