"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, GraduationCap, Briefcase } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    title: "Intern",
    company: "Benchmark IT Solutions",
    location: "Mumbai, India",
    period: "Jan 2025 – Sep 2025",
    description: "AI-powered document intelligence & automation projects focusing on multi-format document processing",
    skills: ["FastAPI", "Gemini AI", "Document Processing", "MySQL", "Python"],
    color: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-500",
  },
  {
    title: "Research Intern",
    company: "SAC-ISRO",
    location: "Ahmedabad, India",
    period: "Aug 2024 – Nov 2024",
    description:
      "Satellite image analysis & ConvLSTM model development for cloud prediction using INSAT 3D satellite data",
    skills: ["TensorFlow", "Satellite Imagery", "ConvLSTM2D", "Python", "Google Earth Engine"],
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-500",
  },
  {
    title: "Intern",
    company: "Skylark Global BPO",
    location: "Remote",
    period: "2023",
    description:
      "Built professional communication and client management skills. Gained understanding of business operations.",
    skills: ["Communication", "Client Management", "Business Operations"],
    color: "from-green-500/20 to-emerald-500/20",
    accent: "text-green-500",
  },
  {
    title: "Virtual Internship",
    company: "Accenture",
    location: "Remote",
    period: "2023",
    description:
      "Worked on AI-driven digital solutions in corporate workflow simulation. Applied data analysis to real-world scenarios.",
    skills: ["AI Solutions", "Data Analysis", "Problem Solving"],
    color: "from-indigo-500/20 to-purple-500/20",
    accent: "text-indigo-500",
  },
]

const education = [
  {
    title: "B.Tech - CSE-AI & ML",
    company: "D. Y. Patil College of Engineering",
    location: "Maharashtra, India",
    period: "2021 - 2025",
    description: "CGPA: 8.02 / 10",
    skills: ["AI", "Machine Learning", "Computer Science"],
    color: "from-violet-500/20 to-purple-500/20",
    accent: "text-violet-500",
  },
  {
    title: "12th Board - MSBSHSE",
    company: "The New College, Kolhapur",
    location: "Kolhapur, India",
    period: "2021",
    description: "Percentage: 84.84 / 100",
    skills: ["Science", "Mathematics"],
    color: "from-teal-500/20 to-cyan-500/20",
    accent: "text-teal-500",
  },
  {
    title: "10th Board - MSBSHSE",
    company: "Maharashtra High School",
    location: "Maharashtra, India",
    period: "2019",
    description: "Percentage: 91.80 / 100",
    skills: ["Foundation", "Mathematics"],
    color: "from-amber-500/20 to-yellow-500/20",
    accent: "text-amber-500",
  },
]

export default function QualificationSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const CompactCard = ({ item, index, icon: Icon }: { item: any; index: number; icon: any }) => (
    <Card
      data-index={index}
      className={`group hover:scale-105 transition-all duration-500 hover:shadow-xl border-0 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm relative overflow-hidden ${
        visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>

      <CardContent className="p-4 relative z-10">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-4 w-4 text-accent" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className={`font-bold text-foreground mb-1 group-hover:${item.accent} transition-colors duration-300`}>
              {item.title}
            </h3>
            <div className="flex items-center text-accent font-medium text-sm mb-2">
              <Building className="h-3 w-3 mr-1" />
              {item.company}
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-2">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {item.period}
              </div>
              <div className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {item.location}
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-3 group-hover:text-foreground transition-colors">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-1">
              {item.skills.slice(0, 3).map((skill: string) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-xs px-2 py-0 group-hover:border-accent group-hover:text-accent transition-colors"
                >
                  {skill}
                </Badge>
              ))}
              {item.skills.length > 3 && (
                <Badge variant="outline" className="text-xs px-2 py-0">
                  +{item.skills.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="qualification" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background in AI, ML, and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="h-5 w-5 text-accent" />
              <h3 className="text-xl font-bold text-foreground">Professional Experience</h3>
            </div>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <CompactCard key={index} item={exp} index={index} icon={Briefcase} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <CompactCard key={`edu-${index}`} item={edu} index={experiences.length + index} icon={GraduationCap} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
