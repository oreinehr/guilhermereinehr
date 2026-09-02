"use client";

/* =========================================================
   CASE STUDY
   Layout único para todos os cases. Substitui as cinco
   páginas que repetiam a mesma estrutura com o texto solto
   no JSX: agora a copy e a mídia vêm de i18n/cases.ts.

   Estrutura: hero cheio com título sobreposto → ficha
   técnica (atuação / ano / cliente) → blocos de texto
   alternados com a galeria → link do site → próximo case.
========================================================= */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AutoVideo from "./AutoVideo";
import Header from "./Header";
import Footer from "./Footer";
import { EASE } from "./motion/primitives";
import { useLang } from "../i18n/LanguageContext";
import { caseStudies, type CaseEntry, type CaseMedia } from "../i18n/cases";

/* Mídia da galeria — imagem ou vídeo, mesma moldura. */
function Media({
  media,
  alt,
  priority = false,
}: {
  media: CaseMedia;
  alt: string;
  priority?: boolean;
}) {
  if (media.type === "video") {
    return (
      <AutoVideo
        src={media.src}
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={alt}
      width={1600}
      height={2000}
      priority={priority}
      sizes="(max-width: 768px) 100vw, 90vw"
      className="h-auto w-full object-cover"
    />
  );
}

export default function CaseStudy({ entry }: { entry: CaseEntry }) {
  const { lang, t } = useLang();
  const copy = entry.copy[lang];
  const isVideoHero = entry.hero.type === "video";

  /* próximo case, em loop */
  const index = caseStudies.findIndex((c) => c.slug === entry.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  const facts = [
    { label: t.caseStudy.role, value: copy.role },
    { label: t.caseStudy.year, value: copy.year },
    { label: t.caseStudy.client, value: copy.client },
  ];

  return (
    <main className="overflow-x-hidden bg-black text-white">
      <Header />

      {/* ============ HERO ============ */}
      <section className="relative h-screen w-full">
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
          className="absolute inset-0"
        >
          {entry.hero.type === "video" ? (
            <AutoVideo
              src={entry.hero.src}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <Image
              src={entry.hero.src}
              alt={copy.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
        </motion.div>

        {/* Hero em vídeo roda limpo — sem véu nem texto por cima.
            O título aparece logo abaixo, junto da ficha técnica. */}
        {!isVideoHero && (
          <>
            {/* véu para o título respirar sobre a imagem */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black"
            />

            <div className="relative flex h-full flex-col justify-end px-6 pb-16 md:px-16 md:pb-24">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
                className="mb-5 text-xs uppercase tracking-[0.28em] text-white/50"
              >
                {entry.category}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.28 }}
                className="max-w-5xl text-[clamp(2.5rem,9vw,8rem)] font-black leading-[0.88] tracking-tighter"
              >
                {copy.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
                className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/65 md:text-xl"
              >
                {copy.subtitle}
              </motion.p>
            </div>
          </>
        )}
      </section>

      {/* ============ TÍTULO (hero em vídeo) ============ */}
      {isVideoHero && (
        <section className="px-6 pb-4 pt-16 md:px-16 md:pt-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-5 text-xs uppercase tracking-[0.28em] text-white/50"
          >
            {entry.category}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
            className="max-w-5xl text-[clamp(2.5rem,9vw,8rem)] font-black leading-[0.88] tracking-tighter"
          >
            {copy.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.16 }}
            className="mt-6 max-w-xl pb-12 text-lg font-light leading-relaxed text-white/65 md:text-xl"
          >
            {copy.subtitle}
          </motion.p>
        </section>
      )}

      {/* ============ FICHA TÉCNICA ============ */}
      <section className="border-y border-white/10 px-6 py-10 md:px-16 md:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="flex flex-col gap-2"
            >
              <span className="text-[0.65rem] uppercase tracking-[0.24em] text-white/35">
                {fact.label}
              </span>
              <span className="text-base text-white/85 md:text-lg">
                {fact.value}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ CORPO ============ */}
      <section className="flex w-full flex-col gap-16 px-4 py-16 md:gap-24 md:px-16 md:py-24">
        {copy.blocks.map((block, i) => (
          <div key={block.lead} className="flex flex-col gap-16 md:gap-24">
            {/* TEXTO */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="grid grid-cols-1 gap-6 px-2 md:grid-cols-12 md:gap-12"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[#F2360C] md:col-span-3 md:pt-3">
                {block.lead}
              </p>
              <p className="max-w-4xl text-xl font-light leading-[1.45] text-white/80 md:col-span-9 md:text-3xl">
                {block.text}
              </p>
            </motion.div>

            {/* IMAGEM correspondente ao bloco, quando houver */}
            {entry.gallery[i] && (
              <motion.div
                initial={{ opacity: 0, scale: 1.02 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: EASE }}
                className="overflow-hidden rounded-lg"
              >
                <Media
                  media={entry.gallery[i]}
                  alt={t.caseStudy.galleryAlt(copy.title, i + 1)}
                />
              </motion.div>
            )}
          </div>
        ))}

        {/* Imagens restantes — as que não pareiam com um bloco */}
        {entry.gallery.slice(copy.blocks.length).map((media, i) => (
          <motion.div
            key={media.src}
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: EASE }}
            className="overflow-hidden rounded-lg"
          >
            <Media
              media={media}
              alt={t.caseStudy.galleryAlt(
                copy.title,
                copy.blocks.length + i + 1
              )}
            />
          </motion.div>
        ))}

        {/* ============ SITE OFICIAL ============ */}
        {entry.website && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex justify-center py-4"
          >
            <a
              href={entry.website}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="rounded-lg border border-[#F2360C] px-14 py-4 text-sm font-medium text-[#F2360C] transition hover:bg-[#F2360C] hover:text-black md:text-base"
            >
              {t.caseStudy.visit}
            </a>
          </motion.div>
        )}
      </section>

      {/* ============ PRÓXIMO CASE ============ */}
      <section className="border-t border-white/10">
        <Link
          href={`/${next.slug}`}
          data-cursor={t.home.seeProject}
          className="group flex flex-col gap-3 px-6 py-16 md:px-16 md:py-24"
        >
          <span className="text-xs uppercase tracking-[0.24em] text-white/35">
            {t.caseStudy.next}
          </span>
          <span className="flex items-center gap-6 text-[clamp(2rem,6vw,5rem)] font-black leading-none tracking-tighter transition-colors duration-500 group-hover:text-[#F2360C]">
            {next.copy[lang].title}
            <span className="shrink-0 transition-transform duration-500 group-hover:translate-x-3">
              →︎
            </span>
          </span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
