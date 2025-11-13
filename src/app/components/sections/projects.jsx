"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Car-Saathi",
    description:
      "Scalable MERN-based ride-sharing app with real-time communication and secure payments. Features dynamic routing with Google Maps API and a comprehensive review system.",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO", "Tailwind CSS", "RazorPay API"],
    link: "https://carsaathi-carpool.netlify.app/",
    github: "https://github.com/kr1shr1/Car-Saathi",
    image: "/ride-sharing-app.png",
    period: "Mar - Apr 2024",
  },
  {
    title: "AcadHelper",
    description:
      "Comprehensive course and task management platform with role-based profiles, group collaboration, and gamified challenges. Features event scheduling and team submissions.",
    tech: ["Next.js", "MongoDB", "Cloudinary", "Nodemailer", "Tailwind CSS"],
    link: "https://acadhelper.vercel.app/",
    github: "#",
    image: "/course-management-platform.jpg",
    period: "Nov - Dec 2024",
  },
  {
    title: "Buildzy",
    description:
      "Collaborative website builder with drag-and-drop components, real-time code generation, and integrated GitHub workflow. Supports team collaboration, repo management, and OAuth authentication via GitHub.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Craft.js", "ShadCN", "GitHub API", "NextAuth.js"],
    link: "https://buildzy.vercel.app/",
    github: "https://github.com/kr1shr1/Buildzy",
    image: "/image.png",
    period: "Feb - Jun 2025",
  },

  {
    title: "Coin Change",
    description:
      "MERN-based expense tracker with real-time dashboard, group-based bill splitting, and collaborative features. Automated email workflows with 99% delivery rate.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Nodemailer"],
    link: "#",
    github: "https://github.com/kr1shr1/CoinChange",
    image: "/expense-tracker-app.jpg",
    period: "Oct - Dec 2023",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("projects")
    if (element) observer.observe(element)
    return () => element && observer.unobserve(element)
  }, [])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground text-lg mb-12">Showcasing my best work and technical expertise</p>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl overflow-hidden hover-lift border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {(project.link !== "#") ? <a
                      href={project.link}
                      className="flex items-center gap-2 text-primary hover:text-primary/70 font-semibold transition-colors"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a> : <a
                      href={project.link} 
                      onClick={(e) => e.preventDefault()}
                      className="flex items-center gap-2 text-primary hover:text-primary/70 font-semibold transition-colors"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>}
                    {(project.github !== "#") ?
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-foreground hover:text-primary font-semibold transition-colors"
                    >
                      <Github size={18} /> Code
                    </a>:
                    <a
                      href={project.github}
                      onClick={(e)=>e.preventDefault()}
                      className="flex items-center gap-2 text-foreground hover:text-primary font-semibold transition-colors"
                    >
                      <Github size={18} /> Code
                    </a>}
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
