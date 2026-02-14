import type { MetadataRoute } from 'next';

const baseUrl = 'https://emmanueltaiwo.dev';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Emmanuel Taiwo - Software Engineer in Nigeria',
    short_name: 'Emmanuel Taiwo',
    description:
      'Portfolio of Emmanuel Taiwo, Software Engineer in Nigeria. Full stack developer building scalable web applications and developer tools.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/og.png',
        sizes: '1200x630',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['portfolio', 'technology'],
  };
}
