"use client";

/* =========================================================
   MOTION PRIMITIVES
   Vocabulário de movimento compartilhado da Home.
   Tudo respeita prefers-reduced-motion.
========================================================= */

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

/* Easing autoral — saída longa, entrada curta. */
export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;

/* =========================
   TEXT REVEAL (mask por linha)
   Cada linha vive num container overflow-hidden e sobe
   de baixo com leve rotação — reveal de verdade, não fade.
========================= */
export function RevealLines({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.09,
  as: Tag = "div",
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "div" | "h1" | "h2" | "h3" | "p";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -12% 0px" });
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag] as typeof motion.div;

  return (
    <MotionTag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className={`block overflow-hidden ${lineClassName}`}>
          <motion.span
            className="block will-change-transform"
            initial={reduce ? { opacity: 0 } : { y: "110%", rotate: 2 }}
            animate={
              inView
                ? reduce
                  ? { opacity: 1 }
                  : { y: "0%", rotate: 0 }
                : undefined
            }
            transition={{
              duration: 1.05,
              ease: EASE,
              delay: delay + i * stagger,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/* =========================
   WORD STAGGER
   Reveal palavra por palavra com máscara individual.
========================= */
export function RevealWords({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.045,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();

  return (
    <span ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom pb-[0.06em]"
        >
          <motion.span
            className={`inline-block will-change-transform ${wordClassName}`}
            initial={reduce ? { opacity: 0 } : { y: "108%" }}
            animate={inView ? (reduce ? { opacity: 1 } : { y: "0%" }) : undefined}
            transition={{
              duration: 0.9,
              ease: EASE,
              delay: delay + i * stagger,
            }}
          >
            {word}
            {" "}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* =========================
   STAGGER GROUP
   Container + item para listas / grids.
========================= */
export const staggerGroup: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function Stagger({
  children,
  className = "",
  amount = 0.25,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      variants={staggerGroup}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================
   PARALLAX
   Deslocamento sutil em função do progresso do elemento.
========================= */
export function useParallax(distance = 60) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [distance, -distance]
  );
  const y = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });
  return { ref, y };
}

export function Parallax({
  children,
  distance = 60,
  className = "",
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const { ref, y } = useParallax(distance);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

/* =========================
   SECTION LABEL
   Marcador tipográfico entre seções — mantém a
   linguagem de parênteses já usada no About.
========================= */
export function SectionLabel({
  index,
  children,
  className = "",
}: {
  index: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Stagger
      className={`flex items-baseline gap-4 text-[0.7rem] md:text-xs uppercase tracking-[0.28em] text-white/40 ${className}`}
    >
      <motion.span variants={staggerItem} className="text-[#F2360C]">
        {index}
      </motion.span>
      <motion.span variants={staggerItem}>{children}</motion.span>
      <motion.span
        variants={{
          hidden: { scaleX: 0 },
          show: {
            scaleX: 1,
            transition: { duration: 1.1, ease: EASE },
          },
        }}
        className="h-px flex-1 origin-left bg-white/15"
      />
    </Stagger>
  );
}

export type { MotionValue };
