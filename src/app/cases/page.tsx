"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { cases, CaseType } from "../data/cases";

function CaseCard({ src, title, id }: { src: string; title: string; id: number }) {
  const [showMobileContent, setShowMobileContent] = useState(false);

  const isVideo = typeof src === "string" && src.endsWith(".mp4");

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const timer = setTimeout(() => setShowMobileContent(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative w-full h-64 md:h-[30rem] overflow-hidden group cursor-pointer rounded-md">
      {/* IMAGEM OU VÍDEO */}
      {isVideo ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
        />
      ) : (
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
        />
      )}

      {/* OVERLAY */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-700
        ${showMobileContent ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`}
      />

      {/* TEXTO + BOTÃO */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 px-4
        ${showMobileContent ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`}
      >
        <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-white drop-shadow-lg">
          {title}
        </h3>

        <Link
          href={`/work/${id}`}
          className="px-10 py-3 font-semibold border border-white rounded-lg text-white hover:bg-white hover:text-black transition"
        >
          Ver projeto
        </Link>
      </div>
    </div>
  );
}

export default function Work() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Branding" | "Motion" | "Website">("All");

  const filteredCases = selectedCategory === "All" ? cases : cases.filter((c) => c.category === selectedCategory);

  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      {/* Header Desktop */}
      <header className="hidden md:flex justify-between items-center px-12 py-6 text-sm">
        <Link href="/">
          <h1 className="font-black text-4xl tracking-tighter cursor-pointer">reinehr</h1>
        </Link>
        <nav className="flex items-center gap-12 text-xl">
          <a href="/work">Selected work ({filteredCases.length})</a>
          <a href="#">Info</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
          <div className="flex gap-3">
            <a href="#">(IG)</a>
            <a href="#">(LI)</a>
          </div>
        </nav>
      </header>

      {/* Header Mobile */}
      <header className="md:hidden flex justify-between items-center px-6 py-4">
        <h1 className="font-black text-3xl tracking-tighter">reinehr</h1>
        <button className="flex flex-col justify-between w-6 h-6" onClick={() => setMenuOpen((s) => !s)}>
          <span className={`block h-0.5 w-full bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-full bg-white transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-full bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </header>

      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-6 py-8 text-xl bg-black">
          <a href="#">Selected work</a>
          <a href="#">Info</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
          <div className="flex gap-3">
            <a href="#">(IG)</a>
            <a href="#">(LI)</a>
          </div>
        </nav>
      )}

      {/* Banner */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <h2 className="relative z-10 text-[24vw] font-black tracking-tighter text-transparent stroke-text leading-none">Work</h2>
        <Image src="/frame.png" alt="Work Banner" fill className="object-cover" priority />
      </section>

      {/* FILTROS */}
      <section className="px-12 py-12 flex-1">
        <h3 className="max-w-3xl text-2xl md:text-4xl mb-6">Selected work ({filteredCases.length})</h3>

        <div className="flex gap-3 mb-12 flex-wrap">
          {["All", "Branding", "Motion", "Website"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-14 py-4 rounded-xl border ${selectedCategory === cat ? "bg-white text-black" : "border-white text-white"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {filteredCases.map((c) => (
            <CaseCard key={c.id} src={c.src} title={c.title} id={c.id} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
