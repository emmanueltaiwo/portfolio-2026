'use client';

import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact() {
  const contactLinks = [
    {
      label: 'Email',
      href: 'mailto:emmanueltaiwo027@gmail.com',
      icon: Mail,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/emmanueltaiwo',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/emmanueloluwafunso',
      icon: Linkedin,
    },
  ];

  return (
    <section id='contact' className='relative border-t border-border py-12 md:py-16 overflow-hidden'>
      {/* Full-width Sci-fi Background Graphics */}
      <div className='absolute inset-0 pointer-events-none opacity-15'>
        {/* Tech Grid Pattern */}
        <svg className='absolute inset-0 w-full h-full' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <pattern id='contactGrid' x='0' y='0' width='60' height='60' patternUnits='userSpaceOnUse'>
              <circle cx='30' cy='30' r='1' fill='#A0A0A0' opacity='0.5' />
              <path
                d='M 0 30 L 60 30 M 30 0 L 30 60'
                fill='none'
                stroke='#E5E5E5'
                strokeWidth='0.3'
                opacity='0.3'
              />
            </pattern>
            <linearGradient id='contactGlow' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' stopColor='#FFFFFF' stopOpacity='0.04' />
              <stop offset='50%' stopColor='#A0A0A0' stopOpacity='0.02' />
              <stop offset='100%' stopColor='#E5E5E5' stopOpacity='0.04' />
            </linearGradient>
            <filter id='glow'>
              <feGaussianBlur stdDeviation='2' result='coloredBlur' />
              <feMerge>
                <feMergeNode in='coloredBlur' />
                <feMergeNode in='SourceGraphic' />
              </feMerge>
            </filter>
          </defs>
          <rect width='100%' height='100%' fill='url(#contactGrid)' />
          <rect width='100%' height='100%' fill='url(#contactGlow)' />
        </svg>

        {/* Animated Connection Lines */}
        <svg className='absolute inset-0 w-full h-full' xmlns='http://www.w3.org/2000/svg'>
          {contactLinks.map((_, i) => (
            <motion.line
              key={i}
              x1={`${20 + i * 30}%`}
              y1='20%'
              x2={`${25 + i * 30}%`}
              y2='40%'
              stroke='#A0A0A0'
              strokeWidth='0.5'
              opacity='0.3'
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: i * 0.2 }}
            />
          ))}
        </svg>

        {/* Floating Tech Elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute'
            style={{
              left: `${10 + i * 25}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 180, 360],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <rect
                x='5'
                y='5'
                width='10'
                height='10'
                stroke='#A0A0A0'
                strokeWidth='1'
                fill='none'
                opacity='0.5'
              />
              <circle cx='10' cy='10' r='2' fill='#E5E5E5' opacity='0.6' />
            </svg>
          </motion.div>
        ))}

        {/* Holographic Scanlines */}
        <motion.div
          className='absolute inset-0'
          style={{
            background: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.015) 2px,
              rgba(255, 255, 255, 0.015) 4px
            )`,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 0%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Corner Brackets */}
        <motion.svg
          className='absolute top-0 left-0 w-24 h-24'
          viewBox='0 0 100 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.path
            d='M 20 20 L 20 40 L 40 40'
            stroke='#E5E5E5'
            strokeWidth='1.5'
            fill='none'
            filter='url(#glow)'
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <defs>
            <filter id='glow'>
              <feGaussianBlur stdDeviation='1' result='coloredBlur' />
              <feMerge>
                <feMergeNode in='coloredBlur' />
                <feMergeNode in='SourceGraphic' />
              </feMerge>
            </filter>
          </defs>
        </motion.svg>

        <motion.svg
          className='absolute bottom-0 right-0 w-24 h-24'
          viewBox='0 0 100 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.path
            d='M 80 80 L 80 60 L 60 60'
            stroke='#E5E5E5'
            strokeWidth='1.5'
            fill='none'
            filter='url(#glow2)'
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <defs>
            <filter id='glow2'>
              <feGaussianBlur stdDeviation='1' result='coloredBlur' />
              <feMerge>
                <feMergeNode in='coloredBlur' />
                <feMergeNode in='SourceGraphic' />
              </feMerge>
            </filter>
          </defs>
        </motion.svg>

        {/* Pulsing Glow Effect */}
        <motion.div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full max-h-md'
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content Container */}
      <div className='relative z-10 mx-auto max-w-2xl px-4 md:px-0'>
      <motion.h2
        className='text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 tracking-tight'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>
      <div className='flex flex-col sm:flex-row gap-4 md:gap-8'>
        {contactLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target='_blank'
            className='text-base md:text-lg font-medium text-foreground flex items-center gap-2 group relative p-3 rounded-lg border border-border hover:opacity-75 transition-opacity'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <link.icon className='w-5 h-5 relative z-10 text-muted-foreground group-hover:text-foreground transition-colors' />
            <span className='relative z-10'>{link.label}</span>
            <motion.span
              className='text-muted-foreground relative z-10'
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
            >
              →
            </motion.span>
          </motion.a>
        ))}
      </div>
      <motion.div
        className='mt-12 md:mt-16 pt-6 md:pt-8 border-t border-border'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className='text-xs md:text-sm text-muted-foreground'>
          © {new Date().getFullYear()} Emmanuel Taiwo.
        </p>
      </motion.div>
      </div>
    </section>
  );
}
