import { CertificationEntry } from "@/types";

// `featured` decide cuáles se ven de entrada; las demás quedan detrás de "Ver todas".
export const CERTIFICATIONS: CertificationEntry[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    status: "En proceso",
    featured: true,
  },
  {
    name: "Fundamentos de Arquitectura de Software",
    issuer: "Platzi",
    status: "Completada",
    featured: true,
    url: "https://platzi.com/p/cbarbillo591/curso/12061-course/diploma/detalle/",
  },
  {
    name: "Fundamentos de Ingeniería de Software",
    issuer: "Platzi",
    status: "Completada",
    featured: true,
    url: "https://platzi.com/p/cbarbillo591/curso/1098-course/diploma/detalle/",
  },
  {
    name: "Bases de Datos con SQL",
    issuer: "Platzi",
    status: "Completada",
    featured: true,
    url: "https://platzi.com/p/cbarbillo591/curso/11324-course/diploma/detalle/",
  },
  {
    name: "Accesibilidad Web",
    issuer: "Platzi",
    status: "Completada",
    featured: true,
    url: "https://platzi.com/p/cbarbillo591/curso/1802-course/diploma/detalle/",
  },
  {
    name: "Frameworks y Librerías de JavaScript",
    issuer: "Platzi",
    status: "Completada",
    featured: true,
    url: "https://platzi.com/p/cbarbillo591/curso/2239-course/diploma/detalle/",
  },
  {
    // El enlace al diploma (curso/615-course) devolvía 404: agrégalo cuando tengas el correcto.
    name: "Optimización Web",
    issuer: "Platzi",
    status: "Completada",
  },
  {
    name: "Curso en Analítica de Datos e Inteligencia Artificial",
    issuer: "Cesde",
    status: "Completada",
  },
  {
    name: "Claude Code",
    issuer: "Platzi",
    status: "Completada",
    url: "https://platzi.com/p/cbarbillo591/curso/12284-course/diploma/detalle/",
  },
  {
    name: "OpenAI Codex",
    issuer: "Platzi",
    status: "Completada",
    url: "https://platzi.com/p/cbarbillo591/curso/13333-course/diploma/detalle/",
  },
  {
    name: "Manipulación del DOM con JavaScript",
    issuer: "Platzi",
    status: "Completada",
    url: "https://platzi.com/p/cbarbillo591/curso/10135-course/diploma/detalle/",
  },
  {
    name: "Fundamentos de JavaScript",
    issuer: "Platzi",
    status: "Completada",
    url: "https://platzi.com/p/cbarbillo591/curso/10266-course/diploma/detalle/",
  },
  {
    name: "Fundamentos de Programación y Desarrollo Web",
    issuer: "Platzi",
    status: "Completada",
    url: "https://platzi.com/p/cbarbillo591/ruta/7039-ruta/diploma/detalle/",
  },
  {
    name: "Posicionamiento en Buscadores (SEO)",
    issuer: "Platzi",
    status: "Completada",
    url: "https://platzi.com/p/cbarbillo591/curso/7099-course/diploma/detalle/",
  },
  {
    name: "Introducción al Technical Writing",
    issuer: "Platzi",
    status: "Completada",
    url: "https://platzi.com/p/cbarbillo591/curso/2026-course/diploma/detalle/",
  },
  {
    name: "Curso Práctico de WordPress",
    issuer: "Platzi",
    status: "Completada",
    url: "https://platzi.com/p/cbarbillo591/curso/1812-course/diploma/detalle/",
  },
];
