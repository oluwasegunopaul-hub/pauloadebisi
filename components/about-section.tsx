import { GraduationCap, Target, Lightbulb, TrendingUp } from "lucide-react"

const strengths = [
  {
    icon: Target,
    title: "Analytical Thinker",
    description: "Strong ability to analyze complex spatial data and derive actionable insights.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Passionate about solving environmental and spatial problems through technology.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learner",
    description: "Committed to staying current with emerging geospatial technologies and methods.",
  },
]

const education = [
  {
    degree: "B.Tech in Remote Sensing & GIS",
    school: "Federal University of Technology, Akure (FUTA)",
    grade: "Second Class Upper Division",
  },
  {
    degree: "NCE in Computer Science & Physics",
    school: "Adeyemi Federal University of Education (AFUED)",
    grade: "Completed",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            About Me
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {"Who I Am"}
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Bio */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">
              {"Professional Summary"}
            </h3>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                {
                  "I am a dedicated Geospatial Analyst with a strong academic background in Remote Sensing and Geographic Information Systems (GIS). My expertise spans spatial data analysis, environmental modeling, and leveraging cutting-edge geospatial technologies to address real-world challenges."
                }
              </p>
              <p>
                {
                  "With a B.Tech from the Federal University of Technology, Akure, and additional qualifications in Computer Science, I bring a unique combination of analytical thinking and technical skills. I specialize in using tools like ArcGIS, QGIS, ENVI, and Google Earth Engine to process, analyze, and visualize spatial data."
                }
              </p>
              <p>
                {
                  "Beyond geospatial work, I am also a skilled Web Developer and Computer Technician, capable of building responsive web solutions and maintaining hardware and software systems. My goal is to contribute to innovative projects that leverage spatial intelligence for environmental sustainability and informed decision-making."
                }
              </p>
            </div>

            {/* Strengths */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
                >
                  <item.icon className="mb-3 h-5 w-5 text-primary" />
                  <h4 className="mb-1 text-sm font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 font-heading text-xl font-semibold text-foreground">
              <span className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </span>
            </h3>
            <div className="space-y-4">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
                >
                  <h4 className="font-semibold text-foreground">
                    {item.degree}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.school}
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {item.grade}
                  </span>
                </div>
              ))}
            </div>

            {/* Career Goal */}
            <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
              <h4 className="mb-2 text-sm font-semibold text-foreground">
                Career Goal
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {
                  "To be a leading geospatial professional contributing to environmental sustainability and spatial intelligence through innovative research and technology."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
