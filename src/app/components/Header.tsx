"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useScroll,
} from "framer-motion";
import { circOut } from "framer-motion";
import { useLang } from "../i18n/LanguageContext";
import { caseStudies } from "../i18n/cases";
import LanguageSwitcher from "./LanguageSwitcher";

/* =========================
   ANIMAÇÕES
========================= */
const fadeHeader = {
  hidden: {
    y: -80,
    opacity: 0,
    transition: { duration: 0.35, ease: circOut },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: circOut },
  },
};

export default function Header() {
  const { t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  /* =========================
     SCROLL SHOW / HIDE
  ========================= */
  useEffect(() => {
    controls.start("show");

    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest < lastScrollY.current) {
        controls.start("show");
      } else if (latest > 100) {
        controls.start("hidden");
      }

      lastScrollY.current = latest;
    });

    return () => unsubscribe();
  }, [controls, scrollY]);

  /* =========================
     LOCK SCROLL MENU
  ========================= */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <motion.header
        variants={fadeHeader}
        initial="show"
        animate={controls}
        className="fixed top-0 left-0 w-full z-50 bg-transparent"
      >
        {/* DESKTOP */}
        <div className="hidden md:flex justify-between items-center px-8 py-6 text-white">
          <Link href="/">
            <h1 className="font-black text-4xl tracking-tighter cursor-pointer">
              reinehr
            </h1>
          </Link>

          <nav className="flex items-center gap-12 text-xl">
            <Link href="/cases">{t.nav.workCount(caseStudies.length)}</Link>
            <Link href="/contact">{t.nav.contact}</Link>
            <LanguageSwitcher className="text-xl" />
            <div className="flex gap-4">
              <a href="https://www.instagram.com/reinehrrl/">(IG)</a>
              <a href="https://www.linkedin.com/in/guilherme-reinehr-a24117340/">(LI)</a>
              <a href="https://www.behance.net/guilhermereinehr">(BE)</a>
            </div>
          </nav>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex justify-between items-center px-6 py-4 text-white">
          <Link href="/">
            <h1 className="font-black text-3xl tracking-tighter">
              reinehr
            </h1>
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label={t.nav.menu}
            className="flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
          </button>
        </div>
      </motion.header>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: circOut }}
            className="fixed inset-0 z-[999] bg-black text-white md:hidden"
          >
            <div className="flex justify-between items-center px-6 py-4">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <h1 className="font-black text-3xl tracking-tighter">
                  reinehr
                </h1>
              </Link>

              <button
                onClick={() => setMenuOpen(false)}
                aria-label={t.nav.close}
                className="text-3xl leading-none"
              >
                ✕︎
              </button>
            </div>

            <div className="flex flex-col gap-4 px-6 mt-12 text-3xl font-black">
              <Link href="/cases" onClick={() => setMenuOpen(false)}>
                {t.nav.workCount(caseStudies.length)}
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                {t.nav.contact}
              </Link>

              <LanguageSwitcher className="mt-6 text-3xl font-black" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
