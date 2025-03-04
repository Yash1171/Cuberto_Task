"use client"

import { motion } from "framer-motion"

const steps = [
  { title: "Discovery", description: "We start by understanding your goals and requirements." },
  { title: "Planning", description: "We create a detailed roadmap for your project." },
  { title: "Design", description: "Our team crafts beautiful and functional designs." },
  { title: "Development", description: "We bring the designs to life with clean, efficient code." },
  { title: "Testing", description: "Rigorous testing ensures a flawless end product." },
  { title: "Launch", description: "We deploy your project and provide ongoing support." },
]

export default function ServiceProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-gray-600">How we bring your ideas to life</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl font-bold text-purple-600 mb-4">{index + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

