import "./globals.css";
import type { Metadata } from "next";
import type React from "react";
import { Archivo } from "next/font/google";
import { cn } from "./components/ui/lib/utils";


export const metadata: Metadata = {
  title: "reinehr",
  description: "Portfolio Website",
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
    

        {/* SITE */}
        {children}
      </body>
    </html>
  );
}
