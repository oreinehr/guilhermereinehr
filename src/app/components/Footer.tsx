"use client";

import Image from "next/image";
import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  /* letreiro: a frase repetida forma a faixa contínua */
  const marquee = Array(3).fill(t.footer.marquee).join(" ");

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden min-h-[70vh] flex flex-col justify-end">
      {/* Texto animado estilo letreiro */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-center z-20 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1].map((i) => (
            <h2
              key={i}
              className="text-[15vw] md:text-[10vw] font-black uppercase pointer-events-none select-none text-transparent [-webkit-text-stroke:2px_white] font-[Archivo] tracking-tight pr-16"
            >
              {marquee}
            </h2>
          ))}
        </div>
      </div>

      {/* Cubo atrás */}
      <div className="absolute inset-0 flex items-center justify-center z-10 opacity-100">
        <Image
          src="/abstract.png"
          alt={t.footer.cubeAlt}
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Direitos reservados */}
      <div className="relative z-30 flex justify-center pb-6">
        <p className="text-sm md:text-base text-white/60">{t.footer.rights}</p>
      </div>
    </footer>
  );
}
