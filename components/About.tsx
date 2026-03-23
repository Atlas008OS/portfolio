import { Brain, TrendingUp, Zap, GraduationCap, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const interests = [
  {
    icon: TrendingUp,
    title: "Finanzas",
    description:
      "Análisis de estados financieros, valoración de empresas y ratios financieros. Apasionado por entender la salud financiera corporativa.",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Automatización",
    description:
      "Diseño de flujos de trabajo automatizados con UiPath, n8n y otras herramientas RPA para optimizar procesos financieros.",
    color: "cyan",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description:
      "Aplicación de modelos de IA como Claude para análisis financiero, generación de reportes y toma de decisiones basada en datos.",
    color: "purple",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    icon: "text-blue-400",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    icon: "text-cyan-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    icon: "text-purple-400",
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold mb-3 uppercase tracking-wider">
            <User className="w-4 h-4" />
            Sobre mí
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Economía, Datos y Tecnología
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Soy Alejandro López, estudiante de Economía con profundo interés en
            la intersección entre las finanzas corporativas, la automatización de
            procesos y la inteligencia artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio card */}
          <div className="space-y-6">
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Estudiante de Economía
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Formación en análisis cuantitativo y finanzas
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Mi enfoque combina el rigor del análisis económico tradicional
                    con las herramientas tecnológicas más modernas: automatización
                    RPA, modelos de lenguaje e inteligencia artificial aplicada a
                    los negocios.
                  </p>
                  <p>
                    Creo firmemente que el futuro de las finanzas está en la
                    integración de la automatización y la IA para generar insights
                    más rápidos, precisos y accionables.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "5+", label: "Proyectos" },
                { value: "3+", label: "Certificados" },
                { value: "1", label: "Reconocimiento" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl border border-border bg-card/30"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interest cards */}
          <div className="space-y-4">
            {interests.map((item) => {
              const colors = colorMap[item.color];
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-border bg-card/50 backdrop-blur-sm card-hover"
                >
                  <CardContent className="p-5 flex gap-4">
                    <div
                      className={`p-2.5 rounded-xl ${colors.bg} border ${colors.border} h-fit`}
                    >
                      <Icon className={`w-5 h-5 ${colors.icon}`} />
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 ${colors.text}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
