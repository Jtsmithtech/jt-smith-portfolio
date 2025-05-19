import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "PowerApps Project",
      description:
        "Through a Udemy course, I gained proficiency in PowerApps, including connecting to Excel and SharePoint to develop custom applications. I applied this knowledge to build an app that utilized existing SharePoint data to create a submission process with error validation and a user-friendly interface for navigating the data.",
      videoUrl: "https://www.youtube.com/embed/g0nUSk1QI0g?autoplay=1&mute=1",
      projectUrl: "https://blog.jtsmithinfo.com/powerapps-project",
    },
    {
      title: "HIMG Telehealth vs In-Person",
      description:
        "While working pro-bono for MBA Response. I delivered research to HIMG Medical Center on the impacts of telehealth delivery with an Excel geographical heatmap and a detailed write-up on national use of in-service healthcare versus telehealth.",
      videoUrl: "https://www.youtube.com/embed/lfuRou524SU",
      projectUrl: "https://blog.jtsmithinfo.com/himg-telehealth-vs-in-person-project",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="aspect-video w-full">
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
