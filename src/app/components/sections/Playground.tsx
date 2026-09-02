"use client";

/* =========================================================
   06 — PLAYGROUND
   Lista de experimentos. No desktop, o preview segue o
   ponteiro com atraso e faz clip-reveal ao entrar — o momento
   de surpresa da página. No mobile, grid com scroll snap.
========================================================= */

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
import { EASE, SectionLabel, Stagger, staggerItem } from "../motion/primitives";
import AutoVideo from "../AutoVideo";
import { useLang } from "../../i18n/LanguageContext";

/* mídia dos experimentos — os títulos/tags vêm do dicionário,
   na mesma ordem. */
const MEDIA = [
  { src: "/conceito.mp4", type: "video" as const },
  { src: "/gallery/atlantida.png", type: "image" as const },
  { src: "/ale.png", type: "image" as const },
];

export default function Playground() {
  const { t } = useLang();
  const EXPERIMENTS = t.playground.items.map((item, i) => ({
    ...item,
    ...MEDIA[i],
  }));
  const [hovered, setHovered] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  /* índice do card mais próximo do centro — alimenta os pontos */
  function onScroll() {
    const el = trackRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let min = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const c = child as HTMLElement;
      const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center);
      if (d < min) {
        min = d;
        closest = i;
      }
    });
    setSlide(closest);
  }
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.5 });
  const y = useSpring(my, { stiffness: 180, damping: 22, mass: 0.5 });

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  return (
    <section className="relative w-full bg-black px-6 py-24 text-white md:px-12 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="flex-1">
            <SectionLabel index="06" className="mb-8 md:mb-12">
              {t.playground.label}
            </SectionLabel>
            <h2 className="text-[clamp(2.25rem,6vw,5rem)] font-black leading-[0.9] tracking-tighter">
              {t.playground.headline[0]}
              <br />
              <span className="italic text-white/35">
                {t.playground.headline[1]}
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/45 md:text-base">
            {t.playground.intro}
          </p>
        </div>

        {/* ============ DESKTOP: lista + preview flutuante ============ */}
        <div
          onPointerMove={onMove}
          onPointerLeave={() => setHovered(null)}
          className="relative hidden md:block"
        >
          {/* PREVIEW */}
          <AnimatePresence>
            {hovered !== null && (
              <motion.div
                style={{ x, y }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="pointer-events-none absolute left-0 top-0 z-20 will-change-transform"
              >
                <motion.div
                  key={hovered}
                  initial={{ clipPath: "inset(50% 0% 50% 0%)", scale: 1.08 }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="relative h-[260px] w-[380px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl lg:h-[320px] lg:w-[460px]"
                >
                  {EXPERIMENTS[hovered].type === "video" ? (
                    <AutoVideo
                      src={EXPERIMENTS[hovered].src}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={EXPERIMENTS[hovered].src}
                      alt={EXPERIMENTS[hovered].title}
                      fill
                      sizes="460px"
                      className="object-cover"
                    />
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* LISTA */}
          <Stagger className="border-t border-white/10">
            {EXPERIMENTS.map((item, i) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                onPointerEnter={(e) => {
                  if (e.pointerType === "mouse") setHovered(i);
                }}
                data-cursor={t.playground.cursor}
                className="group relative flex items-center justify-between gap-8 border-b border-white/10 py-7 lg:py-9"
              >
                <motion.h3
                  animate={{
                    x: hovered === i ? 20 : 0,
                    opacity: hovered === null || hovered === i ? 1 : 0.22,
                  }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="text-[clamp(1.5rem,3.6vw,2.75rem)] font-black leading-none tracking-tighter"
                >
                  {item.title}
                </motion.h3>

                <motion.span
                  animate={{
                    x: hovered === i ? -20 : 0,
                    opacity: hovered === null || hovered === i ? 1 : 0.22,
                  }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="shrink-0 text-xs uppercase tracking-[0.22em] text-white/40"
                >
                  {item.tag}
                </motion.span>
              </motion.div>
            ))}
          </Stagger>
        </div>

        {/* ============ MOBILE: carrossel snap ============ */}
        <div className="-mx-6 md:hidden">
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2"
          >
            {EXPERIMENTS.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="w-[76vw] shrink-0 snap-center last:mr-6"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  {item.type === "video" ? (
                    <AutoVideo
                      src={item.src}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="76vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-black tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-[0.6rem] uppercase tracking-[0.18em] text-white/40">
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* PROGRESSO — mostra que a faixa desliza e onde se está */}
          <div className="mt-5 flex items-center gap-2 px-6">
            {EXPERIMENTS.map((item, i) => (
              <span
                key={item.title}
                aria-hidden
                className={`h-[2px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  slide === i ? "w-7 bg-[#F2360C]" : "w-3 bg-white/20"
                }`}
              />
            ))}
            <span className="ml-auto text-[0.6rem] uppercase tracking-[0.18em] text-white/35">
              {slide + 1}/{EXPERIMENTS.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
