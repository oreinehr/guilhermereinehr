"use client";

/* =========================================================
   I18N — contexto de idioma
   Guarda o idioma escolhido, persiste em localStorage e
   mantém o atributo lang do <html> em dia (acessibilidade
   e leitores de tela). Padrão: pt.
========================================================= */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { dict, type Dict, type Lang } from "./dictionary";

const STORAGE_KEY = "reinehr:lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  /* Restaura a escolha anterior. Roda só no cliente: no primeiro
     render o servidor e o cliente concordam em "pt", evitando
     hydration mismatch. */
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "pt" || saved === "en") {
        setLangState(saved);
        return;
      }
      /* Sem escolha salva: respeita o navegador, mas só para EN. */
      if (!navigator.language.toLowerCase().startsWith("pt")) {
        setLangState("en");
      }
    } catch {
      /* localStorage bloqueado (aba privada) — segue no padrão. */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* sem persistência, a escolha vale só para esta sessão */
    }
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "pt" ? "en" : "pt");
  }, [lang, setLang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: dict[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
