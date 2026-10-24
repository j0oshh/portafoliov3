import Shell from "@/components/Shell";
import { Section, Text } from "@/components/ui";
import Link from "next/link";

export default function NotFound() {
  return (
    <Shell title="Página no encontrada">
      <Section title="Página no encontrada" heading="404.exe">
        <Text>La página que buscas no existe o fue movida.</Text>
        <Link href="/" className="font-pixels text-20 text-base-100 underline">Volver al inicio</Link>
      </Section>
    </Shell>
  );
}
