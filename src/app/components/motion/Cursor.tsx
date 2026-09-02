"use client";

/* =========================================================
   CURSOR CUSTOMIZADO
   Ponto sólido + anel com lag. Cresce e revela um label ao
   passar por elementos com [data-cursor]. Desktop apenas —
   não monta em ponteiro touch / coarse.
========================================================= */

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE } from "./primitives";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  /* anel segue com atraso, ponto quase colado */
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.5 });
  const dotX = useSpring(x, { stiffness: 900, damping: 40, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 900, damping: 40, mass: 0.2 });

  useEffect(() => {
    const fine =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;
    setEnabled(true);

    /* esconde o cursor nativo apenas quando o custom realmente monta */
    document.documentElement.classList.add("cursor-none-desktop");

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = (e.target as HTMLElement | null)?.closest?.(
        "[data-cursor]"
      ) as HTMLElement | null;

      if (target) {
        setHovering(true);
        const text = target.dataset.cursor;
        setLabel(text && text !== "true" ? text : null);
      } else {
        setHovering(false);
        setLabel(null);
      }
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.documentElement.classList.remove("cursor-none-desktop");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
    >
      {/* ANEL */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute left-0 top-0 will-change-transform"
      >
        <motion.div
          animate={{
            width: hovering ? (label ? 104 : 64) : 34,
            height: hovering ? (label ? 104 : 64) : 34,
            opacity: visible ? 1 : 0,
            borderColor: hovering
              ? "rgba(242,54,12,0.9)"
              : "rgba(255,255,255,0.45)",
            backgroundColor: hovering
              ? "rgba(242,54,12,0.12)"
              : "rgba(255,255,255,0)",
          }}
          transition={{ duration: 0.4, ease: EASE }}
          className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-[1px]"
        >
          <AnimatePresence>
            {label && (
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="select-none text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* PONTO */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="absolute left-0 top-0 will-change-transform"
      >
        <motion.div
          animate={{
            scale: hovering ? 0 : 1,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: EASE }}
          className="h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F2360C]"
        />
      </motion.div>
    </div>
  );
}
