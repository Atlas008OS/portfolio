import { TrendingUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <TrendingUp className="w-4 h-4 text-blue-400" />
          </div>
          <span className="font-semibold text-sm text-white">
            Alejandro<span className="text-blue-400"> López</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Construido con Next.js, Tailwind CSS & shadcn/ui
        </p>
      </div>
    </footer>
  );
}
