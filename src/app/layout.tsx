import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onze Studio | Portafolio premium de desarrollador",
  description:
    "Un portafolio cinematográfico de desarrollador para bots de Discord, sistemas de Minecraft, paneles, plantillas premium y sistemas web full-stack.",
  keywords: [
    "Portafolio de desarrollador",
    "Next.js",
    "React",
    "Bots de Discord",
    "Sistemas Minecraft",
    "Paneles",
    "TypeScript",
  ],
   authors: [{ name: "Onze Studio" }],
   creator: "Onze Studio",
  metadataBase: new URL("https://github.com/jaredofff"),
  openGraph: {
     title: "Onze Studio | Portafolio premium de desarrollador",
    description:
      "Portafolio full-stack de alta gama con motion cinematográfico, vistas previas interactivas de proyectos y una interfaz oscura premium.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
     title: "Onze Studio | Portafolio premium de desarrollador",
    description:
      "Portafolio full-stack de alta gama con motion cinematográfico y trabajo en sistemas interactivos.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#050814",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
