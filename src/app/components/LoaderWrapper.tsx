"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Loader from "./Loader";

export default function LoaderWrapper() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);

    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setMounted(true);
      sessionStorage.setItem("hasVisited", "true");

      setTimeout(() => setVisible(false), 2500);
      setTimeout(() => setMounted(false), 3200);
    }
  }, []);

  if (!ready || !mounted) return null;

  return createPortal(
    <Loader visible={visible} />,
    document.body
  );
}
