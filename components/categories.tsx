"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

const categories = [
  {
    id: 1,
    name: "Tops",
    slug: "tops",
    description: "Stylish shirts, t-shirts, and hoodies",
    image: "https://images.pexels.com/photos/15404590/pexels-photo-15404590.jpeg",
    itemCount: 25,
  },
  {
    id: 2,
    name: "Bottoms",
    slug: "bottoms",
    description: "Comfortable jeans, shorts, and pants",
    image: "https://images.pexels.com/photos/7716960/pexels-photo-7716960.jpeg",
    itemCount: 18,
  },
  {
    id: 3,
    name: "Cord Sets",
    slug: "cord-sets",
    description: "Coordinated outfits for the perfect look",
    image: "https://images.pexels.com/photos/32752827/pexels-photo-32752827.jpeg",
    itemCount: 12,
  },
]

export function Categories() {
  const router = useRouter()

  const handleCategoryClick = (slug: string) => {
    router.push(`/category/${slug}`)
  }

  return (
    <section id="categories" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Shop by Category</h2>
            <p className="text-lg text-white/80 max-w-2xl">
              Explore our carefully curated collection of streetwear and casual fashion
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              onClick={() => handleCategoryClick(category.slug)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="backdrop-blur-md bg-white/20 rounded-lg px-4 py-2 border border-white/30">
                      <span className="text-white font-medium">View Products</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-white/70 mb-3">{category.description}</p>
                  <p className="text-sm text-white/60">{category.itemCount} items available</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
