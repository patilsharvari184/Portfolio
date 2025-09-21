"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Microscope, Satellite, FileText, Bot, Globe } from "lucide-react"

const updates = [
  {
    icon: Microscope,
    title: "AI Research & Development",
    description:
      "Working on document intelligence systems (resume parsing, field extraction, contextual search) using FastAPI, Google Gemini AI, and NLP techniques.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Satellite,
    title: "Deep Learning for Satellite Imagery",
    description:
      "Continuing research from my ISRO internship by experimenting with ConvLSTM models for spatiotemporal cloud prediction and weather forecasting.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: FileText,
    title: "AI-Powered Resume Matcher",
    description:
      "Building a platform that extracts structured resume data and matches it to job descriptions using semantic similarity and AI embeddings.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Bot,
    title: "Resort Task Management Chatbot",
    description:
      "Developing a FastAPI + MySQL chatbot for hotel managers to handle appointments, inventory, and cleaning schedules with a user-friendly dashboard.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
  },
  {
    icon: Globe,
    title: "Portfolio Website",
    description:
      "Designing my personal portfolio website with a video hero banner, smooth navigation, and interactive project showcase.",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-500/10 to-purple-500/10",
  },
]

export default function RecentUpdatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % updates.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % updates.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + updates.length) % updates.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentUpdate = updates[currentIndex]
  const IconComponent = currentUpdate.icon

  return (
    <section id="recent-updates" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I'm Doing{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Now</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Recent Updates & Current Projects</p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Carousel */}
          <div className="relative h-80 overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`absolute inset-0 bg-gradient-to-br ${currentUpdate.bgGradient} backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex items-center`}
              >
                <div className="flex items-center space-x-8 w-full">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${currentUpdate.gradient} flex items-center justify-center shadow-2xl`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{currentUpdate.title}</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">{currentUpdate.description}</p>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/20 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {updates.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 w-full bg-white/10 rounded-full h-1 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              key={currentIndex}
              transition={{ duration: 4, ease: "linear" }}
            />
          </div>
        </div>

        {/* Auto-play Indicator */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            {isAutoPlaying ? "⏸️ Pause Auto-play" : "▶️ Resume Auto-play"}
          </button>
        </div>
      </div>
    </section>
  )
}
