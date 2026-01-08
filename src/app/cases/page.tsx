"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { cases } from "../data/cases";

// ---------------------------
// CaseCard
// ---------------------------
function CaseCard({
  src,
  title,
  slug,
}: {
  src: string;
  title: string;
  slug: string;
}) {
  const [showMobileContent, setShowMobileContent] = useState(false);
  const isVideo = src.endsWith(".mp4");

  useEffect(() => {
    if (window.innerWidth < 768) {
      const timer = setTimeout(() => setShowMobileContent(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative w-full h-64 md:h-[30rem] overflow-hidden group cursor-pointer rounded-md">
      {isVideo ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      )}

      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-700 ${
          showMobileContent
            ? "opacity-100"
            : "opacity-0 md:group-hover:opacity-100"
        }`}
      />

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-700 px-4 ${
          showMobileContent
            ? "opacity-100"
            : "opacity-0 md:group-hover:opacity-100"
        }`}
      >
        <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-white">
          {title}
        </h3>

        <Link
          href={`/${slug}`}
          className="px-10 py-3 font-semibold border border-white rounded-lg text-white hover:bg-white hover:text-black transition"
        >
          Ver projeto
        </Link>
      </div>
    </div>
  );
}

// ---------------------------
// Página Work
// ---------------------------
export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | "Branding" | "Motion" | "Website"
  >("All");

  const filteredCases =
    selectedCategory === "All"
      ? cases
      : cases.filter((c) => c.category === selectedCategory);

  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Banner */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="/frame.png"
          alt="Banner"
          fill
          priority
          className="object-contain"
        />

        <div className="absolute inset-0 bg-black/10" />

   <div className="absolute inset-0 flex items-center justify-center">
  <h1
    className="
      text-[6rem] md:text-[20rem]
      font-black
      text-transparent
      tracking-tight
      select-none
    "
    style={{
      WebkitTextStroke: "1px white",
    }}
  >
    Work
  </h1>
</div>
      </section>

      {/* Conteúdo */}
      <section className="px-3 md:px-12 py-16">
        <h3 className="max-w-3xl text-2xl md:text-4xl mb-6">
          Selected work ({filteredCases.length})
        </h3>

        {/* Filtros */}
        <div className="flex mb-12 overflow-x-auto md:flex-wrap md:overflow-visible scrollbar-none">
          {["All", "Branding", "Motion", "Website"].map((cat, index) => (
            <button
              key={cat}
              onClick={() =>
                setSelectedCategory(
                  cat as "All" | "Branding" | "Motion" | "Website"
                )
              }
              className={`px-14 py-4 rounded-xl border ${
                selectedCategory === cat
                  ? "bg-white text-black"
                  : "border-white text-white"
              } ${index !== 0 ? "ml-3" : ""} flex-shrink-0 whitespace-nowrap`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {filteredCases.map((c) => (
            <CaseCard
              key={c.slug}
              src={c.src}
              title={c.title}
              slug={c.slug}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
