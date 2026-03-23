import { Mail, Linkedin, Github, MessageSquare, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "tu@email.com",
    href: "mailto:tu@email.com",
    color: "blue",
    description: "Escríbeme directamente",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/alejandro-lopez",
    href: "#",
    color: "cyan",
    description: "Conectemos profesionalmente",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; btn: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    btn: "hover:border-blue-500/50",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    btn: "hover:border-cyan-500/50",
  },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section header */}
          <div className="flex items-center justify-center gap-2 text-blue-400 text-sm font-semibold mb-3 uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            Contacto
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hablemos
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Estoy abierto a oportunidades en finanzas, automatización e IA. Si
            tienes un proyecto interesante o quieres conectar, no dudes en
            escribirme.
          </p>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {contactLinks.map((link) => {
              const colors = colorMap[link.color];
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} className="block group">
                  <Card className={`border-border bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:border-opacity-50 ${colors.btn} group-hover:-translate-y-1 group-hover:shadow-lg`}>
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${colors.bg} border ${colors.border}`}>
                        <Icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <div className="text-left flex-1">
                        <div className={`text-xs font-semibold ${colors.text} mb-0.5`}>
                          {link.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {link.description}
                        </div>
                      </div>
                      <ArrowRight className={`w-4 h-4 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-500 text-white px-10 shadow-lg shadow-blue-500/25"
          >
            <a href="mailto:tu@email.com">
              <Mail className="w-4 h-4 mr-2" />
              Enviar mensaje
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
