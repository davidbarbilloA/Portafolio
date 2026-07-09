# David Barbillo — Portafolio

Portafolio profesional construido con Next.js 14 (App Router), TypeScript, TailwindCSS y Framer Motion.

## Stack

- **Next.js 14** (App Router, Server + Client Components)
- **TypeScript** en modo estricto
- **TailwindCSS** con tokens de diseño personalizados (ver `tailwind.config.ts`)
- **Framer Motion** para animaciones (stagger, reveal on scroll, layout transitions)
- **Lucide React** para iconografía
- **Geist Sans** (paquete oficial `geist`) + **Inter** + **JetBrains Mono**

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
/app                 → rutas de Next.js (layout, page, robots, sitemap, globals.css)
/components/layout   → navbar, footer, cursor, loading screen, scroll progress, back-to-top
/components/sections → cada sección del portafolio (Hero, About, Skills, Experience...)
/components/ui       → primitivos reutilizables (Button, Badge, Card, SectionHeading, RevealOnScroll)
/hooks               → lógica reutilizable (scroll progress, sección activa, posición del mouse)
/lib                 → utilidades (cn para clases de Tailwind)
/constants           → todo el contenido del sitio, separado del componente que lo renderiza
/types               → contratos de datos compartidos
/public              → assets estáticos (foto, CV, imagen OG, capturas de proyectos)
```

Separar contenido (`/constants`) de presentación (`/components`) significa que puedes actualizar tu
experiencia, certificaciones o proyectos sin tocar una sola línea de JSX.

## Qué personalizar antes de publicar

1. **`constants/site.ts`** — nombre, correo, enlaces de GitHub/LinkedIn, URL del CV.
2. **`constants/projects.ts`** — está vacío a propósito. Agrega tus proyectos siguiendo la forma indicada
   en el comentario del archivo; la sección ya tiene el grid y el estado vacío listos.
3. **`constants/experience.ts`** — agrega roles anteriores o futuros con la misma estructura.
4. **`/public/profile.jpg`** — reemplaza el placeholder del Hero.
5. **`/public/resume.pdf`** — y actualiza `SITE.resumeUrl`.
6. **`/public/og-image.png`** — imagen para compartir en redes (1200×630).

## Identidad visual (resumen)

- **Paleta:** negro casi puro (`#0A0A0B`) con superficies grises escalonadas (`#131316`, `#18181C`) y un
  único acento azul eléctrico (`#2E7DFF`), usado con disciplina.
- **Tipografía:** Geist Sans para títulos, Inter para cuerpo de texto, JetBrains Mono para metadatos
  (fechas, tags de tecnología, labels) — un guiño deliberado a tu perfil de sistemas/infraestructura,
  donde lo monoespaciado se asocia a terminal y logs.
- **Elemento de firma:** el tratamiento mono para todo dato "de sistema" (fechas, stacks, estados,
  porcentajes de skill) crea un hilo conductor visual entre tu lado de producto (tipografía humanista) y
  tu lado de infraestructura (tipografía técnica), sin caer en un tema "hacker" literal.
- **Motion:** stagger en el Hero, scroll-reveal consistente vía `RevealOnScroll`, pill animada en la nav
  activa, y micro-interacciones de hover — todo con la curva `cubic-bezier(0.16, 1, 0.3, 1)` para que se
  sienta uniforme en todo el sitio.

## Fuente Satoshi (opcional)

El brief original mencionaba Satoshi. No está incluida por defecto porque no está en Google Fonts y
requiere licencia/CDN de Fontshare. Si quieres agregarla:

```ts
// app/layout.tsx
// <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" />
```

y referenciarla como `font-display` en lugar de Geist.
