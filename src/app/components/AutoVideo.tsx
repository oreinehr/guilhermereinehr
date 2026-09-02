"use client";

/* =========================================================
   AUTO VIDEO
   O iOS só permite autoplay quando o elemento está mudo de
   verdade no DOM. O React nem sempre reflete `muted` como
   atributo, e o Safari recusa a reprodução em silêncio: o
   vídeo fica parado, mostrando o botão de play.

   Aqui o mute é aplicado na própria referência do elemento,
   e um retry dispara no primeiro toque caso o play inicial
   seja recusado (economia de dados, bateria fraca, Low
   Power Mode).
========================================================= */

import { useEffect, useRef } from "react";

type Props = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
};

export default function AutoVideo({ src, className, ...rest }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* muted precisa valer na propriedade, não só no atributo —
       é o que o Safari consulta para liberar o autoplay */
    el.muted = true;
    el.defaultMuted = true;
    el.playsInline = true;

    let cancelled = false;

    const attempt = () => {
      if (cancelled) return;
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    attempt();

    /* Se o navegador recusou, tenta de novo quando o vídeo
       tiver dados e na primeira interação da pessoa. */
    const onLoaded = () => attempt();
    const onTouch = () => {
      attempt();
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("pointerdown", onTouch);
    };

    el.addEventListener("loadeddata", onLoaded);
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("pointerdown", onTouch, { passive: true });

    /* Voltar para a aba costuma pausar o vídeo no iOS. */
    const onVisible = () => {
      if (document.visibilityState === "visible") attempt();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      cancelled = true;
      el.removeEventListener("loadeddata", onLoaded);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("pointerdown", onTouch);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      webkit-playsinline="true"
      preload="auto"
      controls={false}
      disablePictureInPicture
      className={className}
      {...rest}
    />
  );
}
