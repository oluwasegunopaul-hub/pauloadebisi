import { Linkedin, Github, Twitter, Heart } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "X (Twitter)", href: "https://x.com/PAULOADEBISI" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Paul Adebisi
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {
                "Geospatial Analyst, Web Developer, and Computer Technician. Transforming spatial data into meaningful insights."
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

         {/* Social */}
<div>
  <h4 className="mb-4 text-sm font-semibold text-foreground">
    Connect
  </h4>
  <div className="flex items-center gap-2">
    {socialLinks.map((social) => (
      <a
        key={social.label}
        href={social.href}
        target="_blank"             // Opens in a new tab
        rel="noopener noreferrer"   // Security best practice
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
        aria-label={social.label}
      >
        <social.icon className="h-4 w-4" />
      </a>
    ))}
  </div>
</div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            {"© 2026 Adebisi Paul Oluwasegun. Built with"}
            <Heart className="h-3 w-3 text-primary" />
          </p>
          <p className="text-xs text-muted-foreground">
            {"All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
