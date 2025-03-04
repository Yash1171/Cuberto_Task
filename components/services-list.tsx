"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Web Design",
    description: "Creating beautiful, intuitive websites that enhance user experience and drive engagement.",
    icon: "🎨",
  },
  {
    title: "Development",
    description: "Building robust, scalable applications with cutting-edge technologies and best practices.",
    icon: "💻",
  },
  {
    title: "Branding",
    description: "Crafting unique brand identities that resonate with your audience and stand out in the market.",
    icon: "✨",
  },
  {
    title: "UX/UI Design",
    description: "Designing user-centered interfaces that are both beautiful and functional.",
    icon: "📱",
  },
  {
    title: "Digital Marketing",
    description: "Developing and executing strategies to increase your online presence and reach your target audience.",
    icon: "📈",
  },
  {
    title: "Content Creation",
    description: "Producing engaging, high-quality content that tells your story and connects with your customers.",
    icon: "✍️",
  },
]

export default function ServicesList() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

