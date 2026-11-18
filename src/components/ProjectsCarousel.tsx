"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Carousel from "./Carousel";
import { A, Card, Heading, Tag, Text } from "./ui";
import { img, type Project } from "@/data/site";

/** Galería con fundido cruzado: la imagen actual se borra y la siguiente aparece poco a poco. */
function Gallery({ images, title }: { images: string[]; title: string }) {
  const [i, setI] = useState(0);
  const slides: (string | null)[] = images.length ? images : [null, null, null]; // sin imágenes → marcadores de posición
  const n = slides.length;
  const go = (k: number) => setI((k + n) % n);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "ArrowLeft") go(i - 1); if (e.key === "ArrowRight") go(i + 1); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });
  const btn = "font-pixels text-20 px-16 py-8 bg-base-900 text-base-100 hover:bg-base-800";
  return (
    <div className="flex flex-col gap-16">
      <div className="relative aspect-video bg-base-900 overflow-hidden">
        {slides.map((src, k) => (
          <div key={k} aria-hidden={k !== i} className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out"
            style={{ opacity: k === i ? 1 : 0, filter: k === i ? "blur(0)" : "blur(8px)", transform: k === i ? "scale(1)" : "scale(1.05)" }}>
            {src
              // eslint-disable-next-line @next/next/no-img-element
              ? <img src={img(src)} alt={`${title} ${k + 1}`} className="w-full h-full object-contain" />
              : <div className="text-center px-16"><p className="font-pixels text-24 text-base-300">Imagen {k + 1}</p>
                  <Text sm className="text-base-600">Agrega tus capturas en <code>images</code> dentro de src/data/site.ts</Text></div>}
          </div>
        ))}
      </div>
      {n > 1 && (
        <div className="flex items-center justify-between">
          <button className={btn} aria-label="Anterior" onClick={() => go(i - 1)}>{"<"}</button>
          <div className="flex gap-8">{slides.map((_, k) => (
            <button key={k} aria-label={`Ir a ${k + 1}`} onClick={() => go(k)} className={`w-8 h-8 ${k === i ? "bg-base-200" : "bg-base-800"}`} />
          ))}</div>
          <button className={btn} aria-label="Siguiente" onClick={() => go(i + 1)}>{">"}</button>
        </div>
      )}
    </div>
  );
}

function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  const [closing, setClosing] = useState(false);
  const close = () => { setClosing(true); window.setTimeout(onClose, 300); };
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setClosing(true); window.setTimeout(onClose, 300); } };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose]);
  return createPortal(
    <div role="dialog" aria-modal="true" aria-label={p.title} onClick={close}
      className={`fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-16 ${closing ? "modal-out" : "modal-in"}`}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-[56rem] max-h-full overflow-y-auto bg-base-950 border-2 border-base-900 p-16 flex flex-col gap-24">
        <div className="flex items-start justify-between gap-16">
          <div className="flex flex-col gap-8"><Heading>{p.title}</Heading><Text sm className="text-base-500">{p.year}</Text></div>
          <button onClick={close} aria-label="Cerrar" className="font-pixels text-24 px-16 py-8 bg-base-900 text-base-100 hover:bg-base-800">X</button>
        </div>
        <Gallery images={p.images} title={p.title} />
        <Text>{p.description}</Text>
        <div className="flex flex-row gap-16 flex-wrap">{p.tools.map((t) => <Tag key={t} title={t} />)}</div>
        <div className="flex flex-row gap-24">{p.github && <A href={p.github}>Source</A>}{p.liveSite && <A href={p.liveSite}>Website</A>}</div>
      </div>
    </div>,
    document.body
  );
}

function ProjectCard({ p, onOpen }: { p: Project; onOpen: () => void }) {
  const stop = (e: React.SyntheticEvent) => e.stopPropagation();
  return (
    <div role="button" tabIndex={0} onClick={onOpen} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(); } }}
      className="h-full cursor-pointer transition hover:brightness-125 focus-visible:outline-2 outline-base-300">
      <Card title={p.title} meta={<><span>{p.year}</span>
        {p.github && <span onClick={stop}><A href={p.github}>Source</A></span>}
        {p.liveSite && <span onClick={stop}><A href={p.liveSite}>Website</A></span>}</>}>
        <Text>{p.description}</Text>
        <div className="flex flex-row gap-16 flex-wrap">{p.tools.map((t) => <Tag key={t} title={t} />)}</div>
        <span className="font-pixels text-20 text-base-300">Ver imágenes {">"}</span>
      </Card>
    </div>
  );
}

export function ProjectsCarousel({ list }: { list: Project[] }) {
  const [open, setOpen] = useState<Project | null>(null);
  return (
    <>
      <Carousel perView={2}>{list.map((p) => <ProjectCard key={p.title} p={p} onOpen={() => setOpen(p)} />)}</Carousel>
      {open && <ProjectModal p={open} onClose={() => setOpen(null)} />}
    </>
  );
}
