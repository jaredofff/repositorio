"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { techStack } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="stack" className="section-shell">
      <SectionHeading
        eyebrow="Tecnologías"
        title="Un conjunto de herramientas ligero para ingeniería de producto, automatización y trabajo UI premium."
        body="La stack se mantiene enfocada: sistemas frontend modernos, backends fiables, bases de datos y herramientas de automatización que sostienen trabajo real de producto."
        align="center"
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.article
              key={tech.name}
              className="gsap-reveal group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl"
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              style={{ transitionDelay: `${index * 45}ms` }}
            >
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className={cn("absolute inset-x-0 top-0 h-px bg-gradient-to-r", tech.tint)} />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cyan-300/12 to-transparent blur-2xl" />
              </div>

              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className={cn(
                      "grid h-12 w-12 place-items-center rounded-md bg-gradient-to-br text-slate-950 shadow-lg shadow-cyan-500/10",
                      tech.tint,
                    )}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/6 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">
                    Núcleo
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{tech.detail}</p>

                <div className="mt-5 flex items-center gap-2 text-xs text-white/50">
                  <span className={cn("h-2 w-2 rounded-full bg-gradient-to-r", tech.tint)} />
                  Flujo de trabajo premium listo para producción
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
