import { ExperienceEntry } from "@/types";

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Julius2grow — ARKIX SAS",
    role: "Software Developer & IT Systems Administrator",
    period: "2024 — Presente",
    location: "Medellín, Colombia (Presencial)",
    current: true,
    description:
      "Desarrollo interfaces y herramientas internas mientras administro la infraestructura tecnológica que las sostiene: dos disciplinas que normalmente están separadas, y que aquí conviven en un mismo rol. Esa doble perspectiva — construir software y operar los sistemas donde corre — es la base de cómo diseño soluciones: pensando en mantenibilidad, seguridad y escala desde el primer commit.",
    highlights: [
      "Lidero la consolidación de riesgos 2026 a nivel de compañía: una matriz de riesgo unificada en Excel que agrega y correlaciona riesgos de ocho áreas internas, con seguimiento de controles asociados.",
      "Administro Google Workspace de forma integral: gobernanza de accesos corporativos, gestión de licencias y automatización de procesos de alta y baja de usuarios.",
      "Diagnostico y optimizo infraestructura de red UniFi (switches PoE y access points), resolviendo problemas de rendimiento como interferencia de canal en 2.4 GHz.",
      "Diseño y desarrollo interfaces frontend para herramientas internas, aplicando las mismas prácticas de componentización y control de versiones que en proyectos de producción.",
      "Produzco documentación técnica y presentaciones formales para audiencias directivas, traduciendo decisiones de infraestructura en información accionable para no-técnicos.",
    ],
    stack: [
      "Inventario de equipos",
      "Google Workspace",
      "UniFi Network",
      "Matriz de riesgos",
      "Soporte técnico",
      "Redes UniFi",
      "Manejo de VPN",
      "Administración de servidores",
      "Mantenimiento preventivo y correctivo"
    ],
  },
  // TODO: agrega aquí experiencias anteriores o futuras.
  // Mantén la misma estructura: company, role, period, description, highlights[], stack[].
];
