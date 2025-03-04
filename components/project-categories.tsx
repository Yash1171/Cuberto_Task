"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const categories = ["All", "Web Design", "Development", "Branding", "UX/UI"]

export default function ProjectCategories() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

