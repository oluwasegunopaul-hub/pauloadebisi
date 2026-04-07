import { Globe, Code, Wrench, FileSpreadsheet } from "lucide-react"

const skillCategories = [
  {
    icon: Globe,
    title: "Geospatial Tools",
    skills: [
      "ArcGIS",
      "QGIS",
      "ENVI",
      "Google Earth Engine",
      "PCI Geomatica",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "WordPress", "React"],
  },
  {
    icon: Wrench,
    title: "Technical Skills",
    skills: [
      "Computer Hardware",
      "Software Maintenance",
      "Troubleshooting",
      "Networking Basics",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Other Tools",
    skills: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Google Workspace",
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Competencies
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {"Skills & Expertise"}
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-primary/10"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
