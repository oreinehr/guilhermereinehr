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
        <video
  src="/conceito.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  Your browser does not support the video tag.
</video>
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
          The process begins with a single dot, a point of origin that carries intention and potential. From this minimal starting point, the form gradually unfolds. It expands, rotates, and transforms, allowing movement to guide the evolution of shape. Each transition is deliberate, creating continuity and rhythm instead of abrupt change.
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
            src="/conceito4.png"
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
            src="/conceito7.png"
            width={1600}
            height={2000}
            alt="Gallery image 2"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* TEXT 2 */}
        <div className="px-6 md:px-16 py-12">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-6xl text-2xl md:text-4xl font-light"
          >
            <span className="text-[#F2360C] font-medium">Beyond</span>{" "}
         Each shape represents a principle. Not as an icon, but as a behavior. The system is built around the idea of 360° communication, where movement reflects adaptability, continuity, and presence across multiple touchpoints. Motion is used to express integration rather than separation.on needed to remain intuitive even with
            a large volume of content,
         
          </motion.h1>
        </div>

    
      </section>

      <Footer />
    </main>
  );
}
