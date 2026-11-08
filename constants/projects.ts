import { ProjectEntry } from "@/types";

// El primer proyecto se muestra destacado a todo el ancho.
// Los datos salen de los README de cada repositorio: no agregues métricas que no puedas sustentar.
export const PROJECTS: ProjectEntry[] = [
  {
    // Datos tomados del CV. Sin detalles de integraciones internas: el proyecto es privado.
    title: "Plataforma de identidades y accesos",
    category: "Proyecto interno",
    status: "En producción",
    description:
      "Plataforma interna de Julius 2 Grow para gestionar identidades, accesos y facturación de licencias. La diseñé, la desarrollé y la llevé a producción.",
    facts: [
      { value: "370+", label: "licencias controladas" },
      { value: "30", label: "áreas" },
      { value: "20", label: "centros de costo" },
      { value: "84", label: "pruebas automatizadas" },
    ],
    highlights: [
      "Cruza las licencias contra el personal activo y detecta las que siguen asignadas a personas retiradas.",
      "Reparte el costo mensual de Jira, Planner y Tempo entre áreas y centros de costo.",
      "Inicio de sesión con Google restringido al dominio corporativo, sesión en cookie firmada HttpOnly y 3 roles validados en el backend en cada petición.",
      "Sincroniza altas y bajas de personal con Gestión Humana y Mesa de Ayuda.",
      "Pruebas con pytest y despliegue con Docker Compose (MySQL, API y nginx).",
    ],
    stack: [
      "FastAPI",
      "Python",
      "React",
      "TypeScript",
      "MySQL",
      "OAuth con Google",
      "pytest",
      "Docker",
      "nginx",
    ],
    privateNote:
      "Sistema interno de la empresa: el código y las pantallas no son públicos.",
  },
  {
    title: "Tickets-App",
    category: "Full Stack",
    status: "En desarrollo",
    description:
      "Sistema para registrar, asignar y resolver incidencias de soporte técnico entre usuarios y técnicos.",
    highlights: [
      "Autenticación con JWT y tres roles (ADMIN, TECH, USER) sobre Spring Security.",
      "Ciclo de vida del ticket: abierto, en progreso, resuelto y cerrado, con asignación a técnicos.",
      "API REST organizada en controladores, servicios y repositorios, con JPA/Hibernate y MySQL.",
      "Scripts de analítica con Python, Pandas y Matplotlib.",
    ],
    image: {
      src: "/projects/tickets-app.png",
      width: 1851,
      height: 861,
      alt: "Pantalla de Tickets-App con la lista de tickets de soporte, su estado y el técnico asignado",
    },
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JPA/Hibernate",
      "MySQL",
      "Python",
    ],
    githubUrl: "https://github.com/davidbarbilloA/Tickets-app",
  },
  {
    title: "FinanceOS",
    category: "Fintech",
    status: "En desarrollo",
    description:
      "Plataforma privada para registrar ingresos, gastos, ahorros y deudas, organizarlos en bolsillos y ver métricas en un dashboard.",
    highlights: [
      "Autenticación con Supabase y Row Level Security para proteger cada registro.",
      "Dashboard con gráficos de actividad, distribución de gastos y metas de ahorro en Recharts.",
      "Formularios validados con React Hook Form y Zod.",
    ],
    image: {
      src: "/projects/financeos.png",
      width: 1851,
      height: 917,
      alt: "Dashboard de FinanceOS con balance, gastos, ahorros, deudas y un gráfico de actividad",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Recharts",
      "Zod",
    ],
    githubUrl: "https://github.com/davidbarbilloA/finance-os",
    demoUrl: "https://finance-os-seven-delta.vercel.app/",
    demoLabel: "App en vivo (acceso privado)",
  },
  {
    title: "Malicious URL Checker",
    category: "Ciberseguridad",
    status: "En desarrollo",
    description:
      "Herramienta de línea de comandos para ciberseguridad defensiva: analiza URLs sospechosas, detecta indicios de phishing y malware, y calcula un score de riesgo de 0 a 100.",
    highlights: [
      "Combina validación estática, VirusTotal, WHOIS, SSL/TLS y geolocalización de IP en un solo análisis.",
      "Revisa HTML y redirecciones, y toma capturas de pantalla con Playwright.",
      "Genera informes SOC opcionales e historial de análisis en CSV.",
    ],
    image: {
      src: "/projects/url-malisius.png",
      width: 1157,
      height: 751,
      alt: "Terminal con el análisis de una URL: IP, HTML, score de riesgo y clasificación",
    },
    stack: ["Python", "VirusTotal API", "Playwright", "BeautifulSoup", "WHOIS"],
    githubUrl:
      "https://github.com/davidbarbilloA/Sistema-de-Verificaci-n-de-URLs-Maliciosas",
  },
];
