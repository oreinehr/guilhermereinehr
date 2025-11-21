"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function LoaderWrapper() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShow(true);
      localStorage.setItem("hasVisited", "true");

      setTimeout(() => setShow(false), 2500); // tempo do seu loader
    }
  }, []);

  if (!show) return null;

  return <Loader />;
}
