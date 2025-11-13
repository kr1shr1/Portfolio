"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Hero from "./components/sections/hero"
import About from "./components/sections/about"
import Projects from "./components/sections/projects"
import Skills from "./components/sections/skills"
import Achievements from "./components/sections/achievements"
import Contact from "./components/sections/contact"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                KS
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {["About", "Projects", "Skills", "Achievements", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["About", "Projects", "Skills", "Achievements", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Scroll Down Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce md:hidden">
        <ChevronDown className="text-primary" size={24} />
      </div>
    </div>
  )
}
