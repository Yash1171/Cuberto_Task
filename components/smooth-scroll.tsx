"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // This component creates a smooth scrolling effect
  const scrollRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll()
  const transform = useTransform(scrollY, [0, 1], [0, 1])
  const physics = { damping: 20, mass: 0.5, stiffness: 100 }
  const spring = useSpring(transform, physics)

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        document.body.style.height = `${scrollRef.current.scrollHeight}px`
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <motion.div ref={scrollRef} style={{ y: spring }} className="fixed top-0 left-0 w-full">
      {children}
    </motion.div>
  )
}

