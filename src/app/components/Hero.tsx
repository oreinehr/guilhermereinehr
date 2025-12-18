"use client";

import { useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import animationData from "../data/scene.json";
import { circOut } from "framer-motion";
import Header from "./Header";


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
   ease: circOut

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

      
      <Header/>

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
