"use client";

import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { circOut } from "framer-motion";
import Header from "./Header";
import animationData from "../data/scene.json";
import { useLoader } from "./LoaderContext";


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
    const { loaderDone } = useLoader();
  

  return (
    <section className="relative h-screen w-screen overflow-hidden text-white">

      {/* BACKGROUND LOTTIE */}
    {loaderDone && (
  <div className="hero-lottie absolute inset-0 -z-10 pointer-events-none overflow-hidden">
    <Lottie
      animationData={animationData}
      loop
      autoplay
      rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
      className="w-full h-full"
    />
  </div>
)}

      <Header />

      {/* HERO CONTENT */}
      <div className="relative h-full flex items-center justify-center px-6 md:px-0 overflow-x-hidden">

        {/* MOBILE — sem título */}
        <div className="md:hidden flex flex-col justify-end h-full pb-24">
          {/* espaço livre proposital — hero clean */}
        </div>

        {/* DESKTOP */}
   <div className="hidden md:flex w-full h-full items-center justify-center px-12">
  <div className="flex flex-col items-center w-full max-w-screen-xl">

    {/* TÍTULO CENTRAL */}
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="
        text-[clamp(6rem,22vw,18rem)]
        font-black
        tracking-tighter
        text-transparent
        stroke-text
        leading-none
        text-center
      "
    >
      reinehr
    </motion.h2>

  </div>
</div>

      </div>

      {/* STYLES */}
      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
        }

        /* só o SVG da animação de fundo — esta regra era global e
           esticava qualquer outro SVG da página para a viewport */
        .hero-lottie svg {
          width: 100vw !important;
          height: 100vh !important;
        }
      `}</style>
    </section>
  );
}
