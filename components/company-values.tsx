"use client"

import { motion } from "framer-motion"

const values = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible in digital design and development.",
  },
  {
    title: "Quality",
    description: "We are committed to delivering the highest quality work in every project we undertake.",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and close collaboration with our clients.",
  },
  {
    title: "Integrity",
    description: "We operate with honesty, transparency, and ethical practices in all our dealings.",
  },
]

export default function CompanyValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-gray-600">The principles that guide our work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

