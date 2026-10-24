// ✏️ AQUÍ EDITAS TODO EL CONTENIDO DEL PORTAFOLIO
import { post1 } from "./post-1";

export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const img = (src: string) => `${BASE}${src}`;

export const profile = {
  name: "Pimentel Joseph",
  fullName: "Joseph Pimentel",
  role: "Desarrollador de Software",
  status: "Disponible para trabajar",
  photo: "/images/decker.jpg",
  email: "pimentelalvaradojoseph@gmail.com",
  intro:
    "Soy Joseph, estudiante de Desarrollo de Software. Me interesa crear aplicaciones web prácticas y fáciles de usar. A través de mis proyectos, sigo aprendiendo sobre frontend, backend y bases de datos, buscando mejorar mis habilidades y construir soluciones que respondan a necesidades reales.",
  bio: [
    "Hola, soy Joseph, estudiante de Desarrollo de Software. Me interesa crear aplicaciones web que sean útiles, claras y fáciles de usar. A través de mis proyectos, desarrollo mis habilidades en frontend, backend y bases de datos, prestando atención a la organización del código y al funcionamiento de cada solución.",
    "Aprendo construyendo, testeando y resolviendo problemas. Disfruto explorar nuevas herramientas y aplicar lo aprendido en proyectos académicos y personales. Mi objetivo es seguir creciendo como desarrollador y aportar a proyectos que respondan a necesidades reales.",
  ],
  goals:
    "Mi objetivo es seguir mejorando mis habilidades como programador, aprender nuevas tecnologías y adquirir experiencia en el desarrollo de soluciones innovadoras. En el futuro, me gustaría trabajar en el sector bancario para conocer más sobre sus sistemas y procesos tecnológicos, y continuar creciendo tanto profesional como personalmente. A largo plazo, aspiro a fundar mi propia empresa de tecnología, desarrollar proyectos que aporten valor a las personas y convertir mis ideas en soluciones que respondan a necesidades reales.",
};

export const nav = [
  { title: "/inicio", path: "/" },
  { title: "/proyectos", path: "/projects" },
  { title: "/sobre-mí", path: "/about" },
  { title: "/contactos", path: "/contact" },
];

export const socials = [
  { label: "GitHub", link: "https://github.com/j0oshh" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/joseph-pimentel-alvarado-587672446/" },
  { label: "Twitter/X", link: "https://x.com/qTL7p" },
];

export type Project = { title: string; year: string; tools: string[]; description: string; github?: string; liveSite?: string; featured: boolean };
export const projects: Project[] = [
  { title: "BARBIVO", year: "2026", tools: ["Next.js", "TypeScript", "CSS"], github: "https://github.com/j0oshh", liveSite: "https://barbivoperu.com/", featured: true,
    description: "Aplicación de barbería a domicilio y delivery de comida. Participé en el desarrollo frontend, mejorando las interfaces, la organización del contenido y el diseño responsive para facilitar su uso en computadoras y dispositivos móviles." },
  { title: "Herramientas de productividad", year: "2026", tools: ["Python"], github: "https://github.com/j0oshh", featured: true,
    description: "Proyecto personal en desarrollo para automatizar tareas cotidianas, como identificar y eliminar archivos duplicados y convertir documentos de Word a PDF. Su objetivo es facilitar la organización de archivos y reducir el tiempo dedicado a tareas repetitivas." },
  { title: "EMPRESOFT", year: "2026", tools: ["Next.js", "TypeScript", "CSS"], github: "https://github.com/j0oshh", liveSite: "https://www.empresoftperu.com/", featured: true,
    description: "Durante mis prácticas en EMPRESOFT, participé en el desarrollo frontend de módulos del panel administrativo, mejorando componentes, organización del contenido y diseño responsive para facilitar el uso de las herramientas de gestión." },
];

export const experience = [
  { title: "Desarrollador Frontend — BARBIVO", timeline: "2026",
    description: "Participé en el desarrollo frontend de BARBIVO, una aplicación de servicios de barbería a domicilio y delivery de comida. Trabajé en la creación y mejora de interfaces, adaptando las pantallas a distintos dispositivos y cuidando la organización visual para facilitar la navegación y el uso de la plataforma." },
  { title: "Desarrollo Frontend — EMPRESOFT", timeline: "2026",
    description: "Colaboré en el desarrollo de módulos del panel administrativo de la plataforma web de EMPRESOFT. Realicé mejoras en componentes, distribución del contenido y diseño responsive, buscando que las herramientas de gestión fueran claras y fáciles de utilizar. Durante mis prácticas, reforcé mis habilidades de desarrollo frontend mediante tareas aplicadas a un proyecto real." },
];

export const education = [
  { title: "Desarrollo de Software", timeline: "En curso", school: "SENATI" },
  { title: "Aprendizaje complementario en desarrollo web", timeline: "Actualmente", school: "Formación autodidacta y proyectos personales" },
];

export const skills = [
  { title: "Lenguajes", items: ["Python", "TypeScript", "HTML", "CSS", "SQL"] },
  { title: "Frameworks y bibliotecas", items: ["React", "Next.js", "NestJS", "Tailwind CSS"] },
  { title: "Herramientas y bases de datos", items: ["Git", "GitHub", "PostgreSQL", "Drizzle ORM", "Postman", "Visual Studio Code"] },
];

export const abilities = [
  { title: "Habilidades blandas", items: ["Trabajo en equipo", "Comunicación", "Resolución de problemas", "Aprendizaje autónomo", "Adaptabilidad", "Organización"] },
  { title: "Habilidades", items: ["Desarrollo frontend", "Diseño responsive", "Desarrollo de API REST", "Gestión de roles y permisos", "Bases de datos relacionales", "Trabajo colaborativo con Git"] },
];

export const techIcons: Record<string, string> = {
  Python: "/images/tech/python.svg",
  TypeScript: "/images/tech/typescript.svg",
  HTML: "/images/tech/html.svg",
  CSS: "/images/tech/css.svg",
  SQL: "/images/tech/sql.svg",
  React: "/images/tech/react.svg",
  "Next.js": "/images/tech/nextjs.svg",
  NestJS: "/images/tech/nestjs.svg",
  "Tailwind CSS": "/images/tech/tailwindcss.svg",
  Git: "/images/tech/git.svg",
  GitHub: "/images/tech/github.svg",
  PostgreSQL: "/images/tech/postgresql.svg",
  "Drizzle ORM": "/images/tech/drizzle.svg",
  Postman: "/images/tech/postman.svg",
  "Visual Studio Code": "/images/tech/vscode.svg",
};

export const posts = [
  { slug: "lessons-from-building-resilient-systems", title: "experiencia desarrollando el frontend de BARBIVO", date: "2026-08-24", category: "systems", body: post1 },
];
export const readingTime = (b: string) => Math.max(1, Math.round(b.trim().split(/\s+/).length / 238));
export const formatDate = (d: string) => new Date(d + "T12:00:00").toLocaleDateString("es-PE", { month: "short", day: "numeric", year: "numeric" });
