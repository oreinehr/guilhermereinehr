"use client";

/* =========================================================
   05 — PROCESSO
   Desktop: seção presa (sticky) enquanto as quatro etapas
   avançam. Em vez de trilha horizontal (que desalinhava com o
   container), cada etapa faz crossfade + deslocamento vertical
   no mesmo eixo tipográfico — mais legível e mais estável.
   Mobile: pilha vertical com linha que cresce.
========================================================= */

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
import { EASE, SectionLabel } from "../motion/primitives";
import { useLang } from "../../i18n/LanguageContext";


export default function Process() {
  const { t } = useLang();
  const STEPS = t.process.steps;
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const lineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.3,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    /* divide o progresso em 4 faixas iguais */
    const index = Math.min(
      STEPS.length - 1,
      Math.max(0, Math.floor(v * STEPS.length))
    );
    setCurrent(index);
  });

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div
        ref={ref}
        className="relative hidden md:block"
        style={{ height: `${STEPS.length * 100}vh` }}
      >
        <section className="sticky top-0 flex h-screen items-center overflow-hidden bg-black text-white">
          <div className="mx-auto w-full max-w-[1600px] px-12">
            <SectionLabel index="05" className="mb-12">
              {t.process.label}
            </SectionLabel>

            <div className="grid grid-cols-12 items-start gap-16">
              {/* COLUNA ESQUERDA — título + índice */}
              <div className="col-span-5">
                <h2 className="text-[clamp(2.5rem,5.2vw,4.75rem)] font-black leading-[0.9] tracking-tighter">
                  {t.process.headline[0]}
                  <br />
                  {t.process.headline[1]}
                </h2>

                {/* índice das etapas */}
                <div className="mt-12 flex flex-col gap-3">
                  {STEPS.map((step, i) => (
                    <div
                      key={step.n}
                      className="flex items-center gap-4 text-sm uppercase tracking-[0.2em]"
                    >
                      <motion.span
                        animate={{
                          width: current === i ? 40 : 16,
                          backgroundColor:
                            current === i ? "#F2360C" : "rgba(255,255,255,0.2)",
                        }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="h-px shrink-0"
                      />
                      <motion.span
                        animate={{
                          color:
                            current === i
                              ? "rgba(255,255,255,1)"
                              : "rgba(255,255,255,0.3)",
                        }}
                        transition={{ duration: 0.5, ease: EASE }}
                      >
                        {step.title}
                      </motion.span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUNA DIREITA — etapa ativa */}
              <div className="col-span-7 pl-4">
                {/* contador rolante */}
                <div className="mb-8 flex items-end gap-3">
                  {/* janela do contador: só a altura é recortada (para o roll
                      vertical). A largura fica livre — unidades `ch` em peso
                      black cortavam o segundo dígito. */}
                  <span className="relative block h-[4.5rem] overflow-hidden">
                    <motion.span
                      animate={{ y: `-${current * 4.5}rem` }}
                      transition={{ duration: 0.75, ease: EASE }}
                      className="block will-change-transform"
                    >
                      {STEPS.map((s) => (
                        <span
                          key={s.n}
                          className="flex h-[4.5rem] items-center whitespace-nowrap text-[3.5rem] font-black leading-none tracking-tight text-[#F2360C]"
                        >
                          {s.n}
                        </span>
                      ))}
                    </motion.span>
                  </span>
                  <span className="pb-5 text-base text-white/25">{t.process.total}</span>
                </div>

                {/* conteúdo com crossfade */}
                <div className="relative min-h-[280px]">
                  {STEPS.map((step, i) => (
                    <motion.div
                      key={step.n}
                      animate={{
                        opacity: current === i ? 1 : 0,
                        y: current === i ? 0 : 28,
                      }}
                      transition={{ duration: 0.6, ease: EASE }}
                      style={{ pointerEvents: current === i ? "auto" : "none" }}
                      className="absolute inset-x-0 top-0"
                    >
                      <h3 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-black leading-none tracking-tighter">
                        {step.title}
                      </h3>
                      <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/60">
                        {step.text}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-2">
                        {step.keys.map((k) => (
                          <span
                            key={k}
                            className="border border-white/15 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-white/50"
                          >
                            {k}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* LINHA DE PROGRESSO NA BASE */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/10">
            <motion.div
              style={{ scaleX: reduce ? 1 : lineScale }}
              className="h-full w-full origin-left bg-[#F2360C]"
            />
          </div>
        </section>
      </div>

      {/* ================= MOBILE ================= */}
      <section className="bg-black px-6 py-24 text-white md:hidden">
        <SectionLabel index="05" className="mb-12">
          {t.process.label}
        </SectionLabel>

        <h2 className="mb-14 text-[2.75rem] font-black leading-[0.9] tracking-tighter">
          {t.process.headline[0]}
          <br />
          {t.process.headline[1]}
        </h2>

        <div className="relative pl-8">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.6, ease: EASE }}
            className="absolute left-0 top-2 h-full w-px origin-top bg-gradient-to-b from-[#F2360C] via-white/20 to-transparent"
          />

          {STEPS.map((step) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative pb-14 last:pb-0"
            >
              <span className="absolute -left-8 top-2 h-2 w-2 -translate-x-[3.5px] rounded-full bg-[#F2360C]" />
              <p className="mb-3 text-[0.65rem] uppercase tracking-[0.28em] text-white/35">
                {t.process.stepWord} {step.n}
              </p>
              <h3 className="text-2xl font-black tracking-tighter">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {step.text}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {step.keys.map((k) => (
                  <span
                    key={k}
                    className="border border-white/15 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.14em] text-white/45"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
