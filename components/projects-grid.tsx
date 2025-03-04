"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Project 1",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Project 2",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Project 3",
    category: "Development",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Project 4",
    category: "UX/UI",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Project 5",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Project 6",
    category: "Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2400&auto=format&fit=crop",
  },
]

export default function ProjectsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Project info always visible at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{project.category}</p>

                  {/* View button appears on hover */}
                  <motion.button
                    className="mt-2 px-4 py-1 bg-white text-black text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

