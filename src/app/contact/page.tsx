"use client";

/* =========================================================
   CONTATO
   Mesma gramática da home: reveal por linha, campos como
   régua (underline, não caixa), accent no foco e submit
   magnético. O formulário é o assunto — nada compete com ele.
========================================================= */

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { EASE, RevealLines, SectionLabel } from "../components/motion/primitives";
import Magnetic from "../components/motion/Magnetic";
import { useLang } from "../i18n/LanguageContext";

const EMAIL = "guilhermereinehr07@gmail.com";

type Status = "idle" | "loading" | "success" | "error";

const FIELDS = [
  { name: "name", type: "text", autoComplete: "name", required: true },
  { name: "email", type: "email", autoComplete: "email", required: true },
  { name: "phone", type: "tel", autoComplete: "tel", required: false },
] as const;

/* Campo como régua: label acima, linha embaixo, accent no foco. */
function Field({
  name,
  label,
  type,
  autoComplete,
  required,
  index,
}: {
  name: string;
  label: string;
  type: string;
  autoComplete: string;
  required: boolean;
  index: number;
}) {
  const { t } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.07 }}
      className="group relative"
    >
      <label
        htmlFor={name}
        className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 group-focus-within:text-[#F2360C]"
      >
        {label}
        {!required && (
          <span className="ml-2 text-white/20">{t.contact.optional}</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="peer w-full border-0 border-b border-white/15 bg-transparent pb-4 text-lg text-white outline-none transition-colors duration-300 placeholder:text-white/25 focus:border-white/15 md:text-xl"
      />

      {/* linha de foco — cresce da esquerda sobre a borda base */}
      <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#F2360C] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] peer-focus:scale-x-100" />
    </motion.div>
  );
}

export default function ContactPage() {
  const { lang, t } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const reduce = useReducedMotion();

  const loading = status === "loading";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          lang,
        }),
      });

      if (!res.ok) throw new Error("request failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Header />

      <main className="relative min-h-screen bg-black text-white">
        {/* halo do accent — mesma presença contida da home */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#F2360C] opacity-[0.14] blur-[130px] md:h-[520px] md:w-[520px]"
        />

        <div className="relative mx-auto max-w-[1600px] px-6 pb-24 pt-32 md:px-12 md:pb-32 md:pt-44">
          <SectionLabel index="08" className="mb-14 md:mb-20">
            {t.contact.label}
          </SectionLabel>

          <RevealLines
            as="h1"
            key={t.contact.headline.join("|")}
            lines={[
              <>{t.contact.headline[0]}</>,
              <>
                {t.contact.headline[1]}{" "}
                <span className="italic text-[#F2360C]">
                  {t.contact.headline[2]}
                </span>
              </>,
            ]}
            className="-mb-[0.18em] max-w-5xl text-[clamp(2.25rem,7.5vw,7rem)] font-black leading-[0.9] tracking-tighter"
            lineClassName="pb-[0.18em]"
            stagger={0.1}
          />

          <div className="mt-20 grid gap-16 md:mt-28 md:grid-cols-[1fr_minmax(0,1.15fr)] md:gap-24">
            {/* COLUNA DE APOIO */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
              className="flex flex-col gap-12"
            >
              <p className="max-w-sm text-lg leading-relaxed text-white/60">
                {t.contact.intro}
              </p>

              <div className="flex flex-col gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  {t.contact.directLabel}
                </span>
                <a
                  href={`mailto:${EMAIL}`}
                  data-cursor={t.contact.fields.email}
                  className="group relative w-fit break-all text-lg font-medium md:text-xl"
                >
                  {EMAIL}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#F2360C] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  {t.contact.baseLabel}
                </span>
                <p className="text-lg text-white/70">{t.contact.location}</p>
              </div>
            </motion.aside>

            {/* FORMULÁRIO */}
            <form onSubmit={handleSubmit} noValidate={false} className="flex flex-col gap-10">
              {FIELDS.map((field, i) => (
                <Field
                  key={field.name}
                  {...field}
                  label={
                    t.contact.fields[
                      field.name as keyof typeof t.contact.fields
                    ]
                  }
                  index={i}
                />
              ))}

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.21 }}
                className="group relative"
              >
                <label
                  htmlFor="message"
                  className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 group-focus-within:text-[#F2360C]"
                >
                  {t.contact.fields.project}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder={t.contact.placeholder}
                  className="peer w-full resize-none border-0 border-b border-white/15 bg-transparent pb-4 text-lg text-white outline-none transition-colors duration-300 placeholder:text-white/25 focus:border-white/15 md:text-xl"
                />

                <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#F2360C] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] peer-focus:scale-x-100" />
              </motion.div>

              {/* SUBMIT */}
              <div className="mt-2 flex flex-wrap items-center gap-8">
                <Magnetic strength={0.22} className="self-start">
                  <button
                    type="submit"
                    disabled={loading}
                    data-cursor={t.contact.submit}
                    className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-white/25 px-10 py-5 text-sm uppercase tracking-[0.2em] transition-opacity disabled:pointer-events-none disabled:opacity-40"
                  >
                    <span className="absolute inset-0 -translate-y-full bg-[#F2360C] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                    <span className="relative transition-colors duration-500 group-hover:text-black">
                      {loading ? t.contact.submitting : t.contact.submit}
                    </span>
                    <span className="relative transition-all duration-500 group-hover:translate-x-1 group-hover:text-black">
                      →︎
                    </span>
                  </button>
                </Magnetic>

                {/* FEEDBACK — ocupa o lugar, não empurra o layout */}
                <div aria-live="polite" className="min-h-[1.5rem] text-sm">
                  {status === "success" && (
                    <motion.p
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="text-white/70"
                    >
                      {t.contact.success}
                    </motion.p>
                  )}

                  {status === "error" && (
                    <motion.p
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="text-[#F2360C]"
                    >
                      {t.contact.error}{" "}
                      <a href={`mailto:${EMAIL}`} className="underline underline-offset-4">
                        {EMAIL}
                      </a>
                      .
                    </motion.p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
