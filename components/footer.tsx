"use client"

import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="backdrop-blur-md bg-black/20 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/bro vibes logo white.png" alt="Bro Vibes" className="h-12 w-auto" />
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Your go-to destination for the latest in streetwear and casual fashion. Quality clothing that matches your
              vibe.
            </p>
            <div className="flex space-x-4">
  <a
    href="https://www.facebook.com/profile.php?id=61575278971813"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <Facebook className="h-6 w-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
  </a>
  <a
    href="https://www.instagram.com/brovibes48/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <Instagram className="h-6 w-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
  </a>
  <a
    href="https://twitter.com/yourhandle"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
  >
    <Twitter className="h-6 w-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
  </a>
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <button onClick={scrollToTop} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("categories")} className="hover:text-white transition-colors">
                  Categories
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("featured")} className="hover:text-white transition-colors">
                  Featured
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Customer Service</h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <button className="hover:text-white transition-colors">Size Guide</button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">Shipping Info</button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">Returns</button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">FAQ</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Bro Vibes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
