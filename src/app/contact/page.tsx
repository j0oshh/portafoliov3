import type { Metadata } from "next";
import Shell from "@/components/Shell";
import { Section, Text, A } from "@/components/ui";
import { profile, socials } from "@/data/site";

export const metadata: Metadata = { title: "Contactos" };
export default function Contact() {
  return (
    <Shell title="Contactos">
      <Section heading="¡Conectemos!">
        <Text>¿Quieres conversar sobre mis proyectos, compartir una oportunidad o simplemente saludar? Me encantaría saber de ti.</Text>
        <Text>Puedes escribirme al correo <A href={`mailto:${profile.email}`}>{profile.email}</A>.</Text>
        <Text>También puedes encontrarme en:</Text>
        <div className="flex flex-row gap-24">{socials.map((s) => <A key={s.label} href={s.link}>{s.label}</A>)}</div>
      </Section>
    </Shell>
  );
}
