import { Variants, easeOut } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: easeOut } },
};

export const fadeImage: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: easeOut } },
};
