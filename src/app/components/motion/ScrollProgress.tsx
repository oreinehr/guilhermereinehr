"use client";

/* =========================================================
   SCROLL PROGRESS
   Fio vertical fino na borda direita. Some no topo e aparece
   quando o usuário começa a descer.
========================================================= */

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.97, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      aria-hidden
      style={{ opacity }}
      className="pointer-events-none fixed right-3 top-1/2 z-40 hidden h-[28vh] w-px -translate-y-1/2 bg-white/10 md:block"
    >
      <motion.div
        style={{ scaleY }}
        className="h-full w-full origin-top bg-[#F2360C]"
      />
    </motion.div>
  );
}
