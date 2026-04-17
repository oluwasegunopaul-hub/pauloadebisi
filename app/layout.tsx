import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Adebisi Paul Oluwasegun | Geospatial Analyst & Web Developer",
  description:
    "Portfolio of Adebisi Paul Oluwasegun - Geospatial Analyst, Web Developer, and Computer Technician. Transforming spatial data into meaningful insights.",
  keywords: [
    "Geospatial Analyst",
    "Web Developer",
    "Remote Sensing",
    "GIS",
    "ArcGIS",
    "QGIS",
    "Nigeria",
  ],
  authors: [{ name: "Adebisi Paul Oluwasegun" }],
  openGraph: {
    title: "Adebisi Paul Oluwasegun | Geospatial Analyst & Web Developer",
    description:
      "Transforming spatial data into meaningful insights. Portfolio showcasing geospatial analysis, web development, and technical projects.",
    url: "https://pauloadebisi.com",
    siteName: "Adebisi Paul Oluwasegun",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adebisi Paul Oluwasegun | Geospatial Analyst & Web Developer",
    description:
      "Transforming spatial data into meaningful insights. Portfolio showcasing geospatial analysis, web development, and technical projects.",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e4a7a" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1721" },
  ],
  width: "device-width",
  initialScale: 1,
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${_inter.variable} ${_poppins.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
