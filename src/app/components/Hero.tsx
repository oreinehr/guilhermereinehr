"use client";

import { useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { circOut } from "framer-motion";
import Header from "./Header";
import animationData from "../data/scene.json";

/* --- ANIMAÇÕES --- */
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(6px)",
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.6,
      ease: circOut,
    },
  },
};

export default function Hero() {
  

  return (
    <section className="relative h-screen w-screen overflow-hidden text-white">

      {/* BACKGROUND LOTTIE */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <Lottie
          animationData={animationData}
          loop
          autoplay
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          className="w-full h-full"
        />
      </div>

      <Header />

      {/* HERO CONTENT */}
      <div className="relative h-full flex items-center justify-center px-6 md:px-0 overflow-x-hidden">

        {/* MOBILE — sem título */}
        <div className="md:hidden flex flex-col justify-end h-full pb-24">
          {/* espaço livre proposital — hero clean */}
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex w-full h-full items-center justify-center overflow-x-hidden">

          {/* GRUPO CENTRAL */}
          <div className="relative w-full flex items-center justify-center max-w-screen">

            {/* TEXTO ESQUERDO */}
            <motion.div
  variants={fadeUp}
  initial="hidden"
  animate="show"
  className="absolute top-1/2 -translate-y-1/2 left-0 px-12 max-w-xs"
>
  <p className="text-xl leading-snug">
    Creating beauty in Brazil <br /> and around the world
  </p>
</motion.div>

{/* TÍTULO */}
<motion.h2
  variants={fadeUp}
  initial="hidden"
  animate="show"
  className="text-[clamp(6rem,24vw,20rem)] font-black tracking-tighter text-transparent stroke-text leading-none text-center mx-auto"
>
  reinehr
</motion.h2>

{/* TEXTO DIREITO */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  animate="show"
  className="absolute top-1/2 -translate-y-1/2 right-0 px-6 max-w-xs text-right"
>
  <p className="text-xl leading-snug">
    UX/UI Design, Motion, <br /> Product Design & Prototype.
  </p>
</motion.div>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
        }

        svg {
          width: 100vw !important;
          height: 100vh !important;
        }
      `}</style>
    </section>
  );
}
