"use client";

import Link from "next/link";
import { ClipboardList, Zap, RefreshCw, Check, FileText } from "lucide-react";

const diagnosticoFeatures = [
  "Mapeo completo de procesos",
  "Mapa de impacto priorizado",
  "Roadmap de 90 días",
  "Informe ejecutivo detallado",
];

const implementacionFeatures = [
  "Automatizaciones personalizadas",
  "Integración con tus sistemas",
  "Capacitación del equipo",
  "Soporte post-implementación",
];

const suscripcionPlans = [
  { name: "Básico", desc: "Soporte & Monitoreo", highlighted: false },
  { name: "Crecimiento", desc: "+ Nuevas Automations", highlighted: true },
  { name: "Estratégico", desc: "Consultoría Total", highlighted: false },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Lo que ofrecemos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Desde el primer diagnóstico hasta la optimización continua, tenemos el plan perfecto para tu etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1: Diagnóstico */}
          <div className="glow-border card-bg rounded-2xl p-8 flex flex-col scroll-reveal">
            <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6">
              <ClipboardList className="h-6 w-6 text-sky-400" />
            </div>
            <div className="text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">
              Punto de partida
            </div>
            <h3 className="text-white font-black text-2xl mb-2">Diagnóstico KAIROS</h3>

            {/* Price */}
            <div className="mb-4">
              <div className="flex items-baseline gap-1.5">
                <span className="text-white font-black text-2xl">$300</span>
                <span className="text-slate-500 text-sm">– $600 USD</span>
              </div>
              <p className="text-slate-600 text-xs mt-0.5">
                El costo final depende de la complejidad de los procesos analizados.
              </p>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
              Auditoría completa de tus procesos actuales + plan de acción con prioridades de
              automatización. Identifica exactamente dónde está el mayor impacto.
            </p>

            <ul className="space-y-2 mb-5">
              {diagnosticoFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-slate-300 text-sm">
                  <Check className="h-4 w-4 text-sky-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Roadmap ownership note */}
            <div className="flex items-start gap-2 bg-sky-500/8 border border-sky-500/20 rounded-xl px-4 py-3 mb-6">
              <FileText className="h-4 w-4 text-sky-400 flex-shrink-0 mt-0.5" />
              <p className="text-sky-300/80 text-xs leading-relaxed">
                <strong className="text-sky-300">El Roadmap es tuyo</strong>, aunque decidas no continuar con KAIROS.
              </p>
            </div>

            <Link
              href="#contact"
              className="w-full text-center btn-primary text-white font-bold py-3 rounded-xl"
            >
              Solicitar Diagnóstico
            </Link>
          </div>

          {/* Card 2: Implementación (Popular) */}
          <div className="pricing-popular rounded-2xl p-8 flex flex-col scroll-reveal relative" style={{ transitionDelay: "0.15s" }}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                MÁS SOLICITADO
              </span>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-sky-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              Transformación
            </div>
            <h3 className="text-white font-black text-2xl mb-3">Implementación a Medida</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
              Proyectos de transformación por área: finanzas, marketing, ventas, operaciones o RRHH.
              Desarrollo e integración completa de tus automatizaciones.
            </p>
            <ul className="space-y-2 mb-8">
              {implementacionFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-slate-300 text-sm">
                  <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="btn-primary w-full text-center text-white font-bold py-3 rounded-xl"
            >
              <span>Hablar con un Experto</span>
            </Link>
          </div>

          {/* Card 3: Suscripciones */}
          <div className="glow-border card-bg rounded-2xl p-8 flex flex-col scroll-reveal" style={{ transitionDelay: "0.3s" }}>
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
              <RefreshCw className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              Crecimiento continuo
            </div>
            <h3 className="text-white font-black text-2xl mb-3">Suscripciones Mensuales</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
              Soporte mensual, nuevas automatizaciones y optimización continua. Elige el plan que
              se adapte a tu etapa de crecimiento.
            </p>
            <div className="space-y-3 mb-8">
              {suscripcionPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-sky-500/10 to-emerald-500/10 border border-sky-500/20"
                      : "bg-slate-800/50"
                  }`}
                >
                  <span
                    className={`text-sm font-medium ${
                      plan.highlighted ? "text-white font-bold" : "text-slate-300"
                    }`}
                  >
                    {plan.name}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      plan.highlighted ? "text-emerald-400" : "text-sky-400"
                    }`}
                  >
                    {plan.desc}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="#contact"
              className="w-full text-center border border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-white hover:bg-emerald-500/10 font-semibold py-3 rounded-xl transition-all"
            >
              Ver Planes
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
