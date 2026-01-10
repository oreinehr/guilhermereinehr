"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function LoaderWrapper() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setMounted(true);
      sessionStorage.setItem("hasVisited", "true");

      // tempo visível do loader
      setTimeout(() => {
        setVisible(false);
      }, 2500);

      // remove do DOM APÓS o fade
      setTimeout(() => {
        setMounted(false);
      }, 3200);
    }
  }, []);

  if (!mounted) return null;

  return <Loader visible={visible} />;
}
