"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"


const navItems = [
  { href: "#work", label: "Work" },
  { href: "#ai-art", label: "AI Art" },
  { href: "#about", label: "About" },

]

export function Header() {
  

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 bg-black/50 backdrop-blur-md"
    >
      <div className="flex h-16 items-center justify-between px-4 md:px-8 lg:px-8">
        <Link href="/" className="text-xl font-semibold">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            Guilherme Reinehr
          </motion.span>
        </Link>

        <nav className="hidden space-x-8 md:flex">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1) }}
            >
              <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-white">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <Button variant="ghost" size="icon">
            <Mail className="size-5" />
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}

