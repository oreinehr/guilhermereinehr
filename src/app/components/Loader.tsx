"use client";

import Lottie from "lottie-react";
import loaderAnim from "../data/load.json";

type LoaderProps = {
  visible: boolean;
};

export default function Loader({ visible }: LoaderProps) {
  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black
        transition-opacity duration-700 ease-out
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      <Lottie
        animationData={loaderAnim}
        loop
        autoplay
        renderer="canvas"
        className="w-[220px] h-[220px]"
      />
    </div>
  );
}
