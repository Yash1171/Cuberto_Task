import Hero from "@/components/hero"
import Services from "@/components/services"
import Projects from "@/components/projects"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Hero />
      <Services />
      <Projects />
    </main>
  )
}

