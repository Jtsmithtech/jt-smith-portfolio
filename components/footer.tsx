"use client"

import { useEffect, useState } from "react"
import { ArrowUp, Github, Linkedin } from "lucide-react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="py-10 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">Copyright &copy; {currentYear} JT Smith</p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>

          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://github.com/Jtsmithtech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-smith-mba-337695184"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
