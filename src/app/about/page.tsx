import type { Metadata } from "next";
import Shell from "@/components/Shell";
import Carousel from "@/components/Carousel";
import { Section, Text, Card, Tag, Heading } from "@/components/ui";
import { profile, experience, education, skills, abilities, techIcons, img } from "@/data/site";

export const metadata: Metadata = { title: "Sobre mí" };
export default function About() {
  return (
    <Shell title="Sobre mí">
      <Section heading="Estudiante. Desarrollador. Siempre aprendiendo.">{profile.bio.map((p) => <Text key={p}>{p}</Text>)}</Section>
      <Section heading="Mis objetivos a futuro"><Text>{profile.goals}</Text></Section>
      <Section heading="Dónde he trabajado">
        <Carousel>{experience.map((e) => <Card key={e.title} title={e.title} meta={<span>{e.timeline}</span>}><Text>{e.description}</Text></Card>)}</Carousel>
      </Section>
      <Section heading="Mis estudios">
        <Carousel perView={2}>{education.map((e) => <Card key={e.title} title={e.title} meta={<><span>{e.timeline}</span><span>{e.school}</span></>} />)}</Carousel>
      </Section>
      <Section heading="Lo que aprendo y utilizo en mis proyectos">
        <Carousel perView={2}>{skills.map((s) => (
          <div key={s.title} className="border-2 border-base-900 h-full">
            <div className="bg-base-900 p-16"><Heading as="h3">{s.title}</Heading></div>
            <div className="p-16 flex flex-row flex-wrap gap-16">{s.items.map((i) => <Tag key={i} title={i} icon={techIcons[i] && img(techIcons[i])} />)}</div>
          </div>))}
        </Carousel>
      </Section>
      <Section heading="Mis habilidades">
        <Carousel perView={2}>{abilities.map((s) => (
          <div key={s.title} className="border-2 border-base-900 h-full">
            <div className="bg-base-900 p-16"><Heading as="h3">{s.title}</Heading></div>
            <div className="p-16 flex flex-row flex-wrap gap-16">{s.items.map((i) => <Tag key={i} title={i} />)}</div>
          </div>))}
        </Carousel>
      </Section>
    </Shell>
  );
}
