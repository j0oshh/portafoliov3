"use client";
import { useRef, useState, type ReactNode } from "react";

/** Carrusel sin dependencias (scroll-snap). `perView={2}` muestra 2 tarjetas en pantallas medianas. */
export default function Carousel({ children, perView = 1 }: { children: ReactNode[]; perView?: 1 | 2 }) {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const slides = Array.isArray(children) ? children : [children];
  const go = (n: number) => {
    const el = ref.current; if (!el) return;
    const kid = el.children[Math.max(0, Math.min(slides.length - 1, n))] as HTMLElement;
    el.scrollTo({ left: kid.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };
  const onScroll = () => {
    const el = ref.current; if (!el) return;
    const w = (el.children[0] as HTMLElement).offsetWidth + 16;
    setI(Math.round(el.scrollLeft / w));
  };
  const basis = perView === 2 ? "basis-full md:basis-[calc((100%-1rem)/2)]" : "basis-full";
  const btn = "font-pixels text-20 px-16 py-8 bg-base-900 text-base-100 hover:bg-base-800 disabled:opacity-30";
  return (
    <div className="flex flex-col gap-16">
      <div ref={ref} onScroll={onScroll} className="flex gap-16 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {slides.map((s, k) => <div key={k} className={`snap-start shrink-0 ${basis} flex`}><div className="w-full">{s}</div></div>)}
      </div>
      {slides.length > 1 && (
        <div className="flex items-center justify-between">
          <button className={btn} aria-label="Anterior" disabled={i <= 0} onClick={() => go(i - 1)}>{"<"}</button>
          <div className="flex gap-8">{slides.map((_, k) => (
            <button key={k} aria-label={`Ir a ${k + 1}`} onClick={() => go(k)} className={`w-8 h-8 ${k === i ? "bg-base-200" : "bg-base-800"}`} />
          ))}</div>
          <button className={btn} aria-label="Siguiente" disabled={i >= slides.length - 1} onClick={() => go(i + 1)}>{">"}</button>
        </div>
      )}
    </div>
  );
}
