"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "En dos meses dejamos de gastar 18 horas semanales en reportes manuales. El Roadmap que nos entregó KAIROS fue tan claro que supimos exactamente qué automatizar primero.",
    author: "María R.",
    role: "Gerente General",
    company: "Distribuidora Textil del Norte",
    metric: "-18h",
    metricLabel: "horas/semana en reportes",
    metricColor: "text-sky-400",
    delay: "0s",
  },
  {
    quote:
      "Redujimos costos administrativos en un 38% en el primer trimestre. Lo que más valoré fue que el diagnóstico ya era un entregable concreto: no llegamos al proceso con las manos vacías.",
    author: "Carmen V.",
    role: "Directora",
    company: "Clínica Dental Sonrisas",
    metric: "-38%",
    metricLabel: "costos administrativos",
    metricColor: "text-emerald-400",
    delay: "0.15s",
  },
  {
    quote:
      "KAIROS entendió nuestro negocio desde el primer día. Con el seguimiento automatizado de prospectos pasamos de 3 a 15 cierres mensuales sin contratar más vendedores.",
    author: "Roberto A.",
    role: "Dueño",
    company: "Importadora Andrade & Hijos",
    metric: "+12",
    metricLabel: "clientes nuevos por mes",
    metricColor: "text-sky-400",
    delay: "0.3s",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Resultados reales
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            PyMEs ecuatorianas que ya{" "}
            <span className="gradient-text">transformaron su negocio</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Números concretos. Empresas reales. Resultados en los primeros 90 días.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.company}
              className="testimonial-card glow-border card-bg rounded-2xl p-8 flex flex-col scroll-reveal"
              style={{ transitionDelay: t.delay }}
            >
              {/* Company logo placeholder */}
              <div className="flex items-center justify-between mb-6">
                <div className="company-logo-placeholder">
                  <span className="text-slate-500 text-xs font-medium">Logo empresa</span>
                </div>
                <Quote className="h-8 w-8 text-sky-500/30 flex-shrink-0" />
              </div>

              {/* Metric highlight */}
              <div className="mb-5">
                <span className={`text-5xl font-black ${t.metricColor}`}>{t.metric}</span>
                <p className="text-slate-500 text-xs mt-1">{t.metricLabel}</p>
              </div>

              {/* Quote */}
              <blockquote className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-700/50">
                {/* Photo placeholder */}
                <div className="author-photo-placeholder">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 text-slate-600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.author}</p>
                  <p className="text-slate-500 text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-slate-600 text-xs mt-10 scroll-reveal">
          * Resultados basados en los primeros 90 días tras la implementación. Los resultados pueden variar según el sector y complejidad del negocio.
        </p>
      </div>
    </section>
  );
}
