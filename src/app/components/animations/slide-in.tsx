"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "../ui/lib/utils"
import type React from "react"

interface SlideInProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
}

export function SlideIn({ children, direction = "left", delay = 0, className, ...props }: SlideInProps) {
  const directionOffset = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction], scale: 1.2 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ scale: 1.0 }}  // Optionally add a hover effect
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
