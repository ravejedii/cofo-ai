import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import TeamSection from "@/components/Team"
import Roadmap from "@/components/Roadmap"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <TeamSection />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  )
}

