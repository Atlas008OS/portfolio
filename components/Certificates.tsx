import { Award, BookOpen, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certificates = [
  {
    title: "Claude 101",
    issuer: "Anthropic",
    description:
      "Certificación sobre los fundamentos de Claude: uso efectivo, prompting avanzado y aplicaciones de IA generativa en entornos profesionales.",
    date: "2026",
    tags: ["IA", "Claude", "Prompting"],
    color: "purple",
    icon: "🤖",
  },
  {
    title: "Crear tu Primera Automatización con UiPath",
    issuer: "UiPath Academy",
    description:
      "Certificado que acredita el dominio de los fundamentos de Robotic Process Automation (RPA) con UiPath, incluyendo diseño y ejecución de flujos automatizados.",
    date: "2026",
    tags: ["RPA", "UiPath", "Automatización"],
    color: "blue",
    icon: "⚡",
  },
  {
    title: "Explorar el Desarrollo de Automatización con UiPath",
    issuer: "UiPath Academy",
    description:
      "Diploma avanzado en desarrollo de automatización con UiPath, cubriendo flujos de trabajo complejos, integraciones y mejores prácticas de RPA empresarial.",
    date: "2026",
    tags: ["RPA", "UiPath", "Desarrollo Avanzado"],
    color: "cyan",
    icon: "🎓",
    featured: true,
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400" },
};

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold mb-3 uppercase tracking-wider">
            <Award className="w-4 h-4" />
            Certificados
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Formación Continua
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Certificaciones en las tecnologías que definen el futuro de las
            finanzas y los negocios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert) => {
            const colors = colorMap[cert.color];
            return (
              <Card
                key={cert.title}
                className={`border-border bg-card/50 backdrop-blur-sm card-hover relative overflow-hidden ${
                  cert.featured ? "md:col-span-1 ring-1 ring-cyan-500/30" : ""
                }`}
              >
                {cert.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="cyan" className="text-xs">
                      Diploma
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="text-3xl mb-4">{cert.icon}</div>

                  {/* Issuer */}
                  <div className={`flex items-center gap-1.5 text-xs font-semibold mb-2 ${colors.text}`}>
                    <BookOpen className="w-3.5 h-3.5" />
                    {cert.issuer}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-white mb-3 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs px-2 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                      Completado · {cert.date}
                    </div>
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
