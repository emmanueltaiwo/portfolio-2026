'use client';

import { motion } from 'motion/react';

export default function About() {
  return (
    <section id='about' className='mx-auto max-w-2xl px-4 md:px-0 border-t border-border py-12 md:py-16'>
      <motion.h2
        className='text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 tracking-tight'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About
      </motion.h2>

      <motion.div
        className='space-y-6'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className='text-base md:text-lg text-muted-foreground leading-relaxed'>
          I build AI-powered applications, web apps, and APIs with a focus on
          clean architecture, performance, and scalability.
        </p>
        <p className='text-base md:text-lg text-muted-foreground leading-relaxed'>
          I enjoy solving real problems and writing code that lasts, constantly
          learning and building things that make sense.
        </p>
      </motion.div>
    </section>
  );
}
