import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden min-h-[70vh] flex flex-col justify-end">
      {/* Texto animado estilo letreiro */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-center z-20 overflow-hidden">
  <div className="flex animate-marquee whitespace-nowrap">
   <h2 className="text-[15vw] md:text-[10vw] font-black uppercase pointer-events-none select-none text-transparent [-webkit-text-stroke:2px_white] font-[Archivo] tracking-tight pr-16">

      Thanks for scrolling! Thanks for scrolling! Thanks for scrolling!
    </h2>
    <h2 className="text-[15vw] md:text-[10vw] font-black uppercase pointer-events-none select-none text-transparent [-webkit-text-stroke:2px_white] font-[Archivo] tracking-tight pr-16">

      Thanks for scrolling! Thanks for scrolling! Thanks for scrolling!
    </h2>
  </div>
</div>
      {/* Cubo atrás */}
      <div className="absolute inset-0 flex items-center justify-center z-10 opacity-40">
        <Image
          src="/abstract.png"
          alt="3D Cube"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Direitos reservados */}
      <div className="relative z-30 flex justify-center pb-6">
        <p className="text-sm md:text-base text-white/60">
          © 2025 Guilherme Reinehr — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
