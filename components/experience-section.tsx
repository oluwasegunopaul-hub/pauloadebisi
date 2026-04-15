import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Geospatial Analyst",
    organization: "Energy, Environment & Climate Change Research Lab",
    period: "Recent",
    achievements: [
      "Conducted geospatial analysis using ArcGIS and QGIS for environmental research projects.",
      "Processed satellite imagery for land use classification and environmental impact assessment.",
      "Generated reports and visualizations for stakeholder decision-making.",
    ],
  },
  {
    role: "Geospatial Intern",
    organization: "CESRA, Federal University of Technology, Akure",
    period: "Internship",
    achievements: [
      "Assisted in geospatial data collection, processing, and analysis for research projects.",
      "Applied remote sensing techniques for vegetation and land cover analysis.",
      "Collaborated with senior researchers on spatial modeling and GIS database management.",
    ],
  },
  {
    role: "Board Member",
    organization: "CLAED, Ibadan",
    period: "Previous",
    achievements: [
      "Developed a user-friendly website, enhancing online presence for the organization.",
      "Led the STEM team in developing comprehensive computer training curriculum, promoting innovation and high-quality education.",
    ],
  },
  {
    role: "Computer Technician",
    organization: "Femtun Technology Nig Ltd",
    period: "Previous",
    achievements: [
      "Diagnosed and repaired computer hardware and software issues for clients.",
      "Managed system maintenance schedules, reducing downtime for business operations.",
      "Provided technical support and training to staff and customers.",
    ],
  },
  {
    role: "Web Development Intern",
    organization: "Olumycosoft",
    period: "Internship",
    achievements: [
      "Built and maintained responsive websites using HTML, CSS, JavaScript, and WordPress.",
      "Collaborated with design teams to implement client website specifications.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Career Path
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {"Professional Experience"}
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-border md:left-1/2 md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.role + exp.organization}
                className={`relative flex flex-col gap-4 md:flex-row md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2 md:block" />

                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div
                    className={`rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div
                      className={`mb-3 flex items-center gap-2 ${
                        index % 2 === 0
                          ? "md:flex-row-reverse"
                          : "md:flex-row"
                      }`}
                    >
                      <Briefcase className="h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {exp.organization}
                    </p>
                    <ul
                      className={`mt-3 space-y-1.5 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
