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
  

  /* 16:9 a partir do tablet; no celular uma proporção mais alta —
     16:9 em 390px daria ~220px de altura, com o header cobrindo
     boa parte da animação. */
  return (
    <section className="relative aspect-[4/5] w-full overflow-hidden text-white sm:aspect-video">

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

        {/* TÍTULO — um só bloco para mobile e desktop */}
        <div className="flex w-full h-full items-center justify-center px-6 md:px-12">
          <div className="flex w-full max-w-screen-xl flex-col items-center">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="
                text-[clamp(3.5rem,22vw,18rem)]
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
          /* contorno mais fino no mobile: 1px numa letra de 56px pesa
             muito mais que numa de 300px */
          -webkit-text-stroke: 0.6px white;
        }

        @media (min-width: 768px) {
          .stroke-text {
            -webkit-text-stroke: 1px white;
          }
        }

        /* só o SVG da animação de fundo — esta regra era global e
           esticava qualquer outro SVG da página para a viewport.
           Preenche a caixa 16:9 da seção, não a altura da tela. */
        .hero-lottie svg {
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>
    </section>
  );
}
