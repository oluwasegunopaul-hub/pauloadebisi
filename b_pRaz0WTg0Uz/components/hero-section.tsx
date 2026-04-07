import Image from "next/image"
import {
  Download,
  Mail,
  Globe,
  Database,
  Monitor,
  Layers,
  Code,
} from "lucide-react"

const highlights = [
  { icon: Globe, label: "Geospatial Analysis" },
  { icon: Code, label: "Web Development" },
  { icon: Monitor, label: "Computer Technician" },
  { icon: Database, label: "Data Processing" },
  { icon: Layers, label: "Remote Sensing" },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.04),transparent_50%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:gap-16">
        {/* Text Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">{"Adebisi Paul"}</span>
            <br />
            <span className="text-primary">{"Oluwasegun"}</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl">
            {"Geospatial Analyst | Web Developer | Computer Technician"}
          </p>

          <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            {
              "Transforming spatial data into meaningful insights. Leveraging GIS, remote sensing, and web technologies to solve environmental and spatial challenges."
            }
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Portfolio
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>

          {/* Skills Highlights */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground"
              >
                <item.icon className="h-4 w-4 text-primary" />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl border-2 border-border shadow-lg sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <Image
              src="/images/profile.jpg"
              alt="Adebisi Paul Oluwasegun"
              fill
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-3 -right-3 -z-10 h-72 w-72 rounded-2xl border border-primary/20 bg-primary/5 sm:h-80 sm:w-80 lg:h-96 lg:w-96" />
        </div>
      </div>
    </section>
  )
}
