"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* =========================
   HELPERS
========================= */
function splitWords(text: string): string[] {
  return text.split(" ").map((word) => word + " ");
}

/* =========================
   ANIMAÇÕES
========================= */
const wordAnimation: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const sentence: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
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
    transition: { duration: 1.2, ease: "easeInOut" },
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
    transition: { duration: 1.3, ease: "easeInOut" },
  },
};

/* =========================
   CARD
========================= */
function CaseCard({
  src,
  title,
  slug,
}: {
  src: string;
  title: string;
  slug: string;
}) {
  return (
    <motion.div
      variants={fadeImage}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative w-full h-[450px] md:h-[520px] overflow-hidden rounded-lg group cursor-pointer"
    >
      {/* IMAGEM */}
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-110"
      />

      {/* OVERLAY — fixo no mobile, hover no desktop */}
      <div
        className="
          absolute inset-0 bg-black/60
          opacity-100 md:opacity-0
          md:group-hover:opacity-100
          transition-opacity duration-700
        "
      />

      {/* CONTEÚDO */}
      <div
        className="
          absolute inset-0 flex flex-col items-center justify-center text-center
          opacity-100 md:opacity-0
          md:group-hover:opacity-100
          transition-opacity duration-700
        "
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

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Link
            href={`/${slug}`}
            className="
              px-16 py-4 font-semibold border border-white rounded-lg
              text-white hover:bg-white hover:text-black transition
            "
          >
            See Project
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* =========================
   COMPONENTE PRINCIPAL
========================= */
export default function Cases() {
  const caseItems = [
    { slug: "planeta", src: "/planetaatl.png", title: "Planeta Atlântida" },
    { slug: "marina", src: "/marinapark.png", title: "Marina Park" },
  ];

  return (
    <section className="w-full bg-black text-white py-12 px-4 md:px-12">
      {/* TÍTULO */}
      <motion.h2
        variants={sentence}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl text-2xl md:text-4xl font-light whitespace-pre-wrap mb-12"
      >
        {splitWords("Crafting immersive digital experiences").map((word, i) => (
          <motion.span
            key={i}
            variants={wordAnimation}
            className="inline-block text-[#F2360C] font-medium"
          >
            {word}
          </motion.span>
        ))}

        {splitWords("through UX/UI, Motion design & prototype.").map((word, i) => (
          <motion.span key={i} variants={wordAnimation} className="inline-block">
            {word}
          </motion.span>
        ))}
      </motion.h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-8">
        {caseItems.map((item) => (
          <CaseCard
            key={item.slug}
            src={item.src}
            title={item.title}
            slug={item.slug}
          />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Link
          href="/cases"
          className="
            border border-[#F2360C] text-[#F2360C]
            font-medium px-14 py-4 rounded-lg
            hover:bg-[#F2360C] hover:text-black transition
          "
        >
          See all cases
        </Link>
      </motion.div>
    </section>
  );
}
