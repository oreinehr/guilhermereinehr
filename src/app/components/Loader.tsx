"use client";

import { useEffect, useRef, useState } from "react";

export default function Loader({ visible }: { visible: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    setSrc(isMobile ? "/loader-mobile.mp4" : "/loader-desktop.mp4");
  }, []);

  useEffect(() => {
    if (!src) return;
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });
  }, [src]);

  if (!src) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "black",
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.7s ease-out",
        pointerEvents: "none",
      }}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        autoPlay
        playsInline
        loop
        controls={false}
        preload="auto"
        webkit-playsinline="true"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
