"use client";

import Link from "next/link";
import { Search, BarChart2, Map, Settings, BookOpen, RefreshCw, ArrowRight, FileText } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    iconColor: "text-sky-400",
    title: "Diagnóstico",
    description: "Mapeo de procesos actuales",
    gradient: "from-sky-500 to-sky-600",
    shadow: "shadow-sky-500/30",
  },
  {
    number: 2,
    icon: BarChart2,
    iconColor: "text-sky-400",
    title: "Evaluación",
    description: "Viabilidad y mapa de impacto",
    gradient: "from-sky-400 to-emerald-500",
    shadow: "",
  },
  {
    number: 3,
    icon: Map,
    iconColor: "text-emerald-400",
    title: "Orientación",
    description: "Roadmap personalizado",
    gradient: "from-emerald-500 to-emerald-400",
    shadow: "shadow-emerald-500/30",
  },
  {
    number: 4,
    icon: Settings,
    iconColor: "text-sky-400",
    title: "Aplicación",
    description: "Implementación de soluciones",
    gradient: "from-emerald-400 to-sky-400",
    shadow: "",
  },
  {
    number: 5,
    icon: BookOpen,
    iconColor: "text-sky-400",
    title: "Capacitación",
    description: "Entrenamiento al equipo",
    gradient: "from-sky-400 to-sky-500",
    shadow: "shadow-sky-500/30",
  },
  {
    number: 6,
    icon: RefreshCw,
    iconColor: "text-emerald-400",
    title: "Seguimiento",
    description: "Optimización continua",
    gradient: "from-sky-500 to-emerald-500",
    shadow: "",
  },
];

export default function Method() {
  return (
    <section id="method" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Proceso probado
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            El Método <span className="gradient-text">KAIROS</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            6 fases diseñadas para garantizar una transformación real, medible y sostenible en el tiempo.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center scroll-reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Number Circle */}
              <div
                className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white font-black text-lg mb-4 shadow-lg ${step.shadow} z-10 flex-shrink-0`}
              >
                {step.number}
              </div>

              {/* Card */}
              <div className="glow-border card-bg rounded-xl p-4 w-full flex-1 flex flex-col items-center">
                <step.icon className={`h-6 w-6 ${step.iconColor} mb-2 flex-shrink-0`} />
                <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
                <p className="text-slate-500 text-xs leading-tight">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Flow arrow for desktop */}
        <div className="hidden lg:flex items-center justify-center mt-8 gap-2 text-slate-600 text-sm">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-sky-500/60 rounded-full" />
            <div className="w-16 h-px bg-gradient-to-r from-sky-500/60 to-transparent" />
          </div>
          <span className="text-slate-500 text-xs px-2">Proceso continuo y circular</span>
          <div className="flex items-center gap-1">
            <div className="w-16 h-px bg-gradient-to-l from-emerald-500/60 to-transparent" />
            <div className="w-2 h-2 bg-emerald-500/60 rounded-full" />
          </div>
        </div>

        {/* Roadmap ownership callout */}
        <div className="mt-12 max-w-2xl mx-auto scroll-reveal">
          <div className="flex items-start gap-4 bg-gradient-to-r from-sky-500/8 to-emerald-500/8 border border-sky-500/20 rounded-2xl px-6 py-5">
            <div className="w-10 h-10 bg-sky-500/15 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
              <FileText className="h-5 w-5 text-sky-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-1">
                El Roadmap es tuyo, siempre.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Al concluir el Diagnóstico recibes un informe ejecutivo con tu plan de acción detallado.{" "}
                <strong className="text-white">Ese Roadmap te pertenece</strong>, independientemente de si decides continuar la implementación con KAIROS.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 scroll-reveal">
          <Link
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl"
          >
            <span>Empezar con el Diagnóstico</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
