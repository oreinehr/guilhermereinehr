"use client";

/* =========================================================
   04 — DISCIPLINAS
   Índice tipográfico interativo. No desktop, passar o mouse
   troca a descrição no painel lateral e o item ativo desloca
   e ganha contorno. No mobile, acordeão por toque.
========================================================= */

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { EASE, SectionLabel, Stagger, staggerItem } from "../motion/primitives";
import { useLang } from "../../i18n/LanguageContext";


export default function Disciplines() {
  const { t } = useLang();
  const DISCIPLINES = t.disciplines.items;
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-black px-6 py-24 text-white md:px-12 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="04" className="mb-14 md:mb-24">
          {t.disciplines.label}
        </SectionLabel>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          {/* LISTA */}
          <Stagger className="md:col-span-7">
            <div className="border-t border-white/10">
              {DISCIPLINES.map((item, i) => {
                const isActive = active === i;
                const isOpen = openMobile === i;
                return (
                  <motion.div
                    key={item.title}
                    variants={staggerItem}
                    className="border-b border-white/10"
                  >
                    <button
                      type="button"
                      onPointerEnter={(e) => {
                        if (e.pointerType === "mouse") setActive(i);
                      }}
                      onClick={() =>
                        setOpenMobile(isOpen ? null : i)
                      }
                      data-cursor
                      className="group flex w-full items-center justify-between gap-6 py-5 text-left md:py-7"
                    >
                      <motion.span
                        animate={{ x: isActive ? 14 : 0 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="flex items-baseline gap-4 md:gap-7"
                      >
                        <span className="text-[0.65rem] tabular-nums text-white/30 md:text-xs">
                          0{i + 1}
                        </span>
                        <span
                          className={`text-[clamp(1.5rem,4.6vw,3.25rem)] font-black leading-none tracking-tighter transition-colors duration-500 ${
                            isActive
                              ? "text-white"
                              : "text-white/35 md:hover:text-white/70"
                          }`}
                        >
                          {item.title}
                        </span>
                      </motion.span>

                      {/* indicador */}
                      <motion.span
                        animate={{
                          rotate: isOpen ? 45 : 0,
                          backgroundColor: isActive
                            ? "#F2360C"
                            : "rgba(255,255,255,0.2)",
                        }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="relative h-[2px] w-4 shrink-0 md:hidden"
                      >
                        <span className="absolute inset-0 rotate-90 bg-inherit" />
                      </motion.span>

                      <motion.span
                        animate={{
                          opacity: isActive ? 1 : 0,
                          x: isActive ? 0 : -8,
                        }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="hidden shrink-0 text-[#F2360C] md:block"
                      >
                        →︎
                      </motion.span>
                    </button>

                    {/* DETALHE MOBILE */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: EASE }}
                          className="overflow-hidden md:hidden"
                        >
                          <p className="pb-6 pl-8 pr-2 text-sm leading-relaxed text-white/55">
                            {item.detail}
                          </p>
                          <div className="flex flex-wrap gap-2 pb-6 pl-8">
                            {item.tools.map((tool) => (
                              <span
                                key={tool}
                                className="border border-white/15 px-3 py-1 text-[0.6rem] uppercase tracking-[0.14em] text-white/50"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </Stagger>

          {/* PAINEL DESKTOP */}
          <div className="hidden md:col-span-5 md:block">
            <div className="sticky top-28">
              <div className="relative min-h-[220px] border-l border-white/10 pl-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <p className="text-xl font-light leading-relaxed text-white/75">
                      {DISCIPLINES[active].detail}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {DISCIPLINES[active].tools.map((tool, i) => (
                        <motion.span
                          key={tool}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: EASE,
                            delay: 0.1 + i * 0.06,
                          }}
                          className="border border-white/15 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-white/55"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
