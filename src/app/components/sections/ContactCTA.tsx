"use client";

/* =========================================================
   07 — CTA FINAL
   Bloco de contato em tela cheia. O e-mail em escala grande
   com reveal por linha, preenchimento no hover, relógio local
   ao vivo e links magnéticos.
========================================================= */

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EASE, RevealLines, SectionLabel } from "../motion/primitives";
import Magnetic from "../motion/Magnetic";
import { useLang } from "../../i18n/LanguageContext";

const EMAIL = "guilhermereinehr07@gmail.com";

const SOCIALS = [
  { label: "Instagram", short: "IG", href: "https://www.instagram.com/reinehrrl/" },
  {
    label: "LinkedIn",
    short: "LI",
    href: "https://www.linkedin.com/in/guilherme-reinehr-a24117340/",
  },
  { label: "Behance", short: "BE", href: "https://www.behance.net/guilhermereinehr" },
];

/* Relógio local — presença, não enfeite. */
function LocalTime({ locale }: { locale: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat(locale, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "America/Sao_Paulo",
          hour12: false,
        }).format(new Date())
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [locale]);

  return (
    <span className="tabular-nums">
      {time ?? "--:--:--"} <span className="text-white/35">BRT</span>
    </span>
  );
}

export default function ContactCTA() {
  const { lang, t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  /* halo discreto — presença de cor, não iluminação de palco */
  const glowScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [1, 1] : [0.75, 1]
  );
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.16]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-black px-6 pb-20 pt-24 text-white md:px-12 md:pb-24 md:pt-40"
    >
      {/* halo do accent — ancorado atrás do e-mail, contido, sem vazar pro footer */}
      <motion.div
        aria-hidden
        style={{ scale: glowScale, opacity: glowOpacity }}
        className="pointer-events-none absolute left-1/4 top-[58%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F2360C] blur-[120px] md:h-[420px] md:w-[420px]"
      />

      <div className="relative mx-auto max-w-[1600px]">
        <SectionLabel index="07" className="mb-14 md:mb-20">
          {t.cta.label}
        </SectionLabel>

        {/* Uma linha por entrada do dicionário — a última em itálico.
            Colar duas entradas na mesma linha fazia o inglês, mais
            longo que o português, quebrar sozinho e vazar da tela. */}
        <RevealLines
          as="h2"
          key={t.cta.headline.join("|")}
          lines={t.cta.headline.map((line, i) =>
            i === t.cta.headline.length - 1 ? (
              <span key={line} className="italic text-[#F2360C]">
                {line}
              </span>
            ) : (
              <span key={line}>{line}</span>
            )
          )}
          className="-mb-[0.18em] max-w-5xl text-[clamp(2.25rem,7vw,6.5rem)] font-black leading-[0.9] tracking-tighter"
          lineClassName="pb-[0.18em]"
          stagger={0.1}
        />

        {/* E-MAIL */}
        <div className="mt-16 md:mt-24">
          <Magnetic strength={0.14} className="block w-full">
            <a
              href={`mailto:${EMAIL}`}
              data-cursor={t.cta.cursorEmail}
              className="group relative block w-full overflow-hidden border-y border-white/15 py-8 md:py-12"
            >
              {/* preenchimento */}
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#F2360C] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

              <span className="relative flex items-center justify-between gap-6">
                <span className="break-all text-[clamp(1.1rem,4.2vw,3.25rem)] font-black tracking-tighter transition-colors duration-500 group-hover:text-black">
                  {EMAIL}
                </span>
                {/* seta desenhada — ↗ renderiza como emoji no iOS */}
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 shrink-0 transition-all duration-500 group-hover:translate-x-2 group-hover:text-black md:h-9 md:w-9"
                >
                  <line x1="6" y1="18" x2="18" y2="6" />
                  <polyline points="9 6 18 6 18 15" />
                </svg>
              </span>
            </a>
          </Magnetic>
        </div>

        {/* AÇÃO SECUNDÁRIA + META */}
        <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-6">
            <Magnetic strength={0.22} className="self-start">
              <Link
                href="/contact"
                data-cursor={t.cta.cursorOpen}
                className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-white/25 px-8 py-4 text-sm uppercase tracking-[0.2em] md:px-10 md:py-5"
              >
                <span className="absolute inset-0 -translate-y-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                <span className="relative transition-colors duration-500 group-hover:text-black">
                  {t.cta.briefing}
                </span>
                <span className="relative transition-colors duration-500 group-hover:text-black">
                  →︎
                </span>
              </Link>
            </Magnetic>

            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              <LocalTime locale={lang === "pt" ? "pt-BR" : "en-GB"} />
              <span className="mx-3 text-white/20">/</span>
              {t.cta.location}
            </p>
          </div>

          {/* SOCIAIS com troca vertical no hover */}
          <div className="flex gap-8">
            {SOCIALS.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                data-cursor
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                className="group relative block h-6 overflow-hidden text-sm uppercase tracking-[0.16em]"
              >
                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                  {social.label}
                </span>
                <span className="absolute inset-0 block translate-y-full text-[#F2360C] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
                  ({social.short})
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
