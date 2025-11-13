"use client"

import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/30 to-background"
    >
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-foreground">
            Full Stack
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              Web Developer
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Crafting modern, scalable web applications with MERN stack. Passionate about building user-centric solutions
            with clean code and exceptional performance.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <button
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors hover-lift"
          >
            View My Work
          </button>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors hover-lift"
          >
            Get in Touch
          </button>
        </div>

        <div className="animate-float">
          <ChevronDown className="mx-auto text-primary" size={28} />
        </div>
      </div>
    </section>
  )
}
