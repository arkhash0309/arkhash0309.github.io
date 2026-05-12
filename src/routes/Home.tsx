import { Hero } from '@/components/sections/Hero';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { AllProjects } from '@/components/sections/AllProjects';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Certifications } from '@/components/sections/Certifications';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AllProjects />
      <Experience />
      <Skills />
      <Certifications />
      <Education />
      <Contact />
    </>
  );
}
