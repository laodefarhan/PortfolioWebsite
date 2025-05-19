import { Navbar } from "@/components/navbar/navbar";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { ResumeSection } from "@/components/sections/resume";
import { ServicesSection } from "@/components/sections/services";

export default function HomePage() {
  return (
    <main className="bg-gray-900 text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}