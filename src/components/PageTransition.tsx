"use client";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const norm = (p: string) => p.replace(/\/+$/, "") || "/";
const Ctx = createContext<(href: string) => void>(() => {});

/** Desvanece la página actual y, al cambiar la ruta, la nueva aparece poco a poco (ver globals.css). */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const [leaving, setLeaving] = useState<string | null>(null);

  const go = useCallback((href: string) => {
    if (leaving || norm(href) === norm(pathname)) return;
    setLeaving(pathname);
    window.setTimeout(() => { window.scrollTo(0, 0); router.push(href); }, 420);
    window.setTimeout(() => setLeaving(null), 4000); // seguridad: nunca dejar la página invisible
  }, [leaving, pathname, router]);

  return (
    <Ctx.Provider value={go}>
      <div key={pathname} className={leaving === pathname ? "page-out" : "page-in"}>{children}</div>
    </Ctx.Provider>
  );
}

export function TransitionLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  const go = useContext(Ctx);
  return (
    <Link href={href} className={className} onClick={(e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      go(href);
    }}>{children}</Link>
  );
}
