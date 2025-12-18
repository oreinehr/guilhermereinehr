"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // scroll pra cima → mostra header
        controls.start("show");
      } else {
        // scroll pra baixo → esconde header
        controls.start("hidden");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, controls]);

  return (
    <>
      {/* HEADER */}
      <motion.header
        variants={fadeHeader}
        initial="show"
        animate={controls}
        className="fixed top-0 left-0 w-full z-50 bg-transparent"
      >
        {/* Desktop */}
        <div className="hidden md:flex justify-between items-center px-8 py-6 text-sm text-white">
          <Link href="/">
            <h1 className="font-black text-4xl tracking-tighter cursor-pointer">
              reinehr
            </h1>
          </Link>

          <nav className="flex items-center gap-12 text-xl">
            <Link href="/cases">Selected work (05)</Link>
            <a href="#">Info</a>
            <a href="#">Skills</a>
            <a href="#">Contact</a>
            <div className="flex gap-3">
              <a href="#">(IG)</a>
              <a href="#">(LI)</a>
            </div>
          </nav>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex justify-between items-center px-6 py-4 text-white">
          <Link href="/">
            <h1 className="font-black text-3xl tracking-tighter cursor-pointer">
              reinehr
            </h1>
          </Link>

          <button
            className="flex flex-col justify-between w-6 h-6"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-0.5 w-full bg-white transition-transform ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* MENU MOBILE */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: circOut }}
          className="fixed top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-4 py-6 text-xl text-white z-40 md:hidden"
        >
          <Link href="/work">Selected work (05)</Link>
          <a href="#">Info</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
          <div className="flex gap-4">
            <a href="#">(IG)</a>
            <a href="#">(LI)</a>
          </div>
        </motion.nav>
      )}
    </>
  );
}
