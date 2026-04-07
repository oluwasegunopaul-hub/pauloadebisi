import { Award } from "lucide-react"

const certifications = [
  {
    title: "Jobberman Soft Skills Certificate",
    issuer: "Jobberman Nigeria",
    description:
      "Professional development in workplace communication, time management, and career readiness.",
  },
  {
    title: "Nigeria SE4ALL Mapathon",
    issuer: "Sustainable Energy for All",
    description:
      "Participated in mapping initiatives to support sustainable energy access across Nigeria.",
  },
  {
    title: "QGIS Training Certificate",
    issuer: "Central University of Karnataka",
    description:
      "Advanced training in QGIS for geospatial data analysis, mapping, and visualization.",
  },
  {
    title: "Google AI/ML Certificate",
    issuer: "Google",
    description:
      "Fundamentals of Artificial Intelligence and Machine Learning concepts and applications.",
  },
  {
    title: "Google Digital Skills Certificate",
    issuer: "Google",
    description:
      "Comprehensive digital skills training including online marketing and data analytics.",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="bg-muted/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Credentials
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {"Certifications & Training"}
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-1 font-heading text-base font-semibold text-foreground">
                {cert.title}
              </h3>
              <p className="mb-3 text-xs font-medium text-primary">
                {cert.issuer}
              </p>
              <p className="mt-auto text-sm leading-relaxed text-muted-foreground">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
