"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { Download } from "lucide-react"

const stats = [
  { number: "10+", label: "Projects Completed", link: "https://github.com/yourusername" },
  { number: "15+", label: "Technologies Mastered" },
  { number: "10+", label: "Certificates Earned", link: "https://www.linkedin.com/in/sharvari-patil-444537224/" },
]

function AnimatedCounter({ end, duration = 2000 }: { end: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const numericEnd = Number.parseInt(end.replace(/\D/g, "")) || 100
    const increment = numericEnd / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericEnd) {
        setCount(numericEnd)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-accent mb-2">
      {end.includes("%") ? `${count}%` : end.includes("+") ? `${count}+` : count}
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-lg animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto animate-expand"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Text */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-accent to-primary rounded-full"></div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-8">
                I am a passionate AI/ML researcher and developer with hands-on experience in deep learning, NLP, and web
                development. I have completed multiple projects in AI-powered document intelligence, resume parsing,
                hotel management chatbots, and satellite image analysis.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed pl-8">
              I enjoy turning complex problems into simple, efficient solutions and continuously learning emerging
              technologies to stay ahead in the field.
            </p>

            <div className="space-y-4 pl-8">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Deep Learning",
                  "Natural Language Processing",
                  "Computer Vision",
                  "Full-Stack Development",
                  "Python",
                  "React",
                  "FastAPI",
                  "TensorFlow",
                  "MySQL",
                ].map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="hover-lift hover:bg-accent hover:text-accent-foreground transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Stats + Button */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
            {stats.map((stat, index) => (
              <a
                key={index}
                href={stat.link || "#"}
                target={stat.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                <Card
                  className="text-center hover-lift group relative overflow-hidden border-2 hover:border-accent/50 transition-all duration-500"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 relative z-10">
                    <AnimatedCounter end={stat.number} />
                    <div className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                      {stat.label}
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500"></div>
                  </CardContent>
                </Card>
              </a>
            ))}

            {/* Know More Button inside grid */}
            <div className="flex items-center justify-center">
              <Button
                size="lg"
                variant="default"
                className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 w-full py-6"
                
                onClick={() =>
                  window.open("https://www.linkedin.com/in/sharvari-patil-444537224/", "_blank")
                }
              >
                Know More
              </Button>
              
              
              <Button
                  size="lg"
                  className="group hover-lift glowing bg-accent hover:bg-accent/90 text-white shadow-lg active:scale-95 transition-transform"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
