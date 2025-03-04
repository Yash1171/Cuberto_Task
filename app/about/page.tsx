import AboutHero from "@/components/about-hero"
import TeamSection from "@/components/team-section"
import CompanyValues from "@/components/company-values"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <CompanyValues />
      <TeamSection />
    </main>
  )
}

