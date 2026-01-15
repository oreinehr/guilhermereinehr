"use client";

import Lottie from "lottie-react";
import loaderAnim from "../data/load.json";
import { useEffect, useState } from "react";

export default function Loader({ visible }: { visible: boolean }) {
  const [showAnim, setShowAnim] = useState(false);

  useEffect(() => {
    // espera 1 frame com layout pronto
    requestAnimationFrame(() => {
      setShowAnim(true);
    });
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "black",
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.7s ease-out",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 220,
          height: 220,
        }}
      >
        {showAnim && (
          <Lottie
            animationData={loaderAnim}
            loop
            autoplay
            renderer="svg"
            rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
    </div>
  );
}
