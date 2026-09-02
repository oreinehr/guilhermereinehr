"use client";

/* =========================================================
   SELECTED WORK
   Índice tipográfico em linhas cheias — o nome do case é o
   objeto principal, a capa entra como faixa larga (todas as
   capas são horizontais, um grid de colunas as espremeria).
   Filtros derivados dos dados: nunca aparece uma categoria
   que não tem projeto.
========================================================= */

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import AutoVideo from "../components/AutoVideo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { EASE, RevealLines } from "../components/motion/primitives";
import { useLang } from "../i18n/LanguageContext";
import { caseStudies, type CaseEntry } from "../i18n/cases";

/* ---------------------------------------------------------
   LINHA DO ÍNDICE
   Capa à esquerda ou à direita, alternando; no hover a capa
   ganha escala e o título desloca. Mobile: capa acima,
   sempre visível (sem overlay que depende de hover).
--------------------------------------------------------- */
function CaseRow({ entry, index }: { entry: CaseEntry; index: number }) {
  const { lang, t } = useLang();
  const copy = entry.copy[lang];
  const flip = index % 2 === 1;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.06 }}
      className="border-b border-white/10"
    >
      <Link
        href={`/${entry.slug}`}
        data-cursor={t.work.seeProject}
        className="group block py-10 md:py-14"
      >
        <div
          className={`flex flex-col gap-7 md:items-center md:gap-14 ${
            flip ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* CAPA */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg md:w-[52%]">
            {entry.cover.type === "video" ? (
              <AutoVideo
                src={entry.cover.src}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:scale-[1.04]"
              />
            ) : (
              <Image
                src={entry.cover.src}
                alt={copy.title}
                fill
                sizes="(max-width: 768px) 100vw, 52vw"
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:scale-[1.04]"
              />
            )}
          </div>

          {/* TEXTO */}
          <div className="md:w-[48%]">
            <h2
              className="text-[clamp(2rem,5.4vw,4.25rem)] font-black leading-[0.92] tracking-tighter transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:translate-x-3"
            >
              {copy.title}
            </h2>

            <p className="mt-5 max-w-md text-base font-light leading-relaxed text-white/55 md:text-lg">
              {copy.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-2 text-sm text-white/40">
              <span>{copy.client}</span>
              <span className="h-3 w-px bg-white/15" aria-hidden />
              <span>{copy.year}</span>
              <span className="h-3 w-px bg-white/15" aria-hidden />
              <span>{entry.category}</span>
            </div>

            {/* sublinhado que cresce — o link é a linha inteira */}
            <span className="mt-8 inline-block text-sm uppercase tracking-[0.18em] text-white/70">
              {t.work.seeProject}
              <span className="mt-1 block h-px w-full origin-left scale-x-0 bg-[#F2360C] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:scale-x-100" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function Work() {
  const { t } = useLang();
  const [filter, setFilter] = useState<string>("All");

  /* categorias que realmente existem, com contagem */
  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    caseStudies.forEach((c) => {
      counts.set(c.category, (counts.get(c.category) ?? 0) + 1);
    });
    return [
      { key: "All", label: t.work.filterAll, count: caseStudies.length },
      ...[...counts.entries()].map(([key, count]) => ({
        key,
        label: key,
        count,
      })),
    ];
  }, [t.work.filterAll]);

  const filtered =
    filter === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.category === filter);

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      {/* ============ ABERTURA ============ */}
      <section className="px-6 pb-16 pt-36 md:px-12 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-[1600px]">
          {/* leading apertado + overflow-hidden da máscara cortam o
              descendente do "J" (Projetos): o padding devolve a
              folga e a margem negativa mantém o espaçamento. */}
          <RevealLines
            as="h1"
            lines={[t.work.title]}
            className="-mb-[0.16em] text-[clamp(3.5rem,16vw,13rem)] font-black leading-[0.82] tracking-tighter"
            lineClassName="pb-[0.16em]"
          />

          <div className="mt-10 flex flex-col gap-10 md:mt-14 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-base font-light leading-relaxed text-white/55 md:text-lg">
              {t.work.intro}
            </p>

            {/* FILTROS — texto, não pílula */}
            <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
              {categories.map((cat) => {
                const active = filter === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setFilter(cat.key)}
                    aria-pressed={active}
                    data-cursor
                    className={`group/f relative text-sm transition-colors duration-300 md:text-base ${
                      active ? "text-white" : "text-white/35 hover:text-white/70"
                    }`}
                  >
                    {cat.label}
                    <sup className="ml-1 text-[0.6em] text-white/30">
                      {cat.count}
                    </sup>
                    <span
                      className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-[#F2360C] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ ÍNDICE ============ */}
      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-[1600px] border-t border-white/10">
          <AnimatePresence mode="popLayout">
            {filtered.map((entry, i) => (
              <CaseRow key={entry.slug} entry={entry} index={i} />
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="py-24 text-center text-white/40">{t.work.empty}</p>
          )}

          <p className="pt-10 text-sm text-white/30">
            {t.work.countLabel(filtered.length)}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
