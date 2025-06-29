"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface Product {
  id: number
  name: string
  image: string
  description: string
}

interface Category {
  name: string
  description: string
  products: Product[]
}

interface CategoryPageProps {
  category: Category
  slug: string
}

export function CategoryPage({ category, slug }: CategoryPageProps) {
  const router = useRouter()

  const handleBackClick = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10">
        {/* Header */}
        <header className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <Button
                  onClick={handleBackClick}
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </div>
              <div className="flex-shrink-0">
                <img src="/bro-vibes-logo.png" alt="Bro Vibes" className="h-10 w-auto" />
              </div>
              <div className="w-24"></div> {/* Spacer for centering */}
            </div>
          </div>
        </header>

        {/* Category Header */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl inline-block">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{category.name}</h1>
                <p className="text-lg text-white/80 max-w-2xl">{category.description}</p>
                <p className="text-sm text-white/60 mt-2">{category.products.length} items available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.products.map((product) => (
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
                      <h3 className="font-semibold text-white mb-2 line-clamp-1">{product.name}</h3>
                      <p className="text-white/70 text-sm mb-3 line-clamp-2">{product.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Back to Top Button */}
        <div className="fixed bottom-8 right-8">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-full p-3"
            size="sm"
          >
            <ArrowLeft className="h-4 w-4 rotate-90" />
          </Button>
        </div>
      </div>
    </div>
  )
}
