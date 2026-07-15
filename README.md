# Portafolio – Sitio personal de David Barbillo

Portafolio profesional construido con **Next.js 14 (App Router)**, orientado a mostrar experiencia, proyectos y skills con una identidad visual propia (paleta oscura, tipografía mixta humanista/técnica y animaciones con Framer Motion).

## Tech stack

| Capa | Tecnologías |
|------|-------------|
| **Framework** | Next.js 14 (App Router, Server + Client Components) |
| **Lenguaje** | TypeScript (modo estricto) |
| **Estilos** | TailwindCSS + tokens de diseño personalizados (`tailwind.config.ts`) |
| **Animaciones** | Framer Motion (stagger, reveal on scroll, layout transitions) |
| **Iconografía** | Lucide React |
| **Tipografía** | Geist Sans, Inter, JetBrains Mono |

## Estructura del proyecto

```text
Portafolio/
├── app/                    # Rutas de Next.js (layout, page, robots, sitemap, globals.css)
├── components/
│   ├── layout/             # Navbar, footer, cursor, loading screen, scroll progress, back-to-top
│   ├── sections/           # Secciones del portafolio (Hero, About, Skills, Experience...)
│   └── ui/                 # Primitivos reutilizables (Button, Badge, Card, SectionHeading, RevealOnScroll)
├── hooks/                  # Lógica reutilizable (scroll progress, sección activa, posición del mouse)
├── lib/                    # Utilidades (cn para clases de Tailwind)
├── constants/              # Contenido del sitio, separado de la presentación
├── types/                  # Contratos de datos compartidos
├── public/                 # Assets estáticos (foto, CV, imagen OG, capturas de proyectos)
└── README.md
```

> Separar contenido (`/constants`) de presentación (`/components`) permite actualizar experiencia, certificaciones o proyectos sin tocar JSX.

## Funcionalidades

- Diseño **responsive** de una sola página (Hero, About, Skills, Experience, Projects, Contact)
- **Animaciones** de entrada (stagger), scroll-reveal y micro-interacciones con Framer Motion
- **Nav pill animada** que resalta la sección activa según scroll
- **Cursor personalizado**, loading screen y barra de progreso de scroll
- Botón *back-to-top*
- Contenido desacoplado del componente (`/constants`) para edición rápida
- SEO básico vía `app/robots` y `app/sitemap`
- Descarga de **CV** e imagen **OG** para compartir en redes

## Identidad visual (resumen)

| Elemento | Detalle |
|----------|---------|
| **Paleta** | Negro casi puro (`#0A0A0B`) + superficies grises escalonadas (`#131316`, `#18181C`) + acento azul eléctrico (`#2E7DFF`) |
| **Tipografía** | Geist Sans (títulos), Inter (cuerpo), JetBrains Mono (metadatos: fechas, stacks, estados) |
| **Motion** | Curva `cubic-bezier(0.16, 1, 0.3, 1)` en todas las transiciones para sensación uniforme |
| **Elemento de firma** | Tratamiento mono para todo dato "de sistema", como puente visual entre el lado producto (tipografía humanista) y el lado infraestructura (tipografía técnica) |

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/davidbarbilloA/Portafolio.git
cd Portafolio
```

### 2. Instalar dependencias

**Requisitos:** Node.js 18+

```bash
npm install
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

App disponible en: `http://localhost:3000`

## Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Levanta el servidor de desarrollo (Next.js) |
| `npm run build` | Genera el build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | Corre ESLint sobre el proyecto |

## Qué personalizar antes de publicar

| Archivo | Qué contiene |
|---------|--------------|
| `constants/site.ts` | Nombre, correo, enlaces de GitHub/LinkedIn, URL del CV |
| `constants/projects.ts` | Proyectos a mostrar (vacío por defecto, con estructura de ejemplo en comentarios) |
| `constants/experience.ts` | Experiencia laboral / roles anteriores y futuros |
| `public/profile.jpg` | Foto del Hero (reemplaza el placeholder) |
| `public/resume.pdf` | CV descargable (actualizar `SITE.resumeUrl`) |
| `public/og-image.png` | Imagen para compartir en redes (1200×630) |

## Fuente Satoshi (opcional)

El brief original contemplaba la tipografía Satoshi, no incluida por defecto por no estar en Google Fonts (requiere licencia/CDN de Fontshare). Para agregarla:

```ts
// app/layout.tsx
// <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" />
```

Y referenciarla como `font-display` en lugar de Geist.

## Build de producción

```bash
npm run build
npm run start
```

## Autor

- [@davidbarbilloA](https://github.com/davidbarbilloA)