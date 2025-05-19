import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-primary/80 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center py-20">
        <div className="mb-6">
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Relaxing"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">JT SMITH</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-primary-foreground/80 mb-8">Senior Financial Analyst</h2>

        <Button
          asChild
          className="rounded-full px-8 py-6 text-lg bg-transparent border-2 border-white hover:bg-white hover:text-primary transition-all duration-300"
        >
          <a
            href="https://1drv.ms/b/s!AvQ5mWPqg504hqUAOMrdOUpreN22MQ?e=ObkvmL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </a>
        </Button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#experience" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <span className="mb-2 text-sm">Scroll Down</span>
          <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center animate-bounce">
            <ArrowDown className="h-5 w-5" />
          </div>
        </a>
      </div>
    </section>
  )
}
