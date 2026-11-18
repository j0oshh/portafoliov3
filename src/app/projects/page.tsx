import type { Metadata } from "next";
import Shell from "@/components/Shell";
import { Section } from "@/components/ui";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { projects } from "@/data/site";

export const metadata: Metadata = { title: "Proyectos" };
export default function Projects() {
  return (
    <Shell title="Todos los proyectos">
      <Section heading="Lo que he creado, probado y aprendido"><ProjectsCarousel list={projects} /></Section>
    </Shell>
  );
}
