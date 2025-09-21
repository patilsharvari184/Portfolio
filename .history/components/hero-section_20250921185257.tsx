"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Github, Linkedin } from "lucide-react"
import ParticleSystem from "./particle-system"

const roles = ["GenAI Enthusiast", "AIML Researcher Developer", "Full-Stack Developer"]

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const currentRoleText = roles[currentRole]
    let currentIndex = 0

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentIndex <= currentRoleText.length) {
          setDisplayText(currentRoleText.slice(0, currentIndex))
          currentIndex++
        } else {
          setIsTyping(false)
          setTimeout(() => {
            setIsTyping(false)
            setTimeout(() => {
              setCurrentRole((prev) => (prev + 1) % roles.length)
              setDisplayText("")
              setIsTyping(true)
            }, 1000)
          }, 2000)
          clearInterval(typingInterval)
        }
      }, 100)

      return () => clearInterval(typingInterval)
    }
  }, [currentRole, isTyping])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30">
          <source
            src="/placeholder.mp4?height=1080&width=1920&query=AI technology neural networks data visualization"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-accent/30"></div>
        <ParticleSystem />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full floating blur-sm"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-lg floating blur-sm"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-accent/10 rounded-full floating blur-sm"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight drop-shadow-sm">
                Hi, I'm <span className="text-gradient-animated block lg:inline">Sharvari Patil</span>
              </h1>

              <div className="h-16 md:h-20 flex items-center justify-center lg:justify-start">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                  <span className="shimmer-text">{displayText}</span>
                  <span className="animate-pulse text-accent">|</span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I build intelligent systems that solve real-world problems using AI, ML, and full-stack development.
              Let's create something amazing together!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8">
              {/* Resume Download Button */}
              <a
                href="/Sharvari_Profile (6).pdf" // put your resume in the /public folder
                download
              >
                <Button
                  size="lg"
                  className="group hover-lift glowing bg-accent hover:bg-accent/90 text-white shadow-lg active:scale-95 transition-transform"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </a>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToProjects}
                className="group hover-scale bg-background/80 backdrop-blur-sm border-2 border-accent/50 hover:border-accent text-foreground hover:text-accent"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 pt-8">
              <a
                href="https://linkedin.com/in/sharvari-patil-444537224/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover-scale"
              >
                <Linkedin className="h-7 w-7" />
              </a>
              <a
                href="https://github.com/patilsharvari184"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover-scale"
              >
                <Github className="h-7 w-7" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated background blob */}
              <div className="absolute inset-0 w-80 h-80 bg-gradient-to-br from-accent/20 to-secondary/20 morphing-blob blur-xl"></div>

              {/* Pulse rings */}
              <div className="absolute inset-0 w-80 h-80 rounded-full border-2 border-accent/30 pulse-ring"></div>
              <div
                className="absolute inset-0 w-80 h-80 rounded-full border-2 border-secondary/30 pulse-ring"
                style={{ animationDelay: "0.5s" }}
              ></div>

              {/* Main photo container */}
              <div className="relative z-10 floating">
                <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-accent/50 shadow-2xl hover-scale glowing">
                  <img
                    src="/sharvari_photo.jpg"
                    alt="Sharvari Patil"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Status indicator */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Floating badges */}
                <div
                  className="absolute -top-6 -left-6 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-accent/20 floating"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-sm font-medium text-accent">AI Researcher</span>
                </div>

                <div
                  className="absolute -bottom-6 -left-8 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-secondary/20 floating"
                  style={{ animationDelay: "3s" }}
                >
                  <span className="text-sm font-medium text-secondary">Full-Stack Dev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center glowing">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
