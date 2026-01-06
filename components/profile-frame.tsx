'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import TechFrame from './tech-frame';

interface ProfileFrameProps {
  src: string;
  alt: string;
}

export default function ProfileFrame({ src, alt }: ProfileFrameProps) {
  return (
    <div className='relative inline-block group'>
      {/* Iron Man Glow Effect */}
      <motion.div
        className='absolute -inset-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 rounded-md blur-xl opacity-70'
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-md blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500'
      />

      {/* Profile image container */}
      <div className='relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-md overflow-hidden border-2 border-yellow-500/50 shadow-[0_0_20px_rgba(255,215,0,0.5)]'>
        <Image
          src={src || '/placeholder.svg'}
          alt={alt}
          fill
          className='object-cover p-1.5'
          priority
          sizes='(max-width: 768px) 80px, 96px'
        />

        {/* Tech frame overlay */}
        <TechFrame />

        {/* Holographic Scanlines */}
        <div className='absolute inset-0 pointer-events-none opacity-30'>
          <svg width='100%' height='100%' className='w-full h-full'>
            <defs>
              <pattern
                id='ironScanlines'
                x='0'
                y='0'
                width='100'
                height='2'
                patternUnits='userSpaceOnUse'
              >
                <line
                  x1='0'
                  y1='0'
                  x2='100'
                  y2='0'
                  stroke='#FFD700'
                  strokeWidth='0.5'
                  opacity='0.6'
                />
              </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#ironScanlines)' />
          </svg>
        </div>

        {/* Corner Accents */}
        <motion.div
          className='absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-500'
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className='absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-yellow-500'
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        />
        <motion.div
          className='absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-yellow-500'
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
        <motion.div
          className='absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-500'
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
        />
      </div>
    </div>
  );
}
