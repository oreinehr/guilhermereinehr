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
  hidden: { opacity: 0, y: 16, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
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
    scale: 0.96,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: "easeInOut" },
  },
};

const fadeMedia: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.06,
    y: 30,
    filter: "blur(14px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
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
  type,
  className,
}: {
  src: string;
  title: string;
  slug: string;
  type: "image" | "video";
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeMedia}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`
        relative
        w-full
        h-[320px] md:h-full
        overflow-hidden
        rounded-2xl
        group
        ${className}
      `}
    >
      {/* MEDIA */}
      {type === "image" ? (
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 md:group-hover:scale-105"
        />
      ) : (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
        />
      )}

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0 bg-black/60
          opacity-100 md:opacity-0
          md:group-hover:opacity-100
          transition-opacity duration-700
        "
      />

      {/* CONTENT */}
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
          className="text-2xl md:text-4xl font-black mb-5 tracking-tight"
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
              px-12 py-4 font-semibold border border-white rounded-lg
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
  return (
    <section className="w-full bg-black text-white py-16 px-4 md:px-12">
      {/* TÍTULO */}
<motion.h2
  variants={sentence}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="max-w-3xl text-2xl md:text-4xl font-light mb-12"
>
  {splitWords("Crafting immersive digital experiences").map((word, i) => (
    <motion.span
      key={i}
      variants={wordAnimation}
      className="inline-block text-[#F2360C] font-medium mr-2"
    >
      {word}
    </motion.span>
  ))}

  <br />

  {splitWords("through UX/UI, Motion design & prototype.").map((word, i) => (
    <motion.span
      key={i}
      variants={wordAnimation}
      className="inline-block mr-2"
    >
      {word}
    </motion.span>
  ))}
</motion.h2>



      {/* BENTO GRID */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-4
          md:grid-rows-2
          gap-4
          mb-16
          md:min-h-[720px]
        "
      >
        <CaseCard
          src="/planetaatl.png"
          title="Planeta Atlântida"
          slug="planeta"
          type="image"
          className="md:col-span-2 md:row-span-2"
        />

        <CaseCard
          src="/marinapark.png"
          title="Marina Park"
          slug="marina"
          type="image"
          className="md:col-span-1 md:row-span-2"
        />

        <CaseCard
          src="/bfmockup.png"
          title="Brazilian Footwear"
          slug="brazilian-footwear"
          type="image"
          className="md:col-span-1"
        />

        <CaseCard
          src="/conceito.mp4"
          title="Conceito"
          slug="conceito"
          type="video"
          className="md:col-span-1"
        />
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
            border border-[#F2360C]
            text-[#F2360C]
            font-medium
            px-16 py-5
            rounded-xl
            hover:bg-[#F2360C]
            hover:text-black
            transition
          "
        >
          See all cases
        </Link>
      </motion.div>
    </section>
  );
}
