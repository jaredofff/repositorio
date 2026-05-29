"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, MessageCircle, MousePointer2 } from "lucide-react";
import { SiteNav } from "@/components/shared/site-nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { GitHubProfileSummary } from "@/lib/github";
import { socialLinks } from "@/lib/portfolio-data";

const typingWords = ["sistemas", "herramientas", "interfaces", "automatización"];

function useTypingEffect(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const delay = deleting ? 45 : 82;
    const pause = !deleting && letterIndex === word.length ? 900 : delay;

    const timer = window.setTimeout(() => {
      if (!deleting && letterIndex < word.length) {
        setLetterIndex((value) => value + 1);
        return;
      }

      if (!deleting && letterIndex === word.length) {
        setDeleting(true);
        return;
      }

      if (deleting && letterIndex > 0) {
        setLetterIndex((value) => value - 1);
        return;
      }

      setDeleting(false);
      setWordIndex((value) => (value + 1) % words.length);
    }, pause);

    return () => window.clearTimeout(timer);
  }, [deleting, letterIndex, wordIndex, words]);

  return words[wordIndex].slice(0, letterIndex);
}

type HeroProps = {
  github: GitHubProfileSummary;
};

export function Hero({ github }: HeroProps) {
  const typed = useTypingEffect(typingWords);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 18 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const spotlight = github.repositories[0];
  const topLanguages = github.primaryLanguages.length > 0 ? github.primaryLanguages : ["GitHub"];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6 lg:px-8"
      onPointerMove={handlePointerMove}
    >
      <SiteNav />
      <div className="pointer-events-none absolute inset-0 z-[1] grid-mask bg-[linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60 animate-grid-pulse" />
      <div className="section-shell flex min-h-[calc(100vh-7rem)] items-center py-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 22, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.85, ease: "easeOut", delay: 0.2 }}
            >
              <Badge className="mb-6 border-cyan-300/24 bg-cyan-300/10 text-cyan-100">
                Portafolio impulsado por GitHub
              </Badge>
              <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-6xl xl:text-7xl">
                Desarrollador premium construyendo
                <span className="shimmer-text inline-block min-h-[1.05em] min-w-[9ch] pl-3">
                  {typed}
                  <span className="text-cyan-100">|</span>
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Enfocado en ingeniería de sistemas, herramientas para comunidades e interfaces SaaS modernas. Este portafolio muestra trabajo real de GitHub en lugar de métricas de demostración.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.45 }}
            >
              <Button asChild size="lg">
                <a href="#projects">
                  Proyectos destacados
                  <ArrowUpRight className="h-4 w-4 transition group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={github.profileUrl} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  Perfil en GitHub
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-md border border-white/10 bg-white/6 px-3 py-2 text-sm text-white/70 backdrop-blur-md transition hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-white"
                  data-sound
                >
                  {link.label}: <span className="font-mono text-cyan-100">{link.handle}</span>
                </a>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 grid gap-3 sm:grid-cols-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                <div className="text-xs uppercase tracking-[0.24em] text-white/40">Repositorios</div>
                <div className="mt-2 text-2xl font-semibold text-white">{github.totalRepositories || "Live"}</div>
                <div className="mt-1 text-sm text-muted-foreground">Repositorios públicos en GitHub</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                <div className="text-xs uppercase tracking-[0.24em] text-white/40">Lenguajes</div>
                <div className="mt-2 text-2xl font-semibold text-white">{topLanguages.length}</div>
                <div className="mt-1 text-sm text-muted-foreground">Herramientas principales en uso</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                <div className="text-xs uppercase tracking-[0.24em] text-white/40">Última actualización</div>
                <div className="mt-2 text-lg font-semibold text-white">{github.latestUpdateLabel}</div>
                <div className="mt-1 text-sm text-muted-foreground">Actividad más reciente mostrada</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative z-10 mx-auto w-full max-w-[560px] lg:mr-0"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.92, y: 34 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.35 }}
          >
            <div className="glass-panel scanline relative overflow-hidden rounded-lg p-4">
              <div className="rounded-md border border-white/10 bg-slate-950/70 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  </div>
                  <div className="font-mono text-xs text-white/45">github-activity.tsx</div>
                </div>

                <div className="grid gap-3 font-mono text-sm">
                  <div className="rounded-md bg-white/[0.04] p-3 text-cyan-100">
                    {`const focus = ["Next.js", "TypeScript", "Node.js", "Discord.js"];`}
                  </div>
                  <div className="rounded-md bg-white/[0.04] p-3 text-violet-100">
                    {`await ship({ profile: "@${github.username}", repos: ${github.totalRepositories || 0} });`}
                  </div>
                  <div className="rounded-md bg-white/[0.04] p-3 text-blue-100">
                    {`deploy.build(${github.repositories.length ? `"${spotlight?.name ?? "featured repos"}"` : '"real repositories"'});`}
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-md border border-white/10 bg-white/6 p-3">
                    <div className="text-xs uppercase tracking-[0.24em] text-white/40">Current focus</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {topLanguages.map((language) => (
                        <span key={language} className="rounded-md bg-cyan-300/10 px-2.5 py-1 text-xs text-cyan-100">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/6 p-3">
                    <div className="text-xs uppercase tracking-[0.24em] text-white/40">Live profile</div>
                    <div className="mt-2 text-sm leading-6 text-white/80">
                      {spotlight ? (
                        <>
                          <span className="font-semibold text-white">{spotlight.name}</span> es el último repositorio destacado obtenido desde GitHub.
                        </>
                      ) : (
                        "Los repositorios de GitHub se obtienen dinámicamente y se muestran abajo."
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-6 right-6 -z-10 h-24 bg-gradient-to-r from-transparent via-cyan-300/16 to-transparent blur-3xl" />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/44 md:flex"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        <MousePointer2 className="h-4 w-4" aria-hidden="true" />
        Desplázate para explorar
      </motion.div>
      <div className="sr-only">
        Atajos sociales: <MessageCircle />
      </div>
    </section>
  );
}
