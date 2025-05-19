import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Certifications</h2>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=85&width=85"
                    alt="Certified Scrum Master"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <CardTitle className="text-xl font-bold">Certified Scrum Master</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>July 2022 - July 2024</span>
                    </div>
                  </div>
                  <a
                    href="https://bcert.me/bc/html/show-badge.html?b=huxygikg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary flex items-center mt-1 hover:underline"
                  >
                    Digital Certification Link <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mt-4">
                A Scrum Master is the Scrum Team member tasked with fostering an effective and productive working
                environment and guiding others to understand Scrum values, principles and practices. Scrum Masters tend
                to be people-oriented, have a high level of emotional intelligence, and find joy in helping team members
                to grow.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
