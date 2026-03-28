import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import TargetCursor from '@/components/TargetCursor';

export default function Home() {
  return (
    <main className="relative z-10">
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <Certifications />
      <Contact />
    </main>
  );
}
