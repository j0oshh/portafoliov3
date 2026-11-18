# Portafolio — Next.js

- `npm install` y luego `npm run dev` → http://localhost:3000
- **Todo el contenido** (textos, proyectos, experiencia, estudios, habilidades, redes, blog) se edita en `src/data/site.ts`.
- Carruseles: `src/components/Carousel.tsx` (sin dependencias). Cada sección usa `<Carousel perView={1|2}>`.
- Colores y tamaños: `src/app/globals.css`.
- Build estático: `npm run build` (genera `out/`). Para GitHub Pages: `NEXT_PUBLIC_BASE_PATH=/Portafolio npm run build`.
