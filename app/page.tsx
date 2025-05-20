import { Navbar } from "@/components/navbar/navbar";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { ResumeSection } from "@/components/sections/resume";
import { ServicesSection } from "@/components/sections/services";

// Metadata SEO-optimized
export const metadata = {
  title: "Junior Full Stack Developer | Portfolio Website",
  description:
    "Selamat datang di portofolio pribadi saya. Saya adalah seorang junior full stack developer. Keahlian saya dalam membangun website aplikasi dan aplikasi android",
  keywords:
    "full stack developer, junior developer, portfolio web, pengembang aplikasi, web development, android development, developer Indonesia",
  authors: [{ name: "Laode Farhan Fadilah", url: "https://laodefarhan.vercel.app/" }],
  creator: "Laode Farhan Fadilah",
  openGraph: {
    title: "Portfolio Junior Full Stack Developer",
    description:
      "Lihat keahlian dan pengalaman dalam membangun solusi digital end-to-end, dari frontend hingga backend, termasuk aplikasi Android.",
    url: "https://laodefarhan.vercel.app/",
    siteName: "LaodeFarhan.",
  },
};

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