"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn } from "../animations/fade-in"

const aiImages = [
  { src: "https://i.imgur.com/ujFV0ol.png", alt: "AI generated abstract art" },
  { src: "https://i.imgur.com/BlqdRNy.png", alt: "AI generated abstract art" },
  { src: "https://i.imgur.com/ZJdfHXj.png", alt: "AI generated abstract art" },
  { src: "https://i.imgur.com/nJexLne.png", alt: "AI generated abstract art" },
  { src: "https://i.imgur.com/8x6q7xF.png", alt: "AI generated abstract art" },
  { src: "https://i.imgur.com/HaqNhjy.png", alt: "AI generated abstract art" },
  { src: "https://i.imgur.com/V2NhFcH.png", alt: "AI generated abstract art" }, 
  { src: "https://i.imgur.com/OmJh0Nr.png", alt: "AI generated abstract art" }, 
]
export function AIImageGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {aiImages.map((image, index) => (
          <motion.div
            key={image.src}
            className="relative aspect-square overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
              >
                <p className="text-white text-center p-4">{image.alt}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </FadeIn>
  )
}

