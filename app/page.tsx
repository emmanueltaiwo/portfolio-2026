interface Project {
  name: string;
  description: string;
  url: string;
  image?: string;
  showInShowcase: boolean;
}

const projects: Project[] = [
  {
    name: 'Face Verify',
    description:
      'Real-time face verification in the browser with guided KYC-style steps.',
    url: 'https://faceverify-app.vercel.app',
    showInShowcase: false,
  },
  {
    name: 'MMRStory',
    description:
      'Generate shareable Wrapped-style stories from TrustMRR startup data.',
    url: 'https://mrrstory.xyz',
    showInShowcase: false,
  },
  {
    name: 'GithubRadar',
    description: 'Flight radar but for GitHub activity happening right now.',
    url: 'https://githubradar.vercel.app',
    showInShowcase: true,
    image: '/githubradar.png',
  },
  {
    name: 'Voice Globe',
    description: 'Leave short voice messages anywhere on Earth.',
    url: 'https://voiceglobe.live',
    image: '/voiceglobe.png',
    showInShowcase: true,
  },
  {
    name: 'MRRradar',
    description: 'Global map of profitable startups from TrustMRR API.',
    url: 'https://mrrradar.com',
    image: '/mrrradar.png',
    showInShowcase: true,
  },
  {
    name: 'Ghstories',
    description: 'Turn your GitHub commits into stories.',
    url: 'https://ghstories.xyz',
    image: '/ghstories.png',
    showInShowcase: true,
  },
  {
    name: 'CountdownParty',
    description: 'Beautiful real-time countdowns for any event.',
    url: 'https://countdownparty.xyz',
    image: '/countdownparty.png',
    showInShowcase: true,
  },
  {
    name: 'Snapwyr',
    description: 'Zero-config HTTP request logger with a real-time dashboard.',
    url: 'https://snapwyr.xyz',
    image: '/snapwyr.png',
    showInShowcase: true,
  },
  {
    name: 'TypeServe Live',
    description: 'Mock APIs from TypeScript types, instantly in the browser.',
    url: 'https://typeserve.live',
    image: '/typeserve-live.png',
    showInShowcase: true,
  },
  {
    name: 'TypeServe',
    description: 'CLI tool that generates mock APIs from TypeScript types.',
    url: 'https://typeserve.com',
    image: '/typeserve.png',
    showInShowcase: true,
  },
  {
    name: 'Limitly',
    description:
      'TypeScript-first rate limiting with Redis and graceful degradation.',
    url: 'https://limitly.xyz',
    image: '/limitly.png',
    showInShowcase: true,
  },
];

const links = [
  {
    label: 'Resumé',
    href: 'https://drive.google.com/file/d/1f5KTbPXH97P2cHGrZU-VS6h05gT0Q3b0/view',
  },
  { label: 'GitHub', href: 'https://github.com/emmanueltaiwo' },
  { label: 'X', href: 'https://x.com/ez0xai' },
  { label: 'TikTok', href: 'https://tiktok.com/@ez0xai' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/emmanueloluwafunso' },
  { label: 'Medium', href: 'https://medium.com/@emmanueloluwafunso' },
  { label: 'Email', href: 'mailto:emmanueltaiwo019@gmail.com' },
];

export default function Page() {
  return (
    <main className='min-h-screen bg-black text-white'>
      <div className='max-w-2xl mx-auto px-5 sm:px-8'>
        <section className='pt-16 sm:pt-28 pb-12 sm:pb-16'>
          <h1 className='text-4xl sm:text-6xl font-bold tracking-tight leading-none'>
            Emmanuel Taiwo
          </h1>
          <p className='mt-4 sm:mt-5 text-white/70 text-sm sm:text-base leading-relaxed max-w-sm'>
            Software engineer. I build cool and weird internet things.
          </p>
          <nav className='mt-6 sm:mt-8 flex flex-wrap gap-x-5 gap-y-2'>
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={
                  href.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                className='text-sm text-white/60 hover:text-white transition-colors duration-150'
              >
                {label}
              </a>
            ))}
          </nav>
        </section>

        <section className='pb-20 sm:pb-28'>
          <p className='text-[10px] uppercase tracking-widest text-white/45 mb-1'>
            Projects
          </p>
          <div>
            {projects.map((project, i) => (
              <a
                key={project.name}
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-start gap-4 py-4 border-t border-white/8 hover:border-white/20 transition-colors duration-150'
              >
                <span className='text-[11px] text-white/40 tabular-nums pt-0.5 w-5 shrink-0'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className='flex-1 min-w-0'>
                  <span className='font-medium text-sm text-white'>
                    {project.name}
                  </span>
                  <p className='mt-0.5 text-xs text-white/60 leading-relaxed'>
                    {project.description}
                  </p>
                </div>
                <span className='text-white/40 group-hover:text-white/80 transition-colors duration-150 text-base shrink-0 pt-0.5'>
                  ↗
                </span>
              </a>
            ))}
            <div className='border-t border-white/8' />
          </div>
        </section>

        <footer className='pb-10 text-xs text-white/45'>
          © {new Date().getFullYear()} Emmanuel Taiwo
        </footer>
      </div>
    </main>
  );
}
