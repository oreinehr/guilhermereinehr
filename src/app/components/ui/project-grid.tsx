"use client"

import Image from "next/image"
import { Card} from "../ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
 
  {
    title: "Style - Figma Template",
    description: "Figma Template Style",
    image:
      "https://i.imgur.com/k0rFK3o.png",
    tags: ["template", "figma"],
  },

  {
    title: "Mirror - Figma Template",
    description: "Figma Template",
    image:
      "https://i.imgur.com/qiUAnNH.png",
    tags: ["Design, Figma Template"],
  },
  
  {
    title: "Fresh - Figma Template",
    description: "Personal Design",
    image:
      "https://i.imgur.com/yIZFK4c.png",
    tags: ["Design, AI Art"],
  },  

 

 
 
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
}

export function ProjectGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <motion.div key={project.title} variants={item}>
          <Card className="group relative overflow-hidden border-none bg-transparent">
            <Card className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden ">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-165"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>    
              <motion.div
                className="p-2"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Card>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

