"use client";

import Image from "next/image";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { fadeUp, fadeImage } from "@/app/animations/variants";
import HeaderBF from "../components/HeaderBF";

export default function CasePage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <HeaderBF/>
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
            src="/BF_moc.png"
            alt="Brazilian Footwear"
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
      <div className="px-6 md:px-32 py-20">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl text-2xl md:text-4xl font-light"
        >
          <span className="text-[#F2360C] font-medium">Yo,</span>{" "}
          the Brazilian Footwear website was designed to strengthen the global
          digital presence of Brazil’s footwear industry through a clear,
          institutional user experience aligned with international standards.
          <span className="font-medium">
            {" "}
            The main challenge was organizing a large volume of content —
            including institutional information, initiatives, and news — into a
            strategic, accessible, and easy-to-navigate structure that serves
            both national and international audiences.
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
            src="/bfmockup.png"
            width={1600}
            height={2000}
            alt="Brazilian Footwear mockup 1"
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
            src="/image.png"
            width={1600}
            height={2000}
            alt="Brazilian Footwear mockup 2"
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
            time pressure, there was the responsibility of creating something
            worthy of the initiative. Navigation needed to remain intuitive even
            with a large volume of content,
            <span className="font-medium">
              {" "}
              and the aesthetic had to resonate with a demanding audience less
              accustomed to high-impact digital experiences.
            </span>
          </motion.h1>
        </div>

        {/* MORE IMAGES */}
        {["/BF.png"].map((src, i) => (
          <motion.div
            key={i}
            variants={fadeImage}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ filter: "blur(0x)" }}
          >
            <Image
              src={src}
              width={1600}
              height={2000}
              alt="Brazilian Footwear gallery"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}

        {/* TEXT 3 */}
        <div className="px-6 md:px-16 py-12">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-6xl text-2xl md:text-4xl font-light"
          >
            <span className="text-[#F2360C] font-medium">The final result</span>{" "}
            was not just a functional website: it became a digital experience
            that carries the essence of Brazilian Footwear. A large, meaningful,
            and special project,
            <span className="font-medium">
              {" "}
              reinforcing the power of design to bring iconic brands to life and
              transform the audience’s relationship with the initiative.
            </span>
          </motion.h1>
        </div>

        {/* BUTTON */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center py-8 md:py-5"
        >
          <a
            href="https://www.brazilianfootwear.com"
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
