import Shell from "@/components/Shell";
import Carousel from "@/components/Carousel";
import { Section, Text, ProjectsCarousel, ArticleCard } from "@/components/ui";
import { profile, projects, posts } from "@/data/site";

export default function Home() {
  return (
    <Shell title="Inicio">
      <Section heading="¿Quién soy?"><Text>{profile.intro}</Text></Section>
      <Section heading="Algunos de mis proyectos"><ProjectsCarousel list={projects.filter((p) => p.featured)} /></Section>
      <Section heading="Lo último en lo que trabajé">
        <Carousel perView={2}>{posts.map((a) => <ArticleCard key={a.slug} a={a} />)}</Carousel>
      </Section>
    </Shell>
  );
}
