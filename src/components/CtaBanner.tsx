import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto text-center scroll-reveal">
        <div className="glow-border rounded-3xl p-10 sm:p-16 card-bg">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            ¿Listo para tu{" "}
            <span className="gradient-text">momento KAIROS</span>?
          </h2>
          <p className="text-slate-400 text-lg mb-3 max-w-xl mx-auto">
            El primer paso es el Diagnóstico: una sesión profunda donde mapeamos
            tu negocio y te entregamos un plan de acción concreto.
          </p>

          {/* Price note */}
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 rounded-xl px-5 py-2.5 mb-8">
            <FileText className="h-4 w-4 text-sky-400 flex-shrink-0" />
            <p className="text-slate-300 text-sm">
              Inversión: <strong className="text-white">$300 – $600 USD</strong>
              <span className="text-slate-500 ml-1">
                · El Roadmap es tuyo siempre
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Link
              href="#contact"
              className="btn-primary inline-flex items-center gap-3 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-[0_0_40px_rgba(14,165,233,0.25)]"
            >
              <span>Agendar mi Diagnóstico</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <p className="text-slate-600 text-xs">
              Te contactamos en menos de 24 horas hábiles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
