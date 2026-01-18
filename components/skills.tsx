'use client';

import type React from 'react';
import { GitBranchIcon, BrainIcon, Package } from 'lucide-react';
import { motion } from 'motion/react';
import {
  ReactIcon,
  TypeScriptIcon,
  NextjsIcon,
  AngularIcon,
  TailwindCSSIcon,
  ShadcnuiIcon,
  ReduxIcon,
  TanStackIcon,
  NodejsIcon,
  GraphQLIcon,
  ExpressjsIcon,
  PostgreSQLIcon,
  MongoDBIcon,
  PrismaIcon,
  SupabaseIcon,
  FirebaseIcon,
  DockerIcon,
  AmazonWebServicesIcon,
  NginxIcon,
  VercelIcon,
  NetlifyIcon,
  OpenAIIcon,
  ClaudeAIIcon,
  GrokIcon,
  GeminiIcon,
  N8nIcon,
} from './icons/skills-icons';

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'AI';
  icon?: React.ReactNode;
}

const SKILLS: Skill[] = [
  // Frontend
  {
    name: 'React',
    category: 'Frontend',
    icon: <ReactIcon className='w-5 h-5' />,
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    icon: <TypeScriptIcon className='w-5 h-5' />,
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    icon: <NextjsIcon className='w-5 h-5' />,
  },
  {
    name: 'Angular',
    category: 'Frontend',
    icon: <AngularIcon className='w-5 h-5' />,
  },
  {
    name: 'TailwindCSS',
    category: 'Frontend',
    icon: <TailwindCSSIcon className='w-5 h-5' />,
  },
  {
    name: 'ShadcnUI',
    category: 'Frontend',
    icon: <ShadcnuiIcon className='w-5 h-5' />,
  },
  {
    name: 'Redux',
    category: 'Frontend',
    icon: <ReduxIcon className='w-5 h-5' />,
  },
  {
    name: 'Zustand',
    category: 'Frontend',
    icon: <Package className='w-5 h-5' />,
  },
  {
    name: 'Tanstack Query',
    category: 'Frontend',
    icon: <TanStackIcon className='w-5 h-5' />,
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    icon: <NodejsIcon className='w-5 h-5' />,
  },
  {
    name: 'Express',
    category: 'Backend',
    icon: <ExpressjsIcon className='w-5 h-5' />,
  },
  {
    name: 'GraphQL',
    category: 'Backend',
    icon: <GraphQLIcon className='w-5 h-5' />,
  },

  // Database
  {
    name: 'PostgreSQL',
    category: 'Database',
    icon: <PostgreSQLIcon className='w-5 h-5' />,
  },
  {
    name: 'MongoDB',
    category: 'Database',
    icon: <MongoDBIcon className='w-5 h-5' />,
  },
  {
    name: 'Prisma',
    category: 'Database',
    icon: <PrismaIcon className='w-5 h-5' />,
  },
  {
    name: 'Supabase',
    category: 'Database',
    icon: <SupabaseIcon className='w-5 h-5' />,
  },
  {
    name: 'Firebase',
    category: 'Database',
    icon: <FirebaseIcon className='w-5 h-5' />,
  },

  // DevOps
  {
    name: 'Docker',
    category: 'DevOps',
    icon: <DockerIcon className='w-5 h-5' />,
  },
  {
    name: 'AWS',
    category: 'DevOps',
    icon: <AmazonWebServicesIcon className='w-5 h-5' />,
  },
  {
    name: 'NGINX',
    category: 'DevOps',
    icon: <NginxIcon className='w-5 h-5' />,
  },
  {
    name: 'CI/CD',
    category: 'DevOps',
    icon: <GitBranchIcon className='w-5 h-5' />,
  },
  {
    name: 'Vercel',
    category: 'DevOps',
    icon: <VercelIcon className='w-5 h-5' />,
  },
  {
    name: 'Netlify',
    category: 'DevOps',
    icon: <NetlifyIcon className='w-5 h-5' />,
  },

  // AI
  { name: 'OpenAI', category: 'AI', icon: <OpenAIIcon className='w-5 h-5' /> },
  {
    name: 'Claude',
    category: 'AI',
    icon: <ClaudeAIIcon className='w-5 h-5' />,
  },
  { name: 'Grok', category: 'AI', icon: <GrokIcon className='w-5 h-5' /> },
  { name: 'Gemini', category: 'AI', icon: <GeminiIcon className='w-5 h-5' /> },
  {
    name: 'N8N',
    category: 'AI',
    icon: <N8nIcon className='w-5 h-5' />,
  },
  {
    name: 'Make',
    category: 'AI',
    icon: <BrainIcon className='w-5 h-5' />,
  },
  {
    name: 'Zapier',
    category: 'AI',
    icon: <BrainIcon className='w-5 h-5' />,
  },
];

export default function Skills() {
  return (
    <section className='mx-auto max-w-2xl px-4 md:px-0 border-t border-border py-12 md:py-16'>
      <motion.h2
        className='text-2xl md:text-3xl lg:text-4xl font-bold mb-10 md:mb-12 tracking-tight'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6'>
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            className='flex flex-col items-center gap-2 p-4 border border-border rounded-lg hover:border-foreground/30 transition-colors group cursor-default'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: Math.floor(index / 4) * 0.1 + (index % 4) * 0.05,
              duration: 0.3,
            }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <motion.div
              className='text-muted-foreground group-hover:text-foreground transition-colors'
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {skill.icon}
            </motion.div>
            <span className='text-xs md:text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors font-medium'>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
