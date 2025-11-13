"use client"

import { useEffect, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("about")
    if (element) observer.observe(element)
    return () => element && observer.unobserve(element)
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-foreground">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack web developer with a strong foundation in both frontend and backend
                technologies. Currently pursuing B.Tech in Electronics and Communication Engineering at MNNIT Allahabad
                (CGPA: 8.09).
              </p>
              <p>
                My journey in web development has been driven by a passion for creating scalable, performant
                applications that solve real-world problems. I specialize in the MERN stack and have successfully
                delivered multiple production-ready projects.
              </p>
              <p>
                Beyond coding, I'm an active competitive programmer with a peak LeetCode rating of 1714 and enjoy
                mentoring over 50 peers as an SMP Mentor. I believe in continuous learning and sharing knowledge with
                the community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-secondary rounded-xl hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="p-6 bg-accent/10 rounded-xl hover-lift border border-accent/30">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Peers Mentored</p>
              </div>
              <div className="p-6 bg-secondary rounded-xl hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">8.09</div>
                <p className="text-sm text-muted-foreground">College CGPA</p>
              </div>
              <div className="p-6 bg-accent/10 rounded-xl hover-lift border border-accent/30">
                <div className="text-3xl font-bold text-accent mb-2">1714</div>
                <p className="text-sm text-muted-foreground">LeetCode Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
