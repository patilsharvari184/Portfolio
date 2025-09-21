"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Sparkles, Zap } from "lucide-react"

const projects = [
  {
    title: "AskMyDocs – AI Multi-LLM Document Assistant",
    description: "Built a platform to extract, search, and analyze documents with multi-file format support.",
    technologies: ["FastAPI", "Gemini AI", "Python", "MySQL"],
    image: "/Ask my docs.jpg",
    github: "#",
    // demo: "#",
    category: "AI/ML",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "Automated attendance tracking system using computer vision with OpenCV, Flask backend, and KNN classification model.",
    technologies: ["OpenCV", "Flask", "KNN", "Python", "Computer Vision"],
    image: "/face-recognition-attendance-system-interface.jpg",
    github: "#",
    //demo: "#",
    category: "Computer Vision",
  },
  {
    title: "Pretraining BERT",
    description:
      "Fine-tuned transformer models using Hugging Face library for various NLP tasks including text classification.",
    technologies: ["BERT", "Hugging Face", "Transformers", "NLP", "Python"],
    image: "/bert-nlp-transformer-model-training-interface.jpg",
    github: "#",
    // demo: "#",
    category: "NLP",
  },
  {
    title: "Automated Hotel Inspection Report",
    description:
      "Developed a VGG16-based deep learning model to classify room images as clean/messy and generate PDF reports.",
    technologies: ["TensorFlow", "Flask", "OpenCV", "ReportLab"],
    image: "/hotel-room-inspection-ai-computer-vision-system.jpg",
    github: "#",
    // demo: "#",
    category: "Computer Vision",
  },
  {
    title: "Intelligent Resume Analyzer",
    description: "Extracted structured resume data using AI and matched it with job descriptions for recommendations.",
    technologies: ["Python", "Gemini AI", "Sentence Transformers"],
    image: "/resume-analysis-ai-matching-system.jpg",
    github: "#",
    // demo: "#",
    category: "NLP",
  },
  {
    title: "Satellite Cloud Prediction (ISRO Project)",
    description:
      "Processed INSAT 3D satellite images using ConvLSTM2D to predict cloud formations and improve forecasting accuracy.",
    technologies: ["TensorFlow", "Rasterio", "Google Earth Engine"],
    image: "/satellite-weather-prediction-cloud-analysis.jpg",
    github: "#",
    // demo: "#",
    category: "Research",
  },
]

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <Card
      className="group hover-lift overflow-hidden relative border-2 hover:border-accent/30 transition-all duration-500"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-3 left-3">
          <Badge
            variant="secondary"
            className="bg-accent/90 text-white shadow-lg backdrop-blur-sm border border-white/20 text-xs"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            {project.category}
          </Badge>
        </div>

        <div className="absolute top-3 right-3 w-6 h-6 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center text-xs font-bold text-accent border border-accent/20">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
          {project.title}
          <Zap className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech: string) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            size="sm"
            variant="outline"
            className="text-xs h-8 group/btn bg-transparent hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
          >
            <Github className="mr-1 h-3 w-3 group-hover/btn:rotate-12 transition-transform duration-300" />
            Code
          </Button>
          <Button
            size="sm"
            className="text-xs h-8 group/btn hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            <ExternalLink className="mr-1 h-3 w-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
            Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-secondary/10 rotate-45 blur-xl animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-accent animate-expand"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground animate-fade-in-up">Projects</h2>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary animate-expand delay-300"></div>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-accent via-primary to-accent mx-auto mb-6 animate-expand delay-500"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-700">
            Showcase of innovative solutions combining AI, machine learning, and full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up delay-500">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="group hover:scale-105 active:scale-95 glowing 
                       bg-accent hover:bg-accent/90 text-white shadow-lg 
                       transition-all duration-300 px- py-6"
            onClick={() => window.open("https://github.com/patilsharvari184", "_blank")}
          >
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            Explore More
          </Button>
        </div>
      </div>
    </section>
  )
}
