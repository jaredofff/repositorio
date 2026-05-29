import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
      },
      boxShadow: {
        glow: "0 0 48px rgba(45, 212, 191, 0.24)",
        "glow-strong": "0 0 72px rgba(168, 85, 247, 0.32)",
      },
      backgroundImage: {
        "premium-radial":
          "linear-gradient(126deg, rgba(45, 212, 191, 0.18), transparent 36%), linear-gradient(236deg, rgba(168, 85, 247, 0.16), transparent 42%), linear-gradient(8deg, rgba(59, 130, 246, 0.12), transparent 48%)",
        "glass-line":
          "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.11) 45%, transparent 60%)",
      },
      keyframes: {
        gridPulse: {
          "0%, 100%": { opacity: "0.22" },
          "50%": { opacity: "0.42" },
        },
        scan: {
          "0%": { transform: "translateX(-110%)" },
          "100%": { transform: "translateX(110%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "grid-pulse": "gridPulse 5s ease-in-out infinite",
        scan: "scan 5s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
