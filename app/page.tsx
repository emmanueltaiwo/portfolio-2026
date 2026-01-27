interface Project {
  name: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    name: 'TypeServe',
    description:
      'TypeServe is the first and only tool that generates mock APIs directly from TypeScript types.',
    url: 'https://typeserve.com',
  },
  {
    name: 'Limitly',
    description:
      'TypeScript-first rate limiting service with Redis backend. Built for distributed systems with graceful degradation.',
    url: 'https://limitly.xyz',
  },
];

export default function Page() {
  return (
    <main className='min-h-screen noise-bg'>
      <div className='mx-auto max-w-xl px-6 py-20 md:py-28'>
        {/* Introduction */}
        <div className='space-y-5 mb-14'>
          <h1 className='text-2xl md:text-3xl font-medium text-gray-100 mb-3 tracking-tight'>
            Emmanuel Taiwo
          </h1>
          <p className='text-sm md:text-base leading-relaxed text-gray-300 font-light'>
            Full-stack engineer building scalable applications and developer
            tools. Currently focused on distributed systems and AI integration.
          </p>
          <p className='text-sm md:text-base leading-relaxed text-gray-300 font-light'>
            TypeScript, Node.js, React. Building free open source developer
            tools.
          </p>

          <p className='text-sm md:text-base leading-relaxed text-white font-light'>
            I&apos;m currently building{' '}
            <a
              href='https://typeserve.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              TypeServe
            </a>
            , the first and only tool that generates mock APIs directly from
            TypeScript types.
          </p>
        </div>

        {/* Social Links */}
        <div className='mb-20 space-x-5'>
          <a
            href='https://drive.google.com/file/d/1f5KTbPXH97P2cHGrZU-VS6h05gT0Q3b0/view'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm md:text-base underline decoration-gray-600 hover:decoration-gray-400 transition-all duration-300 font-light'
          >
            Resumé
          </a>
          <a
            href='https://github.com/emmanueltaiwo'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm md:text-base underline decoration-gray-600 hover:decoration-gray-400 transition-all duration-300 font-light'
          >
            GitHub
          </a>
          <a
            href='mailto:emmanueltaiwo019@gmail.com'
            className='text-sm md:text-base underline decoration-gray-600 hover:decoration-gray-400 transition-all duration-300 font-light'
          >
            Email
          </a>
          <a
            href='https://x.com/ex0xai'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm md:text-base underline decoration-gray-600 hover:decoration-gray-400 transition-all duration-300 font-light'
          >
            X
          </a>
          <a
            href='https://linkedin.com/in/emmanueloluwafunso'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm md:text-base underline decoration-gray-600 hover:decoration-gray-400 transition-all duration-300 font-light'
          >
            LinkedIn
          </a>
        </div>

        {/* Projects */}
        <div className='mb-20'>
          <h2 className='text-lg md:text-xl font-normal mb-10 text-gray-200 tracking-tight'>
            Projects
          </h2>
          <div className='space-y-8'>
            {projects.map((project) => (
              <div key={project.name}>
                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-base md:text-lg font-medium underline decoration-gray-600 hover:decoration-gray-400 transition-all duration-300 block mb-2'
                >
                  {project.name}
                </a>
                <p className='text-sm text-gray-300 font-light leading-relaxed'>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className='border-t border-gray-600/50 pt-8'>
          <p className='text-sm text-gray-300 text-center font-light'>
            © {new Date().getFullYear()} Emmanuel Taiwo
          </p>
        </div>
      </div>
    </main>
  );
}
