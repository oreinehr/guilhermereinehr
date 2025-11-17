"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Adicione a prop "id" para cada case
function CaseCard({ src, title, id }: { src: string; title: string; id: number }) {
  const [showMobileContent, setShowMobileContent] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const timer = setTimeout(() => setShowMobileContent(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative w-full h-96 md:h-[36rem] overflow-hidden group cursor-pointer rounded-md">
      {/* Imagem */}
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
      />

      {/* Overlay escuro */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-700
          ${showMobileContent ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`}
      />

      {/* Conteúdo */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700
          ${showMobileContent ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`}
      >
        <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">{title}</h3>

        {/* Botão agora usa Link do Next.js */}
        <Link
          href={`/work/${id}`}
          className="px-20 py-4 font-semibold border border-white rounded-lg text-white hover:bg-white hover:text-black transition"
        >
          Ver projeto
        </Link>
      </div>
    </div>
  );
}

export default function Cases() {
  const caseItems = [
    { id: 1, src: "/planeta.png", title: "Planeta Atlântida" },
    { id: 2, src: "/marinapark.png", title: "Marina Park" },
    { id: 3, src: "/melissa.png", title: "Melissa Simonett" },
    { id: 4, src: "/mac.png", title: "Brazilian Footwear" },
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-4 md:px-12">
      {/* Título */}
      <h2 className="max-w-3xl text-2xl md:text-4xl font-light leading-snug mb-12">
        <span className="text-[#F2360C] font-medium">Crafting immersive</span>{" "}
        digital experiences through <br />
        UX/UI, Motion design & prototype.
      </h2>

      {/* Grid de imagens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
        {caseItems.map((c) => (
          <CaseCard key={c.id} src={c.src} title={c.title} id={c.id} />
        ))}
      </div>

      {/* Botão See all cases */}
      <div className="flex justify-center">
        <Link
          href="/work"
          className="border border-[#F2360C] text-[#F2360C] font-medium px-14 py-4 rounded-lg text-sm md:text-base hover:bg-[#F2360C] hover:text-black transition"
        >
          See all cases
        </Link>
      </div>
    </section>
  );
}
