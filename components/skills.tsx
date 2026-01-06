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

const CATEGORIES = ['Frontend', 'Backend', 'Database', 'DevOps', 'AI'] as const;

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    Frontend:
      'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900',
    Backend:
      'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/30 dark:text-green-400 dark:border-green-900',
    Database:
      'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-900',
    DevOps:
      'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/30 dark:text-orange-400 dark:border-orange-900',
    AI: 'bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/30 dark:text-pink-400 dark:border-pink-900',
  };
  return colors[category] || colors.Frontend;
}

export default function Skills() {
  return (
    <section className='mx-auto max-w-2xl px-4 md:px-0 border-t border-border py-12 md:py-16'>
      <motion.h2
        className='text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 tracking-tight'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className='space-y-6 md:space-y-8'>
        {CATEGORIES.map((category, categoryIndex) => {
          const categorySkills = SKILLS.filter((s) => s.category === category);
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <motion.h3
                className='text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2'
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 + 0.2 }}
              >
                <span className='text-cyan-400'>▸</span> {category}
              </motion.h3>
              <div className='flex flex-wrap gap-2 md:gap-3'>
                {categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={`flex items-center gap-2 px-2 md:px-3 py-1.5 md:py-2 rounded-lg border transition-all relative overflow-hidden group ${getCategoryColor(
                      skill.category
                    )}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.03,
                      duration: 0.3,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100'
                      transition={{ duration: 0.3 }}
                    />
                    {skill.icon && (
                      <motion.span
                        className='shrink-0 relative z-10'
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.span>
                    )}
                    <span className='text-xs md:text-sm font-medium relative z-10'>
                      {skill.name}
                    </span>
                    <motion.div
                      className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100'
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
