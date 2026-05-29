"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/portfolio-data";

export function Projects() {
  const discord = socialLinks.find((s) => s.label.toLowerCase().includes("discord") || s.label.toLowerCase().includes("comunidad"));

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Comunidad"
        title="MC Market — Comunidad de Minecraft"
        body="Espacio para compartir plugins, mcmodels, configs, programas, buildmaps y recursos para servidores de Minecraft. Únete para participar, descargar y colaborar."
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-lg leading-7 text-muted-foreground">
            Soy el propietario de la comunidad, donde mantenemos recursos organizados, guías y soporte para servidores. Publicamos plugins, configuraciones, modelos y builds listos para usar.
          </p>

          <ul className="mt-6 list-inside list-disc space-y-2 text-white/80">
            <li>Plugins y herramientas listas para instalar</li>
            <li>Configs y optimizaciones para rendimiento</li>
            <li>MCModels, assets y recursos creativos</li>
            <li>Buildmaps y proyectos colaborativos</li>
          </ul>

          <div className="mt-6 flex gap-3">
            {discord ? (
              <Button asChild size="lg">
                <a href={discord.href} target="_blank" rel="noreferrer">
                  Unirse a la comunidad
                </a>
              </Button>
            ) : null}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/mcmarket.png"
            alt="MC Market"
            width={420}
            height={420}
            className="rounded-lg shadow-lg object-contain"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
