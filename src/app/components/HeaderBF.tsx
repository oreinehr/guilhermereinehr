"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { circOut } from "framer-motion";

/* --- ANIMAÇÕES --- */
const fadeHeader = {
  hidden: {
    y: -80,
    opacity: 0,
    transition: { duration: 0.4, ease: circOut },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: circOut },
  },
};

export default function HeaderBF() {
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  /* --- SCROLL BEHAVIOR --- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        controls.start("show");
      } else {
        controls.start("hidden");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, controls]);

  /* --- SCROLL LOCK QUANDO MENU ABERTO --- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <motion.header
        variants={fadeHeader}
        initial="show"
        animate={controls}
        className="fixed top-0 left-0 w-full z-50 bg-black"
      >
        {/* DESKTOP */}
        <div className="hidden md:flex justify-between items-center px-8 py-6 text-white">
          <Link href="/">
            <h1 className="font-black text-4xl tracking-tighter cursor-pointer">
              reinehr
            </h1>
          </Link>

          <nav className="flex items-center gap-12 text-xl">
            <Link href="/cases">Selected work (03)</Link>
            <Link href="/contact">Contact</Link>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/reinehrrl/">(IG)</a>
              <a href="https://www.linkedin.com/in/guilherme-reinehr-a24117340/">(LI)</a>
              <a href="https://www.behance.net/guilhermereinehr">(BE)</a>
            </div>
          </nav>
        </div>

        {/* MOBILE HEADER */}
        <div className="md:hidden flex justify-between items-center px-6 py-4 text-white">
          <Link href="/">
            <h1 className="font-black text-3xl tracking-tighter">
              reinehr
            </h1>
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
          </button>
        </div>
      </motion.header>

      {/* MENU MOBILE FULLSCREEN */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: circOut }}
            className="fixed inset-0 z-[999] bg-black text-white md:hidden"
          >
            {/* TOPO */}
            <div className="flex justify-between items-center px-6 py-4">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <h1 className="font-black text-3xl tracking-tighter">
                  reinehr
                </h1>
              </Link>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-3xl leading-none"
              >
                ✕
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-4 px-6 mt-12 text-3xl font-black">
              <Link href="/cases" onClick={() => setMenuOpen(false)}>
                Selected work (03)
              </Link>

              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>

              {/* SOCIAIS */}
              <div className="flex gap-12 text-2xl mt-4">
                <a href="https://www.instagram.com/reinehrrl/">(IG)</a>
                <a href="https://www.linkedin.com/in/guilherme-reinehr-a24117340/">(LI)</a>
                <a href="https://www.behance.net/guilhermereinehr">(BE)</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
