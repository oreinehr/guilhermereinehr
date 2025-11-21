"use client";

import Image from "next/image";
import Footer from "@/app/components/Footer";
import { motion, Variants, easeOut } from "framer-motion";

// ---- animações padrão ---- //

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.2, ease: easeOut },
  },
};

export const fadeImage: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: easeOut },
  },
};

export default function CasePage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* HERO IMAGEM */}
      <section className="relative w-full h-screen">
        <motion.div
          variants={fadeImage}
          initial="hidden"
          animate="show"
          style={{ filter: "blur(14px)" }}
          className="absolute inset-0"
        >
          <Image
            src="/planetaatl.png"
            alt="Planeta"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* TÍTULO CENTRAL */}
        <section className="relative w-full h-screen flex items-center justify-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{ filter: "blur(12px)" }}
            className="
              absolute inset-0 flex items-center justify-center text-center z-10
              text-[20vw] md:text-[10vw] font-black tracking-tighter
              text-transparent stroke-text leading-[0.8]
            "
          >
            Planeta Atlântida
          </motion.h1>
        </section>
      </section>

      {/* BLOCO TEXTO 1 */}
      <div className="px-6 md:px-16 py-12">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl text-2xl md:text-4xl font-light"
        >
          <span className="text-[#F2360C] font-medium">Yo,</span>{" "}
          desenvolver o site do Planeta Atlântida foi uma das experiências mais
          intensas, desafiadoras e, ao mesmo tempo, gratificantes da minha
          trajetória como UX/UI Designer.
          <span className="font-medium">
            {" "}
            O projeto chegou com uma expectativa enorme: traduzir toda a energia
            do maior festival do sul do Brasil em uma experiência digital fluida,
            moderna e imersiva.
          </span>
        </motion.h1>
      </div>

      {/* GALERIA + TEXTO + GALERIA */}
      <section className="w-full flex flex-col gap-[2.5px] md:gap-2 px-4 md:px-16 py-12 md:py-16">

        <motion.div
          variants={fadeImage}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ filter: "blur(14px)" }}
        >
          <Image
            src="/gallery/gal1.png"
            width={1600}
            height={2000}
            alt="gal1"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          variants={fadeImage}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ filter: "blur(14px)" }}
        >
          <Image
            src="/gallery/gal2.png"
            width={1600}
            height={2000}
            alt="gal2"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* TEXTO 2 */}
        <div className="px-6 md:px-16 py-12">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-6xl text-2xl md:text-4xl font-light"
          >
            <span className="text-[#F2360C] font-medium">Além</span>{" "}
            da pressão do tempo, existia a responsabilidade de criar algo que
            estivesse à altura do evento. A navegação precisava ser intuitiva
            mesmo com grande volume de conteúdo,
            <span className="font-medium">
              {" "}
              e a estética precisava conversar com um público jovem, exigente e
              acostumado com experiências digitais de alto impacto.
            </span>
          </motion.h1>
        </div>

        {/* MAIS IMAGENS */}
        {[ "/grid.png", "/gallery/gal3.png", "/gallery/gal5.png" ].map((src, i) => (
          <motion.div
            key={i}
            variants={fadeImage}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ filter: "blur(14px)" }}
          >
            <Image
              src={src}
              width={1600}
              height={2000}
              alt="gallery"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}

        {/* TEXTO 3 */}
        <div className="px-6 md:px-16 py-12">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-6xl text-2xl md:text-4xl font-light"
          >
            <span className="text-[#F2360C] font-medium">O resultado final</span>{" "}
            não foi apenas um site funcional: foi uma experiência digital que
            carrega a alma do Planeta Atlântida. Um projeto grande, significativo
            e especial,
            <span className="font-medium">
              {" "}
              que reforça o poder do design em dar vida a marcas icônicas e
              transformar a relação do público com o evento.
            </span>
          </motion.h1>
        </div>

        {/* BOTÃO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center py-8 md:py-5"
        >
          <a
            href="https://www.planetaatlantida.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#F2360C] text-[#F2360C] font-medium px-14 py-4 rounded-lg text-sm md:text-base hover:bg-[#F2360C] hover:text-black transition"
          >
            Visitar site oficial
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
