import ServicesList from "@/components/services-list"
import ServiceProcess from "@/components/service-process"
import Testimonials from "@/components/testimonials"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesList />
      <ServiceProcess />
      <Testimonials />
    </main>
  )
}

