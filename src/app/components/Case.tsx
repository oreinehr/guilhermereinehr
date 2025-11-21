"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* ANIMAÇÃO INDIVIDUAL DE CADA PALAVRA */
const wordAnimation: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const sentence: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
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
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeImage: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.08,
    filter: "blur(14px)",
    y: 30,
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


/* QUEBRA EM PALAVRAS */
function splitWords(text: string): string[] {
  return text.split(" ").map((word) => word + " ");
}

/* CARD INDIVIDUAL */
function CaseCard({ src, title, id }: { src: string; title: string; id: number }) {
  const [showMobileContent, setShowMobileContent] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const timer = setTimeout(() => setShowMobileContent(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <motion.div
      variants={fadeImage}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative w-full h-96 md:h-[36rem] overflow-hidden group cursor-pointer rounded-lg"
    >
      {/* Imagem */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeImage}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-700
          ${showMobileContent ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`}
      />

      {/* Texto + botão */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700
          ${showMobileContent ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`}
      >
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
        >
          {title}
        </motion.h3>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Link
            href={`/work/${id}`}
            className="px-20 py-4 font-semibold border border-white rounded-lg text-white hover:bg-white hover:text-black transition"
          >
            Ver projeto
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* COMPONENTE PRINCIPAL */
export default function Cases() {
  const caseItems = [
    { id: 1, src: "/planeta.png", title: "Planeta Atlântida" },
    { id: 2, src: "/marinapark.png", title: "Marina Park" },
    { id: 3, src: "/melissa.png", title: "Melissa Simonett" },
    { id: 4, src: "/mac.png", title: "Brazilian Footwear" },
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-4 md:px-12">

      {/* Título com animação PALAVRA POR PALAVRA */}
      <motion.h2
        variants={sentence}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl text-2xl md:text-4xl font-light whitespace-pre-wrap mb-12"
      >
        {/* linha 1 */}
        {splitWords("Crafting immersive digital experiences").map((word, i) => (
          <motion.span key={i} variants={wordAnimation} className="inline-block text-[#F2360C] font-medium">
            {word}
          </motion.span>
        ))}

        {splitWords("through UX/UI, Motion design & prototype.").map((word, i) => (
          <motion.span key={i} variants={wordAnimation} className="inline-block text-white ">
            {word}
          </motion.span>
        ))}

        

      
      </motion.h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
        {caseItems.map((c) => (
          <CaseCard key={c.id} src={c.src} title={c.title} id={c.id} />
        ))}
      </div>

      {/* Botão final */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Link
          href="/cases"
          className="border border-[#F2360C] text-[#F2360C] font-medium px-14 py-4 rounded-lg text-sm md:text-base hover:bg-[#F2360C] hover:text-black transition"
        >
          See all cases
        </Link>
      </motion.div>
    </section>
  );
}
