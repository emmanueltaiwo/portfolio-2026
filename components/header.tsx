'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FolderGit2Icon, User, UserPen, Github, Linkedin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import XIcon from './xicon';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Projects', href: '#projects', icon: FolderGit2Icon },
    { label: 'About', href: '#about', icon: User },
    { label: 'Contact', href: '#contact', icon: UserPen },
  ];

  const socialLinks = [
    { icon: Github, link: 'https://github.com/emmanueltaiwo' },
    { icon: XIcon, link: 'https://x.com/ez0xai' },
    { icon: Linkedin, link: 'https://linkedin.com/in/emmanueloluwafunso' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-sm'
          : ''
      }`}
    >
      <div className='mx-auto max-w-3xl px-4 py-4 md:py-6 md:px-8'>
        <div className='flex items-center justify-between'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href='#'
              className='text-lg font-medium tracking-tight hover:opacity-75 transition-opacity'
            >
              <div className='flex flex-col'>
                <h4 className='text-[rgb(255,255,255)] text-[14px] md:text-[16px] font-semibold'>
                  Emmanuel Taiwo
                </h4>
                <p className='text-[rgb(170,170,170)] text-[12px] md:text-[14px] font-medium'>
                  Full Stack Software Engineer
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-3'>
            <nav className='flex items-center gap-5'>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className='text-sm text-[rgb(170,170,170)] hover:text-foreground transition-colors flex items-center gap-1 group relative'
                  >
                    <link.icon className='w-4 h-4 transition-transform group-hover:scale-110' />
                    <span className='relative'>
                      {link.label}
                      <motion.span
                        className='absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500'
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className='border-[rgb(170,170,170)] border-l-[0.5px] flex items-center gap-2 px-3'>
              <p className='text-sm text-[rgb(170,170,170)] hidden lg:block'>Find me on:</p>

              <ul className='flex items-center gap-3'>
                {socialLinks.map((item, i) => (
                  <motion.a
                    key={i + 1}
                    href={item.link}
                    target='_blank'
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className='relative group'
                  >
                    <item.icon className='w-4 h-4 text-sm text-[rgb(170,170,170)] hover:text-foreground transition-colors' />
                    <motion.span
                      className='absolute inset-0 bg-yellow-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100'
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className='md:hidden p-2 text-[rgb(170,170,170)] hover:text-foreground transition-colors relative z-50'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label='Toggle menu'
          >
            <AnimatePresence mode='wait'>
              {isMobileMenuOpen ? (
                <motion.div
                  key='close'
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className='w-6 h-6' />
                </motion.div>
              ) : (
                <motion.div
                  key='menu'
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className='w-6 h-6' />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden'
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='fixed top-0 right-0 bottom-0 w-80 bg-background border-l border-border z-40 md:hidden overflow-y-auto'
            >
              <div className='p-6 space-y-8 pt-20'>
                {/* Navigation Links */}
                <nav className='space-y-4'>
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={handleNavClick}
                        className='flex items-center gap-3 p-3 text-[rgb(170,170,170)] hover:text-foreground transition-colors group relative overflow-hidden rounded-lg'
                      >
                        <motion.div
                          className='absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100'
                          transition={{ duration: 0.3 }}
                        />
                        <link.icon className='w-5 h-5 relative z-10 transition-transform group-hover:scale-110' />
                        <span className='text-lg font-medium relative z-10'>{link.label}</span>
                        <motion.div
                          className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500'
                          initial={{ scaleY: 0 }}
                          whileHover={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className='pt-6 border-t border-border'
                >
                  <p className='text-sm text-[rgb(170,170,170)] mb-4 uppercase tracking-wider'>
                    Find me on:
                  </p>
                  <div className='flex items-center gap-4'>
                    {socialLinks.map((item, i) => (
                      <motion.a
                        key={i + 1}
                        href={item.link}
                        target='_blank'
                        onClick={handleNavClick}
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='p-3 rounded-lg border border-border hover:border-yellow-500/50 transition-colors relative group'
                      >
                        <item.icon className='w-5 h-5 text-[rgb(170,170,170)] group-hover:text-foreground transition-colors' />
                        <motion.span
                          className='absolute inset-0 bg-yellow-500/10 rounded-lg opacity-0 group-hover:opacity-100'
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Sci-fi decorative elements */}
                <motion.div
                  className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent'
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
