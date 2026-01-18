'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20 overflow-hidden px-0 md:px-0'
    >
      {/* Minimal background */}
      <div className='absolute inset-0 pointer-events-none opacity-5'>
        <svg
          className='absolute inset-0 w-full h-full'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <pattern
              id='heroGrid'
              x='0'
              y='0'
              width='40'
              height='40'
              patternUnits='userSpaceOnUse'
            >
              <path
                d='M 40 0 L 0 0 0 40'
                fill='none'
                stroke='currentColor'
                strokeWidth='0.5'
              />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#heroGrid)' />
        </svg>
      </div>

      {/* Content Container */}
      <div className='relative z-10 mx-auto max-w-2xl md:px-0'>
        <div className='space-y-8 md:space-y-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='space-y-4'
          >
            <motion.h1
              className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Software Engineer
            </motion.h1>

            <motion.p
              className='text-base md:text-lg lg:text-xl text-muted-foreground font-light leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building full-stack apps, AI-powered tools, and automated
              workflows that scale.
            </motion.p>
          </motion.div>

          <motion.div
            className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 pt-2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href='mailto:emmanueltaiwo019@gmail.com'
              className='px-6 py-3 text-white font-medium rounded-md flex items-center justify-center gap-2 relative overflow-hidden group'
              style={{
                background:
                  'linear-gradient(to right, rgb(120, 50, 255), rgb(83, 0, 225), rgb(60, 0, 180))',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className='w-5 h-5' />
              <span>Hire Me</span>
            </motion.a>

            <motion.a
              href='https://drive.google.com/file/d/1f5KTbPXH97P2cHGrZU-VS6h05gT0Q3b0/view?usp=sharing'
              target='_blank'
              className='px-6 py-3 border border-border bg-background transition-colors rounded-md text-center hover:border-foreground/30'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>My Resumé</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
