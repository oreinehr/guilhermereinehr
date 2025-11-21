"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* QUEBRA EM PALAVRAS */
function splitWords(text: string): string[] {
  return text.split(" ").map((word) => word + " ");
}

/* ANIMAÇÃO INDIVIDUAL DAS PALAVRAS */
const wordAnimation: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
ease: "easeInOut"

    },
  },
};

/* TIMING ENTRE PALAVRAS */
const sentence: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

/* FADE UP */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)", scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1.2,ease: "easeOut"
 },
  },
};

export default function About() {
  return (
    <section className="w-full bg-black text-white">

      {/* TEXTO PRINCIPAL COM ANIMAÇÃO PALAVRA POR PALAVRA */}
      <div className="px-6 md:px-16 py-20">
        <motion.h1
          variants={sentence}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl text-2xl md:text-4xl font-light leading-snug"
        >
          {/* linha 1 */}
          <motion.span
            variants={wordAnimation}
            className="inline-block whitespace-pre-wrap text-[#F2360C] font-medium"
          >
            Yo,
          </motion.span>{" "}

          {splitWords("I’m Guilherme Reinehr – a multidisciplinary designer based in Brazil, working worldwide with a focus in").map(
            (word, i) => (
              <motion.span
                key={i}
                variants={wordAnimation}
                className="inline-block whitespace-pre-wrap"
              >
                {word}
              </motion.span>
            )
          )}

          {/* linha 2 */}
          <br />
          {splitWords("UX/UI, prototype & motion. i’m currently creating beauty at tgr.").map(
            (word, i) => (
              <motion.span
                key={"l2" + i}
                variants={wordAnimation}
                className="inline-block whitespace-pre-wrap font-semibold"
              >
                {word}
              </motion.span>
            )
          )}
        </motion.h1>
      </div>

      {/* CARD COM AS LISTAS + FADE UP */}
      <div className="relative w-full flex justify-center items-center py-40">

        <div className="absolute inset-0 -z-100">
          <Image
            src="/frame.png"
            alt="Background"
            fill
            className="object-contain"
          />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-3xl w-full bg-black/7 backdrop-blur-xl rounded-2xl border border-white/10 px-8 py-10 shadow-xl mx-6 md:mx-auto"
        >
          <div className="grid grid-cols-2 gap-8 text-sm md:text-base">
            
            <div>
              <h3 className="mb-4 font-medium text-white/80">(Disciplines of focus)</h3>
              <ul className="space-y-2 text-white">
                {["AI","Art direction","Branding","Graphic design","Identity","Interactive design","Motion design","Prototype","UX/UI"].map(
                  (item, i) => (
                    <motion.li
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-medium text-white/80">(Areas of interest)</h3>
              <ul className="space-y-2 text-white">
                {["Art", "Automotive", "Fashion & Lifestyle", "Technology", "Music", "Media & Entertainment", "Sports", "Movie"].map(
                  (item, i) => (
                    <motion.li
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  )
                )}
              </ul>
            </div>

          </div>

          {/* Círculos decorativos */}
          <div className="absolute top-8 left-8 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>

        </motion.div>
      </div>
    </section>
  );
}
