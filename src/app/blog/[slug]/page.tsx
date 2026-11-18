import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import { Section, Text, Heading } from "@/components/ui";
import { posts, formatDate } from "@/data/site";

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <Shell title={post.title}>
      <Section title={`Publicado: ${formatDate(post.date)}`} heading={`#${post.category}`}>
        <div className="flex flex-col gap-24">
          {post.body.split("\n\n").map((b) => b.startsWith("## ")
            ? <Heading key={b}>{b.slice(3)}</Heading>
            : <Text key={b}>{b}</Text>)}
        </div>
      </Section>
    </Shell>
  );
}
