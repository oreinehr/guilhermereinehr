"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

function splitWords(text: string): string[] {
  return text.split(" ").map((word) => word + " ");
}

/* ANIMAÇÃO INDIVIDUAL DE CADA PALAVRA */
const wordAnimation: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: "easeOut",
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
      ease: "easeInOut",
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
      ease: "easeInOut",
    },
  },
};

/* CARD INDIVIDUAL */
function CaseCard({ src, title, slug }: { src: string; title: string; slug: string }) {
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
      className="relative w-full h-[450px] md:h-[520px] overflow-hidden group cursor-pointer rounded-lg"
    >
      {/* Imagem */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeImage}
        viewport={{ once: true }}
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
            href={`/${slug}`}
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
    { slug: "planeta", src: "/planetaatl.png", title: "Planeta Atlântida" },
    { slug: "marina", src: "/marinapark.png", title: "Marina Park" },
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-4 md:px-12">

      {/* Título com animação */}
      <motion.h2
        variants={sentence}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl text-2xl md:text-4xl font-light whitespace-pre-wrap mb-12"
      >
        {splitWords("Crafting immersive digital experiences").map((word, i) => (
          <motion.span key={i} variants={wordAnimation} className="inline-block text-[#F2360C] font-medium">
            {word}
          </motion.span>
        ))}

        {splitWords("through UX/UI, Motion design & prototype.").map((word, i) => (
          <motion.span key={i} variants={wordAnimation} className="inline-block text-white">
            {word}
          </motion.span>
        ))}
      </motion.h2>

      {/* GRID DE CASES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16">
        {caseItems.map((c) => (
          <CaseCard key={c.slug} src={c.src} title={c.title} slug={c.slug} />
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
