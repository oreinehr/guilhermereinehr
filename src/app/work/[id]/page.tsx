"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Footer from "@/app/components/Footer";

export default function CasePage() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const numImages = 3;
  const totalScrollHeight = numImages * 100; // altura em vh da seção da galeria

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${100 * (numImages - 1)}%`]);

  return (
    <main className="bg-black text-white">
      {/* ------------------------- */}
      {/* BANNER HERO - VIDEO */}
      {/* ------------------------- */}
     <section className="relative w-full h-screen">
  <Image
    src="/planeta.png"
    alt="Planeta"
    fill
    className="object-cover"
  />
      <section className="relative w-full h-screen flex items-center justify-center">
  <h1 className="z-10 text-[10vw] font-black tracking-tighter text-transparent stroke-text leading-none">Planeta Atlântida</h1>
       </section>
      </section>

      {/* ------------------------- */}
      {/* SEÇÃO DE GALERIA HORIZONTAL */}
      {/* ------------------------- */}
      <section
        ref={galleryRef}
        className="relative bg-black"
        style={{ height: `${totalScrollHeight}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden px-10">
          <motion.div style={{ x }} className="flex gap-10">
            <Image
              src="/gallery/gal1.png"
              width={1200}
              height={1500}
              alt="gal1"
              className="object-cover"
            />
            <Image
              src="/gallery/gal2.png"
              width={1200}
              height={1500}
              alt="gal2"
              className=" object-cover"
            />
            <Image
              src="/gallery/gal3.png"
              width={1200}
              height={1500}
              alt="gal3"
              className=" object-cover"
            />
             <Image
              src="/gallery/gal4.png"
              width={900}
              height={1200}
              alt="gal3"
              className=" object-cover"
            />
          </motion.div>
        </div>
      </section>

       <section className="relative w-full h-screen">
  <video
    src="/planetavideo.mp4"
     autoPlay
          muted
          loop
          playsInline
    className="object-cover"
  />
  </section>
      {/* ------------------------- */}
      {/* CONTEÚDO NORMAL DA PÁGINA */}
      {/* ------------------------- */}
  
        <Footer />
    </main>
  );
}
