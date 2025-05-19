import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skills = [
    "Business Analyst",
    "Financial Analyst",
    "Hyperion",
    "Oracle EPBCS",
    "SmartView",
    "Project Management",
    "Scrum",
    "Confluence",
    "JIRA",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "PowerApps",
    "Power Automate",
    "PowerBI",
    "PowerQuery",
    "SQL",
    "Docker",
    "Cursor",
    "Prompt Engineering",
  ]

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills</h2>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-4 py-2 text-base font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
