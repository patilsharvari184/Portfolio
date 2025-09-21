"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, GraduationCap, Briefcase } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    title: "Intern",
    company: "Benchmark IT Solutions",
    location: "Pune, India",
    period: "Jan 2025 – Sep 2025",
    description:
      "AI-powered document intelligence & automation projects focusing on multi-format document processing",
    skills: ["FastAPI", "Gemini AI", "Document Processing", "MySQL", "Python"],
    color: "from-purple-500/10 via-pink-500/10 to-red-500/10",
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
    color: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
    accent: "text-blue-500",
  },
  {
    title: "Intern",
    company: "Skylark Global BPO",
    location: "Kolhapur, India",
    period: "2023",
    description:
      "Built professional communication and client management skills. Gained understanding of business operations.",
    skills: ["Communication", "Client Management", "Business Operations"],
    color: "from-green-500/10 via-emerald-500/10 to-teal-500/10",
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
    color: "from-indigo-500/10 via-purple-500/10 to-pink-500/10",
    accent: "text-indigo-500",
  },
]

const education = [
  {
    title: "B.Tech - CSE-AI & ML",
    company: "D. Y. Patil College of Engineering",
    location: "Kolhapur, India",
    period: "2021 - 2025",
    description: "CGPA: 8.02 / 10",
    skills: ["AI", "Machine Learning", "Computer Science"],
    color: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
    accent: "text-violet-500",
  },
  {
    title: "12th Board - MSBSHSE",
    company: "The New College, Kolhapur",
    location: "Kolhapur, India",
    period: "2021",
    description: "Percentage: 84.84 / 100",
    skills: ["Science", "Mathematics"],
    color: "from-teal-500/10 via-cyan-500/10 to-blue-500/10",
    accent: "text-teal-500",
  },
  {
    title: "10th Board - MSBSHSE",
    company: "Maharashtra High School",
    location: "Kolhapur, India",
    period: "2019",
    description: "Percentage: 91.80 / 100",
    skills: ["Foundation", "Mathematics"],
    color: "from-amber-500/10 via-orange-500/10 to-yellow-500/10",
    accent: "text-amber-500",
  },
]

export default function QualificationSection() {
  const [animate, setAnimate] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setAnimate(true)
        })
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const CompactCard = ({
    item,
    index,
    icon: Icon,
  }: {
    item: any
    index: number
    icon: any
  }) => (
    <div
      className={`transform transition-all duration-700 ease-out 
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="relative overflow-hidden group border-0 shadow-md hover:shadow-xl transition-shadow">
        {/* background gradient on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500`}
        ></div>

        <CardContent className="p-6 relative z-10">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
              <Icon className={`h-5 w-5 ${item.accent}`} />
            </div>

            <div className="flex-1">
              <h3 className={`font-bold mb-1 ${item.accent}`}>{item.title}</h3>
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <Building className="h-3 w-3 mr-1" />
                {item.company}
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-2">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {item.period}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {item.location}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{item.description}</p>

              <div className="flex flex-wrap gap-1">
                {item.skills.slice(0, 3).map((skill: string) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-xs px-2 py-0 border-accent/50 group-hover:border-accent group-hover:text-accent transition-colors"
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
    </div>
  )

  return (
    <section id="qualification" ref={sectionRef} className="py-20 relative">
      {/* Decorative blurred shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Experience & Education
          </h2>
          <p className="text-muted-foreground">
            My professional journey and academic background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-bold">Professional Experience</h3>
            </div>
            <div className="space-y-5">
              {experiences.map((exp, index) => (
                <CompactCard key={index} item={exp} index={index} icon={Briefcase} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="space-y-5">
              {education.map((edu, index) => (
                <CompactCard
                  key={`edu-${index}`}
                  item={edu}
                  index={experiences.length + index}
                  icon={GraduationCap}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
