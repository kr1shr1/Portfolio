"use client"

import { useEffect, useState } from "react"
import { Mail, Linkedin, Github, Phone } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("contact")
    if (element) observer.observe(element)
    return () => element && observer.unobserve(element)
  }, [])

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-12">
            I'm always interested in hearing about new opportunities and exciting projects
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:kritarthshrivastava28@gmail.com"
              className="p-6 bg-secondary rounded-xl hover-lift border border-border flex items-center gap-4 group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-foreground">kritarthshrivastava28@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+919412807859"
              className="p-6 bg-secondary rounded-xl hover-lift border border-border flex items-center gap-4 group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Phone className="text-primary" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold text-foreground">+91-9412807859</p>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="#"
              className="p-4 bg-secondary rounded-lg hover-lift border border-border group"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-foreground group-hover:text-primary transition-colors" size={24} />
            </a>
            <a
              href="#"
              className="p-4 bg-secondary rounded-lg hover-lift border border-border group"
              aria-label="GitHub"
            >
              <Github className="text-foreground group-hover:text-primary transition-colors" size={24} />
            </a>
          </div>

          <p className="text-muted-foreground">
            © 2025 Kritarth Shrivastava. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
