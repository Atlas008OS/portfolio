import {
  Code2,
  Video,
  TrendingUp,
  Bot,
  BarChart3,
  FileSpreadsheet,
  Layers,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CorpFinance Analyzer",
    description:
      "Aplicación web para el análisis de estados financieros corporativos. Calcula ratios financieros clave (liquidez, endeudamiento, márgenes, ROE) con interpretación automática y semáforo de alerta visual.",
    type: "app",
    icon: BarChart3,
    color: "blue",
    tags: ["HTML/CSS", "JavaScript", "Finanzas", "Ratios Financieros"],
    highlights: [
      "5 ratios financieros calculados automáticamente",
      "Sistema de semáforo de alerta visual",
      "Interpretación contextual de cada indicador",
      "Interfaz responsive con tema oscuro profesional",
    ],
    videoUrl: null,
  },
  {
    title: "Análisis Financiero con Claude Code",
    description:
      "Proyecto demostrativo que muestra cómo utilizar Claude Code para realizar análisis financieros complejos, automatizando la interpretación de datos y la generación de reportes.",
    type: "video",
    icon: TrendingUp,
    color: "cyan",
    tags: ["Claude Code", "IA", "Análisis Financiero", "Automatización"],
    highlights: [
      "Automatización del análisis financiero con IA",
      "Generación de reportes inteligentes",
      "Integración con Claude Code",
    ],
    videoUrl: "https://drive.google.com/file/d/1CMAUDs3yxY0FKhmESsyFTIyi-nST4u8G/preview",
  },
  {
    title: "Análisis Financiero en Excel con Claude",
    description:
      "Integración de Claude con Microsoft Excel para potenciar el análisis financiero, permitiendo interpretaciones automáticas y recomendaciones basadas en los datos de hojas de cálculo.",
    type: "video",
    icon: FileSpreadsheet,
    color: "green",
    tags: ["Excel", "Claude", "IA", "Finanzas"],
    highlights: [
      "Integración Claude + Excel",
      "Análisis automatizado de datos financieros",
      "Generación de insights con IA",
    ],
    videoUrl: "https://drive.google.com/file/d/1fPAa28Gp7km7hh8a16eAkO1519C39Zef/preview",
  },
  {
    title: "Automatización de Reporte Financiero con n8n",
    description:
      "Flujo de automatización construido en n8n para el análisis y reporte de estados financieros, conectando múltiples fuentes de datos y generando análisis automáticos.",
    type: "video",
    icon: Layers,
    color: "purple",
    tags: ["n8n", "RPA", "Automatización", "Reportes Financieros"],
    highlights: [
      "Flujos de trabajo automatizados en n8n",
      "Conexión de múltiples fuentes de datos",
      "Reportes financieros automáticos",
    ],
    videoUrl: "https://drive.google.com/file/d/1dWAyo_CUanqpre4u3H1v5LcTez1pHgyY/preview",
  },
  {
    title: "Automatización de Resumen Financiero con UiPath y Claude",
    description:
      "Robotic Process Automation con UiPath integrado con Claude para la generación automática de resúmenes financieros, combinando RPA tradicional con IA generativa.",
    type: "video",
    icon: Bot,
    color: "yellow",
    tags: ["UiPath", "Claude", "RPA", "IA Generativa"],
    highlights: [
      "RPA + IA Generativa combinados",
      "Generación automática de resúmenes",
      "Integración UiPath + Claude AI",
    ],
    videoUrl: "https://drive.google.com/file/d/1uAf--D_BBPToQasSTZQQYDe81v61x2jc/preview",
  },
  {
    title: "Valoración de Acciones con UiPath",
    description:
      "Automatización del proceso de valoración de acciones usando UiPath, explorando cómo la robótica de procesos puede aplicarse al análisis bursátil y financiero.",
    type: "video",
    icon: TrendingUp,
    color: "cyan",
    tags: ["UiPath", "RPA", "Valoración", "Mercado de Valores"],
    highlights: [
      "Automatización de análisis bursátil",
      "Valoración de acciones con RPA",
      "Exploración de casos de uso financiero",
    ],
    videoUrl: "https://drive.google.com/file/d/15nf6FJ6wpYXoOFQO2tKCVEJrM_TpMfhy/preview",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: "blue" | "cyan" | "green" | "purple" | "yellow" }> = {
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400", badge: "blue" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400", badge: "cyan" },
  green: { bg: "bg-green-500/10", border: "border-green-500/20", text: "text-green-400", badge: "green" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400", badge: "purple" },
  yellow: { bg: "bg-yellow-500/10", border: "border-yellow-500/20", text: "text-yellow-400", badge: "yellow" },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold mb-3 uppercase tracking-wider">
            <Code2 className="w-4 h-4" />
            Proyectos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo que he construido
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Proyectos que combinan finanzas, automatización e inteligencia
            artificial para resolver problemas reales.
          </p>
        </div>

        {/* Featured project */}
        <div className="mb-8">
          <Card className="relative border-blue-500/20 bg-card/50 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <BarChart3 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <Badge variant="blue" className="mb-1">Proyecto Destacado</Badge>
                      <h3 className="text-xl font-bold text-white">
                        CorpFinance Analyzer
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Aplicación web completa para el análisis de estados
                    financieros corporativos. Ingresa los datos del Balance
                    General y Estado de Resultados para obtener los principales
                    ratios financieros con interpretación automática y un
                    sistema de semáforo visual.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["HTML/CSS", "JavaScript", "Finanzas", "Ratios Financieros"].map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white">
                    <a href="/corpfinance" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Proyecto
                    </a>
                  </Button>
                </div>
                <div className="md:w-64 space-y-2">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Características
                  </div>
                  {[
                    "5 ratios financieros clave",
                    "Semáforo de alerta visual",
                    "Interpretación automática",
                    "Diseño responsive dark",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map((project) => {
            const colors = colorMap[project.color];
            const Icon = project.icon;
            return (
              <Card
                key={project.title}
                className="border-border bg-card/50 backdrop-blur-sm card-hover flex flex-col"
              >
                {project.videoUrl && (
                  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    <iframe
                      src={project.videoUrl}
                      className="absolute inset-0 w-full h-full rounded-t-xl"
                      allow="autoplay"
                      allowFullScreen
                    />
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl ${colors.bg} border ${colors.border}`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Video className="w-3.5 h-3.5" />
                      Demo
                    </div>
                  </div>
                  <CardTitle className="text-base text-white leading-snug">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs px-2 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
