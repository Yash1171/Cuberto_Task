import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import Map from "@/components/map"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          <div>
            <ContactInfo />
            <Map />
          </div>
        </div>
      </div>
    </main>
  )
}

