"use client"

import { useEffect, useState } from "react"

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "C++", "SQL", "HTML/CSS"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "ShadCN", "Responsive Design"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "OAuth", "Socket.IO", "Competitive Programming"],
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("skills")
    if (element) observer.observe(element)
    return () => element && observer.unobserve(element)
  }, [])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Technical Skills</h2>
          <p className="text-muted-foreground text-lg mb-12">Technologies and tools I work with</p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl border border-border hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-background text-foreground rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
