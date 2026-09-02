"use client";

/* =========================================================
   03 — CLIENTES
   Marquee cuja velocidade e direção respondem à velocidade
   do scroll.
========================================================= */

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "../motion/primitives";
import { useLang } from "../../i18n/LanguageContext";

const CLIENTS = [
  "Planeta Atlântida",
  "Marina Park",
  "Brazilian Footwear",
  "Conceito",
  "TGR Studio",
];

/* Faixa infinita reagindo à velocidade do scroll. */
function VelocityRow({
  children,
  baseVelocity = 3,
}: {
  children: React.ReactNode;
  baseVelocity?: number;
}) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smooth = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const factor = useTransform(smooth, [-1200, 0, 1200], [-4, 0, 4], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) direction.current = -1;
    else if (f > 0) direction.current = 1;
    moveBy += direction.current * moveBy * Math.abs(f);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative flex w-full flex-nowrap overflow-hidden">
      <motion.div
        style={{ x }}
        className="flex flex-nowrap will-change-transform"
      >
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="flex flex-nowrap">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Clients() {
  const { t } = useLang();

  return (
    <section className="relative w-full overflow-hidden bg-black py-24 text-white md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionLabel index="03" className="mb-14 md:mb-20">
          {t.clients.label}
        </SectionLabel>
      </div>

      {/* MARQUEE */}
      <div className="border-y border-white/10 py-6 md:py-10">
        <VelocityRow baseVelocity={2.4}>
          {CLIENTS.map((client) => (
            <span
              key={client}
              className="flex items-center whitespace-nowrap text-[clamp(1.6rem,5vw,4rem)] font-black uppercase tracking-tighter"
            >
              <span className="text-white/25 transition-colors duration-500 hover:text-white">
                {client}
              </span>
              <span className="mx-6 text-[#F2360C] md:mx-10">✳</span>
            </span>
          ))}
        </VelocityRow>
      </div>
    </section>
  );
}
