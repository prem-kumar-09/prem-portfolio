import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Services } from '@/components/sections/services';
import { Certifications } from '@/components/sections/certifications';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { CustomCursor } from '@/components/custom-cursor';
import { ScrollProgress } from '@/components/scroll-progress';

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navigation />
      <ScrollProgress />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      <CustomCursor />
    </div>
  );
}
