"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Digital Platform",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Mobile Application",
    category: "Development",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "E-commerce Solution",
    category: "UX/UI Design",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2400&auto=format&fit=crop",
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 0.98 }}
              layoutId={`project-container-${index}`}
            >
              <motion.div className="aspect-[4/3] relative" layoutId={`project-image-${index}`}>
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />

                {/* Gradient overlay always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Project info always visible at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <motion.h3 className="text-2xl font-bold mb-2" layoutId={`project-title-${index}`}>
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-300">{project.category}</p>

                  {/* View details button appears on hover */}
                  <motion.button
                    className="mt-4 px-4 py-2 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full"
              layoutId={`project-container-${activeIndex}`}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div className="aspect-video relative" layoutId={`project-image-${activeIndex}`}>
                <Image
                  src={projects[activeIndex].image || "/placeholder.svg"}
                  alt={projects[activeIndex].title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="p-6">
                <motion.h3 className="text-2xl font-bold mb-4 text-black" layoutId={`project-title-${activeIndex}`}>
                  {projects[activeIndex].title}
                </motion.h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                  sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                </p>
                <motion.button
                  className="px-4 py-2 bg-purple-600 text-white rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveIndex(null)}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

