"use client";

import { Clock, Users, Cpu, Globe } from "lucide-react";

const problems = [
  {
    icon: Clock,
    iconColor: "text-red-400",
    iconBg: "bg-red-500/10",
    title: "Tareas Manuales Eternas",
    description:
      "Tu equipo pierde horas en tareas repetitivas que una automatización podría resolver en segundos.",
    delay: "0s",
  },
  {
    icon: Users,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
    title: "Pérdida de Clientes",
    description:
      "Sin seguimiento automatizado, los prospectos se enfrían y los clientes actuales se van con la competencia.",
    delay: "0.1s",
  },
  {
    icon: Cpu,
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/10",
    title: "IA Sin Estructura",
    description:
      "Usas herramientas de IA aisladas, sin una estrategia coherente, y los resultados son inconsistentes.",
    delay: "0.2s",
  },
  {
    icon: Globe,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    title: "Sin Presencia Digital",
    description:
      "Tu competencia crece online mientras tu negocio depende de referencias boca a boca y esfuerzo manual.",
    delay: "0.3s",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            ¿Te identificas con esto?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Los problemas que{" "}
            <span className="gradient-text">frenan tu crecimiento</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            La mayoría de empresas pierden tiempo y dinero por los mismos errores.
            ¿Cuántos de estos reconoces en tu negocio?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="glow-border card-bg rounded-2xl p-8 group scroll-reveal"
              style={{ transitionDelay: problem.delay }}
            >
              <div
                className={`w-14 h-14 ${problem.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <problem.icon className={`h-7 w-7 ${problem.iconColor}`} />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{problem.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
