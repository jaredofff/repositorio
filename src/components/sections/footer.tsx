import { Code2, Github, Mail, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/jaredofff?tab=repositories", icon: Github },
  { label: "Discord", href: "https://discord.com/", icon: MessageCircle },
  { label: "Email", href: "mailto:sierraeuan@gmail.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/70 px-4 py-8 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(100%,1180px)] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="flex items-center gap-3" data-sound>
          <span className="grid h-10 w-10 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
            <Code2 className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">Onze Studio</span>
            <span className="block text-xs text-white/42">&copy; 2026. Built with real GitHub work.</span>
          </span>
        </a>

        <div className="flex gap-2">
          {footerLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/6 text-white/60 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100"
                data-sound
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
