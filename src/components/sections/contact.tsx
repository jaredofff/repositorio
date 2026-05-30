"use client";

import { motion } from "framer-motion";
import { Github, Mail, MessageCircle, Send } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const contactLinks = [
  {
    label: "Comunidad Discord",
    value: "MC Market — plugins, mcmodels, configs, programas, buildmaps",
    href: "https://discord.gg/Tvhg65bTRE",
    icon: MessageCircle,
  },
  {
    label: "GitHub",
    value: "@jaredofff",
    href: "https://github.com/jaredofff?tab=repositories",
    icon: Github,
  },
  {
    label: "Correo",
    value: "sierraeuan@gmail.com",
    href: "mailto:sierraeuan@gmail.com",
    icon: Mail,
  },
];

const contactEmail = "sierraeuan@gmail.com";

function buildMailtoLink(payload: {
  name: string | null;
  email: string | null;
  project: string | null;
  message: string | null;
}) {
  const subject = `Consulta sobre ${payload.project?.trim() || "tu proyecto"}`;
  const body = [
    `Nombre: ${payload.name?.trim() || "(no especificado)"}`,
    `Correo: ${payload.email?.trim() || "(no especificado)"}`,
    `Proyecto: ${payload.project?.trim() || "(no especificado)"}`,
    "",
    payload.message?.trim() || "(no especificado)",
  ].join("\n");

  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const form = new FormData(event.currentTarget as HTMLFormElement);
    const payload = {
      name: form.get("name") as string | null,
      email: form.get("email") as string | null,
      project: form.get("project") as string | null,
      message: form.get("message") as string | null,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data?.error || "Error al enviar el formulario.");
        setStatus("error");
        return;
      }

      setStatus("success");
      (event.currentTarget as HTMLFormElement).reset();
    } catch (error) {
      console.error("Contact form error:", error);
      window.location.href = buildMailtoLink(payload);
      setErrorMessage(null);
      setStatus("success");
      (event.currentTarget as HTMLFormElement).reset();
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="¿Tienes en mente un sistema premium? Hagámoslo inevitable."
            body="Soy dueño de una comunidad de Discord donde compartimos plugins, mcmodels, configs, programas y buildmaps para Minecraft. Comparte el problema, la audiencia y el resultado que quieres; lo convertiré en un camino técnico claro con una experiencia de usuario pulida."
          />
          <div className="gsap-reveal mt-8 grid gap-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-cyan-300/8"
                  data-sound
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/7 text-cyan-100 transition group-hover:border-cyan-300/35">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                          <span className="block text-sm font-semibold text-white">{link.label}</span>
                          <span className="block font-mono text-xs text-white/45">{link.value}</span>
                    </span>
                  </span>
                  <span className="text-sm text-cyan-100 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                    Abrir
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <motion.form
          className="gsap-reveal glass-panel rounded-lg p-5 sm:p-7"
          whileHover={{ boxShadow: "0 30px 90px rgba(96, 165, 250, 0.13)" }}
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-white/72">
              Nombre
              <Input name="name" placeholder="Tu nombre" autoComplete="name" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-white/72">
              Correo electrónico
              <Input name="email" type="email" placeholder="tu@ejemplo.com" autoComplete="email" />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-medium text-white/72">
            Tipo de proyecto
            <Input name="project" placeholder="Bot de Discord, dashboard, sistema web..." />
          </label>
          <label className="mt-4 grid gap-2 text-sm font-medium text-white/72">
            Mensaje
            <Textarea name="message" placeholder="Cuéntame qué quieres construir." />
          </label>
          <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm leading-6 text-muted-foreground">
              {status === "success" ? "Consulta enviada. Te responderé por Discord." : "El formulario enviará tu consulta a la comunidad de Discord."}
            </p>
            <div className="flex items-center gap-3">
              <Button type="submit" size="lg" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>Enviando...</>
                ) : (
                  <>
                    Abrir correo
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </Button>
              {status === "error" && <div className="text-sm text-rose-400">{errorMessage}</div>}
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
