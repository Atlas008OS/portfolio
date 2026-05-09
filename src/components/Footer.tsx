import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#problems", label: "Problemas" },
  { href: "#method", label: "Método" },
  { href: "#services", label: "Servicios" },
  { href: "#contact", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] border-t border-slate-800/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/kairos.png"
              alt="KAIROS"
              width={100}
              height={36}
              className="h-9 w-auto object-contain"
            />
            <div>
              <div className="text-white font-black text-xl tracking-wider gradient-text">KAIROS</div>
              <div className="text-slate-600 text-xs">Consultoría de IA &amp; Automatización · Ecuador</div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} KAIROS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
