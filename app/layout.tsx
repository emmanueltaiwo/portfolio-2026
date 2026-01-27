import type React from 'react';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Emmanuel Taiwo - Software Engineer',
    template: '%s | Emmanuel Taiwo - Software Engineer',
  },
  description:
    'Full Stack Software Engineer with 5+ years of experience building scalable web applications, AI-powered tools, and automated workflows.',
  keywords: [
    'Emmanuel Taiwo',
    'Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'AI Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'Portfolio',
    'Web Applications',
    'AI Integration',
    'Machine Learning',
    'OpenAI',
    'Supabase',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Docker',
    'CI/CD',
  ],
  authors: [{ name: 'Emmanuel Taiwo' }],
  creator: 'Emmanuel Taiwo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://emmanueltaiwo.dev',
    title: 'Emmanuel Taiwo - Software Engineer',
    description:
      'Full Stack Software Engineer with 5+ years of experience building scalable web applications, AI-powered tools, and automated workflows.',
    siteName: 'Emmanuel Taiwo',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Emmanuel Taiwo - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emmanuel Taiwo - Software Engineer',
    description:
      'Full Stack Software Engineer with 5+ years of experience building scalable web applications, AI-powered tools, and automated workflows.',
    creator: '@ez0xai',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://emmanueltaiwo.dev'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
