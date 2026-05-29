"use client";

import { motion } from "framer-motion";
import { Braces, Cpu, Layers3, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const cards = [
  {
    icon: ShieldCheck,
    title: "Fiable por defecto",
    body: "Considero la disponibilidad, permisos limpios, auditoría y fallos controlados como características de producto.",
  },
  {
    icon: Layers3,
    title: "Interfaces premium",
    body: "Cada dashboard, centro de control y tienda recibe el acabado que esperan los usuarios de software de alta gama.",
  },
  {
    icon: Cpu,
    title: "Automatización primero",
    body: "Bots, pipelines, alertas y acciones administrativas diseñadas para ahorrar horas al equipo cada semana.",
  },
  {
    icon: Braces,
    title: "Sistemas tipados",
    body: "TypeScript estricto, módulos reutilizables y contratos claros mantienen los proyectos rápidos y mantenibles.",
  },
];

const timeline = [
  "Descubrimiento y mapeo del sistema",
  "Prototipo de interfaz con lenguaje de motion",
  "Arquitectura backend e integraciones",
  "Lanzamiento, analítica e iteración",
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Sobre mí"
            title="Un desarrollador orientado a sistemas con gusto por el diseño cinematográfico de producto."
            body="Me centro en infraestructura para desarrolladores envuelta en interfaces elegantes y responsivas. El punto ideal es cuando una herramienta se siente potente, rápida e inequívocamente personalizada."
          />

        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                className="gsap-reveal glass-panel rounded-lg p-5"
                whileHover={{ y: -8, boxShadow: "0 28px 90px rgba(45, 212, 191, 0.16)" }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="gsap-reveal mt-14 rounded-lg border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl">
        <div className="grid gap-3 md:grid-cols-4">
          {timeline.map((item, index) => (
            <div key={item} className="relative rounded-md border border-white/10 bg-slate-950/50 p-4">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-md bg-cyan-300/12 font-mono text-xs text-cyan-100">
                  0{index + 1}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-cyan-300/50 to-transparent" />
              </div>
              <p className="text-sm font-medium text-white/82">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
