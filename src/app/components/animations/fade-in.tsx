"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "../../components/ui/lib/utils"
import type React from "react"

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode
  delay?: number
}

export function FadeIn({ children, delay = 0, className, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
       ease: "easeOut",
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
