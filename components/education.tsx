import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education</h2>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <CardTitle className="text-xl font-bold">Marshall University</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>May 2019 - December 2021</span>
                    </div>
                  </div>
                  <p className="text-lg font-medium text-primary mt-1">
                    MBA with Corporate Finance concentration
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mt-4">
                Studied Business, Corporate Finance, and Management. Provided pro-bono support to HIMG Medical Center,
                delivering a geographical heatmap and study detailing the difference in medical telehealth use versus
                in-person.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
