"use client";

import { motion } from "framer-motion";
import { Code2, Github } from "lucide-react";
import { navigation } from "@/lib/portfolio-data";
import type { NavEntry } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";

export function SiteNav() {
  return (
    <motion.header
      className="fixed left-4 right-4 top-4 z-40 mx-auto max-w-[1120px] rounded-lg border border-white/10 bg-slate-950/54 px-3 py-3 shadow-2xl shadow-black/25 backdrop-blur-2xl"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: 0.9 }}
    >
      <nav className="flex items-center justify-between gap-3">
        <a href="#home" className="flex items-center gap-2 rounded-md px-2 py-1.5" data-sound>
          <span className="grid h-9 w-9 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-100 shadow-glow">
            <Code2 className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">Onze Studio</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item: NavEntry) => {
            const label = typeof item === "string" ? item : item.label;
            const id = typeof item === "string" ? label.toLowerCase().replace(/\s+/g, "") : item.id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/62 transition hover:bg-white/8 hover:text-white"
                data-sound
              >
                {label}
              </a>
            );
          })}
        </div>
        <Button asChild variant="secondary" size="sm">
          <a href="https://github.com/jaredofff?tab=repositories" target="_blank" rel="noreferrer">
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        </Button>
      </nav>
    </motion.header>
  );
}
