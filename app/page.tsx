import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import About from '@/components/about';
import Contact from '@/components/contact';

export default function Page() {
  return (
    <main className='min-h-screen bg-background text-foreground pb-8'>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
