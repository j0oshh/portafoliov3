import type { Metadata } from "next";
import { VT323, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const vt = VT323({ subsets: ["latin"], weight: "400", variable: "--font-vt323" });
const jb = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: { default: "Joseph Pimentel", template: "%s | Joseph Pimentel" },
  description: "Portafolio de Joseph Pimentel, estudiante de Desarrollo de Software.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${vt.variable} ${jb.variable}`}>
      <body className="bg-base-950">{children}</body>
    </html>
  );
}
