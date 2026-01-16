"use client";

import Image from "next/image";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { fadeUp, fadeImage } from "@/app/animations/variants";
import Header from "../components/Header";

export default function CasePage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Header />

      {/* HERO IMAGE */}
      <section className="relative w-full h-screen">
        <motion.div
          variants={fadeImage}
          initial="hidden"
          animate="show"
          style={{ filter: "blur(0px)" }}
          className="absolute inset-0"
        >
          <Image
            src="/luciano2.png"
            alt="Planeta Atlântida"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* CENTER TITLE */}
        <section className="relative w-full h-screen flex items-center justify-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{ filter: "blur(0px)" }}
            className="
              absolute inset-0 flex items-center justify-center text-center z-10
              text-[20vw] md:text-[10vw] font-black tracking-tighter
              text-transparent stroke-text leading-[0.8]
            "
          >
          </motion.h1>
        </section>
      </section>

      {/* TEXT BLOCK 1 */}
      <div className="px-6 md:px-16 py-12">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl text-2xl md:text-4xl font-light"
        >
          <span className="text-[#F2360C] font-medium">Yo,</span>{" "}
            Working on the Luciano B. Corrêa portfolio website was one of the most creative and fulfilling challenges in my journey as a UX/UI designer. The goal was clear: to craft a digital space that not only showcases Luciano’s work with elegance and clarity, but also delivers a smooth, immersive experience that resonates with his unique artistic vision.
          <span className="font-medium">
            {" "}
            The project came with huge expectations: translating all the energy
            of the largest festival in southern Brazil into a fluid, modern, and
            immersive digital experience.
          </span>
        </motion.h1>
      </div>

      {/* GALLERY + TEXT + GALLERY */}
      <section className="w-full flex flex-col gap-[2.5px] md:gap-2 px-4 md:px-16 py-12 md:py-16">
        <motion.div
          variants={fadeImage}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ filter: "blur(0px)" }}
        >
          <Image
            src="/luciano3.png"
            width={1600}
            height={2000}
            alt="Gallery image 1"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          variants={fadeImage}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ filter: "blur(0px)" }}
        >
          <Image
            src="/luciano4.png"
            width={1600}
            height={2000}
            alt="Gallery image 2"
            className="w-full h-auto object-cover"
          />
        </motion.div>

      
        {/* BUTTON */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center py-8 md:py-5"
        >
          <a
            href="https://lucianobcorrea.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#F2360C] text-[#F2360C] font-medium px-14 py-4 rounded-lg text-sm md:text-base hover:bg-[#F2360C] hover:text-black transition"
          >
            Visit official website
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
