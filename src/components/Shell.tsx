"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile, nav, socials, img } from "@/data/site";
import { Heading, Text } from "./ui";

export default function Shell({ title, children }: { title: string; children: React.ReactNode }) {
  const path = (usePathname() || "/").replace(/\/+$/, "") || "/";
  return (
    <div className="max-w-300 mx-auto border-2 border-base-900 pb-56 flex flex-col gap-56 bg-base-950 min-h-full">
      <header className="flex flex-col gap-24 md:pt-56 pt-16 bg-base-950 md:sticky md:top-0 z-50">
        <div className="md:px-32 px-16 flex md:flex-row flex-col gap-16 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img(profile.photo)} alt={profile.name} width={100} height={100} className="object-cover object-center w-25 h-25 sepia-50 drop-shadow-md" />
          <div className="flex md:flex-row flex-col gap-24 justify-between items-center w-full">
            <div className="flex flex-col gap-24 md:items-start items-center">
              <div className="flex flex-col md:text-left text-center">
                <Text className="text-base-700">// {profile.role}</Text>
                <p className="font-pixels text-32/5 text-base-300 uppercase">{profile.name}</p>
              </div>
              <div className="flex flex-row gap-24">{socials.map((s) => (
                <a key={s.label} href={s.link} target="_blank" rel="noopener noreferrer" className="font-pixels text-20 text-base-100 hover:text-base-300">{s.label}</a>))}</div>
            </div>
            <div className="bg-base-950 drop-shadow-md p-8"><Text sm className="text-base-200">{profile.status}</Text></div>
          </div>
        </div>
        <nav className="bg-base-900 flex flex-row flex-wrap">{nav.map((n) => {
          const on = n.path === "/" ? path === "/" : path.startsWith(n.path);
          return <Link key={n.path} href={n.path} className={`px-24 py-16 hover:bg-base-800 border-t-2 border-base-900 text-base-100 font-pixels text-20/5 ${on ? "bg-base-950" : "bg-base-900"}`}>{n.title}</Link>;
        })}</nav>
      </header>
      <main className="md:px-32 px-16 flex flex-col gap-56">
        <Heading as="h1">{title}</Heading>
        {children}
      </main>
      <footer className="text-center text-base-600"><Text sm className="">{profile.fullName} © {new Date().getFullYear()}</Text></footer>
    </div>
  );
}
