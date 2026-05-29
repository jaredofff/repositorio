import {
  SiDiscord,
  SiHtml5,
  SiMongodb,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

export type TechStackItem = {
  name: string;
  icon: IconType;
  detail: string;
  tint: string;
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/jaredofff?tab=repositories", handle: "jaredofff" },
  { label: "Comunidad Discord", href: "https://discord.gg/Tvhg65bTRE", handle: "MC Market" },
  { label: "Correo", href: "mailto:hello@onzestudio.dev", handle: "hello@onzestudio.dev" },
];

export const techStack: TechStackItem[] = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    detail: "App Router, componentes en servidor, SEO y superficies de producto pulidas.",
    tint: "from-white to-cyan-200",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    detail: "Contratos tipados, refactors más seguros y velocidad de desarrollo sostenible.",
    tint: "from-blue-300 to-indigo-200",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    detail: "Interacciones rápidas en cliente, UI con motion y componentes reutilizables.",
    tint: "from-sky-300 to-cyan-200",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    detail: "Capas de API, backends para bots, automatizaciones y orquestación en tiempo real.",
    tint: "from-emerald-300 to-lime-200",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    detail: "Sistemas de diseño, superficies premium y estados de interacción responsivos.",
    tint: "from-cyan-300 to-teal-200",
  },
  {
    name: "Discord.js",
    icon: SiDiscord,
    detail: "Comandos slash, flujos de moderación y herramientas de automatización comunitaria.",
    tint: "from-indigo-300 to-violet-200",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    detail: "Documentos flexibles, eventos analíticos y modelos de datos para bots.",
    tint: "from-green-300 to-emerald-200",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    detail: "Esquemas relacionales, consultas para reportes y manejo de datos fiable.",
    tint: "from-blue-300 to-cyan-200",
  },
  {
    name: "Python",
    icon: SiPython,
    detail: "Automatización, scripts utilitarios y herramientas de soporte backend.",
    tint: "from-yellow-200 to-amber-300",
  },
  {
    name: "HTML/CSS",
    icon: SiHtml5,
    detail: "Estructura semántica, maquetación responsiva y acabado visual refinado.",
    tint: "from-orange-300 to-rose-200",
  },
  {
    name: "React",
    icon: SiReact,
    detail: "Sistemas orientados a componentes, composición de motion y UIs interactivas.",
    tint: "from-sky-300 to-cyan-200",
  },
];

export const experience = [
  {
    year: "2026",
    role: "Desarrollador de sistemas independiente",
    body: "Diseño de plataformas premium para Discord, Minecraft y web, dirigidas a comunidades que requieren interfaces pulidas y automatización fiable.",
  },
  {
    year: "2025",
    role: "Ingeniero Full-Stack de Producto",
    body: "Construcción de dashboards, tiendas, capas de analítica y herramientas administrativas en tiempo real con Next.js, React, Node.js y PostgreSQL.",
  },
  {
    year: "2024",
    role: "Especialista en infraestructura comunitaria",
    body: "Escalado de operaciones de bots, pipelines de moderación y herramientas personalizadas para servidores de juego en comunidades grandes.",
  },
  {
    year: "2023",
    role: "Diseñador de motion para frontend",
    body: "Desarrollo de páginas interactivas de lanzamiento, sistemas de plantillas y conceptos visuales inspirados en Awwwards para productos digitales.",
  },
];

export const navigation = [
  { label: "Inicio", id: "home" },
  { label: "Acerca", id: "about" },
  { label: "Tecnologías", id: "stack" },
  { label: "Proyectos", id: "projects" },
  { label: "Experiencia", id: "experience" },
  { label: "Contacto", id: "contact" },
];
