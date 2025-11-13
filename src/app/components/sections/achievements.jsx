"use client"

import { useEffect, useState } from "react"
import { Trophy, Award } from "lucide-react"

const achievements = [
  {
    title: "Global Rank 287",
    description: "CodeChef Starter Contest",
    category: "Competitive Programming",
    icon: Trophy,
  },
  {
    title: "Peak Rating 1714",
    description: "LeetCode - Data Structures & Algorithms",
    category: "Problem Solving",
    icon: Award,
  },
  {
    title: "Rating 1620",
    description: "CodeChef Platform",
    category: "Competitive Programming",
    icon: Trophy,
  },
  {
    title: "Rating 1297",
    description: "Codeforces - Time Complexity Mastery",
    category: "Algorithms",
    icon: Award,
  },
]

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("achievements")
    if (element) observer.observe(element)
    return () => element && observer.unobserve(element)
  }, [])

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 via-background to-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Achievements</h2>
          <p className="text-muted-foreground text-lg mb-12">Recognition of my skills and dedication</p>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div
                  key={index}
                  className="p-6 bg-card rounded-xl border-2 border-accent/30 hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                      <IconComponent className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                      <p className="text-muted-foreground mt-1">{achievement.description}</p>
                      <span className="inline-block mt-3 text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
