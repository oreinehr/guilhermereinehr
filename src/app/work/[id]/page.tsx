"use client";

import Image from "next/image";
import Footer from "@/app/components/Footer";

export default function CasePage() {

  return (
    <main className="bg-black text-white">


      <section className="relative w-full h-screen">
        <Image
          src="/planeta.png"
          alt="Planeta"
          fill
          className="object-cover"
        />

        <section className="relative w-full h-screen flex items-center justify-center">
          <h1 className="z-10 text-[10vw] font-black tracking-tighter text-transparent stroke-text leading-none">
            Planeta Atlântida
          </h1>
        </section>
      </section>

      <div className="px-6 md:px-16 py-12">
        <h1 className="max-w-6xl text-2xl md:text-4xl font-light">
          <span className="text-[#F2360C] font-medium">Yo,</span>{" "}
          desenvolver o site do Planeta Atlântida foi uma das experiências mais intensas, desafiadoras e, ao mesmo tempo, gratificantes da minha trajetória como UX/UI Designer.
          <span className="font-medium">
            {" "}
            O projeto chegou com uma expectativa enorme: traduzir toda a energia do maior festival do sul do Brasil em uma experiência digital fluida, moderna e imersiva.
          </span>
        </h1>
      </div>

      {/* ------------------------- */}
      {/* IMAGENS VERTICAIS GRANDES */}
      {/* ------------------------- */}
      <section className="w-full flex flex-col gap-20 px-6 md:px-16 py-16">

        <Image
          src="/gallery/gal1.png"
          width={1600}
          height={2000}
          alt="gal1"
          className="w-full h-auto object-cover rounded-lg"
        />

        <Image
          src="/gallery/gal2.png"
          width={1600}
          height={2000}
          alt="gal2"
          className="w-full h-auto object-cover rounded-lg"
        />

  <div className="px-6 md:px-16 py-12">
        <h1 className="max-w-6xl text-2xl md:text-4xl font-light">
          <span className="text-[#F2360C] font-medium">Além</span>{" "}
       da pressão do tempo, existia a responsabilidade de criar algo que estivesse à altura do evento. A navegação precisava ser intuitiva mesmo com grande volume de conteúdo,
          <span className="font-medium">
            {" "}
        e a estética precisava conversar com um público jovem, exigente e acostumado com experiências digitais de alto impacto.
          </span>
        </h1>
      </div>


        <Image
          src="/grid.png"
          width={1600}
          height={2000}
          alt="gal3"
          className="w-full h-auto object-cover rounded-lg"
        />

        <Image
          src="/gallery/gal3.png"
          width={1600}
          height={2000}
          alt="gal3"
          className="w-full h-auto object-cover rounded-lg"
        />

         <div className="px-6 md:px-16 py-12">
        <h1 className="max-w-6xl text-2xl md:text-4xl font-light">
          <span className="text-[#F2360C] font-medium">O resultado final</span>{" "}
não foi apenas um site funcional: foi uma experiência digital que carrega a alma do Planeta Atlântida. Um projeto grande, significativo e especial,
          <span className="font-medium">
            {" "}
     que reforça o poder do design em dar vida a marcas icônicas e transformar a relação do público com o evento.
          </span>
        </h1>
      </div>
        
      </section>

    

      <Footer />
    </main>
  );
}
