import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { AnimationProvider } from "@/components/system/animation-provider";
import { CustomCursor } from "@/components/system/custom-cursor";
import { LoadingScreen } from "@/components/system/loading-screen";
import { ParticleField } from "@/components/system/particle-field";
import { ScrollProgress } from "@/components/system/scroll-progress";
import { SoundEffects } from "@/components/system/sound-effects";
import { getGitHubProfileSummary } from "@/lib/github";

export default async function Home() {
  const github = await getGitHubProfileSummary("jaredofff");

  return (
    <AnimationProvider>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <SoundEffects />
      <ParticleField />
      <div className="noise-overlay" />
      <main className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none fixed inset-0 z-0 bg-premium-radial opacity-90" />
        <div className="pointer-events-none fixed inset-0 z-0 aurora-layer opacity-70" />
        <Hero github={github} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </AnimationProvider>
  );
}
