"use client";

import Image from "next/image";
import Footer from "@/app/components/Footer";

export default function CasePage() {

  return (
    <main className="bg-black text-white">


      <section className="relative w-full h-screen">
        <Image
          src="/Marinapark.png"
          alt="Planeta"
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
    Marina Park
</h1>


        </section>
      </section>

      <div className="px-6 md:px-16 py-12">
        <h1 className="max-w-6xl text-2xl md:text-4xl font-light">
          <span className="text-[#F2360C] font-medium">Yo,</span>{" "}
Desenvolver o site do Marina Park foi uma daquelas experiências que marcam a carreira. Um projeto que chegou carregado de expectativa: transformar a atmosfera vibrante, elegante e ao mesmo tempo acolhedora do parque em uma presença digital moderna, fluida e cheia de personalidade.          <span className="font-medium">
            {" "}
          </span>
        </h1>
      </div>

      {/* ------------------------- */}
      {/* IMAGENS VERTICAIS GRANDES */}
      {/* ------------------------- */}
      <section className="w-full flex flex-col gap-[2.5px] md:gap-2 px-4 md:px-16 py-12 md:py-16">

        <Image
          src="/marina1.png"
          width={1600}
          height={2000}
          alt="gal1"
          className="w-full h-auto object-cover"
        />

        <Image
          src="/marina12.png"
          width={1600}
          height={2000}
          alt="gal2"
          className="w-full h-auto object-cover"
        />

  <div className="px-6 md:px-16 py-12">
        <h1 className="max-w-6xl text-2xl md:text-4xl font-light">
          <span className="text-[#F2360C] font-medium">Foram</span>{" "}
semanas intensas de pesquisa, imersão e refinamento, buscando o equilíbrio entre estética, performance e uma navegação realmente intuitiva. Cada detalhe, cada microanimação e cada escolha de layout tinham o mesmo objetivo: criar uma experiência digital que estivesse à altura do que o Marina Park entrega no mundo real.          <span className="font-medium">
            {" "}
          </span>
        </h1>
      </div>


        <video
  src="/videomarina.mp4"
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
          <span className="text-[#F2360C] font-medium">O resultado final</span>{" "}
 foi um processo desafiador, mas profundamente gratificante. Entregar um site que não só informa, mas também envolve e traduz a essência do Marina Park, foi uma conquista que elevou meu olhar como designer e me fez evoluir muito ao longo do caminho.          <span className="font-medium">
            {" "}
 
          </span>
        </h1>
      </div>
        <div className="flex justify-center py-8 md:py-5">
  <a
    href="https://www.marinaparkrs.com.br"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-[#F2360C] text-[#F2360C] font-medium px-14 py-4 rounded-lg text-sm md:text-base hover:bg-[#F2360C] hover:text-black transition"
  >
    Visitar site oficial
  </a>
</div>
      </section>

      
      
    

      <Footer />
    </main>
  );  
}
