export interface SkillGroup {
  title: string;
  note?: string;
  items: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
  stack?: string[];
  current?: boolean;
}

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface ProjectEntry {
  title: string;
  description: string;
  highlights: string[];
  image?: ProjectImage;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
  /** Proyecto sin código ni pantallas públicas: este aviso sustituye a los enlaces. */
  privateNote?: string;
  /** Cifras reales que ocupan el lugar de la captura cuando no se puede mostrar. */
  facts?: { value: string; label: string }[];
  status:"En producción" | "En desarrollo" | "Archivado" | "Próximamente";
  category: string;
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  status: "Completada" | "En proceso" | "Planificada";
  featured?: boolean;
  date?: string;
  url?: string;
}

export interface EducationEntry {
  institution?: string;
  degree: string;
  period?: string;
  status?: "Completado" | "En curso";
  description?: string;
}
