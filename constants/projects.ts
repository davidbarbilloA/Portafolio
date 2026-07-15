import { ProjectEntry } from "@/types";

// Espacio reservado a propósito: agrega tus proyectos aquí siguiendo esta forma.
// Mientras el array esté vacío, la sección muestra un estado vacío elegante
// con la estructura de la grilla ya lista.
//
// Ejemplo:
// {
//   title: "Nombre del proyecto",
//   description: "Qué resuelve y por qué lo construiste, en 1-2 frases.",
//   image: "/projects/nombre.png",
//   stack: ["React", "TypeScript", "Spring Boot"],
//   githubUrl: "https://github.com/usuario/repo",
//   demoUrl: "https://demo.com",
//   status: "En producción",
//   category: "Full Stack",
// },
export const PROJECTS: ProjectEntry[] = [
    {
        title: "Tickets-App",
        description: "Aplicacion para el manejo de tickets.",
        image: "/projects/tickets-app.png",
        stack: [
            "Frontend: React 19, TypeScript, Vite, Axios, React Router, Lucide React",
            "Backend: Spring Boot, Spring Security, JWT, JPA/Hibernate, REST API",
            "MySQL",
            "Analitica: Python 3, Pandas, Matplotlib, Requests"
        ],
        githubUrl: "https://github.com/davidbarbilloA/Tickets-app",
        status: "En desarrollo",
        category: "Full Stack",
    },
    {
        title: "Validacion de URLs Maliciosas",
        description: "Herramienta de ciberseguridad defensiva para analizar URLs sospechosas",
        image: "/projects/url-malisius.png",
        stack: [
            "Python 3",
            "Requests",
            "Tldextract",
            "Colorama",
            "Python-dotenv",
            "Python-whois",
            "Beautifulsoup4",
            "Playwright",
            "greenlet"
        ],
        githubUrl: "https://github.com/davidbarbilloA/Sistema-de-Verificaci-n-de-URLs-Maliciosas",
        status: "En desarrollo",
        category: "Ciberseguridad",
    },
    {
        title: "FinanceOS",
        description: "Plataforma privada para registrar ingresos, gastos, ahorros y deudas",
        image: "/projects/financeos.png",
        stack: [
            "Frontend: React 19, Next.js 16 (App Router), TyhpeScript, Tailwind CSS 3",
            "UI/ Gráficos: Lucide Icons, Recharts",
            "Backend / BD: Supabase (auth + PostgreSQL)",
            "Formularios: React Hook Form, Zod"
        ],
        githubUrl: "https://github.com/davidbarbilloA/finance-os",
        demoUrl: "https://finance-os-seven-delta.vercel.app/",
        status: "En desarrollo",
        category: "Fintech",
    }
];
