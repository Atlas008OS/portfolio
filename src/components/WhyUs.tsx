"use client";

import { ClipboardCheck, Heart, LayoutGrid } from "lucide-react";

const differentiators = [
  {
    icon: ClipboardCheck,
    iconColor: "text-sky-400",
    title: "Diagnóstico Primero",
    description:
      "Analizamos cómo funciona tu negocio antes de proponer cualquier herramienta. Sin soluciones genéricas.",
    emphasis: "antes",
    delay: "0s",
  },
  {
    icon: Heart,
    iconColor: "text-emerald-400",
    title: "Acompañamiento Continuo",
    description:
      "No desaparecemos tras la implementación. Monitoreamos, optimizamos y adaptamos las soluciones continuamente.",
    delay: "0.15s",
  },
  {
    icon: LayoutGrid,
    iconColor: "text-sky-400",
    title: "Cobertura Integral",
    description:
      "Finanzas, marketing, atención al cliente, operaciones y RRHH. Transformamos cada área de tu empresa.",
    delay: "0.3s",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Nuestra diferencia
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Por qué elegir <span className="gradient-text">KAIROS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="text-center scroll-reveal"
              style={{ transitionDelay: item.delay }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-sky-500/20 to-emerald-500/20 border border-sky-500/30 rounded-2xl flex items-center justify-center mb-6">
                <item.icon className={`h-8 w-8 ${item.iconColor}`} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
