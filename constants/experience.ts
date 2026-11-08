import { ExperienceEntry } from "@/types";

// Cargos, fechas y cifras tomados del CV: mantenlos iguales en ambos.
export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Julius 2 Grow",
    role: "Auxiliar de Sistemas",
    period: "Enero 2024 — Presente",
    location: "Medellín, Colombia",
    current: true,
    description:
      "Responsable de licenciamiento de software (Jira, Adobe), administración de plataformas y desarrollo interno.",
    highlights: [
      "Diseñé y desarrollé la plataforma interna de identidades, accesos y facturación de licencias, que controla más de 370 licencias.",
      "Automaticé con IA (Claude) la generación del informe de incidentes de ciberseguridad a partir de exportes de Jira, con una plantilla corporativa estandarizada.",
      "Desarrollé la intranet de la empresa, que centraliza todos los formatos administrativos en un solo lugar.",
      "Administro Google Workspace (200 licencias), Jira (122) y Adobe (50), incluyendo altas, bajas, accesos y permisos.",
      "Doy soporte técnico a 170 usuarios (unos 30 tickets al mes) y controlo el inventario de 400 equipos de TI.",
      "Asumí el liderazgo del área de sistemas durante 2 meses, asegurando la continuidad de los servicios, y documenté sus procesos con buenas prácticas de ITIL y COBIT.",
    ],
    stack: [
      "FastAPI",
      "React",
      "TypeScript",
      "MySQL",
      "Docker",
      "Google Workspace",
      "Jira",
      "Adobe",
    ],
  },
  {
    company: "Julius 2 Grow",
    role: "Aprendiz de Sistemas",
    period: "Febrero 2023 — Agosto 2023",
    description:
      "Soporte técnico, mantenimiento de equipos, administración y consulta de bases de datos, documentación de procesos y apoyo en proyectos de desarrollo y pruebas de software.",
  },
];
