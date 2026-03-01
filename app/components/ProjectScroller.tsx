'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';

export interface Project {
  name: string;
  description: string;
  url: string;
  image: string;
}

const SPEED_PX_PER_SEC = 15;

export function ProjectScroller({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    function tick(time: number) {
      const track = trackRef.current;
      if (!track) return;
      const setWidth = track.scrollWidth / 2;
      const delta = lastTimeRef.current
        ? (time - lastTimeRef.current) / 1000
        : 0;
      lastTimeRef.current = time;
      positionRef.current -= SPEED_PX_PER_SEC * delta;
      if (positionRef.current <= -setWidth) {
        positionRef.current += setWidth;
      }
      track.style.transform = `translateX(${positionRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [projects.length]);

  const duplicated = [...projects, ...projects];

  return (
    <div className='relative overflow-hidden'>
      <div
        className='absolute left-0 top-0 bottom-0 w-10 sm:w-16 md:w-24 bg-linear-to-r from-black to-transparent z-10 pointer-events-none'
        aria-hidden
      />
      <div
        className='absolute right-0 top-0 bottom-0 w-10 sm:w-16 md:w-24 bg-linear-to-l from-black to-transparent z-10 pointer-events-none'
        aria-hidden
      />
      <div
        ref={trackRef}
        className='flex gap-3 sm:gap-4 px-3 sm:px-6 will-change-transform'
        style={{ width: 'max-content' }}
      >
        {duplicated.map((project, i) => (
          <a
            key={`${project.name}-${i}`}
            href={project.url}
            target='_blank'
            rel='noopener noreferrer'
            className='group shrink-0 w-[220px] sm:w-[260px] md:w-[280px] block overflow-hidden relative rounded-xl sm:rounded-2xl'
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                width={280}
                height={280}
                className='w-full h-auto block'
                sizes='(max-width: 640px) 220px, (max-width: 768px) 260px, 280px'
              />
            ) : (
              <div className='w-full aspect-4/3 flex items-center justify-center bg-white/5'>
                <span className='text-base sm:text-lg font-semibold text-white/70'>
                  {project.name}
                </span>
              </div>
            )}
            <div className='absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out rounded-xl sm:rounded-2xl'>
              <span className='font-semibold text-white text-sm sm:text-base'>
                {project.name}
              </span>
              <p className='mt-1.5 text-[11px] sm:text-[12px] text-white/70 leading-relaxed'>
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
