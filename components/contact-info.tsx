"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactInfo() {
  const contactDetails = [
    { icon: Phone, text: "+91-9193649245" },
    { icon: Mail, text: "ysoni1802@gmail.com" },
    { icon: MapPin, text: "VIT Bhopal University" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-md mx-auto mt-12"
    >
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <ul className="space-y-4">
        {contactDetails.map((detail, index) => (
          <motion.li
            key={index}
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          >
            <detail.icon className="text-purple-600" />
            <span>{detail.text}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

