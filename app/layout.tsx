import type React from 'react';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const geist = Geist({ subsets: ['latin'] });

const siteUrl = 'https://emmanueltaiwo.dev';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Emmanuel Taiwo',
  url: siteUrl,
  jobTitle: 'Software Engineer',
  description:
    'Full stack Software Engineer in Nigeria with 5+ years of experience building scalable web applications, AI-powered tools, and developer products.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NG',
    addressLocality: 'Lagos',
    addressRegion: 'Lagos',
  },
  sameAs: [
    'https://github.com/emmanueltaiwo',
    'https://linkedin.com/in/emmanueloluwafunso',
    'https://x.com/ex0xai',
    'https://medium.com/@emmanueloluwafunso',
  ],
  knowsAbout: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Full Stack Development',
    'AI Integration',
    'Distributed Systems',
  ],
  email: 'emmanueltaiwo019@gmail.com',
  image: `${siteUrl}/og.png`,
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Emmanuel Taiwo - Software Engineer',
  url: siteUrl,
  description:
    'Portfolio of Emmanuel Taiwo, Software Engineer in Nigeria. Full stack developer building scalable web applications and developer tools.',
  author: {
    '@type': 'Person',
    name: 'Emmanuel Taiwo',
    url: siteUrl,
  },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'ReadAction',
    target: siteUrl,
  },
};
const defaultTitle = 'Emmanuel Taiwo - Software Engineer in Nigeria | Full Stack Developer';
const defaultDescription =
  'Emmanuel Taiwo is a Software Engineer in Nigeria with 5+ years of experience. Full stack developer building scalable web applications, AI-powered tools, and developer products. Available for remote and Lagos-based roles.';

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: '%s | Emmanuel Taiwo - Software Engineer',
  },
  description: defaultDescription,
  keywords: [
    'Emmanuel Taiwo',
    'Software Engineer Nigeria',
    'Software Engineer in Nigeria',
    'Nigerian Software Engineer',
    'Full Stack Developer Nigeria',
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
    'Lagos Software Engineer',
    'Remote Software Engineer',
    'African Tech',
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
  authors: [{ name: 'Emmanuel Taiwo', url: siteUrl }],
  creator: 'Emmanuel Taiwo',
  publisher: 'Emmanuel Taiwo',
  applicationName: 'Emmanuel Taiwo Portfolio',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    siteName: 'Emmanuel Taiwo',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Emmanuel Taiwo - Software Engineer in Nigeria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
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
  metadataBase: new URL(siteUrl),
  other: {
    'geo.region': 'NG',
    'geo.placename': 'Nigeria',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={`${geist.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
