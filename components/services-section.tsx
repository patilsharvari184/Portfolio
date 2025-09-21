"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Code, BarChart3, FileText, Zap, ArrowRight, Sparkles } from "lucide-react"
import { useState, useRef } from "react"

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Deep Learning, NLP, Computer Vision, Model Optimization",
    link: "#projects",
    color: "text-blue-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "FastAPI, React, MySQL, REST APIs",
    link: "#projects",
    color: "text-green-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    hoverGradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    description: "Python, Pandas, NumPy, Matplotlib, Plotly",
    link: "#projects",
    color: "text-purple-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    hoverGradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: FileText,
    title: "Document & Resume Intelligence",
    description: "PDF parsing, field extraction, embeddings, semantic search",
    link: "#projects",
    color: "text-orange-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
    hoverGradient: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Zap,
    title: "Automation & Optimization",
    description: "Task automation, smart dashboards, AI-based tools",
    link: "#projects",
    color: "text-yellow-500",
    bgGradient: "from-yellow-500/10 to-orange-500/10",
    hoverGradient: "from-yellow-500/20 to-orange-500/20",
  },
]

function ServiceCard({ service, index }: { service: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Card
      ref={cardRef}
      className="group hover-lift cursor-pointer transition-all duration-500 hover:border-accent/50 relative overflow-hidden border-2"
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--accent) / 0.1), transparent 70%)`,
        }}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} group-hover:${service.hoverGradient} transition-all duration-500`}
      />

      <div className="absolute top-4 right-4 w-2 h-2 bg-accent/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-6 left-6 w-1 h-1 bg-primary/40 rounded-full animate-ping delay-1000"></div>

      <CardHeader className="text-center pb-4 relative z-10">
        <div className="mx-auto mb-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 group-hover:opacity-20 animate-spin-slow"></div>
          <div className="relative p-4 rounded-full bg-background/80 backdrop-blur-sm border-2 border-muted group-hover:border-accent/50 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-accent/25">
            <service.icon
              className={`h-8 w-8 ${service.color} group-hover:scale-110 transition-all duration-500 group-hover:drop-shadow-lg`}
            />
            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
          </div>
        </div>

        <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300 relative">
          {service.title}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-500"></div>
        </CardTitle>
      </CardHeader>

      <CardContent className="text-center relative z-10">
        <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
          {service.description}
        </p>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection(service.link)}
          className="group/btn hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:shadow-md relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
        </Button>
      </CardContent>
    </Card>
  )
}

export default function ServicesSection() {
  return (
    <section id="capabilities" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="absolute top-20 left-20 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-accent/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-secondary/10 rotate-12 animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-accent animate-expand"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground animate-fade-in-up">Capabilities</h2>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary animate-expand delay-300"></div>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-accent via-primary to-accent mx-auto mb-6 animate-expand delay-500"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-700">
            Specialized expertise in cutting-edge technologies and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-1000">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
