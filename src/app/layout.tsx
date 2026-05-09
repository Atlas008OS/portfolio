import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAIROS – Consultoría de IA y Automatización | Ecuador",
  description:
    "Consultoría especializada en Inteligencia Artificial y Automatización para PyMEs y empresas en Ecuador. Soluciones 100% personalizadas con acompañamiento continuo.",
  keywords: "automatización, inteligencia artificial, IA, consultoría, Ecuador, PyMEs, transformación digital",
  openGraph: {
    title: "KAIROS – El momento oportuno para transformar tu negocio",
    description:
      "Construimos soluciones de IA y automatización 100% personalizadas para que tu empresa crezca con menos esfuerzo y más eficiencia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-gray-950 text-white antialiased">{children}</body>
    </html>
  );
}
