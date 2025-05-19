import Header from "@/components/header"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
