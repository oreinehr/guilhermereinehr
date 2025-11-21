import "./globals.css"
import { cn } from "./components/ui/lib/utils"
import type React from "react"
import { Archivo } from "next/font/google"
import LoaderWrapper from "./components/LoaderWrapper"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reinehr",
  description: "Portfolio Website",
}

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-archivo",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(archivo.className, "bg-black text-white antialiased")}>
        <LoaderWrapper />
        {children}
      </body>
    </html>
  )
}
