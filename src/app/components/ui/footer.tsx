"use client"

import { Button } from "./button"
import { Github, Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

const socialIcons = [
  { Icon: Github, href: "https://github.com/oreinehr" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/guilherme-reinehr-a24117340/" },
  { Icon: Instagram, href: "https://www.instagram.com/reinehrrl/" },
]

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-white/10 px-4 py-8 md:px-8 lg:px-12"
    >
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground"
        >
          © 2025 Guilherme Reinehr. All rights reserved.
        </motion.p>

        <div className="flex space-x-4">
          {socialIcons.map(({ Icon }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * (index + 1) }}
              viewport={{ once: true }}
            >
              <Button  size="icon" className="transition-transform hover:scale-110">
                <Icon className="size-5" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}

