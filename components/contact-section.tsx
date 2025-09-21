"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, Sparkles } from "lucide-react"
import emailjs from "emailjs-com"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .send(
        "service_osrollb", // replace with EmailJS service ID
        "template_m1yv46i", // replace with EmailJS template ID
        formData,
        "KM3nLpaJXLZPwf3ey", // replace with EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully! 🎉")
          setFormData({ name: "", email: "", message: "" })
        },
        (error) => {
          alert("Failed to send message ❌ Try again later.")
          console.error("EmailJS Error:", error)
        },
      )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (rect) {
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 160,
            top: mousePosition.y - 160,
          }}
        ></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative z-10">Get in Touch</h2>
            <MessageCircle className="absolute -top-2 -right-10 h-6 w-6 text-accent animate-bounce" />
            <Sparkles className="absolute -bottom-2 -left-10 h-4 w-4 text-primary animate-pulse" />
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 blur-xl opacity-30 animate-pulse"></div>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-accent via-primary to-accent mx-auto mb-6 rounded-full shadow-lg shadow-accent/30"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm open to collaborations, internships, and full-time opportunities. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'd love to
                hear from you. I'm always excited to work on innovative projects that make a difference.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "patilsharvari184@gmail.com",
                  color: "from-blue-500/20 to-cyan-500/20",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+91 8010959478",
                  color: "from-green-500/20 to-emerald-500/20",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Kolhapur, India",
                  color: "from-purple-500/20 to-pink-500/20",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-center space-x-4 group transition-all duration-500 delay-${
                    index * 100
                  } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}
                  >
                    <item.icon className="h-5 w-5 text-accent relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="font-semibold text-foreground mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {[
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/in/sharvari-patil-444537224/",
                    color: "hover:bg-blue-600",
                  },
                  { icon: Github, href: "https://github.com/patilsharvari184", color: "hover:bg-gray-800" },
                  { icon: Mail, href: "mailto:patilsharvari184@gmail.com", color: "hover:bg-accent" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 group relative overflow-hidden`}
                  >
                    <social.icon className="h-5 w-5 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card
            className={`transition-all duration-1000 delay-500 hover:scale-105 border-0 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm relative overflow-hidden ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full animate-ping"></div>
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary rounded-full animate-pulse"></div>

            <CardHeader className="relative z-10">
              <CardTitle className="text-xl flex items-center">
                <Send className="mr-2 h-5 w-5 text-accent" />
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full transition-all duration-300 focus:scale-105 group-hover:border-accent/50"
                  />
                </div>

                <div className="group">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full transition-all duration-300 focus:scale-105 group-hover:border-accent/50"
                  />
                </div>

                <div className="group">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none transition-all duration-300 focus:scale-105 group-hover:border-accent/50"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full group bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-semibold py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
