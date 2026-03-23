# Portfolio — Alejandro López

Portafolio personal construido con **Next.js 15**, **Tailwind CSS** y **shadcn/ui**.

## Requisitos

- Node.js 18+ → [Descargar aquí](https://nodejs.org/)

## Instalación

```bash
# 1. Entra a la carpeta del proyecto
cd portfolio

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura

```
portfolio/
├── app/
│   ├── layout.tsx        # Layout raíz
│   ├── page.tsx          # Página principal
│   └── globals.css       # Estilos globales
├── components/
│   ├── ui/               # Componentes shadcn/ui
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Certificates.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts
└── public/
    └── corpfinance.html  # Demo CorpFinance Analyzer
```

## Personalización

- Actualiza tu email en `components/Contact.tsx`
- Agrega tu URL de LinkedIn en `components/Contact.tsx`
- Modifica el contenido de cada sección en sus respectivos componentes
