"use client";

/* =========================================================
   SECTION DIVIDER
   Transição entre seções: a régua se desenha da esquerda e um
   ponto de accent percorre a linha uma única vez.
========================================================= */

import { motion } from "framer-motion";
import { EASE } from "./primitives";

export default function SectionDivider() {
  return (
    <div className="relative mx-6 h-px overflow-visible md:mx-12">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2, ease: EASE }}
        className="h-px w-full origin-left bg-white/10"
      />
      <motion.span
        initial={{ left: "0%", opacity: 0 }}
        whileInView={{ left: "100%", opacity: [0, 1, 1, 0] }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.15 }}
        className="absolute top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#F2360C]"
      />
    </div>
  );
}
