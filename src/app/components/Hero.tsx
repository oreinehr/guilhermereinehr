"use client";

import { useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import animationData from "../data/scene.json";

/* --- ANIMAÇÕES --- */


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(12px)",
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 1.2,
     ease: "easeInOut"


    },
  },
};

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative h-screen w-screen overflow-hidden text-white">

      {/* Background Lottie */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          className="lottie-cover"
        />
      </div>

      {/* Header Desktop */}
      <motion.header
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="hidden md:flex justify-between items-center px-8 py-6 text-sm"
      >
        <Link href="/">
          <h1 className="font-black text-4xl tracking-tighter cursor-pointer">
            reinehr
          </h1>
        </Link>
        <nav className="flex items-center gap-12 text-xl">
          <Link href="/cases"><span className="cursor-pointer">Selected work (05)</span></Link>
          <a href="#">Info</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
          <div className="flex gap-3">
            <a href="#">(IG)</a>
            <a href="#">(LI)</a>
          </div>
        </nav>
      </motion.header>

      {/* Header Mobile */}
      <header className="md:hidden flex justify-between items-center px-6 py-4">
        <Link href="/">
          <h1 className="font-black text-3xl tracking-tighter cursor-pointer">
            reinehr
          </h1>
        </Link>

        {/* Menu button */}
        <button
          className="flex flex-col justify-between w-6 h-6"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-0.5 w-full bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-full bg-white transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block h-0.5 w-full bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </header>

      {/* Menu Mobile */}
      {menuOpen && (
        <motion.nav
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-4 py-6 text-xl z-20"
        >
          <Link href="/work"><span className="cursor-pointer">Selected work (05)</span></Link>
          <a href="#">Info</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
          <div className="flex gap-4">
            <a href="#">(IG)</a>
            <a href="#">(LI)</a>
          </div>
        </motion.nav>
      )}

      {/* Hero Content */}
      <div className="relative flex flex-col justify-center items-center h-full">
        
        {/* Mobile (animado também) */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:hidden absolute top-20 left-0 text-[35vw] font-black text-transparent stroke-text whitespace-nowrap z-10"
        >
          reinehr
        </motion.h2>

        {/* Desktop Content */}
        <div className="hidden md:relative md:flex md:w-full md:h-full md:flex-col md:justify-center md:items-center">
          
          {/* Título gigante animado */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative z-10 text-[24vw] font-black tracking-tighter text-transparent stroke-text leading-none top-20"
          >
            reinehr
          </motion.h2>

          <div className="relative w-full h-screen">

            {/* Texto da esquerda */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="absolute bottom-56 left-80 max-w-xs"
            >
              <p className="text-xl leading-snug">
                Creating beauty in Brazil <br /> and around the world
              </p>
            </motion.div>

            {/* Texto da direita */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="absolute bottom-56 right-80 max-w-xs text-right"
            >
              <p className="text-xl leading-snug">
                UX/UI Design, Motion, <br /> Product Design & Prototype.
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
        }
        .lottie-cover,
        .lottie-cover > div,
        .lottie-cover > div > svg {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
        }
      `}</style>
    </section>
  );
}
