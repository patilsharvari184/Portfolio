"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const certifications = [
  {
    title: "Prompt Design in Vertex AI Skill Badge",
    issuer: "Google",
    date: "2024",
    skills: ["Vertex AI", "Prompt Engineering", "AI Models"],
    icon: ""/*Google icon*/ ,
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "AWS",
    date: "2024",
    skills: ["AWS", "Cloud Computing", "Infrastructure"],
    icon: "☁️",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "AWS Academy Machine Learning Foundation",
    issuer: "AWS",
    date: "2024",
    skills: ["AWS ML", "Machine Learning", "SageMaker"],
    icon: "🤖",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "2024",
    skills: ["Cybersecurity", "Network Security", "Threat Analysis"],
    icon: "🔐",
    color: "from-red-500/20 to-pink-500/20",
  },
  {
    title: "AICTE Virtual Internship (Cybersecurity Focus)",
    issuer: "AICTE",
    date: "2024",
    skills: ["Cybersecurity", "Security Frameworks", "Risk Assessment"],
    icon: "🛡️",
    color: "from-purple-500/20 to-violet-500/20",
  },
  {
    title: "Accenture Data Analytics Job Simulation",
    issuer: "Forage",
    date: "2024",
    skills: ["Data Analytics", "Visualization", "Business Intelligence"],
    icon: "📊",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Google Analytics for Beginners (GA4)",
    issuer: "Google",
    date: "2024",
    skills: ["Google Analytics", "Web Analytics", "GA4"],
    icon: "📈",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "2024",
    skills: ["API Testing", "Postman", "REST APIs"],
    icon: "🔗",
    color: "from-teal-500/20 to-green-500/20",
  },
  {
    title: "RPA Developer Foundation (v2021.10)",
    issuer: "UiPath",
    date: "2024",
    skills: ["RPA", "UiPath", "Process Automation"],
    icon: "🤖",
    color: "from-indigo-500/20 to-purple-500/20",
  },
]

export default function CertificationsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index])
            }, index * 100)
          }
        })
      },
      { threshold: 0.2 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="certifications"
      className="py-16 relative overflow-hidden bg-gradient-to-br from-muted/30 via-background to-muted/20"
      ref={sectionRef}
    >
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent via-primary to-accent mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications validating expertise in AI, ML, and cloud technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              data-index={index}
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm relative overflow-hidden ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <CardContent className="p-4 relative z-10">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <div className="text-lg">{cert.icon}</div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300 text-sm leading-tight">
                      {cert.title}
                    </h3>
                    <div className="text-xs text-muted-foreground mb-2">
                      {cert.issuer} • {cert.date}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {cert.skills.slice(0, 2).map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs px-2 py-0 group-hover:border-accent group-hover:text-accent transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 2 && (
                        <Badge variant="outline" className="text-xs px-2 py-0">
                          +{cert.skills.length - 2}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 dark:from-green-900 dark:to-emerald-900 dark:text-green-200 text-xs"
                      >
                        ✓ Verified
                      </Badge>
                      <ExternalLink className="h-3 w-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
