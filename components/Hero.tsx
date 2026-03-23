import { ArrowDown, Brain, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(217,91%,60%) 1px, transparent 1px), linear-gradient(90deg, hsl(217,91%,60%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-sm text-blue-400">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Disponible para oportunidades
        </div>

        {/* Name & title */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-4 leading-none">
          Alejandro
          <br />
          <span className="gradient-text">López</span>
        </h1>

        <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
          Economista · Finanzas · IA & Automatización
        </p>

        {/* Interest badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Badge variant="blue" className="gap-1.5 px-3 py-1.5 text-sm">
            <TrendingUp className="w-3.5 h-3.5" />
            Análisis Financiero
          </Badge>
          <Badge variant="cyan" className="gap-1.5 px-3 py-1.5 text-sm">
            <Zap className="w-3.5 h-3.5" />
            Automatización
          </Badge>
          <Badge variant="purple" className="gap-1.5 px-3 py-1.5 text-sm">
            <Brain className="w-3.5 h-3.5" />
            Inteligencia Artificial
          </Badge>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 shadow-lg shadow-blue-500/25"
          >
            <a href="#projects">Ver Proyectos</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:border-blue-500/50 px-8"
          >
            <a href="#contact">Contacto</a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-muted-foreground/50 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
