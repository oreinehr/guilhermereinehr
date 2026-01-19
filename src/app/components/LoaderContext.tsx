"use client";

import { createContext, useContext, useState } from "react";

type LoaderContextType = {
  loaderDone: boolean;
  setLoaderDone: (v: boolean) => void;
};

const LoaderContext = createContext<LoaderContextType | null>(null);

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <LoaderContext.Provider value={{ loaderDone, setLoaderDone }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const ctx = useContext(LoaderContext);
  if (!ctx) throw new Error("useLoader must be used inside LoaderProvider");
  return ctx;
}
