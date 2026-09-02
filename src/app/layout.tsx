import "./globals.css";
import type { Metadata } from "next";
import type React from "react";
import { Archivo } from "next/font/google";
import { cn } from "./components/ui/lib/utils";

import { LoaderProvider } from "./components/LoaderContext";
import { LanguageProvider } from "./i18n/LanguageContext";
import LoaderWrapper from "./components/LoaderWrapper";
import Cursor from "./components/motion/Cursor";
import ScrollProgress from "./components/motion/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://reinehr.work"),
  title: "Reinehr — Criando beleza",
  description:
    "Portfólio de Guilherme Reinehr — UX/UI Design, motion e direção de arte no Brasil e pelo mundo.",
  icons: {
    icon: "/favicon.ico",
  },
};

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-archivo",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={cn(
          archivo.className,
          "bg-black text-white antialiased"
        )}
      >
        <LanguageProvider>
          <LoaderProvider>
            <LoaderWrapper />
            {/* cursor e barra de progresso valem para o site inteiro;
                ambos só montam em ponteiro fino */}
            <Cursor />
            <ScrollProgress />
            {children}
          </LoaderProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
