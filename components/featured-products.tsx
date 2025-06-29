"use client"

import { Card, CardContent } from "@/components/ui/card"

const featuredProducts = [
  {
    id: 1,
    name: "Urban Streetwear Hoodie",
    image: "/placeholder.svg?height=300&width=300",
    category: "Tops",
  },
  {
    id: 2,
    name: "Comfort Fit Joggers",
    image: "/placeholder.svg?height=300&width=300",
    category: "Bottoms",
  },
  {
    id: 3,
    name: "Casual Cord Set",
    image: "/placeholder.svg?height=300&width=300",
    category: "Cord Sets",
  },
  {
    id: 4,
    name: "Vintage Graphic Tee",
    image: "/placeholder.svg?height=300&width=300",
    category: "Tops",
  },
]

export function FeaturedProducts() {
  return (
    <section id="featured" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-lg text-white/80 max-w-2xl">Check out our most popular items loved by our customers</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-sm text-white/60 mb-1">{product.category}</div>
                  <h3 className="font-semibold text-white mb-3">{product.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
