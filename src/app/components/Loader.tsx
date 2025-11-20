"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loaderAnim from "../data/load.json"; // <-- seu arquivo Lottie de loading

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Tempo de fade — ajuste se quiser
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000); // 2s

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed inset-0 bg-black flex items-center justify-center z-[9999]
        transition-opacity duration-700
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <Lottie
        animationData={loaderAnim}
        loop={true}
        autoplay={true}
        className="w-full h-screen md:w-cover md:h-screen"
      />
    </div>
  );
}
