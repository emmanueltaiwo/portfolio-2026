'use client';

import { motion } from 'motion/react';

export default function About() {
  const paragraphs = [
    "I'm a software engineer, builder, and problem solver who enjoys turning ideas into products that actually work in the real world. I care less about hype and more about building things that are useful, reliable, and thoughtfully engineered. For me, good software is clear in purpose and solid in execution.",
    "These days, I mostly build AI-powered applications, agents, web apps, and APIs. I enjoy working across the stack, thinking through architecture, performance, and scalability from the start. I like moving fast, but not carelessly. I ship quickly while keeping systems maintainable and ready to grow.",
    "I'm drawn to solving real problems, no matter the industry or domain. Whether it's an early-stage product or a growing system, I focus on understanding the problem deeply and making the right technical trade-offs. I take pride in writing code that lasts, learning constantly, and building things that make sense.",
  ];

  return (
    <section id='about' className='mx-auto max-w-2xl px-4 md:px-0 border-t border-border py-12 md:py-16'>
      <motion.h2
        className='text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 tracking-tight'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About
      </motion.h2>
      <div className='space-y-6 max-w-2xl relative'>
        {/* Decorative line */}
        <motion.div
          className='absolute left-0 top-0 bottom-0 w-[1px] bg-border'
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className='text-sm md:text-base lg:text-lg text-foreground/90 leading-relaxed pl-4 md:pl-6 relative'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <span className='absolute left-0 top-2 text-muted-foreground'>
              ▸
            </span>
            {paragraph}
          </motion.p>
        ))}

        {/* Decorative bottom accent */}
        <motion.div
          className='h-px bg-border mt-8'
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>
    </section>
  );
}
