import { Trophy, Star, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-yellow-400 text-sm font-semibold mb-3 uppercase tracking-wider">
            <Trophy className="w-4 h-4" />
            Reconocimientos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Logros Destacados
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Reconocimientos que reflejan el compromiso con la innovación y el
            emprendimiento.
          </p>
        </div>

        {/* Hult Prize card */}
        <div className="max-w-2xl">
          <Card className="relative border-yellow-500/20 bg-card/50 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none" />
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                    <Trophy className="w-10 h-10 text-yellow-400" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 text-yellow-900 fill-yellow-900" />
                  </div>
                </div>

                <div className="flex-1">
                  {/* Badge */}
                  <Badge variant="yellow" className="mb-3">
                    Reconocimiento Internacional
                  </Badge>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    Hult Prize
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Reconocimiento en el Hult Prize, la mayor competencia de
                    emprendimiento social universitario del mundo. Una distinción
                    que representa el compromiso con soluciones innovadoras para
                    los desafíos más apremiantes del planeta.
                  </p>

                  {/* Details */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Globe className="w-4 h-4 text-yellow-400" />
                      <span>Competencia Global</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>Emprendimiento Social</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
