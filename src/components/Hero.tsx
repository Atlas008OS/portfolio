"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "3+", label: "PyMEs transformadas" },
  { value: "18h", label: "promedio ahorradas/semana" },
  { value: "90d", label: "para ver resultados" },
];

export default function Hero() {
  useScrollReveal();

  return (
    <section
      id="hero"
      className="hero-bg min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-8 animate-pulse-slow">
          <span className="w-2 h-2 bg-sky-400 rounded-full inline-block animate-pulse" />
          Consultoría de IA &amp; Automatización · Ecuador
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 scroll-reveal">
          El momento oportuno para{" "}
          <span className="gradient-text">transformar tu negocio</span>{" "}
          es ahora.
        </h1>

        {/* Subtitle */}
        <p
          className="text-slate-400 text-lg sm:text-xl lg:text-2xl font-light max-w-3xl mx-auto mb-10 leading-relaxed scroll-reveal"
          style={{ transitionDelay: "0.1s" }}
        >
          Consultoría de Automatización e Inteligencia Artificial.
          <br className="hidden sm:block" />
          Construimos soluciones{" "}
          <strong className="text-white font-semibold">100% personalizadas</strong>{" "}
          para que tu empresa crezca con{" "}
          <strong className="text-white font-semibold">menos esfuerzo</strong> y más eficiencia.
        </p>

        {/* Primary CTA — single dominant button */}
        <div
          className="flex flex-col items-center gap-4 scroll-reveal"
          style={{ transitionDelay: "0.2s" }}
        >
          <Link
            href="#contact"
            className="btn-primary inline-flex items-center gap-3 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-[0_0_40px_rgba(14,165,233,0.3)] hover:shadow-[0_0_60px_rgba(14,165,233,0.45)] transition-shadow"
          >
            <span>Agendar Diagnóstico KAIROS</span>
            <ArrowRight className="h-5 w-5 flex-shrink-0" />
          </Link>

          {/* Subtle WhatsApp text link */}
          <p className="text-slate-500 text-sm">
            ¿Dudas rápidas?{" "}
            <span className="text-slate-400 underline underline-offset-2 cursor-default">
              Usa el chat de WhatsApp →
            </span>
          </p>
        </div>

        {/* Social proof stats */}
        <div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 scroll-reveal"
          style={{ transitionDelay: "0.3s" }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-3">
              {i > 0 && (
                <div className="hidden sm:block w-px h-8 bg-slate-800" />
              )}
              <div className="text-center">
                <div className="text-2xl font-black gradient-text">{stat.value}</div>
                <div className="text-slate-600 text-xs mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Ecuador badge */}
        <div
          className="mt-8 inline-flex items-center gap-1.5 text-slate-600 text-xs scroll-reveal"
          style={{ transitionDelay: "0.35s" }}
        >
          <MapPin className="h-3.5 w-3.5 text-slate-600" />
          <span>Consultoría local · Conocemos el mercado ecuatoriano</span>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-14 flex justify-center scroll-reveal"
          style={{ transitionDelay: "0.4s" }}
        >
          <Link
            href="#problems"
            className="text-slate-600 hover:text-slate-400 transition-colors animate-bounce"
            aria-label="Ver más"
          >
            <ChevronDown className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
