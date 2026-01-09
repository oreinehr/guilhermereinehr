"use client";

import Image from "next/image";
import Footer from "@/app/components/Footer";
import Header from "../components/Header";

export default function CasePage() {
  return (
    <main className="bg-black text-white">
      <Header/>
      <section className="relative w-full h-screen">
        <Image
          src="/marinapark.png"
          alt="Marina Park"
          fill
          className="object-cover"
        />

        <section className="relative w-full h-screen flex items-center justify-center">
          <h1
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              text-center
              z-10
              text-[20vw] md:text-[10vw]
              font-black
              tracking-tighter
              text-transparent
              stroke-text
              leading-[0.8]
            "
          >
          </h1>
        </section>
      </section>

      <div className="px-6 md:px-16 py-12">
        <h1 className="max-w-6xl text-2xl md:text-4xl font-light">
          <span className="text-[#F2360C] font-medium">Yo,</span>{" "}
          developing the Marina Park website was one of those experiences that
          truly mark a career. A project that arrived full of expectations:
          transforming the park’s vibrant, elegant, and at the same time
          welcoming atmosphere into a modern, fluid, and personality-driven
          digital presence.
          <span className="font-medium"> </span>
        </h1>
      </div>

      {/* ------------------------- */}
      {/* LARGE VERTICAL IMAGES */}
      {/* ------------------------- */}
      <section className="w-full flex flex-col gap-[2.5px] md:gap-2 px-4 md:px-16 py-12 md:py-16">
        <Image
          src="/mockup_marina.png"
          width={1600}
          height={2000}
          alt="Marina Park mockup 1"
          className="w-full h-auto object-cover"
        />

        <Image
          src="/marinaparkmockup.png"
          width={1600}
          height={2000}
          alt="Marina Park mockup 2"
          className="w-full h-auto object-cover"
        />

        <div className="px-6 md:px-16 py-12">
          <h1 className="max-w-6xl text-2xl md:text-4xl font-light">
            <span className="text-[#F2360C] font-medium">They were</span>{" "}
            intense weeks of research, immersion, and refinement, searching for
            the right balance between aesthetics, performance, and truly
            intuitive navigation. Every detail, every micro-interaction, and
            every layout decision shared the same goal: to create a digital
            experience that lives up to what Marina Park delivers in the real
            world.
            <span className="font-medium"> </span>
          </h1>
        </div>

        <video
          src="/videomarinapark.mp4"
          width={1600}
          height={2000}
          className="w-full h-auto object-cover"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="px-6 md:px-16 py-12">
          <h1 className="max-w-6xl text-2xl md:text-4xl font-light">
            <span className="text-[#F2360C] font-medium">The final result</span>{" "}
            was a challenging yet deeply rewarding process. Delivering a website
            that not only informs, but also engages and translates the essence
            of Marina Park, was an achievement that elevated my perspective as a
            designer and pushed me to grow throughout the journey.
            <span className="font-medium"> </span>
          </h1>
        </div>

        <div className="flex justify-center py-8 md:py-5">
          <a
            href="https://www.marinaparkrs.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#F2360C] text-[#F2360C] font-medium px-14 py-4 rounded-lg text-sm md:text-base hover:bg-[#F2360C] hover:text-black transition"
          >
            Visit official website
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
