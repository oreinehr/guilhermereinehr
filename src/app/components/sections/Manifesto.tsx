"use client";

/* =========================================================
   01 — MANIFESTO
   Declaração tipográfica. O parágrafo acende palavra por
   palavra conforme o scroll atravessa a seção (scroll-linked,
   não in-view), e o bloco inteiro tem parallax contrário.
========================================================= */

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { EASE, RevealLines, SectionLabel } from "../motion/primitives";
import { useLang } from "../../i18n/LanguageContext";

/* Palavra que acende sozinha, com progresso próprio dentro da frase. */
function ScrollWord({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <span className="relative mr-[0.28em] inline-block">
      <motion.span style={{ opacity, y }} className="inline-block">
        {word}
      </motion.span>
    </span>
  );
}

export default function Manifesto() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });

  const words = t.manifesto.statement.split(" ");

  /* marca d'água lateral com deriva lenta */
  const { scrollYProgress: sectionProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const markY = useTransform(sectionProgress, [0, 1], reduce ? [0, 0] : [80, -80]);
  const markOpacity = useTransform(sectionProgress, [0, 0.5, 1], [0, 0.05, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-black px-6 py-28 text-white md:px-12 md:py-44"
    >
      {/* MARCA D'ÁGUA */}
      <motion.span
        aria-hidden
        style={{ y: markY, opacity: markOpacity }}
        className="pointer-events-none absolute -left-4 bottom-4 hidden select-none text-[16vw] font-black uppercase leading-[0.75] tracking-tighter md:block"
      >
        {t.manifesto.watermark}
      </motion.span>

      <div className="relative mx-auto max-w-[1600px]">
        <SectionLabel index="01" className="mb-16 md:mb-24">
          {t.manifesto.label}
        </SectionLabel>

        {/* HEADLINE */}
        <RevealLines
          as="h2"
          key={t.manifesto.headline.join("|")}
          lines={[
            <>{t.manifesto.headline[0]}</>,
            <>
              <span className="italic text-[#F2360C]">
                {t.manifesto.headline[1]}
              </span>
            </>,
          ]}
          className="-mb-[0.18em] text-[clamp(2.75rem,10vw,9rem)] font-black leading-[0.98] tracking-tighter"
          lineClassName="pb-[0.18em]"
          stagger={0.11}
        />

        {/* STATEMENT SCROLL-LINKED */}
        <p className="mt-14 max-w-3xl text-[clamp(1.1rem,2.4vw,1.85rem)] font-light leading-[1.45] md:mt-24 md:ml-auto md:pr-4">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <ScrollWord
                key={i}
                word={word}
                range={[start, Math.min(end, 1)]}
                progress={scrollYProgress}
              />
            );
          })}
        </p>

        {/* ASSINATURA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-white/35 md:mt-24 md:justify-end"
        >
          <span className="h-px w-12 bg-[#F2360C]" />
          {t.manifesto.signature}
        </motion.div>
      </div>
    </section>
  );
}
