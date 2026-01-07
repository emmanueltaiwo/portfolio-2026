'use client';

import { motion } from 'motion/react';

export default function TechFrame() {
  const cornerVariants = {
    initial: { opacity: 0.6 },
    animate: {
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut' as const,
      },
    },
  };

  const glitchVariants = {
    animate: {
      x: [0, -1, 1, 0],
      transition: {
        duration: 0.2,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 4,
      },
    },
  };

  const holoPulseVariants = {
    animate: {
      opacity: [0.2, 0.6, 0.2],
      transition: {
        duration: 2.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut' as const,
      },
    },
  };

  const arcReactorPulse = {
    animate: {
      opacity: [0.4, 1, 0.4],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut' as const,
      },
    },
  };

  return (
    <motion.svg
      viewBox='0 0 100 100'
      className='absolute inset-0 w-full h-full'
      fill='none'
      initial='initial'
      animate='animate'
      variants={glitchVariants}
    >
      <defs>
        <filter id='ironGlow' x='-50%' y='-50%' width='200%' height='200%'>
          <feGaussianBlur stdDeviation='3' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>

        <filter id='hologram'>
          <feGaussianBlur stdDeviation='0.8' result='blur' />
          <feColorMatrix
            in='blur'
            type='saturate'
            values='2'
            result='saturated'
          />
          <feComponentTransfer in='saturated'>
            <feFuncA type='linear' slope='1.5' />
          </feComponentTransfer>
        </filter>

        <filter id='arcReactor'>
          <feGaussianBlur stdDeviation='2' result='blur' />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>

        {/* Blue Gradient */}
        <linearGradient id='ironGold' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#7832FF' stopOpacity='1' />
          <stop offset='50%' stopColor='#5300E1' stopOpacity='1' />
          <stop offset='100%' stopColor='#3C00B4' stopOpacity='1' />
        </linearGradient>

        {/* Arc Reactor Blue/White */}
        <linearGradient id='arcReactorGrad' x1='50%' y1='0%' x2='50%' y2='100%'>
          <stop offset='0%' stopColor='#00BFFF' stopOpacity='0.9' />
          <stop offset='50%' stopColor='#FFFFFF' stopOpacity='1' />
          <stop offset='100%' stopColor='#00BFFF' stopOpacity='0.9' />
        </linearGradient>

        {/* Holographic Grid */}
        <linearGradient id='holoGrid' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#7832FF' stopOpacity='0.3' />
          <stop offset='50%' stopColor='#5300E1' stopOpacity='0.2' />
          <stop offset='100%' stopColor='#3C00B4' stopOpacity='0.3' />
        </linearGradient>
      </defs>

      {/* Holographic Grid Lines */}
      <motion.g variants={holoPulseVariants}>
        <line
          x1='10'
          y1='0'
          x2='10'
          y2='100'
          stroke='url(#ironGold)'
          strokeWidth='0.2'
          opacity='0.3'
          filter='url(#hologram)'
        />
        <line
          x1='30'
          y1='0'
          x2='30'
          y2='100'
          stroke='url(#ironGold)'
          strokeWidth='0.2'
          opacity='0.3'
          filter='url(#hologram)'
        />
        <line
          x1='50'
          y1='0'
          x2='50'
          y2='100'
          stroke='url(#ironGold)'
          strokeWidth='0.2'
          opacity='0.3'
          filter='url(#hologram)'
        />
        <line
          x1='70'
          y1='0'
          x2='70'
          y2='100'
          stroke='url(#ironGold)'
          strokeWidth='0.2'
          opacity='0.3'
          filter='url(#hologram)'
        />
        <line
          x1='90'
          y1='0'
          x2='90'
          y2='100'
          stroke='url(#ironGold)'
          strokeWidth='0.2'
          opacity='0.3'
          filter='url(#hologram)'
        />

        <line
          x1='0'
          y1='25'
          x2='100'
          y2='25'
          stroke='url(#ironGold)'
          strokeWidth='0.2'
          opacity='0.3'
          filter='url(#hologram)'
        />
        <line
          x1='0'
          y1='50'
          x2='100'
          y2='50'
          stroke='url(#ironGold)'
          strokeWidth='0.2'
          opacity='0.3'
          filter='url(#hologram)'
        />
        <line
          x1='0'
          y1='75'
          x2='100'
          y2='75'
          stroke='url(#ironGold)'
          strokeWidth='0.2'
          opacity='0.3'
          filter='url(#hologram)'
        />
      </motion.g>

      {/* Top Left Corner - Iron Man Style */}
      <motion.path
        d='M2 20 V2 H20'
        stroke='url(#ironGold)'
        strokeWidth='2.5'
        filter='url(#ironGlow)'
        variants={cornerVariants}
      />
      <motion.rect
        x='1'
        y='1'
        width='8'
        height='2'
        fill='url(#ironGold)'
        filter='url(#ironGlow)'
        variants={cornerVariants}
      />
      <motion.rect
        x='1'
        y='1'
        width='2'
        height='8'
        fill='url(#ironGold)'
        filter='url(#ironGlow)'
        variants={cornerVariants}
      />

      {/* Top Right Corner */}
      <motion.path
        d='M80 2 H98 V20'
        stroke='url(#ironGold)'
        strokeWidth='2.5'
        filter='url(#ironGlow)'
        variants={cornerVariants}
      />
      <motion.rect
        x='91'
        y='1'
        width='8'
        height='2'
        fill='url(#ironGold)'
        filter='url(#ironGlow)'
        variants={cornerVariants}
      />
      <motion.rect
        x='97'
        y='1'
        width='2'
        height='8'
        fill='url(#ironGold)'
        filter='url(#ironGlow)'
        variants={cornerVariants}
      />

      {/* Bottom Right Corner */}
      <motion.path
        d='M98 80 V98 H80'
        stroke='url(#ironGold)'
        strokeWidth='2.5'
        filter='url(#ironGlow)'
        variants={cornerVariants}
      />
      <motion.rect
        x='91'
        y='97'
        width='8'
        height='2'
        fill='url(#ironGold)'
        filter='url(#ironGlow)'
        variants={cornerVariants}
      />
      <motion.rect
        x='97'
        y='91'
        width='2'
        height='8'
        fill='url(#ironGold)'
        filter='url(#ironGlow)'
        variants={cornerVariants}
      />

      {/* Bottom Left Corner */}
      <motion.path
        d='M20 98 H2 V80'
        stroke='url(#ironGold)'
        strokeWidth='2.5'
        filter='url(#ironGlow)'
        variants={cornerVariants}
      />
      <motion.rect
        x='1'
        y='97'
        width='8'
        height='2'
        fill='url(#ironGold)'
        filter='url(#ironGlow)'
        variants={cornerVariants}
      />
      <motion.rect
        x='1'
        y='91'
        width='2'
        height='8'
        fill='url(#ironGold)'
        filter='url(#ironGlow)'
        variants={cornerVariants}
      />

      {/* Arc Reactor Style Corner Indicators */}
      <motion.circle
        cx='2'
        cy='2'
        r='2'
        fill='url(#arcReactorGrad)'
        filter='url(#arcReactor)'
        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.circle
        cx='98'
        cy='2'
        r='2'
        fill='url(#arcReactorGrad)'
        filter='url(#arcReactor)'
        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          delay: 0.3,
        }}
      />
      <motion.circle
        cx='98'
        cy='98'
        r='2'
        fill='url(#arcReactorGrad)'
        filter='url(#arcReactor)'
        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          delay: 0.6,
        }}
      />
      <motion.circle
        cx='2'
        cy='98'
        r='2'
        fill='url(#arcReactorGrad)'
        filter='url(#arcReactor)'
        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          delay: 0.9,
        }}
      />
    </motion.svg>
  );
}
