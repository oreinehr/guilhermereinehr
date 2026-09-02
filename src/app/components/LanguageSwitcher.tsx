"use client";

/* =========================================================
   SELETOR DE IDIOMA
   PT / EN com indicador deslizante. Usado no header desktop,
   no menu mobile e no header dos cases.
========================================================= */

import { useLang } from "../i18n/LanguageContext";
import type { Lang } from "../i18n/dictionary";

const OPTIONS: Lang[] = ["pt", "en"];

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t.nav.langLabel}
      className={`flex items-center gap-1 uppercase ${className}`}
    >
      {OPTIONS.map((option, i) => {
        const isActive = lang === option;
        return (
          <span key={option} className="flex items-center">
            {i > 0 && (
              <span aria-hidden className="px-1 text-white/25">
                /
              </span>
            )}
            <button
              type="button"
              onClick={() => setLang(option)}
              aria-pressed={isActive}
              data-cursor
              className={`transition-colors duration-300 ${
                isActive
                  ? "text-[#F2360C]"
                  : "text-white/40 hover:text-white/80"
              }`}
            >
              {option.toUpperCase()}
            </button>
          </span>
        );
      })}
    </div>
  );
}
