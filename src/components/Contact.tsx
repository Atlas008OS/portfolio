"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle, AlertCircle } from "lucide-react";

// =============================================
// WEBHOOK URL — Reemplaza con tu URL de n8n/Make
// =============================================
const WEBHOOK_URL = "https://your-webhook-url.com/webhook/kairos-contact";
// =============================================

const areaOptions = [
  { value: "marketing", label: "Marketing y Ventas" },
  { value: "operaciones", label: "Operaciones y Procesos" },
  { value: "atencion", label: "Atención al Cliente" },
  { value: "finanzas", label: "Finanzas y Contabilidad" },
  { value: "rrhh", label: "Recursos Humanos" },
  { value: "todo", label: "Toda la empresa" },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    area: "",
    desafio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const payload = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: "kairos-landing",
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ nombre: "", empresa: "", email: "", area: "", desafio: "" });
      } else {
        throw new Error("Server error");
      }
    } catch {
      // Demo mode: show success if webhook not configured
      if (WEBHOOK_URL.includes("your-webhook-url")) {
        setStatus("success");
        setFormData({ nombre: "", empresa: "", email: "", area: "", desafio: "" });
      } else {
        setStatus("error");
      }
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 scroll-reveal">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Primer paso
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Agenda tu <span className="gradient-text">Diagnóstico</span>
          </h2>
          <p className="text-slate-400 mb-3">
            Cuéntanos sobre tu negocio y nos pondremos en contacto en menos de 24 horas.
          </p>
          <p className="text-slate-500 text-sm">
            Inversión:{" "}
            <strong className="text-slate-300">$300 – $600 USD</strong>
            {" "}·{" "}
            <span className="text-slate-600">incluye Roadmap detallado de tu empresa</span>
          </p>
        </div>

        <div className="glow-border card-bg rounded-2xl p-8 sm:p-10 scroll-reveal">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Nombre completo <span className="text-sky-400">*</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Juan García"
                  className="w-full bg-slate-800/60 border border-slate-700 focus:border-sky-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Empresa <span className="text-sky-400">*</span>
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  placeholder="Mi Empresa S.A."
                  className="w-full bg-slate-800/60 border border-slate-700 focus:border-sky-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Email corporativo <span className="text-sky-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="juan@miempresa.com"
                className="w-full bg-slate-800/60 border border-slate-700 focus:border-sky-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Área principal a mejorar <span className="text-sky-400">*</span>
              </label>
              <select
                name="area"
                value={formData.area}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/60 border border-slate-700 focus:border-sky-500 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-slate-500">
                  Selecciona un área...
                </option>
                {areaOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Principal desafío
              </label>
              <textarea
                name="desafio"
                value={formData.desafio}
                onChange={handleChange}
                rows={3}
                placeholder="Cuéntanos brevemente cuál es el mayor problema que quieres resolver..."
                className="w-full bg-slate-800/60 border border-slate-700 focus:border-sky-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
              />
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl px-4 py-3 text-sm">
                <CheckCircle className="h-4 w-4 flex-shrink-0" />
                <span>¡Mensaje enviado! Te contactaremos en menos de 24 horas.</span>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>Ocurrió un error. Por favor intenta de nuevo o escríbenos directamente.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-base disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <span>Solicitar mi Diagnóstico KAIROS</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>

            <p className="text-slate-600 text-xs text-center">
              Al enviar, aceptas que nos pongamos en contacto contigo sobre tus necesidades de automatización.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
