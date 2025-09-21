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
    accent: "text-purple-600",
  },
  {
    title: "Research Intern",
    company: "SAC-ISRO",
    location: "Ahmedabad, India",
    period: "Aug 2024 – Nov 2024",
    description:
      "Satellite image analysis & ConvLSTM model development for cloud prediction using INSAT 3D satellite data",
    skills: ["TensorFlow", "Satellite Imagery", "ConvLSTM2D", "Python", "Google Earth Engine"],
    accent: "text-blue-600",
  },
  {
    title: "Intern",
    company: "Skylark Global BPO",
    location: "Kolhapur, India",
    period: "2023",
    description:
      "Built professional communication and client management skills. Gained understanding of business operations.",
    skills: ["Communication", "Client Management", "Business Operations"],
    accent: "text-green-600",
  },
  {
    title: "Virtual Internship",
    company: "Accenture",
    location: "Remote",
    period: "2023",
    description:
      "Worked on AI-driven digital solutions in corporate workflow simulation. Applied data analysis to real-world scenarios.",
    skills: ["AI Solutions", "Data Analysis", "Problem Solving"],
    accent: "text-indigo-600",
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
    accent: "text-violet-600",
  },
  {
    title: "12th Board - MSBSHSE",
    company: "The New College, Kolhapur",
    location: "Kolhapur, India",
    period: "2021",
    description: "Percentage: 84.84 / 100",
    skills: ["Science", "Mathematics"],
    accent: "text-teal-600",
  },
  {
    title: "10th Board - MSBSHSE",
    company: "Maharashtra High School",
    location: "Kolhapur, India",
    period: "2019",
    description: "Percentage: 91.80 / 100",
    skills: ["Foundation", "Mathematics"],
    accent: "text-amber-600",
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
      className={`transition-all duration-500 ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-5">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-md bg-muted">
              <Icon className={`h-4 w-4 ${item.accent}`} />
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
                  <Badge key={skill} variant="outline" className="text-xs px-2 py-0">
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
    <section id="qualification" ref={sectionRef} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience & Education</h2>
          <p className="text-muted-foreground">
            My professional journey and academic background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="h-5 w-5 text-accent" />
              <h3 className="text-xl font-bold">Professional Experience</h3>
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
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
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
