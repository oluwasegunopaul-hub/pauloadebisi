import { Globe, Code, Wrench, FileSpreadsheet } from "lucide-react"

const skillCategories = [
  {
    icon: Globe,
    title: "Geospatial Tools",
    skills: [
      { name: "ArcGIS", level: 90 },
      { name: "QGIS", level: 88 },
      { name: "ENVI", level: 80 },
      { name: "Google Earth Engine", level: 85 },
      { name: "PCI Geomatica", level: 75 },
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    skills: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 88 },
      { name: "JavaScript", level: 80 },
      { name: "WordPress", level: 85 },
    ],
  },
  {
    icon: Wrench,
    title: "Technical Skills",
    skills: [
      { name: "Computer Hardware", level: 90 },
      { name: "Software Maintenance", level: 88 },
      { name: "Troubleshooting", level: 92 },
      { name: "Networking Basics", level: 75 },
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Other Tools",
    skills: [
      { name: "Microsoft Word", level: 95 },
      { name: "Microsoft Excel", level: 90 },
      { name: "Microsoft PowerPoint", level: 92 },
      { name: "Google Workspace", level: 88 },
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
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
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
