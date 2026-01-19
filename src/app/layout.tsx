import "./globals.css";
import type { Metadata } from "next";
import type React from "react";
import { Archivo } from "next/font/google";
import { cn } from "./components/ui/lib/utils";

import { LoaderProvider } from "./components/LoaderContext";
import LoaderWrapper from "./components/LoaderWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://reinehr.work"),
  title: "Reinehr — Creating Beauty",
  description: "Creating beauty in brazil and worldwide.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          archivo.className,
          "bg-black text-white antialiased"
        )}
      >
        <LoaderProvider>
          <LoaderWrapper />
          {children}
        </LoaderProvider>
      </body>
    </html>
  );
}
