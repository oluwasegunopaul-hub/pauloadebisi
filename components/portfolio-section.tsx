import Image from "next/image"
import { Archive, ExternalLink } from "lucide-react"

const projects: {
  title: string
  description: string
  image: string
  tools: string[]
  category: string
  link?: string
  archived?: boolean
}[] = [
  {
    title: "Land Surface Temperature Analysis",
    description:
      "Analyzed land surface temperature variations using Landsat satellite imagery and GIS tools to assess urban heat island effects.",
    image: "/images/projects/lst-analysis.jpg",
    tools: ["ArcGIS", "ENVI", "Landsat", "Python"],
    category: "Geospatial",
  },
  {
    title: "Flood Risk Modeling (AHP)",
    description:
      "Developed a flood risk assessment model using Analytical Hierarchy Process (AHP) and multi-criteria evaluation in GIS.",
    image: "/images/projects/flood-risk.jpg",
    tools: ["QGIS", "AHP", "DEM Analysis", "ArcGIS"],
    category: "Geospatial",
  },
  {
    title: "Soil Erosion Assessment (RUSLE)",
    description:
      "Applied the Revised Universal Soil Loss Equation (RUSLE) model to estimate soil erosion rates and identify high-risk areas.",
    image: "/images/projects/soil-erosion.jpg",
    tools: ["ArcGIS", "RUSLE", "Remote Sensing", "Spatial Analysis"],
    category: "Geospatial",
  },
  {
    title: "NDVI/NDWI/LAI Vegetation Analysis",
    description:
      "Conducted vegetation health analysis using spectral indices including NDVI, NDWI, and Leaf Area Index from satellite data.",
    image: "/images/projects/ndvi-analysis.jpg",
    tools: ["Google Earth Engine", "ENVI", "Sentinel-2", "QGIS"],
    category: "Remote Sensing",
  },
  {
    title: "Femtun Nigeria",
    description:
      "Designed and developed a professional website for Femtun, delivering a responsive and user-friendly experience with modern web technologies.",
    image: "/images/projects/femtun.jpg",
    tools: ["HTML", "CSS", "JavaScript", "WordPress"],
    category: "Web Development",
    link: "https://femtun.com.ng",
  },
  {
    title: "Primrose Den",
    description:
      "Built a polished, responsive website for Primrose Den, featuring elegant design, optimized performance, and seamless navigation.",
    image: "/images/projects/primroseden.jpg",
    tools: ["HTML", "CSS", "JavaScript", "WordPress"],
    category: "Web Development",
    link: "https://primroseden.com",
  },
  {
    title: "CLAED.org",
    description:
      "Developed a website for CLAED (Centre for Leadership, Advocacy, Education & Development), a community-focused organization. This project is now archived.",
    image: "/images/projects/claed.jpg",
    tools: ["HTML", "CSS", "JavaScript", "WordPress"],
    category: "Web Development",
    archived: true,
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            My Work
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {"Portfolio & Projects"}
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Wrapper = project.link && !project.archived ? "a" : "div"
            const wrapperProps = project.link && !project.archived
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
              : {}
            return (
            <Wrapper
              key={project.title}
              {...wrapperProps}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-md"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/5" />
                <div className="absolute right-3 top-3 flex items-center gap-1.5">
                  {project.archived && (
                    <span className="flex items-center gap-1 rounded-full bg-muted-foreground/80 px-2.5 py-1 text-xs font-medium text-background backdrop-blur-sm">
                      <Archive className="h-3 w-3" />
                      Archived
                    </span>
                  )}
                  <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <ExternalLink className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
