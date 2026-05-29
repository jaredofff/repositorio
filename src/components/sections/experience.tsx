"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experiencia"
        title="Una línea de tiempo vertical de oficio de producto, pensamiento de sistemas e infraestructura comunitaria."
        body="El trabajo ha evolucionado desde builds frontend con mucho motion hacia plataformas full-stack fiables para entornos operativos exigentes."
        align="center"
      />

      <div className="relative mx-auto mt-14 max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/55 to-violet-300/0 md:left-1/2" />
        <div className="grid gap-7">
          {experience.map((item, index) => (
            <motion.article
              key={item.year}
              className="timeline-item relative md:grid md:grid-cols-2 md:gap-10"
              whileHover={{ scale: 1.01 }}
            >
              <div className={index % 2 === 0 ? "md:text-right" : "md:col-start-2"}>
                <div className="glass-panel ml-12 rounded-lg p-5 md:ml-0">
                  <div className="font-mono text-sm text-cyan-100">{item.year}</div>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </div>
              </div>
              <span className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border border-cyan-200 bg-slate-950 shadow-glow md:left-1/2" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
