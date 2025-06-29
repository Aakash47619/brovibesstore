"use client"

import { Header } from "./header"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <Header />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Welcome to <span className="text-yellow-300">Bro Vibes</span>
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Discover the latest trends in streetwear and casual fashion. From stylish tops to comfortable bottoms
                and coordinated sets.
              </p>
            </div>
            <div className="relative">
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-4 border border-white/20 shadow-2xl">
                <img
                  src="/brovibes hero.png"
                  alt="Fashion Model"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
