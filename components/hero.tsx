"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Mouse movement effect
  const x = useMotionValue(0)
  const y2 = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth - 0.5
      const mouseY = e.clientY / window.innerHeight - 0.5
      x.set(mouseX * 20)
      y2.set(mouseY * 20)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y2])

  const springConfig = { damping: 25, stiffness: 100 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y2, springConfig)

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  }

  const titleText = "We Create Digital Experiences"
  const titleWords = titleText.split(" ")

  return (
    <section ref={containerRef} className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl animate-pulse-soft"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-pink-500 opacity-10 blur-3xl animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)",
          x: springX,
          y: springY,
        }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 z-0"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
      >
        <Image
          src="/placeholder.svg?height=64&width=64"
          alt="Floating element"
          width={64}
          height={64}
          className="opacity-30"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 z-0"
        animate={{ y: [0, -20, 0], rotate: [0, -8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 7, ease: "easeInOut", delay: 1 }}
      >
        <Image
          src="/placeholder.svg?height=96&width=96"
          alt="Floating element"
          width={96}
          height={96}
          className="opacity-30"
        />
      </motion.div>

      <motion.div className="text-center z-10 px-4" style={{ y, opacity }}>
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight overflow-hidden"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {titleWords.map((word, i) => (
            <span key={i} className="inline-block mr-4">
              {Array.from(word).map((letter, j) => (
                <motion.span key={j} className="inline-block" variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.div
          className="flex justify-center space-x-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-1 w-16 bg-white rounded-full"
              whileHover={{
                width: 100,
                backgroundColor: "#9333ea",
                transition: { duration: 0.3 },
              }}
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{
                duration: 0.5,
                delay: 2 + i * 0.2,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

