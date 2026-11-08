# Portafolio – Sitio personal de David Barbillo

Portafolio profesional construido con **Next.js 14 (App Router)**, orientado a mostrar experiencia, proyectos y skills con una identidad visual propia (paleta oscura, tipografía mixta humanista/técnica y animaciones con Framer Motion).

## Tech stack

| Capa | Tecnologías |
|------|-------------|
| **Framework** | Next.js 14 (App Router, Server + Client Components) |
| **Lenguaje** | TypeScript (modo estricto) |
| **Estilos** | TailwindCSS + tokens de diseño personalizados (`tailwind.config.ts`) |
| **Animaciones** | Framer Motion (entrada del Hero y reveal on scroll, con soporte de `prefers-reduced-motion`) |
| **Iconografía** | Lucide React |
| **Tipografía** | Instrument Serif, Geist Sans, JetBrains Mono |

## Estructura del proyecto

```text
Portafolio/
├── app/                    # Rutas de Next.js (layout, page, robots, sitemap, globals.css)
├── components/
│   ├── layout/             # Navbar, footer, scroll progress, back-to-top, MotionProvider
│   ├── sections/           # Secciones del portafolio (Hero, Projects, Experience, Skills...)
│   └── ui/                 # Primitivos reutilizables (Button, Badge, Card, SectionHeading, RevealOnScroll)
├── hooks/                  # Lógica reutilizable (scroll progress, sección activa, posición del mouse)
├── lib/                    # Utilidades (cn para clases de Tailwind)
├── constants/              # Contenido del sitio, separado de la presentación
├── types/                  # Contratos de datos compartidos
├── public/                 # Assets estáticos (CV y capturas de proyectos)
└── README.md
```

> Separar contenido (`/constants`) de presentación (`/components`) permite actualizar experiencia, certificaciones o proyectos sin tocar JSX.

## Funcionalidades

- Diseño **responsive** de una sola página (Hero, Projects, Experience, Skills, About, Formation, Contact)
- **Animaciones** de entrada y scroll-reveal con Framer Motion, desactivadas con `prefers-reduced-motion`
- **Navegación** que resalta la sección activa según scroll
- Barra de progreso de scroll
- Botón *back-to-top*
- Contenido desacoplado del componente (`/constants`) para edición rápida
- SEO básico vía `app/robots` y `app/sitemap`
- Descarga de **CV** desde el Hero y metadatos **Open Graph** para compartir en redes

## Identidad visual (resumen)

| Elemento | Detalle |
|----------|---------|
| **Paleta** | Derivada del retrato: negro cálido (`#0B0A09`), superficies (`#141210`, `#1B1916`) y acento ámbar (`#E2A65C`) |
| **Tipografía** | Instrument Serif (títulos), Geist Sans (cuerpo), JetBrains Mono (etiquetas de tecnologías) |
| **Motion** | Curva `cubic-bezier(0.16, 1, 0.3, 1)` en todas las transiciones para sensación uniforme |
| **Elemento de firma** | Retrato integrado con el fondo y nombre en serif de gran tamaño |

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
| `constants/projects.ts` | Proyectos a mostrar (hoy: Tickets-App, FinanceOS y Malicious URL Checker; el primero se muestra destacado) |
| `constants/experience.ts` | Experiencia laboral / roles anteriores y futuros |
| `public/profile.jpg` | Foto del Hero (2048×2560) |
| `public/profile-og.jpg` | Copia ligera para la imagen de compartir |
| `public/projects/pdf/` | CV descargable (si cambias el archivo, actualiza `SITE.resumeUrl`) |
| `app/opengraph-image.tsx` | Imagen para compartir en redes, 1200×630, generada con tu foto y nombre |
| `app/icon.svg` | Ícono del sitio |

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