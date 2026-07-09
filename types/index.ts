export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Bases de datos"
  | "Cloud"
  | "Herramientas"
  | "Administración TI";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 1-100, used for the animated proficiency bar
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  stack: string[];
  current?: boolean;
}

export interface ProjectEntry {
  title: string;
  description: string;
  image?: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: "En producción" | "En desarrollo" | "Archivado" | "Próximamente";
  category: string;
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  status: "Completada" | "En proceso" | "Planificada";
  date?: string;
  url?: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  status: "Completado" | "En curso";
  description?: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface ServiceEntry {
  title: string;
  description: string;
  icon: string;
}
