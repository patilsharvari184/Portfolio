"use client"

import { Linkedin, Github, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <button onClick={scrollToTop} className="text-2xl font-bold hover:text-accent transition-colors">
              Sharvari Patil
            </button>
            <p className="text-primary-foreground/80 leading-relaxed">
              AI & ML Enthusiast | Gen AI Developer | Full-Stack Innovator
            </p>
            <p className="text-sm text-primary-foreground/60">
              Building intelligent systems that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#qualification" },
                { name: "Certifications", href: "#certifications" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-left text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="space-y-2">
              <p className="text-sm text-primary-foreground/80">patilsharvari184@gmail.com</p>
              <p className="text-sm text-primary-foreground/80">Kolhapur, India</p>
            </div>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://linkedin.com/in/sharvari-patil-444537224/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors hover-lift"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/patilsharvari184"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors hover-lift"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:patilsharvari184@gmail.com"
                className="text-primary-foreground/80 hover:text-accent transition-colors hover-lift"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">© {currentYear} Sharvari Patil. All rights reserved.</p> 
            <p className="text-sm text-primary-foreground/60 flex items-center">
              {/* Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> using Next.js & Tailwind CSS */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
