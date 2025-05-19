import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Financial Analyst",
      company: "Port Authority of NY & NJ",
      period: "January 2024 – Present",
      responsibilities: [
        "Upgraded and maintained existing financial models and reports for the Port Authority of NY&NJ reviewing Gross Revenue and Expense overheads of over $1 billion dollars.",
        "Met with senior stakeholders and developed a financial model using Power Query and Power Pivot, combining data from labor data from PeopleSoft and Oracle EPM to provide a clear oversight of expenses and speed up financial analysis across departments. This model was used to identify areas for cost reduction and improve financial performance.",
        "Led training sessions for 100+ employees on how to effectivelly use Oracle EPM and Excel to analyze financial data.",
      ],
    },
    {
      title: "Oracle EPM Analyst",
      company: "Marsh McLennan",
      period: "August 2022 – Present",
      responsibilities: [
        "Demonstrate expertise in defining, prioritizing, and delivering detailed presentations on requirements for improving financial analytical models to ensure organizational needs for reporting and planning are consistently achieved.",
        "Confirm that the software meets all established requirements and is developed within the set timeframe by proactively communicating with stakeholders.",
        "Liaised with senior FP&A and Controllership stakeholders to design and validate over 50 ad-hoc SmartView sheets to enhance the effectiveness of financial analysis in budgeting and forecasting, ensuring that GAAP and SOX requirements were met.",
        "Examined and assessed headcount models for four different business units with over 80,000 employees, identifying areas for improvement in sourcing data and improving roll-forward accounting calculations.",
        "Contributed to two full software development life cycles, including the Foreign Exchange Currency Application and One Marsh McLennan Reporting system, by obtaining system requirements, development, testing, and communication.",
      ],
    },
    {
      title: "Healthcare Consultant",
      company: "BerryDunn",
      period: "June 2020 – August 2022",
      responsibilities: [
        "Served as a Business Analyst and Project Coordinator for BerryDunn in the implementation of IBM's multi-million-dollar Enterprise Data Solution.",
        "Updated JIRA with project schedule reports following Agile Scrum methodology and was solely responsible for monitoring and reporting certification progress to upper management.",
        "Participated in multiple IBM and BerryDunn/WV Department of Health & Human Resources meetings with a keen focus on implementation.",
        "Provided insight and assisted management with tracking BerryDunn's EDS Budget.",
        "Prepared and delivered comprehensive reports on X12N software for the WV's Data Improvement Project to ensure seamless workflow.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Experience</h2>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-primary/10 rounded-full">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                      <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit text-sm px-3 py-1">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-muted-foreground">
                      {resp}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
