import Image from 'next/image';
import { ProjectScroller } from './components/ProjectScroller';

interface Project {
  name: string;
  description: string;
  url: string;
  image: string;
}

const projects: Project[] = [
  {
    name: 'Ghstories',
    description: 'Turn your github commits into stories',
    url: 'https://ghstories.xyz',
    image: '/ghstories.png',
  },
  {
    name: 'CountdownParty',
    description:
      'Create beautiful and customizable real-time countdown for any event.',
    url: 'https://countdownparty.xyz',
    image: '/countdownparty.png',
  },
  {
    name: 'Snapwyr',
    description:
      'Zero-config HTTP request logger for Node.js with a real-time web dashboard.',
    url: 'https://snapwyr.xyz',
    image: '/snapwyr.png',
  },
  {
    name: 'TypeServe Live',
    description:
      'Generate temporary mock APIs instantly from your TypeScript type definitions in the web.',
    url: 'https://typeserve.live',
    image: '/typeserve-live.png',
  },
  {
    name: 'TypeServe',
    description:
      'The first and only CLI tool that generates mock APIs directly from TypeScript types.',
    url: 'https://typeserve.com',
    image: '/typeserve.png',
  },
  {
    name: 'Limitly',
    description:
      'TypeScript-first rate limiting service with Redis backend. Built for distributed systems with graceful degradation.',
    url: 'https://limitly.xyz',
    image: '/limitly.png',
  },
];

const stack = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'AI / LLMs',
];

const links = [
  {
    label: 'Resumé',
    href: 'https://drive.google.com/file/d/1f5KTbPXH97P2cHGrZU-VS6h05gT0Q3b0/view',
  },
  { label: 'GitHub', href: 'https://github.com/emmanueltaiwo' },
  { label: 'Email', href: 'mailto:emmanueltaiwo019@gmail.com' },
  { label: 'X', href: 'https://x.com/ex0xai' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/emmanueloluwafunso' },
  { label: 'Medium', href: 'https://medium.com/@emmanueloluwafunso' },
];

export default function Page() {
  return (
    <main className='min-h-screen bg-black text-white flex flex-col items-center min-w-0 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]'>
      <div className='w-full max-w-2xl px-4 sm:px-6 flex flex-col items-center text-center min-w-0'>
        {/* Hero */}
        <section className='pt-14 sm:pt-20 md:pt-28 pb-10 sm:pb-12'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight wrap-break-word'>
            I&apos;m Emmanuel
          </h1>
          <p className='mt-2 sm:mt-3 text-white/80 text-base sm:text-lg'>
            I build software and developer tools.
          </p>
          <p className='mt-4 sm:mt-5 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] sm:text-xs text-white/80'>
            {stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </p>
          <nav className='mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/80'>
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={
                  href.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                className='hover:text-white transition-colors duration-200 ease-out'
              >
                {label}
              </a>
            ))}
          </nav>
        </section>

        <section className='w-full py-10 sm:py-16 -mx-4 sm:mx-0'>
          <ProjectScroller projects={projects} />
        </section>

        <section className='w-full py-10 sm:py-16'>
          <a
            href='https://ghstories.xyz'
            target='_blank'
            rel='noopener noreferrer'
            className='group block rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-white/2 hover:border-white/15 hover:bg-white/4 transition-colors duration-200 ease-out'
          >
            <div className='flex flex-row items-center gap-3 sm:gap-6 md:gap-8 p-3 sm:p-6 md:p-8'>
              <div className='relative w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 shrink-0'>
                <Image
                  src='/ghstories.png'
                  alt='Ghstories'
                  fill
                  className='object-contain drop-shadow-[0_0_12px_#faf8f5]'
                  sizes='(max-width: 640px) 48px, (max-width: 768px) 80px, 96px'
                />
              </div>
              <div className='text-left flex-1 min-w-0'>
                <p className='text-[10px] sm:text-[11px] font-medium uppercase tracking-widest text-white/40'>
                  Currently building
                </p>
                <h2 className='mt-0.5 text-base sm:text-xl md:text-2xl font-semibold tracking-tight text-white'>
                  Ghstories
                </h2>
                <p className='mt-0.5 sm:mt-1.5 text-[12px] sm:text-[14px] text-white/60 leading-relaxed line-clamp-2 sm:line-clamp-none'>
                  Your GitHub commits, as stories.
                </p>
                <span className='mt-2 sm:mt-4 inline-block text-[11px] sm:text-[13px] text-white/70 font-medium group-hover:text-white transition-colors duration-200 ease-out'>
                  Visit site →
                </span>
              </div>
            </div>
          </a>
        </section>

        {/* All projects */}
        <section className='w-full py-8 sm:py-12 border-t border-white/10'>
          <h2 className='text-[10px] sm:text-[11px] font-medium uppercase tracking-widest text-white/40 mb-4 sm:mb-6 text-center'>
            ALL projects
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3'>
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                className='group block rounded-lg sm:rounded-xl border border-white/10 bg-white/2 px-3 py-3 sm:px-4 sm:py-3.5 text-left hover:border-white/15 hover:bg-white/4 transition-colors duration-200 ease-out'
              >
                <span className='font-medium text-sm sm:text-base text-white group-hover:underline underline-offset-2'>
                  {project.name}
                </span>
                <p className='mt-0.5 sm:mt-1 text-[12px] sm:text-[13px] text-white/50 leading-relaxed'>
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <footer className='py-8 sm:py-12 text-[12px] sm:text-[13px] text-white/40'>
          © {new Date().getFullYear()} Emmanuel Taiwo
        </footer>
      </div>
    </main>
  );
}
