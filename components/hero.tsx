'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import ProfileFrame from './profile-frame';

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative pt-16 md:pt-24 lg:pt-32 pb-12 overflow-hidden px-0 md:px-0'
    >
      {/* Full-width Sci-fi Background Graphics */}
      <div className='absolute inset-0 pointer-events-none opacity-20'>
        {/* Animated Grid */}
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
                stroke='#E5E5E5'
                strokeWidth='0.5'
                opacity='0.4'
              />
            </pattern>
            <linearGradient id='heroGlow' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' stopColor='#FFFFFF' stopOpacity='0.05' />
              <stop offset='50%' stopColor='#A0A0A0' stopOpacity='0.03' />
              <stop offset='100%' stopColor='#E5E5E5' stopOpacity='0.05' />
            </linearGradient>
          </defs>
          <rect width='100%' height='100%' fill='url(#heroGrid)' />
          <rect width='100%' height='100%' fill='url(#heroGlow)' />
        </svg>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-gray-400 rounded-full'
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Holographic Scanlines */}
        <motion.div
          className='absolute inset-0'
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.02) 2px,
              rgba(255, 255, 255, 0.02) 4px
            )`,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '0% 100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Corner Tech Frames */}
        <motion.svg
          className='absolute top-0 left-0 w-32 h-32'
          viewBox='0 0 100 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.path
            d='M 10 10 L 10 30 L 30 30 L 30 10 Z'
            stroke='url(#cornerGradient)'
            strokeWidth='1'
            fill='none'
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <defs>
            <linearGradient
              id='cornerGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop offset='0%' stopColor='#FFFFFF' />
              <stop offset='100%' stopColor='#A0A0A0' />
            </linearGradient>
          </defs>
        </motion.svg>

        <motion.svg
          className='absolute bottom-0 right-0 w-32 h-32'
          viewBox='0 0 100 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.path
            d='M 90 90 L 90 70 L 70 70 L 70 90 Z'
            stroke='url(#cornerGradient2)'
            strokeWidth='1'
            fill='none'
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 1,
            }}
          />
          <defs>
            <linearGradient
              id='cornerGradient2'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop offset='0%' stopColor='#A0A0A0' />
              <stop offset='100%' stopColor='#FFFFFF' />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Glow Effect */}
        <motion.div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96'
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content Container */}
      <div className='relative z-10 mx-auto max-w-2xl px-4 md:px-0'>
        <div className='space-y-6 md:space-y-8'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <ProfileFrame src='/assets/profile1.png' alt='Profile' />
          </motion.div>

          <motion.h2
            className='text-xl md:text-2xl lg:text-3xl font-semibold leading-tight'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I&apos;m a software engineer with 5+ years of experience building
            and shipping products for startups and enterprises.
          </motion.h2>

          <motion.p
            className='text-sm md:text-base lg:text-lg text-muted-foreground font-light leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Building full-stack web apps, AI-powered tools, and automated
            workflows that scale.
          </motion.p>

          <motion.div
            className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 pt-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href='mailto:emmanueltaiwo027@gmail.com'
              className='px-6 py-3 text-white font-medium rounded-md flex items-center justify-center gap-2 relative overflow-hidden group shadow-[0_0_20px_rgba(83,0,225,0.3)]'
              style={{
                background:
                  'linear-gradient(to right, rgb(120, 50, 255), rgb(83, 0, 225), rgb(60, 0, 180))',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className='absolute inset-0 opacity-0 group-hover:opacity-100'
                style={{
                  background:
                    'linear-gradient(to right, rgb(140, 70, 255), rgb(100, 20, 240), rgb(80, 10, 200))',
                }}
                transition={{ duration: 0.3 }}
              />
              <MessageCircle className='w-5 h-5 relative z-10' />
              <span className='relative z-10'>Hire Me</span>
              <motion.div
                className='absolute inset-0 border rounded-md'
                style={{ borderColor: 'rgba(83, 0, 225, 0.5)' }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href='https://drive.google.com/file/d/1f5KTbPXH97P2cHGrZU-VS6h05gT0Q3b0/view?usp=sharing'
              target='_blank'
              className='px-6 py-3 border border-border bg-[rgb(39,39,39)] transition-colors rounded-md text-center relative overflow-hidden group'
              whileHover={{ scale: 1.05, borderColor: 'rgb(83, 0, 225)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className='relative z-10'>My Resumé</span>
              <motion.div
                className='absolute inset-0 opacity-0 group-hover:opacity-100'
                style={{
                  background:
                    'linear-gradient(to right, rgba(120, 50, 255, 0.1), rgba(83, 0, 225, 0.1), rgba(60, 0, 180, 0.1))',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
