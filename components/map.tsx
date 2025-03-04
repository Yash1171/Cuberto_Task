"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This is a placeholder for where you would typically initialize a map
    console.log("Map component mounted")
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mt-12"
    >
      <h2 className="text-2xl font-bold mb-6">Find Us</h2>
      <div ref={mapRef} className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden relative">
        <Image
          src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?q=80&w=2400&auto=format&fit=crop"
          alt="Map"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-3 rounded-lg shadow-lg">
            <p className="font-medium">Our Location</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

