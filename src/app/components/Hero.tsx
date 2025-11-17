"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/foto.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header Desktop */}
      <header className="hidden md:flex justify-between items-center px-8 py-6 text-sm">
        <Link href="/">
          <h1 className="font-black text-4xl tracking-tighter cursor-pointer">
            reinehr
          </h1>
        </Link>
        <nav className="flex items-center gap-12 text-xl">
          <Link href="/cases">
            <span className="cursor-pointer">Selected work (05)</span>
          </Link>
          <a href="#">Info</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
          <div className="flex gap-3">
            <a href="#">(IG)</a>
            <a href="#">(LI)</a>
          </div>
        </nav>
      </header>

      {/* Header Mobile com Hamburger */}
      <header className="md:hidden flex justify-between items-center px-6 py-4">
        <Link href="/">
          <h1 className="font-black text-3xl tracking-tighter cursor-pointer">
            reinehr
          </h1>
        </Link>
        <button
          className="flex flex-col justify-between w-6 h-6"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-full bg-white transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-white transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-white transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </header>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-4 py-6 text-xl z-20">
          <Link href="/work">
            <span className="cursor-pointer">Selected work (05)</span>
          </Link>
          <a href="#">Info</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
          <div className="flex gap-4">
            <a href="#">(IG)</a>
            <a href="#">(LI)</a>
          </div>
        </nav>
      )}

      {/* Hero Content */}
      <div className="relative flex flex-col justify-center items-center h-full">
        {/* Letreiro Mobile sem animação */}
        <h2 className="md:hidden absolute top-20 left-0 text-[35vw] font-black text-transparent stroke-text whitespace-nowrap z-10"></h2>

        {/* Conteúdo Desktop */}
        <div className="hidden md:relative md:flex md:w-full md:h-full md:flex-col md:justify-center md:items-center">
          <h2 className="relative z-10 text-[24vw] font-black tracking-tighter text-transparent stroke-text leading-none top-20">
            reinehr
          </h2>

          <div className="relative w-full h-screen">
            {/* Texto da esquerda */}
            <div className="absolute bottom-56 left-80 max-w-xs">
              <p className="text-xl leading-snug">
                Creating beauty in Brazil <br /> and around the world
              </p>
            </div>

            {/* Imagem central */}
            <div className="absolute bottom-40 left-1/2 -translate-x-1/2">
              <Image
                src="/imagem.png"
                alt="Turntable"
                width={160}
                height={120}
                className="rounded shadow-lg"
              />
            </div>

            {/* Texto da direita */}
            <div className="absolute bottom-56 right-80 max-w-xs text-right">
              <p className="text-xl leading-snug">
                UX/UI Design, Motion, <br /> Product Design & Prototype.
              </p>
            </div>

            {/* Imagem da direita */}
            <div className="absolute bottom-40 right-24">
              <Image
                src="/imagem2.png"
                alt="Portrait"
                width={140}
                height={200}
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilo contorno do texto */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
        }
      `}</style>
    </section>
  );
}
