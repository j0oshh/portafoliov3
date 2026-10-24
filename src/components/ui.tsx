import type { ReactNode } from "react";
import Link from "next/link";
import Carousel from "./Carousel";
import { formatDate, readingTime, type Project } from "@/data/site";

export const Heading = ({ as: T = "h2", children, className = "" }: { as?: "h1" | "h2" | "h3"; children: ReactNode; className?: string }) => {
  const size = { h1: "text-32/5 uppercase", h2: "text-24/5 uppercase", h3: "text-24/5 capitalize" }[T];
  return <T className={`font-pixels text-base-200 ${size} ${className}`}>{children}</T>;
};
export const Text = ({ children, className = "text-base-400", sm = false }: { children: ReactNode; className?: string; sm?: boolean }) =>
  <p className={`font-mono ${sm ? "text-14/4" : "text-16/8"} ${className}`}>{children}</p>;
export const Tag = ({ title, icon }: { title: string; icon?: string }) => (
  <div className="p-8 bg-base-900 text-base-400 flex flex-row items-center gap-8">
    {icon && <img src={icon} alt="" width={20} height={20} />}
    <Text sm className="">{title}</Text>
  </div>
);
export const Section = ({ title, heading, children }: { title?: string; heading: string; children: ReactNode }) => (
  <section className="flex flex-col gap-24">
    <div className="flex flex-col gap-8">{title && <Text className="text-base-700">// {title}</Text>}<Heading>{heading}</Heading></div>
    {children}
  </section>
);
export const A = ({ href, children }: { href: string; children: ReactNode }) =>
  <a href={href} target="_blank" rel="noopener noreferrer" className="font-pixels text-20 text-base-100 hover:text-base-300 font-semibold underline">{children}</a>;

export const Card = ({ title, meta, children }: { title: string; meta: ReactNode; children?: ReactNode }) => (
  <div className="border-2 border-base-900 h-full flex flex-col">
    <div className="bg-base-900 p-16 flex flex-col gap-16"><Heading as="h3">{title}</Heading>
      <div className="flex md:flex-row md:gap-32 flex-col gap-16 text-base-500 font-mono text-14/4">{meta}</div></div>
    {children && <div className="p-16 flex flex-col gap-16">{children}</div>}
  </div>
);
export const ProjectCard = ({ p }: { p: Project }) => (
  <Card title={p.title} meta={<><span>{p.year}</span>{p.github && <A href={p.github}>Source</A>}{p.liveSite && <A href={p.liveSite}>Website</A>}</>}>
    <Text>{p.description}</Text>
    <div className="flex flex-row gap-16 flex-wrap">{p.tools.map((t) => <Tag key={t} title={t} />)}</div>
  </Card>
);
export const ProjectsCarousel = ({ list }: { list: Project[] }) => <Carousel perView={2}>{list.map((p) => <ProjectCard key={p.title} p={p} />)}</Carousel>;
export const ArticleCard = ({ a }: { a: { slug: string; title: string; date: string; category: string; body: string } }) => (
  <Link href={`/blog/${a.slug}/`} className="block h-full border-2 border-base-950 hover:border-base-800">
    <div className="bg-base-900 p-16 flex flex-col gap-16 h-full"><Heading as="h3">{a.title}</Heading>
      <Text sm className="text-base-400">{formatDate(a.date)} · #{a.category} · {readingTime(a.body)} min</Text></div>
  </Link>
);
