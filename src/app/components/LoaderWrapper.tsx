"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Loader from "./Loader";
import { useLoader } from "./LoaderContext";

export default function LoaderWrapper() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);

  const { setLoaderDone } = useLoader();

  useEffect(() => {
    setReady(true);

    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setMounted(true);
      sessionStorage.setItem("hasVisited", "true");

      setTimeout(() => setVisible(false), 2500);

     setTimeout(() => setVisible(false), 2200);
setTimeout(() => {
  setMounted(false);
  setLoaderDone(true);
}, 3000);
    } else {
      // se já visitou, loader já está "done"
      setLoaderDone(true);
    }
  }, []);

  if (!ready || !mounted) return null;

  return createPortal(
    <Loader visible={visible} />,
    document.body
  );
}
