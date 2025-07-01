"use client"

import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/bro vibes logo white.png" alt="Bro Vibes" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("categories")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Categories
            </button>
            <button
              onClick={() => scrollToSection("featured")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Featured
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Shopping Bag */}
          <div className="hidden md:flex items-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfphSHp54wDSGSX4bLqWkPRQTl22fBa9dsQwATryrl0qFUYbQ/viewform?embedded=true" target="_blank" rel="noopener noreferrer">
            <ShoppingBag className="h-6 w-6 text-white/80 hover:text-white cursor-pointer transition-colors" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white/80 hover:text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md bg-white/10 border-t border-white/20 rounded-b-lg">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("categories")}
                className="block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-colors"
              >
                Categories
              </button>
              <button
                onClick={() => scrollToSection("featured")}
                className="block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-colors"
              >
                Featured
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
